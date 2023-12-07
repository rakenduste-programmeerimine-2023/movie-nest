"use client";

import { useState, useEffect } from "react";
//import supabase from "../../app/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ManageToWatch = ({ movieid, user }) => {
  const [errorMessage, setErrorMessage] = useState("");
  //const [actionMessage, setActionMessage] = useState("");
  const [isInToWatch, setIsInWatch] = useState(false);
  const [addedToWatch, setAddedToWatch] = useState(false);
  const [initialCheckComplete, setInitialCheckComplete] = useState(false);
  const supabase = createClientComponentClient();

  //initial check for to watch
  useEffect(() => {
    const fetchToWatch = async () => {
      try {
        const { data, error } = await supabase
          .from("WatchLater")
          .select("id, user_id, movie_id");

        if (error) {
          setErrorMessage(error.message);
          return;
        }

        const existsInCheckArray = data.find((entry) => {
          return (
            entry.user_id === user.id.toString() &&
            entry.movie_id.toString() === movieid
          );
        });

        if (existsInCheckArray) {
          setIsInWatch(true);
          console.log("Entry is in to watch list");
        }

        setInitialCheckComplete(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    // Call the async function
    fetchToWatch();
  }, [supabase, movieid, user]);

  //button logic for to watch list
  const submitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const { data, select_error } = await supabase
      .from("WatchLater")
      .select("id, user_id, movie_id");

    if (select_error) {
      setErrorMessage(select_error.message);
    }

    const existsInArray = data.find((entry) => {
      return (
        entry.user_id === user.id.toString() &&
        entry.movie_id.toString() === movieid
      );
    });

    if (!existsInArray) {
      const { error } = await supabase
        .from("WatchLater")
        .insert([{ movie_id: movieid, user_id: user.id }], {
          returning: "minimal",
        });
      if (error) {
        setErrorMessage(error.message);
      } else {
        setAddedToWatch(true);
        //setActionMessage("Added to watch later");
        console.log("Entry added to database");
      }
    } else {
      console.log("Entry exists in database");
      const { data: deleteData, error: deleteError } = await supabase
        .from("WatchLater")
        .delete()
        .eq("id", existsInArray.id);

      if (deleteError) {
        setErrorMessage(deleteError.message);
      } else {
        setAddedToWatch(false);
        //setActionMessage("Removed from watched");
        console.log("Entry deleted successfully");
      }
    }
    //reload page after click
    window.location.reload();
  };

  return initialCheckComplete ? (
    <div className="relative ml-2">
      <button
        onClick={submitHandler}
        className="py-1 px-2 hover:bg-gray-500 border-solid border border-gray-800 rounded w-full"
      >
        {isInToWatch || addedToWatch
          ? "Remove from Watch Later"
          : "Watch Later"}
      </button>
      {/*       {actionMessage && (
        <div className="absolute bottom-0 left-2 right-0 top-11 text-xs">
          <p className="">{actionMessage}</p>
        </div>
      )} */}
      <div className="absolute bottom-0 left-0 right-0 top-11 text-xs w-2/3">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  ) : (
    <div className=""></div>
  );
};

export default ManageToWatch;

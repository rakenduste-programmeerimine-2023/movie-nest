"use client";

import { useState, useEffect } from "react";
//import supabase from "../../app/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ManageWatched = ({ movieid, user }) => {
  const [errorMessage, setErrorMessage] = useState("");
  //const [actionMessage, setActionMessage] = useState("");
  const [isInWatched, setIsInWatched] = useState(false);
  const [addedToWatched, setAddedToWatched] = useState(false);
  const [initialCheckComplete, setInitialCheckComplete] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchWatched = async () => {
      try {
        const { data, error } = await supabase
          .from("Watched")
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
          setIsInWatched(true);
          console.log("Entry is in watched");
        }

        setInitialCheckComplete(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    // Call the async function
    fetchWatched();
  }, [supabase, movieid, user]);

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const { data, select_error } = await supabase
      .from("Watched")
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
        .from("Watched")
        .insert([{ movie_id: movieid, user_id: user.id }], {
          returning: "minimal",
        });
      if (error) {
        setErrorMessage(error.message);
      } else {
        setAddedToWatched(true);
        //setActionMessage("Added to watched");
        console.log("Entry added to database");
      }
    } else {
      console.log("Entry exists in database");
      const { data: deleteData, error: deleteError } = await supabase
        .from("Watched")
        .delete()
        .eq("id", existsInArray.id);

      if (deleteError) {
        setErrorMessage(deleteError.message);
      } else {
        setAddedToWatched(false);
        //setActionMessage("Removed from watched");
        console.log("Entry deleted successfully");
      }
    }
    //reload page after click
    window.location.reload();
  };

  return initialCheckComplete ? (
    <div className="relative mx-2">
      <button
        onClick={submitHandler}
        className="flex justify-center py-1 px-1 w-full hover:bg-gray-300 border-solid border border-gray-800 rounded"
      >
        {isInWatched || addedToWatched
          ? "Remove from Watched"
          : "Add to Watched"}
      </button>
      {/* {actionMessage && (
        <div className="absolute bottom-0 left-0 right-10 top-11 text-xs">
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

export default ManageWatched;

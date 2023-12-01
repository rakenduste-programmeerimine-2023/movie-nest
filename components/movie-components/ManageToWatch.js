"use client";

import { useState } from "react";
//import supabase from "../../app/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ManageToWatch = ({ movieid, user }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [actionMessage, setActionMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    const supabase = createClientComponentClient();

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
        setActionMessage("Added to watch later");
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
        setActionMessage("Removed from watched");
        console.log("Entry deleted successfully");
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={submitHandler}
        className="py-1 px-2 hover:bg-gray-300 border-solid border border-gray-800 rounded"
      >
        Watch Later
      </button>
      {actionMessage && (
        <div className="absolute bottom-0 left-2 right-0 top-11 text-xs">
          <p className="">{actionMessage}</p>
        </div>
      )}
      <div className="absolute bottom-0 left-2 right-0 top-11 text-xs w-2/3">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ManageToWatch;

"use client";

import { useState } from "react";
//import supabase from "../../app/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ManageFavorite = ({ movieid, user }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [actionMessage, setActionMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    const supabase = createClientComponentClient();

    const { data, select_error } = await supabase
      .from("Favorite")
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
        .from("Favorite")
        .insert([{ movie_id: movieid, user_id: user.id }], {
          returning: "minimal",
        });
      if (error) {
        setErrorMessage(error.message);
      } else {
        setActionMessage("Added to favorites");
        console.log("Entry added to database");
      }
    } else {
      console.log("Entry exists in database");
      const { data: deleteData, error: deleteError } = await supabase
        .from("Favorite")
        .delete()
        .eq("id", existsInArray.id);

      if (deleteError) {
        setErrorMessage(deleteError.message);
      } else {
        setActionMessage("Removed from favorites");
        console.log("Entry deleted successfully");
      }
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={submitHandler}
        className="font-bold py-1 px-2 border-solid border border-gray-800 rounded group transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 group-hover:fill-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      {actionMessage && (
        <div className="absolute bottom-0 left-0 right-0 top-11 text-xs w-2/3">
          <p className="">{actionMessage}</p>
        </div>
      )}
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
    </div>
  );
};

export default ManageFavorite;

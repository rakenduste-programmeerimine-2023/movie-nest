"use client";
import Card from "@/components/movie-components/Card";
import { useEffect, useState } from "react";

function SearchResults({ searchText, movies }) {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        setFilteredMovies(movies);
      }, [movies]);

  return (
    <div className="container my-3">
      <div className="flex flex-row gap-8">
        <h1 className="text-2xl mb-8 mx-20">
          Top search results for "{searchText}"
        </h1>
        <div className="text-black mt-2">
          <select
            class="form-select"
            aria-label="Default select example"
            className="rounded pl-2 border-2 border-solid border-gray-400"
            onChange={(e) => filterMovies(e.target.value)}
          >
            <option selected disabled>
              Sort by
            </option>
            <option value="release_date">release year</option>
            <option value="popularity">popularity</option>
            <option value="vote_average">ratings</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        {filteredMovies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
      </div>
      
  )
}

export default SearchResults
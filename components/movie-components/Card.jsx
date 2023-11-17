import Link from "next/link";
import React from "react";

function Card({ movie }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <div>
      <Link className="text-decoration-none" href={"/movies/" + movie.id}>
        <div className="card" style={{ width: "15rem" }}>
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            alt=""
            className="card-image"
          />
          <div className="card-body">
            <h4 className="card-title">{movie.title}</h4>
            <p
              className="card-text text-sm overflow-y-auto"
              style={{ height: "150px", paddingRight: "15px" }}
            >
              {movie.overview}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;

"use client";

import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import React, { useRef } from "react";
import Link from "next/link";
import "./Carousel.css";

export function Carousel({ movies }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  if (!movies || movies.length === 0) {
    return <div className="w-full flex justify-center"></div>;
  }


  return (
    <div className="w-full flex justify-center">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={5}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 1,
            minWidth: 1350,
          },
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 1070,
            maxWidth: 1350,
          },
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 820,
            maxWidth: 1070,
          },
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 650,
            maxWidth: 820,
          },
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 220,
            maxWidth: 650,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {movies.map((movie) => (
          <div className="p-3" key={movie.id}>
            <Link className="text-decoration-none" href={"/movies/" + movie.id}>
              <img src={IMAGE_BASE_URL + movie.poster_path} />
            </Link>
            <div
              style={{
                width: "220px",
                maxHeight: "220px",
              }}
              className="flex flex-col overflow-y-auto"
            >
              <div className="flex-1 mb-2">
                <h4 className="custom-size">{movie.title}</h4>
              </div>
              <div className="p-container">
                <p
                  className="text-sm"
                  style={{
                    /* height: "120px", */
                    width: "220px",
                    paddingRight: "20px",
                  }}
                >
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

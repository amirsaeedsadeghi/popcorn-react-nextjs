'use client'

import { useState } from "react";
import Rating from "./Rating"
import { useMovie } from "../_context/MovieContext";


export default function RatingBox() {
  const [rate, setRate] = useState(null);
  const { watchedMovies, setWatchedMovies, setSelectedMovie, selectedMovie } = useMovie();
  function handleAddWatchedMove(movie) {
    movie.userRating = rate;
    setWatchedMovies((movies) => [...movies, movie]);
    setSelectedMovie(null);
  }
  function isExist(id) {
    return (
      watchedMovies.filter((movie) => movie.id === id).length > 0 && true
    );
  }

  function getMovieUserRate(id) {
    if (!isExist) return;
    return watchedMovies.filter((movie) => movie.id === id).at(0)
      .userRating;

  }
  return (
    <div className="max-w-[30rem] min-w-60 bg-stone-400 rounded-[1rem] py-3 px-4 grid my-0 mx-auto shadow-md">
      {isExist(selectedMovie.id) ? (
        <p className="text-center">
          You rated this movie {getMovieUserRate(selectedMovie.id)} ⭐️
        </p>
      ) : (
        <Rating
          maxStar={10}
          onSetRating={setRate}
          defaultRating={rate}
        />
      )}
      {rate && (
        <button
          onClick={() => handleAddWatchedMove(selectedMovie)}
          className="btn btn-primary"
        >
          + Add to List
        </button>
      )}
    </div>
  )
}
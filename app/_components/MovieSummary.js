'use client'

import { useMovie } from "../_context/MovieContext"
import MovieSelectBox from "./MovieSelectBox";
import MovieWatchedList from "./MovieWatchedList";
import { HiArrowLeft } from "react-icons/hi2"

export default function MovieSummary() {
  const { selectedMovie, watchedMovies, setSelectedMovie } = useMovie();
  return (
    <div>
      {!selectedMovie && <h3 className="text-center mt-4">Movie you watched</h3>}
      {!selectedMovie && watchedMovies && (
        <MovieWatchedList />
      )}
      {selectedMovie && (
        <>
          <button
            onClick={() => setSelectedMovie(null)}
            className="back-icon"
          >
            <HiArrowLeft />
          </button>
          <MovieSelectBox />
        </>
      )}
    </div>
  )
}
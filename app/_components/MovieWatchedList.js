'use client'
import { useMovie } from "../_context/MovieContext";
import MovieWatchedItem from "./MovieWatchedItem";

export default function MovieWatchedList() {
  const { watchedMovies, deleteWatchedMovie } = useMovie();

  return (
    <div>
      <ul>
        {watchedMovies.map((movie) => (
          <MovieWatchedItem key={movie.id} movie={movie}>
            <div>
              <button onClick={() => deleteWatchedMovie(movie.id)} className="remove-icon">x</button>
            </div>
          </MovieWatchedItem>
        ))}
      </ul>
    </div>
  )
}



"use client";

import { useLocalStorageState } from "../_hooks/useLocalStorageState";
import { useState, createContext, useContext } from "react";

const MovieContext = createContext();
function MovieProvider({ children }) {
  const [watchedMovies, setWatchedMovies] = useLocalStorageState(
    [],
    "watchedMovie"
  );
  const [selectedMovie, setSelectedMovie] = useState(null);
  function deleteWatchedMovie(id) {
    setWatchedMovies(() => watchedMovies.filter((movie) => movie.id !== id));
  }
  return <MovieContext.Provider value={{ watchedMovies, setWatchedMovies, deleteWatchedMovie, selectedMovie, setSelectedMovie }}>
    {children}
  </MovieContext.Provider>
}

function useMovie() {
  const context = useContext(MovieContext);
  if (context === undefined) throw new Error("Context was used outside the Provider");
  return context;
}

export { useMovie, MovieProvider }
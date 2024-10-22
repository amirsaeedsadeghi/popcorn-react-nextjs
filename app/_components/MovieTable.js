'use client'

import { getMoviesApi } from "@/app/_lib/movies";
import Empty from "./Empty";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Loader from "./Loader";


export default function MovieTable({ searchParams }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerms, setSearchTerms] = useState("");

  function handleNextPage() {
    setPage((page) => page + 1);
  }

  useEffect(function () {
    if (searchParams.title && searchParams.title.length > 3) setSearchTerms(searchParams.title);
    if (!searchParams.title) setSearchTerms("");
    setMovies([]);
    setPage(1);

  }, [searchParams.title]);

  useEffect(function () {
    async function fetchMovies(searchTerms, page) {
      try {
        const response = await getMoviesApi({ searchTerms, page });
        setMovies((movies) => [...movies, ...response.results]);
      } catch (error) {
        console.log(error.message);
        setMovies(null)
      }
    }
    fetchMovies(searchTerms, page);

  }, [page, searchTerms]);
  if (!movies || !movies.length) return <Empty resourceName="movies" />;
  return (
    <>
      <ul className="pt-8 my-6 p-2">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </ul>
      <Loader onNextPage={handleNextPage} />
    </>
  );
}



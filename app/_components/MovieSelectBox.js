'use client'
import Image from "next/image";
import { useMovie } from "../_context/MovieContext";
import { HiCalendar } from "react-icons/hi2";
import RatingBox from "./RatingBox";

export default function MovieSelectBox() {
  const { selectedMovie: { title, backdrop_path: src, overview: description, vote_average, vote_count, release_date } } = useMovie();

  return (
    <section className="mt-16">
      <div className="flex justify-start items-start gap-x-4 mb-4">
        <div className="relative aspect-[2/3] max-w-300 mx-0 rounded-b-[1rem] flex-auto">
          <Image className="absolute object-cover rounded-md" fill={true} src={`${process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL}${src}`} alt={title} />
        </div>
        <div className="flex-grow">
          <h3 className="mt-4">{title}</h3>
          <p className="flex gap-x-2 justify-start items-center">
            <HiCalendar />{release_date}
          </p>
          <p>IMDB Vote Average: {vote_average}</p>
        </div>
      </div>
      <RatingBox />
      <div className="mt-8">
        <p className="italic">{description}</p>
      </div>
    </section>
  )
}
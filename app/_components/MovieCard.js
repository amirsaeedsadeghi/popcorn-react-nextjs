import Image from "next/image";
import { HiOutlineCalendar } from "react-icons/hi2";
import initialPhoto from "@/public/assets/img/Document-Photo-48.png";
import { useMovie } from "../_context/MovieContext";

export default function MovieCard({ movie }) {
  const { setSelectedMovie } = useMovie();
  const { poster_path: src, title, release_date } = movie;
  const imagePath = src ? `${process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL}${src}` : initialPhoto;

  function handleClick(movie) {
    setSelectedMovie(movie);
  }

  return (
    <li className="border-b-[2px] py-1 border-b-stone-300 flex flex-wrap gap-x-4 justify-start items-center hover:bg-stone-500 " onClick={() => handleClick(movie)}>
      <div className="relative aspect-[2/3] min-w-12">
        <Image src={imagePath} alt={title} fill className="absolute object-cover" />
      </div>
      <div>
        <h3 className="mb-2 text-sm">{title}</h3>
        <p className="flex items-center gap-x-1 justify-start">
          <HiOutlineCalendar />{release_date.split("-").at(0)}
        </p>
      </div>
    </li>
  )
}
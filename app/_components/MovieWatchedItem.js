import Image from "next/image";


export default function MovieWatchedItem({ movie, children }) {
  const { poster_path: src, title, vote_average, userRating } = movie;
  return (
    <li className="p-4 flex justify-between items-center gap-x-4 border-b-stone-400">
      <div className="flex justify-start items-center gap-x-2">
        <div className="relative aspect-[2/3] min-w-12">
          <Image src={`${process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL}${src}`} alt={title} className="absolute object-fill" fill />
        </div>
        <div>
          <h4>{title}</h4>
          <div>
            <span className="mr-2 text-stone-50">⭐️ Your Rate: {userRating}</span>
            <span className="mr-2 text-stone-50">🌟 Average IMDB Rate: {Math.round(vote_average)}</span>
          </div>
        </div>
      </div>
      {children}
    </li>
  )
}



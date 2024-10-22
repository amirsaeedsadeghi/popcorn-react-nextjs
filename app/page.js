import Header from "./_components/Header";
import MovieBox from "./_components/MovieBox";
import MovieSummary from "./_components/MovieSummary";
import MovieTable from "./_components/MovieTable";

export default function Page({ searchParams }) {
  return (
    <div className="max-w-[1170px] my-0 mx-auto">
      <Header />
      <main className="max-w-[1170px] my-3 mx-auto md:grid md:grid-cols-[_1fr,_1.5fr] md:gap-x-4">
        <MovieBox>
          <MovieTable searchParams={searchParams} />
        </MovieBox>
        <MovieBox>
          <MovieSummary />
        </MovieBox>
      </main>
    </div>
  );
}

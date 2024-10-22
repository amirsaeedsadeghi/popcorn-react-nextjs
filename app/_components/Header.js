import Search from "./Search";
import BrandLogo from "./BrandLogo";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center gap-4 bg-indigo-600 py-8 px-12 my-12 mx-auto max-w-[1200px] rounded-[1rem]">
      <BrandLogo />
      <Search />
    </header>
  );
}

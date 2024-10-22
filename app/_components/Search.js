'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  async function handleChange(e) {
    const params = new URLSearchParams(searchParams)
    params.set("title", e.target.value);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex-grow flex-shrink basis-auto">
      <form action="#">
        <input className="w-full text-stone-50 text-base outline-none bg-indigo-500 transition-transform ease-linear focus:shadow focus:translate-y-[-2px] placeholder:text-stone-300 py-3 px-4 rounded-[1rem] "
          placeholder="Search movies ..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

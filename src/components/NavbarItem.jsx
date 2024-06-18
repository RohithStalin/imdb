"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NavbarItemComponent({ title, param }) {
  const SearchParams = useSearchParams();
  const genre = SearchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold
            ${
              genre === param
                ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
                : ""
            }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default function NavbarItem(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItemComponent {...props} />
    </Suspense>
  );
}

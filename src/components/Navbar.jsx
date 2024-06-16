import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-6 dark:bg-gray-600 p-4 justify-center bg-amber-100 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

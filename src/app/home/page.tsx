import MovieClip from "./_components/MovieClip";
import RecentlyAdded from "./_components/RecentlyAdded";

export default function HomePage() {
  return (
    <>
      <MovieClip />
      <section className="z-20 px-[1.5rem] sm:px-8 lg:px-16 flex mt-[-100px] relative">
        <h1 className="font-bold text-3xl">Recently Added</h1>
        <RecentlyAdded />
      </section>
    </>
  );
}

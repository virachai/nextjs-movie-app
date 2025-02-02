import MovieClip from "./_components/MovieClip";
import RecentlyAdded from "./_components/RecentlyAdded";

export default function HomePage() {
  return (
    <>
      <h1 className="hidden">Netflix Home</h1>
      <MovieClip />
      <section className="z-20 px-[1.5rem] sm:px-8 lg:px-16 flex mt-[-100px] relative flex-col">
        <RecentlyAdded />
      </section>
    </>
  );
}

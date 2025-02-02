import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import type { Movie } from "@/types";
import MovieCard from "../../_components/MovieCard";
import { fetchUserWatchlist } from "./fetchUserWatchlist.helper";

export default async function WatchlistPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return;

  const userList: { Movie: Movie }[] = await fetchUserWatchlist(
    session?.user?.email
  );

  return (
    <>
      <h1 className="mt-10 px-5 font-bold text-4xl text-white">
        Your Watchlist
      </h1>
      <section className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 px-5 sm:px-0">
        {userList.map((item) => (
          <MovieCard key={item.Movie?.id} movie={item.Movie as Movie} />
        ))}
      </section>
    </>
  );
}

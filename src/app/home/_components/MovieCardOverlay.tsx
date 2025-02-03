import { PlayCircle, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types";
import Link from "next/link";

type Props = { movie: Movie };

export default function MovieCardOverlay({ movie }: Props) {
  const { id, release_year, title } = movie;

  return (
    <>
      <Link href={`/movie/${id}`} passHref>
        <button className="-mt-14 top-60">
          <PlayCircle className="size-20" />
        </button>
      </Link>

      <div className="absolute right-5 top-5 z-10">
        <Button type="submit" variant="outline" size="icon">
          <PlusIcon className="size-6 text-white" />
        </Button>
      </div>
      <Link href={`/movie/${movie.id}`} passHref>
        <div className="absolute bottom-0 left-0 p-5">
          <h1 className="line-clamp-2 text-[0.9rem] font-bold">{title}</h1>
          <div className="flex items-center gap-x-2">
            <p className="text-sm font-normal">{release_year}</p>
          </div>
        </div>{" "}
      </Link>
    </>
  );
}

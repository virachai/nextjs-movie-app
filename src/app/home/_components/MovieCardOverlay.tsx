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
        <button className="top-60 -mt-14 hover:scale-110">
          <PlayCircle className="size-20" />
        </button>
      </Link>

      <div className="top-5 right-5 z-10 absolute">
        <Button type="submit" variant="outline" size="icon">
          <PlusIcon className="text-white size-6" />
        </Button>
      </div>
      <Link href={`/movie/${movie.id}`} passHref>
        <div className="bottom-0 left-0 absolute p-5">
          <h1 className="line-clamp-2 font-bold text-[0.9rem]">{title}</h1>
          <div className="flex items-center gap-x-2">
            <p className="font-normal text-sm">{release_year}</p>
          </div>
        </div>{" "}
      </Link>
    </>
  );
}

import { MediaCategory, Movie } from "@/types";
import MovieCard from "../_components/MovieCard";
import { fetchMediasByCategory } from "./fetchMediaByCategory.helper";
import { categoryMap } from "@/lib/categoryMap"; // import the category mapping

type PageProps = {
  params: Promise<{ category: MediaCategory }>;
};

// The Page component receives props with the correct type
const Page = async ({ params }: PageProps) => {
  const { category } = await params; // Assuming `slug` is part of the params
  let mediaData: Movie[] = [];
  let title: string = "Unknown Category";

  try {
    // Map the slug to the actual category
    const validCategory = category as MediaCategory;
    title = categoryMap[validCategory]
      ? categoryMap[validCategory]
      : "Unknown Category";

    mediaData = await fetchMediasByCategory(validCategory);
  } catch (error) {
    console.error("Failed to fetch media data:", error);
  }

  return (
    <div className="px-[1.5rem] sm:px-8 lg:px-16">
      <h1 className="hidden">Netflix {title}</h1>
      <div className="flex flex-col mt-20 min-h-[100vh]">
        <div className="flex justify-center items-center px-[6%] h-[10rem] font-[900] text-4xl text-center text-white capitalize leading-[1.2] cursor-default select-none Helvetica Neue, Roboto, sans-serif">
          {title}
        </div>
        <div className="gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mb-20">
          {mediaData.length > 0 ? (
            mediaData.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p className="text-center text-white">No {category} found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

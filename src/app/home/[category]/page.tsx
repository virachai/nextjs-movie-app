// import { MediaCategory, Movie } from "@/types";
// import MovieCard from "../_components/MovieCard";
// import { fetchMediasByCategory } from "./fetchMediaByCategory.helper";
// import { categoryMap } from "@/lib/categoryMap"; // import the category mapping
// src/app/home/[category]/page.tsx
import { MediaCategory } from "@/types"; // Adjust import based on your project

import * as React from "react";
// Correct type definition for PageProps
type PageProps = {
  params: {
    category: MediaCategory;
  };
};

// The Page component receives props with the correct type
const Page = async ({ params }: PageProps) => {
  // const { category } = params;
  const { category } = params;

  return (
    <div>
      <h1>Category: {category}</h1>
      {/* Additional content based on category */}
    </div>
  );
};

export default Page;

// Update the Props type to match Next.js expectations
// type Props = {
//   params: {
//     slug: string; // Use 'slug' instead of 'category'
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

// export default async function CategoryPage({ params: { slug } }: Props) {
//   let mediaData: Movie[] = [];
//   let category: string;
//   console.log("slug", slug);
//   try {
//     // Map the slug to the actual category
//     category =
//       slug in categoryMap
//         ? categoryMap[slug as keyof typeof categoryMap]
//         : "Unknown Category";

//     // You might need to validate/cast the category parameter
//     const validCategory = category as MediaCategory;
//     mediaData = await fetchMediasByCategory(validCategory);
//   } catch (error) {
//     console.error("Failed to fetch media data:", error);
//     category = "Unknown Category";
//   }

//   return (
//     <div className="px-[1.5rem] sm:px-8 lg:px-16">
//       <h1 className="hidden">Netflix {category}</h1>
//       <div className="flex flex-col mt-20 min-h-[100vh]">
//         <div className="flex justify-center items-center px-[6%] h-[10rem] font-[900] text-4xl text-center text-white capitalize leading-[1.2] cursor-default select-none Helvetica Neue, Roboto, sans-serif">
//           {category}
//         </div>
//         <div className="gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//           {mediaData.length > 0 ? (
//             mediaData.map((movie) => <MovieCard key={movie.id} movie={movie} />)
//           ) : (
//             <p className="text-center text-white">No {category} found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

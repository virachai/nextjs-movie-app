import type { Movie } from "@/types";

// Load the NEXT_PUBLIC_BASE_API URL from the environment variables
const NEXT_PUBLIC_BASE_API =
  process.env.NEXT_PUBLIC_BASE_API || "http://localhost:4000"; // Default fallback if NEXT_PUBLIC_BASE_API isn't set

export async function findMovie(): Promise<Movie | null> {
  try {
    // Fetch the movie data from the API endpoint
    const response = await fetch(`${NEXT_PUBLIC_BASE_API}/movies/billboard`);

    // If the response is successful, parse and return the movie data
    if (response.ok) {
      const list = await response.json();
      const data = list[0]; // Assuming the first item is the movie data

      // Transform the data to match the `Movie` type
      const movie: Movie = {
        id: data.id,
        backdrop_path: data.backdrop_path,
        poster_path: data.poster_path,
        title: data.title,
        overview: data.overview,
        release_date: data.release_date,
        genre_ids: data.genre_ids || [], // Ensure it's an array even if empty
        release_year: data.release_year,
        imageString: data.poster_path, // Combine image paths or process as needed
        age: undefined, // Age rating isn't available in the response
        duration: data?.duration || undefined, // If not available, leave it undefined
        release: data?.release_year || undefined, // Use release year or calculate from release date
        youtubeString: data?.youtubeString || undefined, // Use youtubeString if available
        videoSource: data?.videoSource || undefined, // Optional field
        watchlists: data?.watchlists || [], // Ensure watchlists is either an empty array or the actual data
      };

      return movie;
    } else {
      // If the response isn't successful, log the error and return null
      console.error("Failed to fetch movie data:", response.statusText);
      return null;
    }
  } catch (error) {
    // Catch any errors during the fetch operation and log them
    console.error("Error fetching movie data:", error);
    return null;
  }
}

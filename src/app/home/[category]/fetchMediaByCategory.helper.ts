import type { MediaCategory } from "@/types";

// Use the environment variable or fallback to "http://localhost:4000"
const BASE_API = process.env.NEXT_PUBLIC_BASE_API || "http://localhost:4000";
// const BASE_API = "http://localhost:4000";

export async function fetchMediasByCategory(category: MediaCategory) {
  try {
    let endpoint = "";

    switch (category) {
      case "shows": {
        // Fetch TV shows using the /movies/show endpoint
        endpoint = "/movies/show";
        break;
      }

      case "movies": {
        // Fetch movies using the /movies/movies endpoint
        endpoint = "/movies/movies";
        break;
      }

      case "list": {
        endpoint = "/movies/my-list?profileId=1";
        break;
      }

      default:
        throw new Error("Invalid category");
    }

    const response = await fetch(`${BASE_API}${endpoint}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${endpoint}: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching media by category:", error);
    throw error;
  }
}

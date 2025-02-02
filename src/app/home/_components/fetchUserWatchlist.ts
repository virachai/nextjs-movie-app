// src/app/home/_components/fetchUserWatchlist.ts
const BASE_API = process.env.BASE_API || "http://localhost:4000";

export async function fetchUserWatchlist(userId: number) {
  try {
    // Use the BASE_API constant in the fetch URL
    const response = await fetch(`${BASE_API}/movies/my-list?userId=${userId}`);

    // Check if the response is successful (status 200)
    if (!response.ok) {
      throw new Error("Failed to fetch user watchlist");
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the fetched data
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error fetching user watchlist:", error);
    return [];
  }
}

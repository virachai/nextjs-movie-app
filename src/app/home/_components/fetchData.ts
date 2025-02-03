// src/app/home/_components/fetchData.ts
const NEXT_PUBLIC_BASE_API =
  process.env.NEXT_PUBLIC_BASE_API || "http://localhost:4000";

export async function fetchData<T>(
  endpoint: string,
  queryParams?: Record<string, string | number>
): Promise<T> {
  try {
    // Construct the query string if queryParams are provided
    const queryString = queryParams
      ? `?${new URLSearchParams(
          queryParams as Record<string, string>
        ).toString()}`
      : "";

    // Use the NEXT_PUBLIC_BASE_API constant in the fetch URL
    const response = await fetch(
      `${NEXT_PUBLIC_BASE_API}${endpoint}${queryString}`
    );

    // Check if the response is successful (status 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the fetched data
    return data as T;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

import SearchContainer from "./_components/SearchContainer";
import SearchBar from "./_components/SearchBar";
import { Suspense } from "react"; // Import Suspense

export default function HomePage() {
  return (
    <>
      <h1 className="hidden">Netflix Search</h1>
      <div className="flex flex-col mt-20 min-h-[100vh]">
        <SearchBar />
        <Suspense fallback={<div>Loading...</div>}>
          <SearchContainer />
        </Suspense>
      </div>
    </>
  );
}

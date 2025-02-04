import SearchContainer from "./_components/SearchContainer";
import SearchBar from "./_components/SearchBar";

export default function HomePage() {
  return (
    <>
      <h1 className="hidden">Netflix Search</h1>
      <div className="flex flex-col mt-20 min-h-[100vh]">
        <SearchBar />
        <SearchContainer />
      </div>
    </>
  );
}

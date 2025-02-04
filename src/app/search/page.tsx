import SearchContainer from "./_components/SearchContainer";
import SearchBar from "./_components/SearchBar";

export default function HomePage() {
  return (
    <>
      <h1 className="hidden">Netflix Search</h1>
      <div className="mt-20 flex flex-col">
        <SearchBar />
        <SearchContainer />
      </div>
    </>
  );
}

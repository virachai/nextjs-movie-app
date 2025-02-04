"use client";

// import { useState } from "react";
import * as React from "react";
import styles from "./SearchBar.module.css"; // Import CSS module
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleBlur = () => {
    if (!inputRef.current?.value) {
      setIsExpanded(false);
    }
  };

  const handleBack = () => {
    return redirect("/home");
  };
  // const [query, setQuery] = useState("");

  // const handleSearchChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setQuery(event.target.value);
  // };

  // const handleSearchSubmit = (
  //   event: React.FormEvent<HTMLFormElement>
  // ): void => {
  //   event.preventDefault();
  //   console.log("Searching for:", query);
  //   // Add your search functionality here
  // };

  return (
    <div className={styles["search-bar"]}>
      {/* <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for movies or shows"
          aria-label="Search"
          className="text-black"
        />
        <button type="submit">Search</button>
      </form> */}
      {/* Search Input */}
      <div className="flex justify-between items-center mx-auto w-full">
        <Button
          onClick={handleBack}
          className="bg-black/10 hover:bg-black/75 opacity-100 sm:opacity-0 rounded-full transition"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div
          className={cn(
            "flex items-center transition-all duration-300 ease-in-out",
            isExpanded ? "w-[270px]" : "w-10"
          )}
        >
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#e50914] min-w-10 h-10 text-gray-200 hover:text-white"
            onClick={handleSearchClick}
          >
            <Search className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>
          <form>
            <Input
              ref={inputRef}
              type="search"
              placeholder="Titles, people, genres"
              className={cn(
                "h-10 bg-black/90 border-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0",
                "transition-all duration-300 ease-in-out",
                isExpanded ? "w-[230px] pl-2 opacity-100" : "w-0 px-0 opacity-0"
              )}
              onBlur={handleBlur}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

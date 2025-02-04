"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [query, setQuery] = React.useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const fetchMovies = async () => {
      const searchQuery = searchParams.get("q") || "";

      setQuery(searchQuery);
    };

    fetchMovies();
  }, [searchParams]); // Re-run when the searchParams change

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
    router.push("/home");
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    router.push(`/search?q=${encodeURIComponent(event.target.value)}`);
    if (event.target.value === "") {
      router.push(`/search`);
    }
    setQuery(event.target.value);
  };

  return (
    <div className={styles["search-bar"]}>
      {/* Search Input */}
      <div className="flex justify-between sm:justify-end items-center mx-auto w-full">
        <Button
          onClick={handleBack}
          className="relative -left-[16px] sm:hidden bg-black/10 hover:bg-black/75 opacity-100 rounded-full transition"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div
          className={cn(
            "flex items-center transition-all duration-300 ease-in-out",
            isExpanded ? "w-[250px] sm:w-[340px]" : "w-10"
          )}
        >
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#e50914] hover:bg-red-700 min-w-10 h-10 text-gray-200 hover:text-white"
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
              value={query}
              onChange={handleSearchChange}
              className={cn(
                "h-10 bg-black/90 border-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0",
                "transition-all duration-300 ease-in-out ml-1",
                isExpanded
                  ? "w-[210px] sm:w-[300px] pl-2 opacity-100"
                  : "w-0 px-0 opacity-0"
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

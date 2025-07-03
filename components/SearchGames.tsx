import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useGameStore } from "@/store/useGameStore";

export function SearchGames() {
  const { searchQuery, setSearchQuery } = useGameStore();
  const [localSearch, setLocalSearch] = useState(searchQuery);
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localSearch);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [localSearch, setSearchQuery]);
  
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <input
        type="search"
        className="block w-full p-2 pl-10 text-sm rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:outline-none"
        placeholder="Search games..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </div>
  );
}

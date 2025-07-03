"use client";
import Link from "next/link";
import { GameCard } from "@/components/GameCard";
import { GenreFilter } from "@/components/GenreFilter";
import { SearchGames } from "@/components/SearchGames";
import { useGameStore } from "@/store/useGameStore";

export function BrowseGamesClient() {
  const { getFilteredGames } = useGameStore();
  const filteredGames = getFilteredGames();
  
  return (
    <div>
      <SearchGames />
      <GenreFilter />
      
      {filteredGames.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No games found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <Link key={game.name} href={`/game/${game.slug}`} className="block transition-transform hover:scale-[1.02]">
              <GameCard game={game} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

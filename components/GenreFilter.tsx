import { Button } from "@/components/ui/button";
import { getAllGenres } from "@/constants/games";
import { useGameStore } from "@/store/useGameStore";

export function GenreFilter() {
  const genres = getAllGenres();
  const { selectedGenre, setSelectedGenre } = useGameStore();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedGenre === null ? "default" : "outline"}
        size="sm"
        onClick={() => setSelectedGenre(null)}
      >
        All Games
      </Button>
      {genres.map((genre) => (
        <Button
          key={genre}
          variant={selectedGenre === genre ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedGenre(genre)}
        >
          {genre}
        </Button>
      ))}
    </div>
  );
}

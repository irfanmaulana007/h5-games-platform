import Image from "next/image";
import { Game } from "@/constants/games";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={game.thumbnailUrl}
          alt={game.name}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={game.isInternal}
        />
        {game.isInternal && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
            Internal
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1">{game.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{game.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {game.gameMetadata.genres.map((genre: string) => (
            <span
              key={genre}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {genre}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="text-xs text-muted-foreground">
          {game.publisherName}
        </div>
      </CardFooter>
    </Card>
  );
}

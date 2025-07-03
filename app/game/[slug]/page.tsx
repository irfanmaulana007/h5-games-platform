import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getGameBySlug } from "@/constants/games";
import { GamePlayer } from "@/components/GamePlayer";

interface GamePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: `${game.title} | H5 Games Platform`,
    description: game.description,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col space-y-6">
          <GamePlayer game={game} />

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">About this game</h2>
            <p className="text-muted-foreground">{game.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold">Game Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">Publisher</h3>
                <p>{game.publisherName}</p>
              </div>

              <div>
                <h3 className="text-muted-foreground text-sm font-medium">Release Date</h3>
                <p>{new Date(game.gameMetadata.releaseDate).toLocaleDateString()}</p>
              </div>

              <div>
                <h3 className="text-muted-foreground text-sm font-medium">Genre</h3>
                <div className="mt-1 flex flex-wrap gap-1">
                  {game.gameMetadata.genres.map((genre: string) => (
                    <span
                      key={genre}
                      className="focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold">Preview</h2>
            <div className="relative aspect-[16/9] overflow-hidden rounded-md">
              <Image
                src={game.thumbnailUrl}
                alt={`${game.name} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

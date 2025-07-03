import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedGames, getInternalGames, getPopularGames } from "@/constants/games";

export default function Home() {
  const internalGames = getInternalGames();
  const featuredGames = getFeaturedGames();
  const popularGames = getPopularGames();

  return (
    <div className="container py-8 mx-auto space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary/60 p-8 md:p-12 lg:p-16 rounded-lg">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Play HTML5 Games Instantly
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Enjoy a collection of free HTML5 games directly in your browser. No downloads, no installs, just fun.
            </p>
            <div className="pt-4">
              <Link href="/browse">
                <Button size="lg" variant="secondary">
                  Browse All Games
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Games */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Internal Games</h2>
          <Link href="/browse" className="text-sm text-muted-foreground hover:text-primary">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {internalGames.map((game) => (
            <Link key={game.name} href={`/game/${game.slug}`} className="block transition-transform hover:scale-[1.02]">
              <Card className="overflow-hidden h-full">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={game.thumbnailUrl}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold line-clamp-1">{game.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{game.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Games</h2>
          <Link href="/browse" className="text-sm text-muted-foreground hover:text-primary">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <Link key={game.name} href={`/game/${game.slug}`} className="block transition-transform hover:scale-[1.02]">
              <Card className="overflow-hidden h-full">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={game.thumbnailUrl}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold line-clamp-1">{game.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{game.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Games */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Games</h2>
          <Link href="/browse" className="text-sm text-muted-foreground hover:text-primary">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularGames.map((game) => (
            <Link key={game.name} href={`/game/${game.slug}`} className="block transition-transform hover:scale-[1.02]">
              <Card className="overflow-hidden h-full">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={game.thumbnailUrl}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold line-clamp-1">{game.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{game.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

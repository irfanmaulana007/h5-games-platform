import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GameNotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, we couldn&apos;t find the game you&apos;re looking for. It may have been removed or the URL might be incorrect.
      </p>
      <Link href="/browse">
        <Button>Browse All Games</Button>
      </Link>
    </div>
  );
}

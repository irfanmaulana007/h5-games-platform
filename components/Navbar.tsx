import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">H5 Games</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="/browse" className="transition-colors hover:text-foreground/80">
            Browse Games
          </Link>
          <Link href="/popular" className="transition-colors hover:text-foreground/80">
            Popular
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

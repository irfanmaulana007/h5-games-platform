import { Metadata } from "next";
import { BrowseGamesClient } from "./client";

export const metadata: Metadata = {
  title: "Browse Games | H5 Games Platform",
  description: "Browse and play HTML5 games on our platform",
};

export default function BrowseGames() {
  return (
    <div className="container py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Browse Games</h1>
      <BrowseGamesClient />
    </div>
  );
}

import { create } from 'zustand';
import { Game, games, getGameByName } from '@/constants/games';

interface GameState {
  games: Game[];
  selectedGame: Game | null;
  selectedGenre: string | null;
  searchQuery: string;
  
  // Actions
  setSelectedGame: (gameId: string | null) => void;
  setSelectedGenre: (genre: string | null) => void;
  setSearchQuery: (query: string) => void;
  getFilteredGames: () => Game[];
}

export const useGameStore = create<GameState>((set, get) => ({
  games: games,
  selectedGame: null,
  selectedGenre: null,
  searchQuery: '',
  
  setSelectedGame: (gameName: string | null) => {
    if (gameName === null) {
      set({ selectedGame: null });
      return;
    }
    
    const game = getGameByName(gameName);
    set({ selectedGame: game || null });
  },
  
  setSelectedGenre: (genre: string | null) => {
    set({ selectedGenre: genre });
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
  
  getFilteredGames: () => {
    const { games, selectedGenre, searchQuery } = get();
    
    return games.filter(game => {
      // Filter by genre if selected
      const genreMatch = selectedGenre ? game.gameMetadata.genres.includes(selectedGenre) : true;
      
      // Filter by search query
      const searchLower = searchQuery.toLowerCase();
      const nameMatch = game.name.toLowerCase().includes(searchLower);
      const descriptionMatch = game.description.toLowerCase().includes(searchLower);
      const publisherMatch = game.publisherName.toLowerCase().includes(searchLower);
      
      return genreMatch && (nameMatch || descriptionMatch || publisherMatch);
    });
  }
}));

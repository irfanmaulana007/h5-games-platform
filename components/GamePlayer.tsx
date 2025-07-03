"use client";

import { useState, useRef, useEffect } from "react";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Maximize2, 
  Minimize2,
  ArrowLeft,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Game } from "@/constants/games";
import Link from "next/link";
import Image from "next/image";

interface GamePlayerProps {
  game: Game;
}

export function GamePlayer({ game }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 1000));
  const [dislikeCount, setDislikeCount] = useState(Math.floor(Math.random() * 100));
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Reset state when game changes
    setIsPlaying(false);
    setIframeLoaded(false);
    setHasError(false);
    setIsFullscreen(false);
  }, [game]);
  
  // Prevent keyboard scrolling when the game is being played
  useEffect(() => {
    if (!isPlaying) return;
    
    // These are the key codes that typically cause scrolling
    const scrollKeys = [32, 33, 34, 37, 38, 39, 40]; // space, pageup, pagedown, arrows
    
    const preventScroll = (e: KeyboardEvent) => {
      if (scrollKeys.includes(e.keyCode)) {
        e.preventDefault();
      }
    };
    
    // Add the event listener to the window object
    window.addEventListener('keydown', preventScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('keydown', preventScroll);
    };
  }, [isPlaying]);
  
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikeCount(prev => prev - 1);
        setIsDisliked(false);
      }
    }
  };
  
  const handleDislike = () => {
    if (isDisliked) {
      setDislikeCount(prev => prev - 1);
      setIsDisliked(false);
    } else {
      setDislikeCount(prev => prev + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikeCount(prev => prev - 1);
        setIsLiked(false);
      }
    }
  };
  
  const handleShare = async () => {
    const shareData = {
      title: `Play ${game.title || game.name} on H5 Games Platform`,
      text: game.description,
      url: window.location.href,
    };
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support the Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };
  
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center mb-4">
        <Link href="/browse" className="flex items-center mr-4 text-sm hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to games
        </Link>
      </div>
      
      <div className="flex flex-col">
        <div 
          ref={containerRef} 
          className={`relative bg-black rounded-lg overflow-hidden ${
            isFullscreen ? "fixed inset-0 z-50" : "aspect-video w-full"
          }`}
        >
        {/* Game Thumbnail Overlay */}
        <div 
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={game.thumbnailUrl}
              alt={game.title || game.name}
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center px-4">{game.title || game.name}</h2>
              <Button 
                onClick={() => setIsPlaying(true)}
                size="lg"
                className="rounded-full w-16 h-16 flex cursor-pointer items-center justify-center bg-primary/90 hover:bg-primary transition-all hover:scale-110"
              >
                <Play className="h-8 w-8" />
                <span className="sr-only">Play Game</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Game iframe */}
        <iframe
          ref={iframeRef}
          src={isPlaying ? game.playUrl : undefined}
          title={game.title || game.name}
          className={`w-full h-full border-0 transition-opacity duration-500 ${iframeLoaded && isPlaying && !hasError ? 'opacity-100' : 'opacity-0'}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="no"
          onLoad={() => setIframeLoaded(true)}
          onError={() => setHasError(true)}
        />
        
        {/* Error Overlay */}
        {isPlaying && hasError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 text-white p-6 animate-fade-in">
            <div className="flex flex-col items-center text-center max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-red-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Unable to Load Game</h3>
              <p className="text-gray-300 mb-6">
                Sorry, we couldn&apos;t load this game. This might be due to connection issues or content restrictions.
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => {
                    setHasError(false);
                    setIsPlaying(false);
                  }}
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                >
                  Back to Preview
                </Button>
                <Button
                  onClick={() => {
                    setHasError(false);
                    if (iframeRef.current) {
                      iframeRef.current.src = game.playUrl;
                    }
                  }}
                >
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        )}
        
        </div>
        
        {/* Player Controls - Now outside the iframe container */}
        {!isFullscreen && (
          <div className="flex items-center justify-between bg-card rounded-b-lg p-2 shadow-sm border-t border-border">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${isLiked ? "text-green-500" : ""}`}
                onClick={handleLike}
              >
                <ThumbsUp className="h-5 w-5" />
                <span className="sr-only">Like</span>
              </Button>
              <span className="text-xs">{likeCount}</span>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${isDisliked ? "text-red-500" : ""}`}
                onClick={handleDislike}
              >
                <ThumbsDown className="h-5 w-5" />
                <span className="sr-only">Dislike</span>
              </Button>
              <span className="text-xs">{dislikeCount}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleFullscreen}
              >
                <Maximize2 className="h-5 w-5" />
                <span className="sr-only">Fullscreen</span>
              </Button>
            </div>
          </div>
        )}
        
        {/* Fullscreen controls - still inside the container when in fullscreen mode */}
        {isFullscreen && (
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between pb-4">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`text-white hover:bg-white/20 ${isLiked ? "text-green-400" : ""}`}
                onClick={handleLike}
              >
                <ThumbsUp className="h-5 w-5" />
                <span className="sr-only">Like</span>
              </Button>
              <span className="text-xs text-white">{likeCount}</span>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className={`text-white hover:bg-white/20 ${isDisliked ? "text-red-400" : ""}`}
                onClick={handleDislike}
              >
                <ThumbsDown className="h-5 w-5" />
                <span className="sr-only">Dislike</span>
              </Button>
              <span className="text-xs text-white">{dislikeCount}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20"
                onClick={handleFullscreen}
              >
                <Minimize2 className="h-5 w-5" />
                <span className="sr-only">Exit Fullscreen</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

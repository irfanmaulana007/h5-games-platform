"use client";

import { useState, useRef, useEffect } from "react";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Maximize2, 
  Minimize2,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Game } from "@/constants/games";
import Image from "next/image";

interface GamePlayerProps {
  game: Game;
}

const RANDOM_LIKES = 441;
const RANDOM_DISLIKES = 22;

export function GamePlayer({ game }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(RANDOM_LIKES);
  const [dislikeCount, setDislikeCount] = useState(RANDOM_DISLIKES);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Reset state when game changes
    setIsPlaying(false);
    setHasError(false);
    setErrorMessage("");
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
  
  // Handle iframe load errors
  const handleIframeError = () => {
    setHasError(true);
    setErrorMessage("Failed to load game. This might be due to WebGL compression issues.");
    console.error("Game iframe failed to load properly");
  };

  // Handle iframe load success
  const handleIframeLoad = () => {
    // Add a small delay to ensure the iframe is fully loaded
    setTimeout(() => {
      if (iframeRef.current?.contentWindow?.document.title.includes("error")) {
        handleIframeError();
      }
    }, 2000);
  };

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
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
    }
    setIsLiked(!isLiked);
  };
  
  const handleDislike = () => {
    if (isDisliked) {
      setDislikeCount(dislikeCount - 1);
    } else {
      setDislikeCount(dislikeCount + 1);
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    }
    setIsDisliked(!isDisliked);
  };
  
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: game.title,
          text: game.description,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  
  const handlePlay = () => {
    setIsPlaying(true);
    setHasError(false);
    setErrorMessage("");
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-card shadow-sm" ref={containerRef}>
      {!isPlaying ? (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={game.thumbnailUrl}
            alt={game.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <Button 
              size="lg" 
              className="flex items-center gap-2 rounded-full" 
              onClick={handlePlay}
            >
              <Play className="h-5 w-5" />
              Play Game
            </Button>
          </div>
        </div>
      ) : hasError ? (
        <div className="relative aspect-video w-full flex items-center justify-center bg-muted">
          <div className="text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Game Loading Error</h3>
            <p className="text-muted-foreground mb-4">{errorMessage || "There was a problem loading this game."}</p>
            <p className="text-sm text-muted-foreground mb-4">
              This may be due to WebGL compression issues. Try refreshing the page or contact support.
            </p>
            <Button onClick={() => setIsPlaying(false)}>Back to Preview</Button>
          </div>
        </div>
      ) : (
        <div className="relative aspect-video w-full">
          <iframe
            ref={iframeRef}
            src={game.playUrl}
            className="h-full w-full"
            title={game.name}
            allowFullScreen
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads"
          />
        </div>
      )}
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

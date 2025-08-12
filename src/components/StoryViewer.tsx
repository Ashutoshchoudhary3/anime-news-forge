import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Play, Pause, Share, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Story {
  id: string;
  image: string;
  title: string;
  category: string;
  readTime: string;
  views: string;
  content: string;
  categoryColor: string;
}

interface StoryViewerProps {
  story: Story | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const StoryViewer = ({ story, onClose, onNext, onPrevious, hasNext, hasPrevious }: StoryViewerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!story) return null;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control auto-advancement of story slides
  };

  const handleShare = () => {
    navigator.share?.({
      title: story.title,
      text: `Check out this anime story: ${story.title}`,
      url: window.location.href
    }).catch(() => {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center space-x-3">
          <Badge className={`${story.categoryColor} border-0`}>
            {story.category}
          </Badge>
          <span className="text-white/70 text-sm">{story.readTime} • {story.views} views</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)} className="text-white hover:bg-white/20">
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleShare} className="text-white hover:bg-white/20">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-16 left-0 right-0 z-10 px-4">
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Story Content */}
      <div className="flex items-center justify-center h-full p-4">
        <div className="relative max-w-sm mx-auto">
          <img 
            src={story.image} 
            alt={story.title}
            className="w-full aspect-[9/16] object-cover rounded-2xl shadow-2xl"
          />
          
          {/* Story Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
          
          {/* Story Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-xl font-bold mb-3 leading-tight">{story.title}</h2>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              {story.content}
            </p>
          </div>

          {/* Play/Pause Button */}
          <Button 
            size="lg"
            onClick={togglePlay}
            className="absolute bottom-6 right-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation Arrows */}
        {hasPrevious && (
          <Button
            variant="ghost"
            size="lg"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}
        
        {hasNext && (
          <Button
            variant="ghost"
            size="lg"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
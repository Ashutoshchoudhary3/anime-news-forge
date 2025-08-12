import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye } from "lucide-react";

interface StoryCardProps {
  image: string;
  title: string;
  category: string;
  readTime: string;
  views: string;
  categoryColor: string;
}

const StoryCard = ({ image, title, category, readTime, views, categoryColor }: StoryCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border/50 hover:shadow-story hover:shadow-glow/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-3 left-3">
          <Badge 
            className={`text-xs font-medium px-2 py-1 ${categoryColor} border-0`}
          >
            {category}
          </Badge>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>
          
          <div className="flex items-center justify-between text-xs text-white/70">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StoryCard;
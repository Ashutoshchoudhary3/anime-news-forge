import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StoryCard from "./StoryCard";

interface Story {
  id: string;
  image: string;
  title: string;
  readTime: string;
  views: string;
  category?: string;
  categoryColor?: string;
  content?: string;
}

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  stories: Story[];
  categoryColor: string;
  gradientBg: string;
  onStoryClick: (story: Story & { category: string; categoryColor: string; content: string }) => void;
  onViewAll: () => void;
}

const CategorySection = ({ id, title, description, stories, categoryColor, gradientBg, onStoryClick, onViewAll }: CategorySectionProps) => {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${gradientBg} text-white text-sm font-medium mb-4`}>
            {title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Latest {title} Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              image={story.image}
              title={story.title}
              category={title}
              readTime={story.readTime}
              views={story.views}
              categoryColor={categoryColor}
              onClick={() => onStoryClick({ 
                ...story, 
                category: title, 
                categoryColor, 
                content: `Experience this amazing ${title.toLowerCase()} story in stunning anime style. Follow along as our AI transforms the latest news into captivating visual narratives that bring the story to life with vibrant characters and dynamic scenes.`
              })}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={onViewAll}
            className={`${categoryColor.includes('bg-sports') ? 'border-sports-primary text-sports-primary hover:bg-sports-primary' :
              categoryColor.includes('bg-ai') ? 'border-ai-primary text-ai-primary hover:bg-ai-primary' :
              categoryColor.includes('bg-tech') ? 'border-tech-primary text-tech-primary hover:bg-tech-primary' :
              'border-hollywood-primary text-hollywood-primary hover:bg-hollywood-primary'} hover:text-white transition-smooth`}
          >
            View All {title} Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
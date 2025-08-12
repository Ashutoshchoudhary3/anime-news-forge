import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import StoryViewer from "@/components/StoryViewer";
import { useToast } from "@/hooks/use-toast";

// Import story images
import sportsStory from "@/assets/sports-story.jpg";
import aiStory from "@/assets/ai-story.jpg";
import techStory from "@/assets/tech-story.jpg";
import hollywoodStory from "@/assets/hollywood-story.jpg";

interface StoryWithCategory {
  id: string;
  image: string;
  title: string;
  readTime: string;
  views: string;
  category: string;
  categoryColor: string;
  content: string;
}

const Index = () => {
  const [currentStory, setCurrentStory] = useState<StoryWithCategory | null>(null);
  const { toast } = useToast();
  // Sample story data - will be replaced with real API data
  const sampleStories = [
    {
      id: "1",
      image: sportsStory,
      title: "Championship Finals: Epic Anime Battle Unfolds",
      readTime: "3 min",
      views: "12K"
    },
    {
      id: "2", 
      image: aiStory,
      title: "AI Revolution: New Neural Networks Transform Gaming",
      readTime: "5 min",
      views: "8.5K"
    },
    {
      id: "3",
      image: techStory,
      title: "Tech Giants Launch Revolutionary Platform",
      readTime: "4 min",
      views: "15K"
    },
    {
      id: "4",
      image: hollywoodStory,
      title: "Star-Studded Premiere Breaks Records",
      readTime: "2 min",
      views: "22K"
    }
  ];

  const handleExploreStories = () => {
    const element = document.getElementById('sports');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHowItWorks = () => {
    toast({
      title: "How It Works",
      description: "We use GNews API to fetch latest news, then transform them with Gemini AI into anime-style stories!",
    });
  };

  const handleGenerateStory = () => {
    toast({
      title: "Generate Story",
      description: "AI story generation coming soon! Connect your GNews and Gemini API keys to start creating.",
    });
  };

  const handleStoryClick = (story: StoryWithCategory) => {
    setCurrentStory(story);
  };

  const handleViewAll = (category: string) => {
    toast({
      title: `View All ${category} Stories`,
      description: "More stories coming soon with API integration!",
    });
  };

  const closeStoryViewer = () => {
    setCurrentStory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onGenerateStory={handleGenerateStory} />
      <HeroSection onExploreStories={handleExploreStories} onHowItWorks={handleHowItWorks} />
      
      <CategorySection 
        id="sports"
        title="Sports"
        description="Dynamic sports stories transformed into anime-style adventures with epic battles and heroic moments."
        stories={sampleStories}
        categoryColor="bg-sports-primary text-white"
        gradientBg="bg-gradient-to-r from-sports-primary to-sports-secondary"
        onStoryClick={handleStoryClick}
        onViewAll={() => handleViewAll('Sports')}
      />
      
      <CategorySection 
        id="ai"
        title="AI"
        description="Cutting-edge AI developments visualized through futuristic anime narratives and cyberpunk aesthetics."
        stories={sampleStories}
        categoryColor="bg-ai-primary text-white"
        gradientBg="bg-gradient-to-r from-ai-primary to-ai-secondary"
        onStoryClick={handleStoryClick}
        onViewAll={() => handleViewAll('AI')}
      />
      
      <CategorySection 
        id="tech"
        title="Tech"
        description="Technology breakthroughs presented as high-tech anime adventures with digital worlds and innovation."
        stories={sampleStories}
        categoryColor="bg-tech-primary text-white"
        gradientBg="bg-gradient-to-r from-tech-primary to-tech-secondary"
        onStoryClick={handleStoryClick}
        onViewAll={() => handleViewAll('Tech')}
      />
      
      <CategorySection 
        id="hollywood"
        title="Hollywood"
        description="Entertainment industry news crafted into glamorous anime stories with stars and red carpet drama."
        stories={sampleStories}
        categoryColor="bg-hollywood-primary text-white"
        gradientBg="bg-gradient-to-r from-hollywood-primary to-hollywood-secondary"
        onStoryClick={handleStoryClick}
        onViewAll={() => handleViewAll('Hollywood')}
      />
      
      <StoryViewer 
        story={currentStory}
        onClose={closeStoryViewer}
        onNext={() => toast({ title: "Next Story", description: "Navigation between stories coming soon!" })}
        onPrevious={() => toast({ title: "Previous Story", description: "Navigation between stories coming soon!" })}
        hasNext={true}
        hasPrevious={true}
      />
      
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 AnimeNews. Powered by Gemini AI & GNews API
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

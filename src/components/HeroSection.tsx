import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-purple-900/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
          <Sparkles className="mr-2 h-4 w-4" />
          Powered by Gemini AI & GNews API
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Anime-Style
          <span className="bg-gradient-primary bg-clip-text text-transparent block">
            Web Stories
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform breaking news into stunning anime-style visual stories. 
          AI-powered storytelling meets beautiful design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg font-semibold transition-smooth hover:-translate-y-1 shadow-glow">
            <Play className="mr-2 h-5 w-5" />
            Explore Stories
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-background px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-smooth hover:-translate-y-1">
            How It Works
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
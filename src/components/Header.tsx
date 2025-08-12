import { Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  AnimeNews
                </h1>
                <p className="text-xs text-muted-foreground">AI-Powered Stories</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#sports" className="text-sm font-medium text-sports-primary hover:text-sports-primary/80 transition-smooth">
              Sports
            </a>
            <a href="#ai" className="text-sm font-medium text-ai-primary hover:text-ai-primary/80 transition-smooth">
              AI
            </a>
            <a href="#tech" className="text-sm font-medium text-tech-primary hover:text-tech-primary/80 transition-smooth">
              Tech
            </a>
            <a href="#hollywood" className="text-sm font-medium text-hollywood-primary hover:text-hollywood-primary/80 transition-smooth">
              Hollywood
            </a>
          </nav>

          <Button variant="secondary" size="sm" className="hidden md:flex items-center space-x-1">
            <Zap className="h-4 w-4" />
            <span>Generate Story</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
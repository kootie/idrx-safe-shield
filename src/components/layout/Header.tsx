
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import WalletConnect from "../wallet/WalletConnect";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleTabClick = (tabValue: string) => {
    const tabElement = document.querySelector(`[data-value="${tabValue}"]`) as HTMLButtonElement;
    if (tabElement) {
      tabElement.click();
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Shield className="h-6 w-6 text-shield-primary" />
          <span className="text-xl font-bold">IDRX Shield</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button 
            variant="ghost" 
            onClick={() => handleTabClick("dashboard")} 
            className="text-sm font-medium hover:text-shield-primary transition-colors"
          >
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleTabClick("coverage")} 
            className="text-sm font-medium hover:text-shield-primary transition-colors"
          >
            My Coverage
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleTabClick("claims")} 
            className="text-sm font-medium hover:text-shield-primary transition-colors"
          >
            Claims
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleTabClick("pool")} 
            className="text-sm font-medium hover:text-shield-primary transition-colors"
          >
            Pool Stats
          </Button>
          <WalletConnect />
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Button 
              variant="ghost" 
              onClick={() => handleTabClick("dashboard")} 
              className="justify-start text-sm font-medium hover:text-shield-primary transition-colors"
            >
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleTabClick("coverage")} 
              className="justify-start text-sm font-medium hover:text-shield-primary transition-colors"
            >
              My Coverage
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleTabClick("claims")} 
              className="justify-start text-sm font-medium hover:text-shield-primary transition-colors"
            >
              Claims
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleTabClick("pool")} 
              className="justify-start text-sm font-medium hover:text-shield-primary transition-colors"
            >
              Pool Stats
            </Button>
            <div className="pt-2">
              <WalletConnect />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import WalletConnect from "../wallet/WalletConnect";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleTabClick = (tabValue) => {
    const tabElement = document.querySelector(`[data-value="${tabValue}"]`);
    if (tabElement) {
      tabElement.click();
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-shield-primary" />
          <span className="text-xl font-bold">IDRX Shield</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => handleTabClick("dashboard")} className="text-sm font-medium hover:text-shield-primary transition-colors">Dashboard</button>
          <button onClick={() => handleTabClick("coverage")} className="text-sm font-medium hover:text-shield-primary transition-colors">My Coverage</button>
          <button onClick={() => handleTabClick("claims")} className="text-sm font-medium hover:text-shield-primary transition-colors">Claims</button>
          <button onClick={() => handleTabClick("pool")} className="text-sm font-medium hover:text-shield-primary transition-colors">Pool Stats</button>
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
            <button onClick={() => handleTabClick("dashboard")} className="text-sm font-medium hover:text-shield-primary transition-colors p-2">Dashboard</button>
            <button onClick={() => handleTabClick("coverage")} className="text-sm font-medium hover:text-shield-primary transition-colors p-2">My Coverage</button>
            <button onClick={() => handleTabClick("claims")} className="text-sm font-medium hover:text-shield-primary transition-colors p-2">Claims</button>
            <button onClick={() => handleTabClick("pool")} className="text-sm font-medium hover:text-shield-primary transition-colors p-2">Pool Stats</button>
            <div className="pt-2">
              <WalletConnect />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

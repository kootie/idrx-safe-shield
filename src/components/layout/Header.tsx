
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import WalletConnect from "../wallet/WalletConnect";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-shield-primary" />
          <span className="text-xl font-bold">IDRX Shield</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors">My Coverage</a>
          <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors">Claims</a>
          <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors">Pool Stats</a>
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
            <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors p-2">Dashboard</a>
            <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors p-2">My Coverage</a>
            <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors p-2">Claims</a>
            <a href="#" className="text-sm font-medium hover:text-shield-primary transition-colors p-2">Pool Stats</a>
            <div className="pt-2">
              <WalletConnect />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

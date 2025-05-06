
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="h-5 w-5 text-shield-primary" />
            <span className="text-sm font-semibold">IDRX Shield</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-shield-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-shield-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-shield-primary transition-colors">Documentation</a>
            <span className="text-xs text-muted-foreground">© 2025 IDRX Shield. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

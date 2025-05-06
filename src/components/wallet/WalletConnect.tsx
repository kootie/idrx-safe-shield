
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, Check } from "lucide-react";
import { toast } from "sonner";

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  
  const connectWallet = async () => {
    try {
      // This would be replaced with actual Xellar Kit integration
      // Mock connection for demo purposes
      setIsConnected(true);
      setWalletAddress("0x18Bc...D3C22");
      toast.success("Wallet connected successfully!");
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Failed to connect wallet. Please try again.");
    }
  };
  
  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
    toast.info("Wallet disconnected");
  };
  
  if (isConnected) {
    return (
      <Button 
        variant="outline" 
        className="flex items-center gap-2 bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
        onClick={disconnectWallet}
      >
        <Check className="h-4 w-4" />
        <span className="hidden sm:inline">{walletAddress}</span>
        <span className="sm:hidden">Connected</span>
      </Button>
    );
  }
  
  return (
    <Button 
      onClick={connectWallet}
      className="flex items-center gap-2 bg-shield-primary text-white hover:bg-shield-primary/90"
    >
      <Wallet className="h-4 w-4" />
      <span>Connect Wallet</span>
    </Button>
  );
}


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Search } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Claims() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your claim has been submitted successfully!");
  };

  const claims = [
    { 
      id: "CLM-7825", 
      date: "Apr 28, 2025", 
      amount: "8,500 IDRX", 
      status: "Approved", 
      policyId: "POL-3214",
      description: "Liquidation due to market volatility"
    },
    { 
      id: "CLM-6531", 
      date: "Mar 15, 2025", 
      amount: "3,200 IDRX", 
      status: "Processing", 
      policyId: "POL-4872",
      description: "Partial liquidation event"
    }
  ];
  
  const filteredClaims = claims.filter(claim => 
    claim.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    claim.policyId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Claims</h1>
        <p className="text-muted-foreground">Submit and track your insurance claims for liquidated IDRX loans.</p>
      </div>

      <Tabs defaultValue="submit">
        <TabsList>
          <TabsTrigger value="submit">Submit a Claim</TabsTrigger>
          <TabsTrigger value="history">Claims History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="submit" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmitClaim} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="policy">Policy ID</Label>
                    <Input id="policy" placeholder="Enter your policy ID (e.g., POL-1234)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="loan">Loan ID</Label>
                    <Input id="loan" placeholder="Enter your loan ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Claim Amount (IDRX)</Label>
                    <Input id="amount" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Liquidation Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Please provide details about the liquidation event" rows={4} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="evidence">Evidence (Transaction Hash)</Label>
                  <Input id="evidence" placeholder="Enter the transaction hash for verification" />
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-shield-primary hover:bg-shield-primary/90">Submit Claim</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search claims by ID or policy number" 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {filteredClaims.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredClaims.map((claim) => (
                <Card key={claim.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-muted p-4 md:w-1/4 flex items-center justify-center md:justify-start gap-3">
                        <FileText className="h-6 w-6 text-shield-primary" />
                        <div>
                          <p className="font-medium">{claim.id}</p>
                          <p className="text-xs text-muted-foreground">{claim.date}</p>
                        </div>
                      </div>
                      <div className="p-4 md:p-6 md:flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Policy</p>
                            <p className="font-medium">{claim.policyId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Amount</p>
                            <p className="font-medium">{claim.amount}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${
                              claim.status === "Approved" ? "bg-green-100 text-green-800" :
                              claim.status === "Processing" ? "bg-blue-100 text-blue-800" :
                              claim.status === "Rejected" ? "bg-red-100 text-red-800" :
                              "bg-gray-100 text-gray-800"
                            }`}>
                              {claim.status}
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm">{claim.description}</p>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-8">
              <FileText className="h-10 w-10 mx-auto text-muted-foreground/50 mb-2" />
              <h3 className="text-lg font-medium">No Claims Found</h3>
              <p className="text-muted-foreground">No claims matching your search criteria</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

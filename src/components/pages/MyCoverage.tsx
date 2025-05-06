
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, CalendarMinus, Shield } from "lucide-react";
import { useState } from "react";

export default function MyCoverage() {
  const [hasActivePolicies, setHasActivePolicies] = useState(true);
  
  const activePolicies = [
    {
      id: "POL-5321",
      loanAmount: "40,000 IDRX",
      coverageAmount: "32,000 IDRX",
      premium: "300 IDRX",
      expiryDate: "Jun 15, 2025",
      status: "Active",
      platform: "LiskLend",
      nextPayment: "May 15, 2025"
    },
    {
      id: "POL-4872",
      loanAmount: "15,000 IDRX",
      coverageAmount: "12,000 IDRX",
      premium: "75 IDRX",
      expiryDate: "May 30, 2025",
      status: "Active",
      platform: "EasiFi",
      nextPayment: "May 30, 2025"
    }
  ];
  
  const expiredPolicies = [
    {
      id: "POL-3214",
      loanAmount: "25,000 IDRX",
      coverageAmount: "20,000 IDRX",
      premium: "187.5 IDRX",
      expiryDate: "Apr 10, 2025",
      status: "Expired",
      platform: "LiskLend"
    },
    {
      id: "POL-2985",
      loanAmount: "8,000 IDRX",
      coverageAmount: "6,400 IDRX",
      premium: "40 IDRX",
      expiryDate: "Mar 22, 2025",
      status: "Expired",
      platform: "TokenVault"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Coverage</h1>
        <Button className="bg-shield-primary hover:bg-shield-primary/90">Insure New Loan</Button>
      </div>

      {!hasActivePolicies ? (
        <Card className="border-dashed border-2 border-muted">
          <CardContent className="flex flex-col items-center justify-center pt-10 pb-10">
            <div className="mb-4 p-3 rounded-full bg-muted">
              <Shield className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Active Coverage</h3>
            <p className="text-muted-foreground text-center max-w-md mb-6">
              You don't have any active insurance policies for your IDRX collateralized loans.
            </p>
            <Button className="bg-shield-primary hover:bg-shield-primary/90">Get Covered Now</Button>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active" className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4" /> Active Policies
            </TabsTrigger>
            <TabsTrigger value="expired" className="flex items-center gap-2">
              <CalendarMinus className="h-4 w-4" /> Expired Policies
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activePolicies.map(policy => (
                <Card key={policy.id} className="border-shield-primary/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{policy.id}</CardTitle>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {policy.status}
                      </Badge>
                    </div>
                    <CardDescription>Insured on {policy.platform}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Loan Amount:</span>
                        <span className="font-medium">{policy.loanAmount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Coverage Amount:</span>
                        <span className="font-medium">{policy.coverageAmount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Monthly Premium:</span>
                        <span className="font-medium">{policy.premium}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Next Payment:</span>
                        <span className="font-medium">{policy.nextPayment}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Expiry Date:</span>
                        <span className="font-medium">{policy.expiryDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="flex-1">View Details</Button>
                    <Button className="flex-1 bg-shield-primary hover:bg-shield-primary/90">Renew Policy</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="expired" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expiredPolicies.map(policy => (
                <Card key={policy.id} className="border-muted">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{policy.id}</CardTitle>
                      <Badge variant="outline" className="text-muted-foreground">
                        {policy.status}
                      </Badge>
                    </div>
                    <CardDescription>Insured on {policy.platform}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Loan Amount:</span>
                        <span className="font-medium">{policy.loanAmount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Coverage Amount:</span>
                        <span className="font-medium">{policy.coverageAmount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Monthly Premium:</span>
                        <span className="font-medium">{policy.premium}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Expiry Date:</span>
                        <span className="font-medium">{policy.expiryDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Reactivate Policy</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}

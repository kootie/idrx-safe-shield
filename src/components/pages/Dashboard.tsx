
import { StatCard } from "../dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, DollarSign, Users, Handshake } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="rounded-xl bg-gradient-to-r from-shield-primary/20 to-shield-secondary/5 p-6 md:p-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Protect Your IDRX Collateralized Loans</h1>
          <p className="text-lg mb-6">Shield yourself from liquidation risks with decentralized insurance that safeguards your assets.</p>
          <Button className="bg-shield-primary hover:bg-shield-primary/90 text-white">Get Covered Now</Button>
        </div>
      </section>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Value Protected" 
          value="1,250,000 IDRX" 
          icon={<Shield className="h-5 w-5 text-shield-primary" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Insurance Pool Size" 
          value="450,000 IDRX" 
          icon={<DollarSign className="h-5 w-5 text-shield-primary" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard 
          title="Active Policies" 
          value="328" 
          icon={<Users className="h-5 w-5 text-shield-primary" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard 
          title="Claims Processed" 
          value="24" 
          icon={<Handshake className="h-5 w-5 text-shield-primary" />}
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      {/* Insurance Plans */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Insurance Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-shield-primary/20">
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
              <CardDescription>For small collateralized loans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Coverage</span>
                    <span className="text-sm font-medium">Up to 10,000 IDRX</span>
                  </div>
                  <Progress value={33} className="h-2" />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Premium</span>
                  <span className="text-sm font-medium">0.5% / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Payout</span>
                  <span className="text-sm font-medium">Up to 80% of loss</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Select Plan</Button>
            </CardFooter>
          </Card>

          <Card className="border-shield-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-shield-primary text-white px-3 py-1 text-xs font-medium rounded-bl-lg">Popular</div>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
              <CardDescription>For medium-sized loans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Coverage</span>
                    <span className="text-sm font-medium">Up to 50,000 IDRX</span>
                  </div>
                  <Progress value={66} className="h-2" />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Premium</span>
                  <span className="text-sm font-medium">0.75% / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Payout</span>
                  <span className="text-sm font-medium">Up to 85% of loss</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-shield-primary hover:bg-shield-primary/90">Select Plan</Button>
            </CardFooter>
          </Card>

          <Card className="border-shield-primary/20">
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
              <CardDescription>For large collateral positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Coverage</span>
                    <span className="text-sm font-medium">Up to 200,000 IDRX</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Premium</span>
                  <span className="text-sm font-medium">1% / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Payout</span>
                  <span className="text-sm font-medium">Up to 90% of loss</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Select Plan</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-xl bg-muted p-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card p-4 rounded-lg">
            <div className="h-10 w-10 flex items-center justify-center bg-shield-primary/10 rounded-full mb-3">
              <span className="text-shield-primary font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Loan Initiation</h3>
            <p className="text-sm text-muted-foreground">Take out a loan using IDRX as collateral on any integrated lending platform</p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <div className="h-10 w-10 flex items-center justify-center bg-shield-primary/10 rounded-full mb-3">
              <span className="text-shield-primary font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Opt-in Insurance</h3>
            <p className="text-sm text-muted-foreground">Pay a small IDRX premium to join the insurance pool and protect your loan</p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <div className="h-10 w-10 flex items-center justify-center bg-shield-primary/10 rounded-full mb-3">
              <span className="text-shield-primary font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Monitoring</h3>
            <p className="text-sm text-muted-foreground">Smart contracts watch your loan-to-value ratio for potential liquidation events</p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <div className="h-10 w-10 flex items-center justify-center bg-shield-primary/10 rounded-full mb-3">
              <span className="text-shield-primary font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Automatic Payouts</h3>
            <p className="text-sm text-muted-foreground">If liquidation occurs, receive an automatic payout directly to your wallet</p>
          </div>
        </div>
      </section>
    </div>
  );
}

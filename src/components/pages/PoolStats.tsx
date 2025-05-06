
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Shield, Users, Handshake, TrendingUp, TrendingDown } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function PoolStats() {
  // Mock data for the charts
  const poolGrowthData = [
    { month: 'Jan', value: 120000 },
    { month: 'Feb', value: 150000 },
    { month: 'Mar', value: 210000 },
    { month: 'Apr', value: 240000 },
    { month: 'May', value: 320000 },
    { month: 'Jun', value: 450000 },
  ];
  
  const claimsData = [
    { month: 'Jan', value: 2 },
    { month: 'Feb', value: 4 },
    { month: 'Mar', value: 3 },
    { month: 'Apr', value: 7 },
    { month: 'May', value: 3 },
    { month: 'Jun', value: 5 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Pool Statistics</h1>
        <p className="text-muted-foreground">Overview of the IDRX Shield insurance pool performance and analytics.</p>
      </div>
      
      {/* Pool Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Pool Size</p>
                <p className="text-2xl font-bold">450,000 IDRX</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-shield-primary/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-shield-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Coverage Ratio</p>
                <p className="text-2xl font-bold">36%</p>
                <p className="text-xs text-muted-foreground mt-1">of total value locked</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-shield-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-shield-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Policies</p>
                <p className="text-2xl font-bold">328</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-shield-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-shield-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Claims this month</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-shield-primary/10 flex items-center justify-center">
                <Handshake className="h-5 w-5 text-shield-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-shield-primary" />
              Pool Growth
            </CardTitle>
            <CardDescription>Historical growth of the insurance pool in IDRX</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={poolGrowthData}>
                  <defs>
                    <linearGradient id="colorPool" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value.toLocaleString()} IDRX`, 'Pool Size']}
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      padding: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#9b87f5" 
                    fillOpacity={1} 
                    fill="url(#colorPool)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingDown className="h-5 w-5 mr-2 text-shield-primary" />
              Claims History
            </CardTitle>
            <CardDescription>Monthly claims processed from the insurance pool</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={claimsData}>
                  <defs>
                    <linearGradient id="colorClaims" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#7E69AB" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} claims`, 'Count']}
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      padding: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#7E69AB" 
                    fillOpacity={1} 
                    fill="url(#colorClaims)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pool allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Pool Allocation</CardTitle>
          <CardDescription>How insurance funds are currently allocated</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Available for Claims</span>
                <span className="text-sm font-medium">315,000 IDRX (70%)</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Reserved for Active Claims</span>
                <span className="text-sm font-medium">90,000 IDRX (20%)</span>
              </div>
              <Progress value={20} className="h-2 bg-muted" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">DAO Treasury</span>
                <span className="text-sm font-medium">45,000 IDRX (10%)</span>
              </div>
              <Progress value={10} className="h-2 bg-muted" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Risk Coverage Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-shield-primary">2.8x</div>
            <p className="text-sm mt-2 text-muted-foreground">
              The pool can cover 2.8x the average monthly claims
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Premium to Payout Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-shield-primary">5.2:1</div>
            <p className="text-sm mt-2 text-muted-foreground">
              For every 5.2 IDRX in premiums, 1 IDRX is paid out in claims
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pool Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-green-500">92/100</div>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">Healthy</div>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              Based on liquidity, claim frequency, and reserves
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

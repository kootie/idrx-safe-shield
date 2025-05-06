
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "../pages/Dashboard";
import MyCoverage from "../pages/MyCoverage";
import Claims from "../pages/Claims";
import PoolStats from "../pages/PoolStats";

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="dashboard" data-value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="coverage" data-value="coverage">My Coverage</TabsTrigger>
        <TabsTrigger value="claims" data-value="claims">Claims</TabsTrigger>
        <TabsTrigger value="pool" data-value="pool">Pool Stats</TabsTrigger>
      </TabsList>
      
      <TabsContent value="dashboard" className="animate-fade-in">
        <Dashboard />
      </TabsContent>
      
      <TabsContent value="coverage" className="animate-fade-in">
        <MyCoverage />
      </TabsContent>
      
      <TabsContent value="claims" className="animate-fade-in">
        <Claims />
      </TabsContent>
      
      <TabsContent value="pool" className="animate-fade-in">
        <PoolStats />
      </TabsContent>
    </Tabs>
  );
}


import { 
  BarChart3, 
  Users, 
  Briefcase, 
  PieChart, 
  ArrowUpRight, 
  CreditCard 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPatieChart,
  Pie,
  Cell,
} from "recharts";

const lineChartData = [
  { name: "Jan", sales: 2000, leads: 1400 },
  { name: "Feb", sales: 3000, leads: 1700 },
  { name: "Mar", sales: 2800, leads: 1500 },
  { name: "Apr", sales: 3500, leads: 2000 },
  { name: "May", sales: 4000, leads: 2400 },
  { name: "Jun", sales: 3800, leads: 2100 },
];

const pieData = [
  { name: "Cold", value: 400, color: "#0091ae" },
  { name: "Warm", value: 300, color: "#516f90" },
  { name: "Hot", value: 200, color: "#ff5c35" },
  { name: "Won", value: 100, color: "#33CC99" },
];

const barChartData = [
  { name: "Email", value: 400 },
  { name: "Social", value: 300 },
  { name: "Direct", value: 200 },
  { name: "Organic", value: 150 },
  { name: "Referral", value: 100 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your CRM dashboard</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Customers" 
          value="2,842" 
          icon={<Users className="h-5 w-5 text-primary" />} 
          trend={{ value: 12, positive: true }}
        />
        <StatsCard 
          title="Total Employees" 
          value="48" 
          icon={<Briefcase className="h-5 w-5 text-primary" />} 
          trend={{ value: 4, positive: true }}
        />
        <StatsCard 
          title="Revenue" 
          value="$243,382" 
          icon={<CreditCard className="h-5 w-5 text-primary" />} 
          trend={{ value: 18, positive: true }}
        />
        <StatsCard 
          title="Active Leads" 
          value="342" 
          icon={<ArrowUpRight className="h-5 w-5 text-primary" />} 
          trend={{ value: 7, positive: false }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Sales and lead acquisition performance over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="revenue">
              <TabsList>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                <TabsTrigger value="leads">Leads</TabsTrigger>
              </TabsList>
              <TabsContent value="revenue" className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#0091ae" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="leads" className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="leads" 
                      stroke="#516f90" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Leads by Status</CardTitle>
            <CardDescription>Distribution of leads by their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPatieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPatieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your leads are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0091ae" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest actions across your CRM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b pb-4 last:border-0">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New customer registered</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

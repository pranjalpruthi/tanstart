import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  Users,
  DollarSign,
  LineChart,
  TrendingUp,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Fake API service
const api = {
  getDashboardStats: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      totalUsers: "12,345",
      activeUsers: "8,891",
      revenue: "$123,456",
      growth: "+12.5%",
      userGrowth: "+180",
      activeGrowth: "+20.1%",
      revenueGrowth: "+19%",
      monthlyGrowth: "+201",
    };
  },
  getChartData: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      barData: [
        { name: "Jan", value: 400, category: "Q1" },
        { name: "Feb", value: 300, category: "Q1" },
        { name: "Mar", value: 600, category: "Q1" },
        { name: "Apr", value: 800, category: "Q2" },
        { name: "May", value: 500, category: "Q2" },
        { name: "Jun", value: 700, category: "Q2" },
      ],

      pieData: [
        { name: "Mobile", value: 400 },
        { name: "Desktop", value: 300 },
        { name: "Tablet", value: 200 },
        { name: "Other", value: 100 },
      ],
    };
  },
};

// Enhanced color palette with vibrant colors
const colors = {
  chart1: "hsl(222, 100%, 61%)", // Bright blue
  chart2: "hsl(280, 100%, 65%)", // Vibrant purple
  chart3: "hsl(330, 100%, 71%)", // Rose gold
  chart4: "hsl(150, 100%, 50%)", // Bright green
  chart5: "hsl(45, 100%, 60%)", // Gold
  chart6: "hsl(190, 100%, 50%)", // Cyan
};

export const Route = createFileRoute("/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: api.getDashboardStats,
  });

  const { data: chartData, isLoading: chartsLoading } = useQuery({
    queryKey: ["dashboard-charts"],
    queryFn: api.getChartData,
  });

  return (
    <div className="space-y-8" data-oid="5xulgu8">
      <div className="flex flex-col gap-4" data-oid="l1rwy83">
        <div className="flex items-center justify-between" data-oid="5kn2ntm">
          <div data-oid="v.hy9b8">
            <h2
              className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="sy4o5wl"
            >
              Dashboard
            </h2>
            <div className="text-muted-foreground mt-1" data-oid="ku5.ps2">
              Welcome back! Here's an overview of your enterprise metrics.
            </div>
          </div>
          <div className="hidden md:block" data-oid=":j4_:ta">
            <div
              className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 flex items-center justify-center"
              data-oid="a96rl0p"
            >
              <LineChart
                className="h-6 w-6 text-purple-500"
                data-oid="hu7:px3"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="unrvwb4"
      >
        <Card
          className="relative overflow-hidden transition-all hover:shadow-lg"
          data-oid="_0xsm3u"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/10"
            data-oid="o:pguej"
          />

          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="oq49gy-"
          >
            <CardTitle
              className="text-sm font-medium text-blue-600 dark:text-blue-400"
              data-oid="fg6he:o"
            >
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-blue-500" data-oid="w:tpppg" />
          </CardHeader>
          <CardContent className="relative" data-oid="i1ydluk">
            <div
              className="text-2xl font-bold text-blue-700 dark:text-blue-300"
              data-oid="h7vejme"
            >
              {stats?.totalUsers}
            </div>
            <p
              className="text-xs text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-1"
              data-oid="6mv0-iv"
            >
              <TrendingUp className="h-3 w-3" data-oid="u468zbo" />
              {stats?.userGrowth} from last month
            </p>
          </CardContent>
        </Card>

        <Card
          className="relative overflow-hidden transition-all hover:shadow-lg"
          data-oid="_iuhet2"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/10"
            data-oid="6_h6xa:"
          />

          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="hr62v57"
          >
            <CardTitle
              className="text-sm font-medium text-green-600 dark:text-green-400"
              data-oid="xr:du3p"
            >
              Active Users
            </CardTitle>
            <Activity className="h-4 w-4 text-green-500" data-oid="s54kdln" />
          </CardHeader>
          <CardContent className="relative" data-oid="rpl5t6c">
            <div
              className="text-2xl font-bold text-green-700 dark:text-green-300"
              data-oid="ajy07p-"
            >
              {stats?.activeUsers}
            </div>
            <p
              className="text-xs text-green-600 dark:text-green-400 mt-1 flex items-center gap-1"
              data-oid="q1nw6-o"
            >
              <TrendingUp className="h-3 w-3" data-oid="cc3y_xh" />
              {stats?.activeGrowth} from last week
            </p>
          </CardContent>
        </Card>

        <Card
          className="relative overflow-hidden transition-all hover:shadow-lg"
          data-oid="s_0mpew"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-amber-500/10"
            data-oid="-:ntyaa"
          />

          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="6f.vkuu"
          >
            <CardTitle
              className="text-sm font-medium text-amber-600 dark:text-amber-400"
              data-oid=":3mh:n1"
            >
              Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-amber-500" data-oid="2i1lnm_" />
          </CardHeader>
          <CardContent className="relative" data-oid="1.ylj1k">
            <div
              className="text-2xl font-bold text-amber-700 dark:text-amber-300"
              data-oid="rwxqlvl"
            >
              {stats?.revenue}
            </div>
            <p
              className="text-xs text-amber-600 dark:text-amber-400 mt-1 flex items-center gap-1"
              data-oid="4gr-ju_"
            >
              <TrendingUp className="h-3 w-3" data-oid="ns4ah9r" />
              {stats?.revenueGrowth} from last month
            </p>
          </CardContent>
        </Card>

        <Card
          className="relative overflow-hidden transition-all hover:shadow-lg"
          data-oid="pok5y3f"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-rose-500/10"
            data-oid="ah2eeot"
          />

          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="zjg_a2l"
          >
            <CardTitle
              className="text-sm font-medium text-rose-600 dark:text-rose-400"
              data-oid="svy2tqd"
            >
              Growth
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-rose-500" data-oid="i7:r0gt" />
          </CardHeader>
          <CardContent className="relative" data-oid="4ui5wm3">
            <div
              className="text-2xl font-bold text-rose-700 dark:text-rose-300"
              data-oid="87:r610"
            >
              {stats?.growth}
            </div>
            <p
              className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1"
              data-oid="6z6jgti"
            >
              <TrendingUp className="h-3 w-3" data-oid="h5c7qpw" />
              {stats?.monthlyGrowth} since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2" data-oid="tbl.o7h">
        <Card
          className="w-full transition-all hover:shadow-lg"
          data-oid="hgvi4q_"
        >
          <CardHeader data-oid="2:upre9">
            <CardTitle
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
              data-oid="yjiwplz"
            >
              Revenue Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]" data-oid="5:0so6d">
            <ResponsiveContainer width="100%" height="100%" data-oid="c_vuhjk">
              <BarChart data={chartData?.barData} data-oid="ygiyp:v">
                <XAxis
                  dataKey="name"
                  stroke="currentColor"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ strokeWidth: 0.5 }}
                  data-oid="e0hd-jd"
                />

                <YAxis
                  stroke="currentColor"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ strokeWidth: 0.5 }}
                  data-oid="zy7_h9l"
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                    color: "hsl(var(--foreground))",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  data-oid="9wg9u-6"
                />

                <Legend data-oid="hk5.qu2" />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} data-oid="8vfvtld">
                  {chartData?.barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.category === "Q1" ? colors.chart1 : colors.chart2
                      }
                      style={{ filter: "brightness(1.1)" }}
                      data-oid="ivm5sp8"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card
          className="w-full transition-all hover:shadow-lg"
          data-oid="h9owlew"
        >
          <CardHeader data-oid="u_b-d9i">
            <CardTitle
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent"
              data-oid="l_m.g3e"
            >
              Platform Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]" data-oid="a53lp-i">
            <ResponsiveContainer width="100%" height="100%" data-oid="i-odzit">
              <PieChart data-oid="g:utf.:">
                <Pie
                  data={chartData?.pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  data-oid="ssauh0q"
                >
                  {chartData?.pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[`chart${index + 1}`]}
                      style={{ filter: "brightness(1.1)" }}
                      data-oid="yt2rpa_"
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                    color: "hsl(var(--foreground))",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  data-oid="f:xt4on"
                />

                <Legend
                  formatter={(value) => (
                    <span
                      style={{ color: "hsl(var(--foreground))" }}
                      data-oid="393ie6j"
                    >
                      {value}
                    </span>
                  )}
                  data-oid="c4lk:pr"
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

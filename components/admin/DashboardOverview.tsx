"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, CalendarDays, ArrowUpRight, Tent, Car } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 38000 },
  { month: "Mar", revenue: 52000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 48000 },
  { month: "Jul", revenue: 58000 },
  { month: "Aug", revenue: 62000 },
  { month: "Sep", revenue: 54000 },
  { month: "Oct", revenue: 68000 },
  { month: "Nov", revenue: 72000 },
  { month: "Dec", revenue: 78000 },
]

const occupancyData = [
  { month: "Jan", occupancy: 85 },
  { month: "Feb", occupancy: 78 },
  { month: "Mar", occupancy: 92 },
  { month: "Apr", occupancy: 95 },
  { month: "May", occupancy: 88 },
  { month: "Jun", occupancy: 82 },
  { month: "Jul", occupancy: 90 },
  { month: "Aug", occupancy: 94 },
  { month: "Sep", occupancy: 86 },
  { month: "Oct", occupancy: 91 },
  { month: "Nov", occupancy: 96 },
  { month: "Dec", occupancy: 98 },
]

const recentActivity = [
  {
    id: 1,
    type: "reservation",
    guest: "John & Mary Smith",
    action: "New reservation",
    time: "2 min ago",
    amount: "$1,450",
  },
  { id: 2, type: "payment", guest: "Robert Johnson", action: "Payment received", time: "15 min ago", amount: "$875" },
  { id: 3, type: "checkin", guest: "The Williams Family", action: "Checked in", time: "1 hour ago", space: "A-12" },
  { id: 4, type: "checkout", guest: "David & Lisa Brown", action: "Checked out", time: "2 hours ago", space: "B-08" },
  { id: 5, type: "message", guest: "Sarah Davis", action: "New inquiry", time: "3 hours ago" },
]

const upcomingArrivals = [
  { id: 1, guest: "Michael & Karen Taylor", date: "Dec 15", nights: 14, space: "CV-03", status: "confirmed" },
  { id: 2, guest: "James Wilson", date: "Dec 16", nights: 7, space: "A-18", status: "confirmed" },
  { id: 3, guest: "Patricia Anderson", date: "Dec 17", nights: 30, space: "CV-07", status: "pending" },
  { id: 4, guest: "Thomas & Nancy Martin", date: "Dec 18", nights: 21, space: "B-02", status: "confirmed" },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Cade. Here&apos;s what&apos;s happening at Hillside Palms.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$78,420</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Occupancy Rate</CardTitle>
            <Tent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +8% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Guests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>12 checking out this week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Storage Units</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18/24</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>6 available</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Occupancy Rate</CardTitle>
            <CardDescription>Monthly occupancy percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Occupancy"]}
                  />
                  <Bar dataKey="occupancy" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity and Arrivals */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from the park</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.guest}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    {activity.amount && <p className="text-sm font-medium">{activity.amount}</p>}
                    {activity.space && <p className="text-sm text-muted-foreground">Space {activity.space}</p>}
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Arrivals</CardTitle>
            <CardDescription>Guests arriving in the next few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingArrivals.map((arrival) => (
                <div key={arrival.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CalendarDays className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{arrival.guest}</p>
                    <p className="text-xs text-muted-foreground">
                      {arrival.nights} nights · Space {arrival.space}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{arrival.date}</p>
                    <Badge variant={arrival.status === "confirmed" ? "default" : "secondary"} className="text-xs">
                      {arrival.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, CreditCard, Bell, MessageSquare, Wrench, Calendar, Sun, MapPin, ArrowRight } from "lucide-react"

const upcomingEvents = [
  { id: 1, name: "Coffee & Donuts Social", date: "Dec 16", time: "9:00 AM", location: "Clubhouse" },
  { id: 2, name: "Potluck Dinner", date: "Dec 18", time: "5:30 PM", location: "Community Center" },
  { id: 3, name: "Bingo Night", date: "Dec 20", time: "7:00 PM", location: "Recreation Hall" },
]

const recentNotices = [
  { id: 1, title: "Holiday Office Hours", date: "Dec 14", priority: "normal" },
  { id: 2, title: "Water Maintenance - Dec 17", date: "Dec 13", priority: "important" },
  { id: 3, title: "New WiFi Password", date: "Dec 10", priority: "normal" },
]

export function ResidentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here&apos;s an overview of your stay at Hillside Palms.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sun className="h-4 w-4" />
          <span>72°F Sunny in St. George</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$875.00</div>
            <p className="text-xs text-muted-foreground">Due by Dec 31, 2024</p>
            <Button size="sm" className="mt-3 w-full" asChild>
              <Link href="/resident/portal/payments">Pay Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Your Space</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">CV-03</div>
            <p className="text-xs text-muted-foreground">Premium City View</p>
            <Badge variant="secondary" className="mt-3">
              Full Hookups
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Stay Duration</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47 Days</div>
            <p className="text-xs text-muted-foreground">Nov 1 - Jan 15, 2025</p>
            <div className="mt-3">
              <Progress value={62} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">62% complete</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">From park management</p>
            <Button size="sm" variant="outline" className="mt-3 w-full bg-transparent" asChild>
              <Link href="/resident/portal/messages">View Messages</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Community activities this week</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/resident/portal/events" className="flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{event.name}</p>
                    <p className="text-xs text-muted-foreground">{event.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Notices */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Notices</CardTitle>
              <CardDescription>Important park announcements</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/resident/portal/notices" className="flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotices.map((notice) => (
                <div key={notice.id} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      notice.priority === "important" ? "bg-destructive/10" : "bg-primary/10"
                    }`}
                  >
                    <Bell
                      className={`h-5 w-5 ${notice.priority === "important" ? "text-destructive" : "text-primary"}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{notice.title}</p>
                    <p className="text-xs text-muted-foreground">{notice.date}</p>
                  </div>
                  {notice.priority === "important" && (
                    <Badge variant="destructive" className="text-xs">
                      Important
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent" asChild>
              <Link href="/resident/portal/payments">
                <CreditCard className="h-5 w-5" />
                <span>Make Payment</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent" asChild>
              <Link href="/resident/portal/maintenance">
                <Wrench className="h-5 w-5" />
                <span>Submit Request</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent" asChild>
              <Link href="/resident/portal/messages">
                <MessageSquare className="h-5 w-5" />
                <span>Contact Office</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 bg-transparent" asChild>
              <Link href="/resident/portal/stay">
                <CalendarDays className="h-5 w-5" />
                <span>Extend Stay</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

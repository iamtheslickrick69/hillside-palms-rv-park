"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, AlertTriangle, Info, Calendar } from "lucide-react"

const notices = [
  {
    id: 1,
    title: "Holiday Office Hours",
    content:
      "The office will be closed December 25th and January 1st. For emergencies, please call the after-hours line at (435) 555-0199.",
    date: "Dec 14, 2024",
    type: "info",
    isNew: true,
  },
  {
    id: 2,
    title: "Scheduled Water Maintenance",
    content:
      "Water service will be temporarily interrupted on December 17th from 8:00 AM to 12:00 PM for routine maintenance. Please plan accordingly and store water if needed.",
    date: "Dec 13, 2024",
    type: "important",
    isNew: true,
  },
  {
    id: 3,
    title: "New WiFi Network Password",
    content:
      "The park WiFi password has been updated for security. New password: HillsidePalms2024! Please update your devices.",
    date: "Dec 10, 2024",
    type: "info",
    isNew: false,
  },
  {
    id: 4,
    title: "Holiday Potluck Dinner",
    content:
      "Join us for our annual holiday potluck on December 18th at 5:30 PM in the Community Center. Please bring a dish to share!",
    date: "Dec 8, 2024",
    type: "event",
    isNew: false,
  },
  {
    id: 5,
    title: "Quiet Hours Reminder",
    content:
      "Please remember that quiet hours are from 10:00 PM to 7:00 AM. We appreciate your cooperation in maintaining a peaceful environment for all guests.",
    date: "Dec 5, 2024",
    type: "info",
    isNew: false,
  },
  {
    id: 6,
    title: "Pet Policy Update",
    content:
      "Friendly reminder that all pets must be leashed when outside your RV and owners must clean up after their pets. Thank you for keeping our park clean!",
    date: "Dec 1, 2024",
    type: "info",
    isNew: false,
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "important":
      return <AlertTriangle className="h-5 w-5 text-destructive" />
    case "event":
      return <Calendar className="h-5 w-5 text-primary" />
    default:
      return <Info className="h-5 w-5 text-primary" />
  }
}

const getBadge = (type: string) => {
  switch (type) {
    case "important":
      return <Badge variant="destructive">Important</Badge>
    case "event":
      return <Badge variant="secondary">Event</Badge>
    default:
      return null
  }
}

export function NoticesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Notices</h1>
        <p className="text-muted-foreground">Important announcements and updates from park management.</p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Unread Notices</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Important Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
        </Card>
      </div>

      {/* Notices List */}
      <Card>
        <CardHeader>
          <CardTitle>All Notices</CardTitle>
          <CardDescription>Stay up to date with park announcements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`p-4 border rounded-lg ${notice.isNew ? "bg-primary/5 border-primary/20" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notice.type === "important" ? "bg-destructive/10" : "bg-primary/10"
                    }`}
                  >
                    {getIcon(notice.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium">{notice.title}</h3>
                      {notice.isNew && (
                        <Badge variant="default" className="text-xs">
                          New
                        </Badge>
                      )}
                      {getBadge(notice.type)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{notice.content}</p>
                    <p className="text-xs text-muted-foreground">{notice.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

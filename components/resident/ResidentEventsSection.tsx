"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Check } from "lucide-react"

const events = [
  {
    id: 1,
    name: "Coffee & Donuts Social",
    date: "Dec 16, 2024",
    time: "9:00 AM",
    location: "Clubhouse",
    description: "Start your morning with coffee, donuts, and great conversation with neighbors.",
    attendees: 24,
    rsvp: false,
  },
  {
    id: 2,
    name: "Holiday Potluck Dinner",
    date: "Dec 18, 2024",
    time: "5:30 PM",
    location: "Community Center",
    description: "Bring a dish to share and celebrate the holidays with the Hillside Palms community!",
    attendees: 45,
    rsvp: true,
  },
  {
    id: 3,
    name: "Bingo Night",
    date: "Dec 20, 2024",
    time: "7:00 PM",
    location: "Recreation Hall",
    description: "Join us for a fun evening of bingo with prizes! Refreshments provided.",
    attendees: 32,
    rsvp: false,
  },
  {
    id: 4,
    name: "New Year's Eve Party",
    date: "Dec 31, 2024",
    time: "8:00 PM",
    location: "Clubhouse",
    description: "Ring in the new year with music, dancing, and a champagne toast at midnight!",
    attendees: 58,
    rsvp: false,
  },
  {
    id: 5,
    name: "Morning Yoga",
    date: "Every Tuesday",
    time: "8:00 AM",
    location: "Pool Area",
    description: "Gentle yoga session suitable for all levels. Bring your own mat.",
    attendees: 12,
    rsvp: true,
    recurring: true,
  },
]

export function ResidentEventsSection() {
  const [rsvps, setRsvps] = useState<Record<number, boolean>>(
    events.reduce((acc, e) => ({ ...acc, [e.id]: e.rsvp }), {}),
  )

  const toggleRsvp = (id: number) => {
    setRsvps((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Events</h1>
        <p className="text-muted-foreground">View upcoming events and RSVP to activities.</p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">events scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Your RSVPs</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.values(rsvps).filter(Boolean).length}</div>
            <p className="text-xs text-muted-foreground">events attending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">total events</p>
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Community activities and gatherings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-4 border rounded-lg">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{event.name}</h3>
                        {event.recurring && <Badge variant="secondary">Weekly</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {event.attendees} attending
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant={rsvps[event.id] ? "default" : "outline"} onClick={() => toggleRsvp(event.id)}>
                      {rsvps[event.id] ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Going
                        </>
                      ) : (
                        "RSVP"
                      )}
                    </Button>
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

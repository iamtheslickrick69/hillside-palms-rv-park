"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Waves, Dumbbell, Shirt, Users, Calendar, Clock } from "lucide-react"

const amenities = [
  {
    id: 1,
    name: "Pool & Hot Tub",
    icon: Waves,
    hours: "6 AM - 10 PM",
    status: "open",
    bookable: false,
    description: "Heated pool and hot tub available to all guests.",
  },
  {
    id: 2,
    name: "Fitness Center",
    icon: Dumbbell,
    hours: "24 Hours",
    status: "open",
    bookable: false,
    description: "Fully equipped gym with cardio and weights.",
  },
  {
    id: 3,
    name: "Laundry Room",
    icon: Shirt,
    hours: "7 AM - 9 PM",
    status: "open",
    bookable: true,
    description: "Reserve a time slot for laundry machines.",
  },
  {
    id: 4,
    name: "Community Center",
    icon: Users,
    hours: "8 AM - 9 PM",
    status: "open",
    bookable: true,
    description: "Book for private events or gatherings.",
  },
]

const myBookings = [
  { id: 1, amenity: "Laundry Room", date: "Dec 16, 2024", time: "2:00 PM - 4:00 PM", status: "upcoming" },
  { id: 2, amenity: "Laundry Room", date: "Dec 10, 2024", time: "10:00 AM - 12:00 PM", status: "completed" },
]

export function AmenitiesBookingSection() {
  const [bookDialogOpen, setBookDialogOpen] = useState(false)
  const [selectedAmenity, setSelectedAmenity] = useState<string | null>(null)

  const openBooking = (amenityName: string) => {
    setSelectedAmenity(amenityName)
    setBookDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Amenities</h1>
        <p className="text-muted-foreground">View park amenities and book facilities.</p>
      </div>

      {/* Amenities Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {amenities.map((amenity) => (
          <Card key={amenity.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <amenity.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium">{amenity.name}</h3>
                    <Badge variant={amenity.status === "open" ? "default" : "secondary"}>
                      {amenity.status === "open" ? "Open" : "Closed"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{amenity.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {amenity.hours}
                    </span>
                  </div>
                  {amenity.bookable && (
                    <Button size="sm" className="mt-3" onClick={() => openBooking(amenity.name)}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Time
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* My Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
          <CardDescription>Your upcoming and past reservations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {myBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{booking.amenity}</p>
                    <p className="text-xs text-muted-foreground">
                      {booking.date} • {booking.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={booking.status === "upcoming" ? "default" : "secondary"}>
                    {booking.status === "upcoming" ? "Upcoming" : "Completed"}
                  </Badge>
                  {booking.status === "upcoming" && (
                    <Button variant="ghost" size="sm">
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Booking Dialog */}
      <Dialog open={bookDialogOpen} onOpenChange={setBookDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book {selectedAmenity}</DialogTitle>
            <DialogDescription>Select a date and time for your reservation.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="bookDate">Date</Label>
              <Input id="bookDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bookTime">Time Slot</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8-10">8:00 AM - 10:00 AM</SelectItem>
                  <SelectItem value="10-12">10:00 AM - 12:00 PM</SelectItem>
                  <SelectItem value="12-2">12:00 PM - 2:00 PM</SelectItem>
                  <SelectItem value="2-4">2:00 PM - 4:00 PM</SelectItem>
                  <SelectItem value="4-6">4:00 PM - 6:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setBookDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setBookDialogOpen(false)}>Confirm Booking</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

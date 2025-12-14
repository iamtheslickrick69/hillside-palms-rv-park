"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarDays, MapPin, Zap, Wifi, Droplets, Truck, Calendar } from "lucide-react"

export function MyStaySection() {
  const [extendDialogOpen, setExtendDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">My Stay</h1>
        <p className="text-muted-foreground">View and manage your current reservation details.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Stay Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Current Reservation</CardTitle>
                  <CardDescription>Confirmation #HP-2024-1847</CardDescription>
                </div>
                <Badge>Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CalendarDays className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Check-In</p>
                    <p className="text-sm text-muted-foreground">November 1, 2024</p>
                    <p className="text-xs text-muted-foreground">2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Check-Out</p>
                    <p className="text-sm text-muted-foreground">January 15, 2025</p>
                    <p className="text-xs text-muted-foreground">11:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Space CV-03</p>
                    <p className="text-sm text-muted-foreground">Premium City View - Row C</p>
                    <p className="text-xs text-muted-foreground">Pull-through, 60ft max length</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium mb-3">Included Amenities</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">50/30 Amp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-primary" />
                    <span className="text-sm">Water</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span className="text-sm">Sewer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span className="text-sm">WiFi</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RV Details */}
          <Card>
            <CardHeader>
              <CardTitle>RV Details</CardTitle>
              <CardDescription>Your registered vehicle information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">RV Type</p>
                  <p className="text-sm font-medium">Class A Motorhome</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Make/Model</p>
                  <p className="text-sm font-medium">Tiffin Allegro Bus</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="text-sm font-medium">2022</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Length</p>
                  <p className="text-sm font-medium">42 ft</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">License Plate</p>
                  <p className="text-sm font-medium">AZ-RV2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tow Vehicle</p>
                  <p className="text-sm font-medium">2023 Jeep Wrangler (AZ-JEE123)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stay Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Stay Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Nights</span>
                <span className="text-sm font-medium">76 nights</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Days Remaining</span>
                <span className="text-sm font-medium">29 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Rate Type</span>
                <span className="text-sm font-medium">Monthly</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="text-sm font-medium">Monthly Rate</span>
                <span className="text-sm font-medium">$875/mo</span>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Dialog open={extendDialogOpen} onOpenChange={setExtendDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Extend Stay
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Extend Your Stay</DialogTitle>
                    <DialogDescription>Request to extend your reservation at Hillside Palms.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Current Check-Out</Label>
                      <Input value="January 15, 2025" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newCheckout">New Check-Out Date</Label>
                      <Input id="newCheckout" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea id="notes" placeholder="Any special requests..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setExtendDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setExtendDialogOpen(false)}>Submit Request</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button variant="outline" className="w-full bg-transparent">
                Request Space Change
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Update RV Info
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

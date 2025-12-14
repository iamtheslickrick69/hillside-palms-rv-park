"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, MoreHorizontal, Plus, Mail, Phone, FileText, Eye } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const guests = [
  {
    id: 1,
    name: "John & Mary Smith",
    email: "jsmith@email.com",
    phone: "(555) 123-4567",
    status: "current",
    space: "CV-03",
    checkIn: "Dec 1, 2025",
    checkOut: "Dec 28, 2025",
    totalStays: 5,
    totalSpent: "$12,450",
    rvType: "Class A Motorhome",
    rvLength: "38 ft",
  },
  {
    id: 2,
    name: "Robert Johnson",
    email: "rjohnson@email.com",
    phone: "(555) 234-5678",
    status: "current",
    space: "A-12",
    checkIn: "Nov 15, 2025",
    checkOut: "Jan 15, 2026",
    totalStays: 3,
    totalSpent: "$8,750",
    rvType: "Fifth Wheel",
    rvLength: "42 ft",
  },
  {
    id: 3,
    name: "The Williams Family",
    email: "williams.fam@email.com",
    phone: "(555) 345-6789",
    status: "upcoming",
    space: "B-08",
    checkIn: "Dec 20, 2025",
    checkOut: "Dec 27, 2025",
    totalStays: 1,
    totalSpent: "$0",
    rvType: "Travel Trailer",
    rvLength: "28 ft",
  },
  {
    id: 4,
    name: "David & Lisa Brown",
    email: "brownfamily@email.com",
    phone: "(555) 456-7890",
    status: "past",
    space: "CV-07",
    checkIn: "Oct 1, 2025",
    checkOut: "Nov 30, 2025",
    totalStays: 8,
    totalSpent: "$24,200",
    rvType: "Class A Motorhome",
    rvLength: "45 ft",
  },
  {
    id: 5,
    name: "Sarah Davis",
    email: "sdavis@email.com",
    phone: "(555) 567-8901",
    status: "current",
    space: "A-05",
    checkIn: "Dec 10, 2025",
    checkOut: "Dec 17, 2025",
    totalStays: 2,
    totalSpent: "$1,890",
    rvType: "Class C Motorhome",
    rvLength: "32 ft",
  },
]

const guestHistory = [
  { date: "Dec 1, 2025", action: "Checked in", space: "CV-03", amount: null },
  { date: "Dec 1, 2025", action: "Payment received", space: null, amount: "$1,450" },
  { date: "Nov 28, 2025", action: "Reservation confirmed", space: "CV-03", amount: null },
  { date: "Aug 15, 2025", action: "Checked out", space: "CV-03", amount: null },
  { date: "Jul 1, 2025", action: "Checked in", space: "CV-03", amount: null },
  { date: "Jul 1, 2025", action: "Payment received", space: null, amount: "$2,800" },
]

export function GuestsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGuest, setSelectedGuest] = useState<(typeof guests)[0] | null>(null)

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.phone.includes(searchQuery),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Guests</h1>
          <p className="text-muted-foreground">Manage guest information and history</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Guest
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="current">Current</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Guests Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guest</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Space</TableHead>
                <TableHead>Stay Period</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGuests.map((guest) => (
                <TableRow key={guest.id}>
                  <TableCell>
                    <div className="font-medium">{guest.name}</div>
                    <div className="text-xs text-muted-foreground">{guest.totalStays} stays</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{guest.email}</div>
                    <div className="text-xs text-muted-foreground">{guest.phone}</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        guest.status === "current" ? "default" : guest.status === "upcoming" ? "secondary" : "outline"
                      }
                    >
                      {guest.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{guest.space}</TableCell>
                  <TableCell>
                    <div className="text-sm">{guest.checkIn}</div>
                    <div className="text-xs text-muted-foreground">to {guest.checkOut}</div>
                  </TableCell>
                  <TableCell className="font-medium">{guest.totalSpent}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DialogTrigger asChild onClick={() => setSelectedGuest(guest)}>
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                          </DialogTrigger>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            View Documents
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{selectedGuest?.name}</DialogTitle>
                          <DialogDescription>Guest profile and history</DialogDescription>
                        </DialogHeader>
                        {selectedGuest && (
                          <div className="space-y-6">
                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{selectedGuest.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{selectedGuest.phone}</span>
                              </div>
                            </div>

                            {/* RV Info */}
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <h4 className="font-medium mb-2">RV Information</h4>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Type:</span> {selectedGuest.rvType}
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Length:</span> {selectedGuest.rvLength}
                                </div>
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                              <Card>
                                <CardContent className="pt-4">
                                  <div className="text-2xl font-bold">{selectedGuest.totalStays}</div>
                                  <div className="text-xs text-muted-foreground">Total Stays</div>
                                </CardContent>
                              </Card>
                              <Card>
                                <CardContent className="pt-4">
                                  <div className="text-2xl font-bold">{selectedGuest.totalSpent}</div>
                                  <div className="text-xs text-muted-foreground">Total Spent</div>
                                </CardContent>
                              </Card>
                              <Card>
                                <CardContent className="pt-4">
                                  <div className="text-2xl font-bold">{selectedGuest.space}</div>
                                  <div className="text-xs text-muted-foreground">Current Space</div>
                                </CardContent>
                              </Card>
                            </div>

                            {/* History */}
                            <div>
                              <h4 className="font-medium mb-3">Activity History</h4>
                              <div className="space-y-3">
                                {guestHistory.map((item, index) => (
                                  <div key={index} className="flex items-center gap-4 text-sm">
                                    <div className="w-24 text-muted-foreground">{item.date}</div>
                                    <div className="flex-1">{item.action}</div>
                                    {item.space && <Badge variant="outline">{item.space}</Badge>}
                                    {item.amount && <span className="font-medium">{item.amount}</span>}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

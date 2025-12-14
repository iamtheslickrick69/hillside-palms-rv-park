"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Plus, Check, X, Clock } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const reservations = [
  {
    id: "RES-001",
    guest: "Michael & Karen Taylor",
    email: "mtaylor@email.com",
    checkIn: "Dec 15, 2025",
    checkOut: "Dec 29, 2025",
    nights: 14,
    space: "CV-03",
    spaceType: "City View",
    total: "$1,890",
    status: "confirmed",
    createdAt: "Dec 10, 2025",
  },
  {
    id: "RES-002",
    guest: "James Wilson",
    email: "jwilson@email.com",
    checkIn: "Dec 16, 2025",
    checkOut: "Dec 23, 2025",
    nights: 7,
    space: "A-18",
    spaceType: "Standard",
    total: "$595",
    status: "confirmed",
    createdAt: "Dec 8, 2025",
  },
  {
    id: "RES-003",
    guest: "Patricia Anderson",
    email: "panderson@email.com",
    checkIn: "Dec 17, 2025",
    checkOut: "Jan 16, 2026",
    nights: 30,
    space: "CV-07",
    spaceType: "City View",
    total: "$3,150",
    status: "pending",
    createdAt: "Dec 12, 2025",
  },
  {
    id: "RES-004",
    guest: "Thomas & Nancy Martin",
    email: "martintn@email.com",
    checkIn: "Dec 18, 2025",
    checkOut: "Jan 8, 2026",
    nights: 21,
    space: "B-02",
    spaceType: "Standard",
    total: "$1,575",
    status: "confirmed",
    createdAt: "Dec 5, 2025",
  },
  {
    id: "RES-005",
    guest: "Elizabeth Thompson",
    email: "ethompson@email.com",
    checkIn: "Dec 20, 2025",
    checkOut: "Dec 27, 2025",
    nights: 7,
    space: "A-10",
    spaceType: "Standard",
    total: "$595",
    status: "cancelled",
    createdAt: "Dec 1, 2025",
  },
]

export function ReservationsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredReservations = reservations.filter((res) => {
    const matchesSearch =
      res.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.email.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return matchesSearch && res.status === activeTab
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Check className="h-3 w-3" />
      case "pending":
        return <Clock className="h-3 w-3" />
      case "cancelled":
        return <X className="h-3 w-3" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Reservations</h1>
          <p className="text-muted-foreground">Manage bookings and availability</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Reservation
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm text-muted-foreground">Total This Month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-500">18</div>
            <div className="text-sm text-muted-foreground">Confirmed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-500">4</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-500">2</div>
            <div className="text-sm text-muted-foreground">Cancelled</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by guest name, ID, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Reservations Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reservation</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Dates</TableHead>
                <TableHead>Space</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReservations.map((res) => (
                <TableRow key={res.id}>
                  <TableCell>
                    <div className="font-medium font-mono text-sm">{res.id}</div>
                    <div className="text-xs text-muted-foreground">Created {res.createdAt}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{res.guest}</div>
                    <div className="text-xs text-muted-foreground">{res.email}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{res.checkIn}</div>
                    <div className="text-xs text-muted-foreground">
                      {res.nights} nights · to {res.checkOut}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{res.space}</div>
                    <div className="text-xs text-muted-foreground">{res.spaceType}</div>
                  </TableCell>
                  <TableCell className="font-medium">{res.total}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        res.status === "confirmed" ? "default" : res.status === "pending" ? "secondary" : "destructive"
                      }
                      className="gap-1"
                    >
                      {getStatusIcon(res.status)}
                      {res.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Reservation</DropdownMenuItem>
                        <DropdownMenuItem>Send Confirmation</DropdownMenuItem>
                        {res.status === "pending" && <DropdownMenuItem>Confirm Reservation</DropdownMenuItem>}
                        {res.status !== "cancelled" && (
                          <DropdownMenuItem className="text-destructive">Cancel Reservation</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
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

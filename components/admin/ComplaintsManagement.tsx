"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Plus, AlertCircle, CheckCircle, Clock, AlertTriangle, Eye } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const complaints = [
  {
    id: "CMP-001",
    guest: "David Miller",
    space: "A-15",
    category: "Noise",
    priority: "high",
    status: "open",
    subject: "Loud music from neighboring space",
    description: "The guests in A-16 have been playing loud music until 11 PM for the past two nights.",
    createdAt: "Dec 13, 2025",
    updatedAt: "Dec 14, 2025",
  },
  {
    id: "CMP-002",
    guest: "Jennifer Wilson",
    space: "B-08",
    category: "Maintenance",
    priority: "medium",
    status: "in-progress",
    subject: "Water pressure issue",
    description: "The water pressure at our hookup has been very low since yesterday morning.",
    createdAt: "Dec 12, 2025",
    updatedAt: "Dec 13, 2025",
  },
  {
    id: "CMP-003",
    guest: "Thomas Brown",
    space: "CV-05",
    category: "Cleanliness",
    priority: "low",
    status: "resolved",
    subject: "Restroom needs attention",
    description: "The restroom near section C was out of soap and paper towels this morning.",
    createdAt: "Dec 10, 2025",
    updatedAt: "Dec 10, 2025",
  },
  {
    id: "CMP-004",
    guest: "Mary Johnson",
    space: "A-03",
    category: "WiFi",
    priority: "medium",
    status: "open",
    subject: "Internet connection dropping",
    description: "WiFi keeps disconnecting every 30 minutes or so. Very frustrating when trying to work.",
    createdAt: "Dec 14, 2025",
    updatedAt: "Dec 14, 2025",
  },
]

export function ComplaintsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedComplaint, setSelectedComplaint] = useState<(typeof complaints)[0] | null>(null)

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.subject.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return matchesSearch && complaint.status === activeTab
  })

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "medium":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "low":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Complaints & Issues</h1>
          <p className="text-muted-foreground">Track and resolve guest concerns</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Log Issue
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Log New Issue</DialogTitle>
              <DialogDescription>Record a guest complaint or maintenance issue</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Guest Name</Label>
                  <Input placeholder="Enter guest name" />
                </div>
                <div className="space-y-2">
                  <Label>Space</Label>
                  <Input placeholder="e.g., A-15" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="noise">Noise</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="cleanliness">Cleanliness</SelectItem>
                      <SelectItem value="wifi">WiFi</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Subject</Label>
                <Input placeholder="Brief description of the issue" />
              </div>
              <div className="space-y-2">
                <Label>Details</Label>
                <Textarea placeholder="Provide more details about the issue..." className="min-h-[100px]" />
              </div>
              <Button className="w-full">Submit Issue</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div className="text-2xl font-bold">2</div>
            </div>
            <div className="text-sm text-muted-foreground">Open Issues</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <div className="text-2xl font-bold">1</div>
            </div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div className="text-2xl font-bold">12</div>
            </div>
            <div className="text-sm text-muted-foreground">Resolved This Month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">4.2 hrs</div>
            <div className="text-sm text-muted-foreground">Avg. Resolution Time</div>
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
                placeholder="Search by guest, ID, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Complaints Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Issue</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredComplaints.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell>
                    <div className="font-medium">{complaint.subject}</div>
                    <div className="text-xs text-muted-foreground font-mono">{complaint.id}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{complaint.guest}</div>
                    <div className="text-xs text-muted-foreground">Space {complaint.space}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{complaint.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getPriorityIcon(complaint.priority)}
                      <span className="text-sm capitalize">{complaint.priority}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        complaint.status === "open"
                          ? "destructive"
                          : complaint.status === "in-progress"
                            ? "secondary"
                            : "default"
                      }
                    >
                      {complaint.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{complaint.createdAt}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DialogTrigger asChild onClick={() => setSelectedComplaint(complaint)}>
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                          </DialogTrigger>
                          {complaint.status !== "resolved" && (
                            <>
                              <DropdownMenuItem>Mark In Progress</DropdownMenuItem>
                              <DropdownMenuItem>Mark Resolved</DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{selectedComplaint?.subject}</DialogTitle>
                          <DialogDescription>
                            {selectedComplaint?.id} · Submitted {selectedComplaint?.createdAt}
                          </DialogDescription>
                        </DialogHeader>
                        {selectedComplaint && (
                          <div className="space-y-4 pt-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Guest</p>
                                <p className="font-medium">{selectedComplaint.guest}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Space</p>
                                <p className="font-medium">{selectedComplaint.space}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Category</p>
                                <Badge variant="outline">{selectedComplaint.category}</Badge>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Priority</p>
                                <div className="flex items-center gap-2">
                                  {getPriorityIcon(selectedComplaint.priority)}
                                  <span className="capitalize">{selectedComplaint.priority}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Description</p>
                              <p className="text-sm p-3 bg-muted rounded-lg">{selectedComplaint.description}</p>
                            </div>
                            <div className="space-y-2">
                              <Label>Add Response</Label>
                              <Textarea placeholder="Add notes or resolution details..." />
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" className="flex-1 bg-transparent">
                                Mark In Progress
                              </Button>
                              <Button className="flex-1">Mark Resolved</Button>
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

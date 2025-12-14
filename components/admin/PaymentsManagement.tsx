"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Download, DollarSign, TrendingUp, CreditCard, AlertCircle } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const payments = [
  {
    id: "PAY-001",
    guest: "John & Mary Smith",
    reservation: "RES-089",
    amount: "$1,450.00",
    method: "Credit Card",
    cardLast4: "4242",
    status: "completed",
    date: "Dec 14, 2025",
    description: "Monthly stay - CV-03",
  },
  {
    id: "PAY-002",
    guest: "Robert Johnson",
    reservation: "RES-088",
    amount: "$875.00",
    method: "Credit Card",
    cardLast4: "1234",
    status: "completed",
    date: "Dec 13, 2025",
    description: "Weekly stay - A-12",
  },
  {
    id: "PAY-003",
    guest: "Patricia Anderson",
    reservation: "RES-003",
    amount: "$3,150.00",
    method: "Bank Transfer",
    cardLast4: null,
    status: "pending",
    date: "Dec 12, 2025",
    description: "Monthly stay deposit - CV-07",
  },
  {
    id: "PAY-004",
    guest: "Thomas & Nancy Martin",
    reservation: "RES-004",
    amount: "$1,575.00",
    method: "Credit Card",
    cardLast4: "5678",
    status: "completed",
    date: "Dec 10, 2025",
    description: "3-week stay - B-02",
  },
  {
    id: "PAY-005",
    guest: "Elizabeth Thompson",
    reservation: "RES-005",
    amount: "$595.00",
    method: "Credit Card",
    cardLast4: "9012",
    status: "refunded",
    date: "Dec 8, 2025",
    description: "Refund - Cancelled reservation",
  },
  {
    id: "PAY-006",
    guest: "Sarah Davis",
    reservation: "RES-087",
    amount: "$85.00",
    method: "Credit Card",
    cardLast4: "3456",
    status: "failed",
    date: "Dec 7, 2025",
    description: "Nightly stay - A-05 (card declined)",
  },
]

export function PaymentsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.reservation.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return matchesSearch && payment.status === activeTab
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Payments</h1>
          <p className="text-muted-foreground">Track revenue and payment history</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>Record Payment</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$78,420</div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">$4,725</div>
            <div className="text-xs text-muted-foreground">3 payments</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Refunded</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,190</div>
            <div className="text-xs text-muted-foreground">2 refunds</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Transaction</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245</div>
            <div className="text-xs text-muted-foreground">Per booking</div>
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
                placeholder="Search by guest, payment ID, or reservation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="refunded">Refunded</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    <div className="font-medium font-mono text-sm">{payment.id}</div>
                    <div className="text-xs text-muted-foreground">{payment.reservation}</div>
                  </TableCell>
                  <TableCell className="font-medium">{payment.guest}</TableCell>
                  <TableCell>
                    <div className="text-sm max-w-[200px] truncate">{payment.description}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{payment.method}</div>
                    {payment.cardLast4 && <div className="text-xs text-muted-foreground">**** {payment.cardLast4}</div>}
                  </TableCell>
                  <TableCell className="font-medium">{payment.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        payment.status === "completed"
                          ? "default"
                          : payment.status === "pending"
                            ? "secondary"
                            : payment.status === "refunded"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{payment.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>View Receipt</DropdownMenuItem>
                        <DropdownMenuItem>Send Receipt</DropdownMenuItem>
                        {payment.status === "completed" && (
                          <DropdownMenuItem className="text-destructive">Issue Refund</DropdownMenuItem>
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

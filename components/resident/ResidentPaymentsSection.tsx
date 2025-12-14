"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download, CheckCircle, Clock, AlertCircle } from "lucide-react"

const paymentHistory = [
  {
    id: 1,
    date: "Dec 1, 2024",
    description: "Monthly Rent - December",
    amount: 875,
    status: "paid",
    method: "Card ending 4242",
  },
  {
    id: 2,
    date: "Nov 1, 2024",
    description: "Monthly Rent - November",
    amount: 875,
    status: "paid",
    method: "Card ending 4242",
  },
  {
    id: 3,
    date: "Nov 1, 2024",
    description: "Electric Usage - October",
    amount: 48.5,
    status: "paid",
    method: "Card ending 4242",
  },
  {
    id: 4,
    date: "Oct 15, 2024",
    description: "Initial Deposit",
    amount: 200,
    status: "paid",
    method: "Card ending 4242",
  },
]

const upcomingPayments = [
  { id: 1, dueDate: "Dec 31, 2024", description: "Monthly Rent - January", amount: 875, status: "upcoming" },
  { id: 2, dueDate: "Dec 31, 2024", description: "Electric Usage - November", amount: 52.3, status: "upcoming" },
]

export function ResidentPaymentsSection() {
  const [payDialogOpen, setPayDialogOpen] = useState(false)
  const [autopayEnabled, setAutopayEnabled] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Payments</h1>
          <p className="text-muted-foreground">Manage your payments and view billing history.</p>
        </div>
        <Dialog open={payDialogOpen} onOpenChange={setPayDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <CreditCard className="h-4 w-4 mr-2" />
              Make Payment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Make a Payment</DialogTitle>
              <DialogDescription>Pay your outstanding balance.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Current Balance Due</p>
                <p className="text-2xl font-bold">$927.30</p>
              </div>
              <div className="space-y-2">
                <Label>Payment Amount</Label>
                <RadioGroup defaultValue="full">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full" id="full" />
                    <Label htmlFor="full">Full Balance - $927.30</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rent" id="rent" />
                    <Label htmlFor="rent">Rent Only - $875.00</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom">Custom Amount</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="card">Payment Method</Label>
                <Input id="card" value="Visa ending in 4242" disabled />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setPayDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setPayDialogOpen(false)}>Pay $927.30</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Balance Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$927.30</div>
            <p className="text-xs text-muted-foreground">Due by Dec 31, 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Last Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$875.00</div>
            <p className="text-xs text-muted-foreground">Dec 1, 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Year to Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,998.50</div>
            <p className="text-xs text-muted-foreground">Total paid in 2024</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>Charges due in the next billing cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{payment.description}</p>
                        <p className="text-xs text-muted-foreground">Due {payment.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">${payment.amount.toFixed(2)}</p>
                      <Badge variant="secondary" className="text-xs">
                        Upcoming
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Your past transactions</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="text-sm">{payment.date}</TableCell>
                      <TableCell className="text-sm">{payment.description}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{payment.method}</TableCell>
                      <TableCell className="text-sm text-right">${payment.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                          Paid
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg flex items-center gap-4">
                <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Visa ending in 4242</p>
                  <p className="text-xs text-muted-foreground">Expires 12/26</p>
                </div>
                <Badge variant="secondary">Default</Badge>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Autopay */}
          <Card>
            <CardHeader>
              <CardTitle>Autopay</CardTitle>
              <CardDescription>Automatically pay your balance each month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Autopay</Label>
                  <p className="text-xs text-muted-foreground">Pay on the 1st of each month</p>
                </div>
                <Switch checked={autopayEnabled} onCheckedChange={setAutopayEnabled} />
              </div>
              {autopayEnabled && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">Autopay is active</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Need Help */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <AlertCircle className="h-4 w-4 mr-2" />
                Dispute a Charge
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

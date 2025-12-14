"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export function SettingsManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and park settings</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="park">Park Info</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="Cade" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Owner" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input type="email" defaultValue="cade@hillsidepalms.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input type="tel" defaultValue="(435) 673-2809" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Password</Label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <Label>New Password</Label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <Label>Confirm New Password</Label>
                <Input type="password" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Park Info Tab */}
        <TabsContent value="park" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Park Information</CardTitle>
              <CardDescription>Manage your RV park details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Park Name</Label>
                <Input defaultValue="Hillside Palms RV Park" />
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Input defaultValue="1300 East St George Boulevard" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input defaultValue="St. George" />
                </div>
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input defaultValue="Utah" />
                </div>
                <div className="space-y-2">
                  <Label>ZIP Code</Label>
                  <Input defaultValue="84790" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input type="tel" defaultValue="(435) 673-2809" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" defaultValue="info@hillsidepalms.com" />
              </div>
              <div className="space-y-2">
                <Label>Website</Label>
                <Input defaultValue="https://hillsidepalms.com" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  defaultValue="Experience Southern Utah's premier RV park with spectacular city views, full hookups, and unmatched hospitality."
                  className="min-h-[100px]"
                />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
              <CardDescription>Set your office operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Weekday Hours</Label>
                  <Input defaultValue="9:00 AM - 5:00 PM" />
                </div>
                <div className="space-y-2">
                  <Label>Weekend Hours</Label>
                  <Input defaultValue="10:00 AM - 4:00 PM" />
                </div>
              </div>
              <Button>Save Hours</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Choose what emails you receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Reservations</Label>
                  <p className="text-sm text-muted-foreground">Receive email when a new reservation is made</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Payment Received</Label>
                  <p className="text-sm text-muted-foreground">Receive email when a payment is processed</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Guest Messages</Label>
                  <p className="text-sm text-muted-foreground">Receive email when a guest sends a message</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Complaints & Issues</Label>
                  <p className="text-sm text-muted-foreground">Receive email when a new issue is logged</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Weekly Summary</Label>
                  <p className="text-sm text-muted-foreground">Receive weekly summary of park activity</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure payment processing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Payment processing is not yet configured. Connect Stripe to start accepting payments.
                </p>
              </div>
              <Button>Connect Stripe</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing Configuration</CardTitle>
              <CardDescription>Set your nightly, weekly, and monthly rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Standard Nightly Rate</Label>
                  <Input type="number" defaultValue="65" />
                </div>
                <div className="space-y-2">
                  <Label>City View Nightly Rate</Label>
                  <Input type="number" defaultValue="85" />
                </div>
                <div className="space-y-2">
                  <Label>Standard Weekly Rate</Label>
                  <Input type="number" defaultValue="390" />
                </div>
                <div className="space-y-2">
                  <Label>City View Weekly Rate</Label>
                  <Input type="number" defaultValue="510" />
                </div>
                <div className="space-y-2">
                  <Label>Standard Monthly Rate</Label>
                  <Input type="number" defaultValue="875" />
                </div>
                <div className="space-y-2">
                  <Label>City View Monthly Rate</Label>
                  <Input type="number" defaultValue="1050" />
                </div>
              </div>
              <Button>Save Pricing</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

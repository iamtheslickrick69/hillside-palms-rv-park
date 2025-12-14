"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Upload, Eye, Shield, Receipt, FileCheck } from "lucide-react"

const documents = [
  {
    id: 1,
    name: "Rental Agreement",
    type: "Contract",
    date: "Nov 1, 2024",
    size: "245 KB",
    icon: FileText,
  },
  {
    id: 2,
    name: "Park Rules & Regulations",
    type: "Policy",
    date: "Nov 1, 2024",
    size: "128 KB",
    icon: FileCheck,
  },
  {
    id: 3,
    name: "Insurance Certificate",
    type: "Insurance",
    date: "Oct 28, 2024",
    size: "89 KB",
    icon: Shield,
  },
  {
    id: 4,
    name: "December Invoice",
    type: "Invoice",
    date: "Dec 1, 2024",
    size: "42 KB",
    icon: Receipt,
  },
  {
    id: 5,
    name: "November Invoice",
    type: "Invoice",
    date: "Nov 1, 2024",
    size: "38 KB",
    icon: Receipt,
  },
]

const requiredDocuments = [
  { name: "RV Insurance", status: "uploaded", expiry: "Dec 2025" },
  { name: "Vehicle Registration", status: "uploaded", expiry: "Mar 2025" },
  { name: "Pet Vaccination Records", status: "missing", expiry: null },
]

export function ResidentDocumentsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Documents</h1>
        <p className="text-muted-foreground">Access your agreements, invoices, and uploaded documents.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* My Documents */}
          <Card>
            <CardHeader>
              <CardTitle>My Documents</CardTitle>
              <CardDescription>Agreements, invoices, and policies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 p-3 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <doc.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground hidden sm:block">{doc.date}</p>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Required Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
              <CardDescription>Keep these up to date</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    {doc.expiry && <p className="text-xs text-muted-foreground">Expires {doc.expiry}</p>}
                  </div>
                  {doc.status === "uploaded" ? (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <FileCheck className="h-3 w-3 mr-1" />
                      Uploaded
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Missing</Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Document</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Drag and drop or click to upload</p>
                <Button variant="outline" size="sm">
                  Choose File
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

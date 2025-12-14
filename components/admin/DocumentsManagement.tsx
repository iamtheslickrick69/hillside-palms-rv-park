"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  MoreHorizontal,
  Upload,
  FileText,
  Download,
  Eye,
  Trash2,
  FolderOpen,
  FileImage,
  FilePen as FilePdf,
} from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const documents = [
  {
    id: 1,
    name: "Rental Agreement - Smith Family.pdf",
    type: "contract",
    guest: "John & Mary Smith",
    size: "245 KB",
    uploadedAt: "Dec 1, 2025",
    icon: FilePdf,
  },
  {
    id: 2,
    name: "Insurance Certificate - Johnson.pdf",
    type: "insurance",
    guest: "Robert Johnson",
    size: "1.2 MB",
    uploadedAt: "Nov 15, 2025",
    icon: FilePdf,
  },
  {
    id: 3,
    name: "Pet Vaccination Records - Davis.jpg",
    type: "pet",
    guest: "Sarah Davis",
    size: "890 KB",
    uploadedAt: "Dec 10, 2025",
    icon: FileImage,
  },
  {
    id: 4,
    name: "Rental Agreement - Williams.pdf",
    type: "contract",
    guest: "The Williams Family",
    size: "238 KB",
    uploadedAt: "Dec 12, 2025",
    icon: FilePdf,
  },
  {
    id: 5,
    name: "RV Registration - Taylor.pdf",
    type: "registration",
    guest: "Michael & Karen Taylor",
    size: "156 KB",
    uploadedAt: "Dec 10, 2025",
    icon: FilePdf,
  },
  {
    id: 6,
    name: "Monthly Invoice - Brown.pdf",
    type: "invoice",
    guest: "David & Lisa Brown",
    size: "124 KB",
    uploadedAt: "Nov 30, 2025",
    icon: FileText,
  },
]

const folders = [
  { name: "Contracts", count: 24, icon: FolderOpen },
  { name: "Insurance", count: 18, icon: FolderOpen },
  { name: "Invoices", count: 156, icon: FolderOpen },
  { name: "Pet Records", count: 12, icon: FolderOpen },
  { name: "Registration", count: 45, icon: FolderOpen },
]

export function DocumentsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.guest.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return matchesSearch && doc.type === activeTab
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Documents</h1>
          <p className="text-muted-foreground">Manage guest documents and files</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Folder Quick Access */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {folders.map((folder) => (
          <Card key={folder.name} className="cursor-pointer hover:bg-accent transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <folder.icon className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">{folder.name}</p>
                  <p className="text-sm text-muted-foreground">{folder.count} files</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents by name or guest..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="contract">Contracts</TabsTrigger>
                <TabsTrigger value="insurance">Insurance</TabsTrigger>
                <TabsTrigger value="invoice">Invoices</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Documents Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <doc.icon className="h-8 w-8 text-muted-foreground" />
                      <span className="font-medium">{doc.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{doc.guest}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {doc.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{doc.size}</TableCell>
                  <TableCell className="text-muted-foreground">{doc.uploadedAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
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

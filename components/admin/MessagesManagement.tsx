"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Send, Paperclip, Archive, Star, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

const conversations = [
  {
    id: 1,
    guest: "Sarah Davis",
    email: "sdavis@email.com",
    avatar: "SD",
    lastMessage: "Thank you for the quick response! We're excited to arrive next week.",
    time: "2 min ago",
    unread: true,
    starred: false,
    messages: [
      {
        id: 1,
        from: "guest",
        text: "Hi, I have a question about the pet policy. We have a small dog - is that okay?",
        time: "10:30 AM",
      },
      {
        id: 2,
        from: "admin",
        text: "Hello Sarah! Yes, we're pet-friendly. Dogs under 35 lbs are welcome. There's a small pet fee of $5/night. We also have a nice grassy area for walking.",
        time: "10:45 AM",
      },
      {
        id: 3,
        from: "guest",
        text: "Perfect! Our dog is only 15 lbs. Are there any other restrictions?",
        time: "11:00 AM",
      },
      {
        id: 4,
        from: "admin",
        text: "No other restrictions. Just please keep your dog on a leash in common areas and clean up after them. We look forward to welcoming you and your furry friend!",
        time: "11:15 AM",
      },
      {
        id: 5,
        from: "guest",
        text: "Thank you for the quick response! We're excited to arrive next week.",
        time: "11:20 AM",
      },
    ],
  },
  {
    id: 2,
    guest: "Michael Taylor",
    email: "mtaylor@email.com",
    avatar: "MT",
    lastMessage: "Is it possible to extend our stay by a few days?",
    time: "1 hour ago",
    unread: true,
    starred: true,
    messages: [
      {
        id: 1,
        from: "guest",
        text: "Hello, we're currently in space CV-03 and having a wonderful time. Is it possible to extend our stay by a few days?",
        time: "9:00 AM",
      },
    ],
  },
  {
    id: 3,
    guest: "Robert Johnson",
    email: "rjohnson@email.com",
    avatar: "RJ",
    lastMessage: "Thanks for fixing the WiFi issue so quickly!",
    time: "3 hours ago",
    unread: false,
    starred: false,
    messages: [
      { id: 1, from: "guest", text: "Hi, I'm having trouble connecting to the WiFi in space A-12.", time: "Yesterday" },
      {
        id: 2,
        from: "admin",
        text: "I apologize for the inconvenience. Let me check our system. Can you try reconnecting now?",
        time: "Yesterday",
      },
      { id: 3, from: "guest", text: "Thanks for fixing the WiFi issue so quickly!", time: "Yesterday" },
    ],
  },
  {
    id: 4,
    guest: "Patricia Anderson",
    email: "panderson@email.com",
    avatar: "PA",
    lastMessage: "What time is check-in on the 17th?",
    time: "Yesterday",
    unread: false,
    starred: false,
    messages: [{ id: 1, from: "guest", text: "What time is check-in on the 17th?", time: "Yesterday" }],
  },
]

export function MessagesManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Messages</h1>
        <p className="text-muted-foreground">Communicate with guests</p>
      </div>

      {/* Messages Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-220px)]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardContent className="p-0 h-full flex flex-col">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="divide-y divide-border">
                {filteredConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={cn(
                      "w-full p-4 text-left hover:bg-accent transition-colors",
                      selectedConversation.id === conv.id && "bg-accent",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium">{conv.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium truncate">{conv.guest}</span>
                          <span className="text-xs text-muted-foreground flex-shrink-0">{conv.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        {conv.unread && <div className="w-2 h-2 rounded-full bg-primary" />}
                        {conv.starred && <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Conversation View */}
        <Card className="lg:col-span-2">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Conversation Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">{selectedConversation.avatar}</span>
                </div>
                <div>
                  <h3 className="font-medium">{selectedConversation.guest}</h3>
                  <p className="text-sm text-muted-foreground">{selectedConversation.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Star className={cn("h-4 w-4", selectedConversation.starred && "fill-yellow-500 text-yellow-500")} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Archive className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex", message.from === "admin" ? "justify-end" : "justify-start")}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2",
                        message.from === "admin" ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={cn(
                          "text-xs mt-1",
                          message.from === "admin" ? "text-primary-foreground/70" : "text-muted-foreground",
                        )}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-end gap-2">
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Textarea
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
                <Button size="icon" className="flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

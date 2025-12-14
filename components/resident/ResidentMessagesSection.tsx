"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Phone, Mail } from "lucide-react"

const conversations = [
  {
    id: 1,
    subject: "Space Change Request",
    lastMessage: "We have space B-15 available starting next week if you're still interested.",
    date: "Dec 14",
    unread: true,
    messages: [
      {
        id: 1,
        from: "resident",
        text: "Hi, I was wondering if there are any spaces available closer to the pool?",
        time: "Dec 12, 10:30 AM",
      },
      { id: 2, from: "office", text: "Hi John! Let me check our availability for you.", time: "Dec 12, 11:15 AM" },
      {
        id: 3,
        from: "office",
        text: "We have space B-15 available starting next week if you're still interested.",
        time: "Dec 14, 9:00 AM",
      },
    ],
  },
  {
    id: 2,
    subject: "WiFi Connection Issue",
    lastMessage: "Great, glad it's working now! Let us know if you have any other issues.",
    date: "Dec 10",
    unread: true,
    messages: [
      { id: 1, from: "resident", text: "Having trouble connecting to the WiFi in my space.", time: "Dec 10, 2:00 PM" },
      {
        id: 2,
        from: "office",
        text: "Sorry to hear that! Try resetting your device and reconnecting with the new password: HillsidePalms2024!",
        time: "Dec 10, 2:30 PM",
      },
      { id: 3, from: "resident", text: "That worked, thank you!", time: "Dec 10, 3:00 PM" },
      {
        id: 4,
        from: "office",
        text: "Great, glad it's working now! Let us know if you have any other issues.",
        time: "Dec 10, 3:15 PM",
      },
    ],
  },
  {
    id: 3,
    subject: "Mail Package Notification",
    lastMessage: "You have a package at the office. Stop by anytime during office hours!",
    date: "Dec 8",
    unread: false,
    messages: [
      {
        id: 1,
        from: "office",
        text: "You have a package at the office. Stop by anytime during office hours!",
        time: "Dec 8, 11:00 AM",
      },
      { id: 2, from: "resident", text: "Thanks! I'll pick it up this afternoon.", time: "Dec 8, 12:30 PM" },
    ],
  },
]

export function ResidentMessagesSection() {
  const [selectedConvo, setSelectedConvo] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSend = () => {
    if (newMessage.trim()) {
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Messages</h1>
        <p className="text-muted-foreground">Contact the office and view your conversations.</p>
      </div>

      {/* Quick Contact */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Call the Office</p>
              <p className="text-sm text-muted-foreground">(435) 673-2809</p>
            </div>
            <Button variant="outline" size="sm">
              Call Now
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Email Us</p>
              <p className="text-sm text-muted-foreground">office@hillsidepalms.com</p>
            </div>
            <Button variant="outline" size="sm">
              Send Email
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Messages Interface */}
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-3 h-[600px]">
          {/* Conversation List */}
          <div className="border-r">
            <div className="p-4 border-b">
              <h3 className="font-medium">Conversations</h3>
            </div>
            <ScrollArea className="h-[calc(600px-57px)]">
              {conversations.map((convo) => (
                <button
                  key={convo.id}
                  onClick={() => setSelectedConvo(convo)}
                  className={`w-full p-4 text-left border-b hover:bg-accent transition-colors ${
                    selectedConvo.id === convo.id ? "bg-accent" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium truncate">{convo.subject}</span>
                    <span className="text-xs text-muted-foreground">{convo.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground truncate flex-1">{convo.lastMessage}</p>
                    {convo.unread && <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />}
                  </div>
                </button>
              ))}
            </ScrollArea>
          </div>

          {/* Message Thread */}
          <div className="md:col-span-2 flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-medium">{selectedConvo.subject}</h3>
            </div>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {selectedConvo.messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.from === "resident" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.from === "resident" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.from === "resident" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const quickResponses = [
  {
    question: "What are your rates?",
    answer:
      "Our rates start at $65/night for standard spaces and $85/night for premium city view spaces. Weekly rates are $390-$510 and monthly rates are $875-$1,050. We also offer seasonal discounts for longer stays!",
  },
  {
    question: "Do you allow pets?",
    answer:
      "Yes! We're pet-friendly. Dogs under 35 lbs are welcome with a small $5/night pet fee. Please keep pets on a leash in common areas and clean up after them.",
  },
  {
    question: "What amenities do you have?",
    answer:
      "We offer full hookups (50/30/20 amp, water, sewer), free WiFi, laundry facilities, clean restrooms & showers, a dog park, and spectacular city views. We're also just 45 minutes from Zion National Park!",
  },
  {
    question: "What's your check-in time?",
    answer:
      "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, depending on availability.",
  },
  {
    question: "How do I make a reservation?",
    answer:
      "You can make a reservation right here on our website by clicking 'Reserve Now', or call us at (435) 673-2809. We're happy to help you find the perfect space!",
  },
  {
    question: "Do you have storage?",
    answer:
      "Yes! We offer secure RV storage with 24/7 gated access, security cameras, and covered/uncovered options. Monthly rates start at $75. Visit our Storage page for more details.",
  },
]

interface Message {
  id: number
  from: "user" | "bot"
  text: string
  time: string
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "Hi there! Welcome to Hillside Palms RV Park. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      from: "user",
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase()
      let response =
        "I'd be happy to help! For specific questions, please call us at (435) 673-2809 or use our contact form. Is there anything else I can help with?"

      // Check for keyword matches
      if (lowerInput.includes("rate") || lowerInput.includes("price") || lowerInput.includes("cost")) {
        response = quickResponses[0].answer
      } else if (lowerInput.includes("pet") || lowerInput.includes("dog") || lowerInput.includes("cat")) {
        response = quickResponses[1].answer
      } else if (lowerInput.includes("amenities") || lowerInput.includes("hookup") || lowerInput.includes("wifi")) {
        response = quickResponses[2].answer
      } else if (
        lowerInput.includes("check-in") ||
        lowerInput.includes("check in") ||
        lowerInput.includes("checkout")
      ) {
        response = quickResponses[3].answer
      } else if (lowerInput.includes("reserv") || lowerInput.includes("book")) {
        response = quickResponses[4].answer
      } else if (lowerInput.includes("storage")) {
        response = quickResponses[5].answer
      } else if (lowerInput.includes("zion") || lowerInput.includes("national park")) {
        response =
          "We're just 45 minutes from Zion National Park! It's a perfect day trip. We also have hiking trails nearby and you can see beautiful red rock formations right from our city view spaces."
      } else if (lowerInput.includes("location") || lowerInput.includes("address") || lowerInput.includes("where")) {
        response =
          "We're located at 1300 East St George Boulevard, St. George, Utah 84790. We're conveniently located near downtown St. George with easy access to I-15."
      }

      const botMessage: Message = {
        id: messages.length + 2,
        from: "bot",
        text: response,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickQuestion = (qa: (typeof quickResponses)[0]) => {
    const userMessage: Message = {
      id: messages.length + 1,
      from: "user",
      text: qa.question,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        from: "bot",
        text: qa.answer,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-105",
          isOpen && "scale-0",
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <Card className="shadow-2xl border-border/50 overflow-hidden">
          {/* Header */}
          <CardHeader className="bg-primary text-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/hillside-palms-logo.png"
                    alt="Hillside Palms"
                    width={32}
                    height={32}
                    className="invert"
                  />
                </div>
                <div>
                  <CardTitle className="text-base">Hillside Palms</CardTitle>
                  <p className="text-xs text-primary-foreground/70">We typically reply instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Messages */}
            <ScrollArea className="h-[350px] p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex gap-2", message.from === "user" ? "justify-end" : "justify-start")}
                  >
                    {message.from === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[75%] rounded-lg px-3 py-2",
                        message.from === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={cn(
                          "text-xs mt-1",
                          message.from === "user" ? "text-primary-foreground/70" : "text-muted-foreground",
                        )}
                      >
                        {message.time}
                      </p>
                    </div>
                    {message.from === "user" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg px-3 py-2">
                      <div className="flex gap-1">
                        <span
                          className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickResponses.slice(0, 3).map((qa, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(qa)}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    >
                      {qa.question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

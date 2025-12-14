"use client"

import * as React from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare, Navigation } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    primary: "(435) 673-2809",
    secondary: "Call or text us anytime",
    action: "tel:4356732809",
    actionLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@hillsidepalms.com",
    secondary: "We respond within 24 hours",
    action: "mailto:info@hillsidepalms.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Address",
    primary: "650 East St. George Blvd",
    secondary: "St. George, UT 84770",
    action: "https://maps.google.com/?q=650+East+St+George+Blvd+St+George+UT+84770",
    actionLabel: "Get Directions",
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
]

const faqs = [
  {
    question: "What's the best way to reach you?",
    answer:
      "For immediate assistance, give us a call at (435) 673-2809. For non-urgent inquiries, email works great and we'll respond within 24 hours.",
  },
  {
    question: "Can I tour the park before booking?",
    answer:
      "We welcome visitors during office hours. Just give us a call ahead so we can ensure someone is available to show you around.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For peak season (November - March), we recommend booking 2-3 months in advance. Summer months are more flexible, but it's always good to reserve early for the best space selection.",
  },
]

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-figtree text-[48px] md:text-[56px] font-normal leading-tight mb-4">Contact Us</h1>
          <p className="font-figtree text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and we'll respond as soon as we can.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method) => (
            <div key={method.title} className="p-6 rounded-2xl border border-border bg-card text-center">
              <div className="w-14 h-14 rounded-full bg-[#156d95]/10 flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-7 h-7 text-[#156d95]" />
              </div>
              <h3 className="font-figtree text-xl font-medium mb-2">{method.title}</h3>
              <p className="font-figtree text-lg font-medium mb-1">{method.primary}</p>
              <p className="font-figtree text-sm text-muted-foreground mb-4">{method.secondary}</p>
              <a
                href={method.action}
                target={method.action.startsWith("http") ? "_blank" : undefined}
                rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-[#156d95] font-figtree font-medium hover:underline"
              >
                {method.actionLabel}
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-[#156d95]" />
              <h2 className="font-figtree text-2xl font-medium">Send Us a Message</h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-figtree text-xl font-medium mb-2">Message Sent!</h3>
                <p className="font-figtree text-muted-foreground">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                    />
                  </div>
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-figtree text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                  />
                </div>
                <div>
                  <label className="block font-figtree text-sm font-medium mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                  >
                    <option value="">Select a subject...</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="rates">Rates & Pricing</option>
                    <option value="storage">RV Storage</option>
                    <option value="amenities">Amenities Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-figtree text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#156d95] text-white px-6 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Office Hours & Map */}
          <div className="space-y-6">
            {/* Office Hours */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#156d95]" />
                <h2 className="font-figtree text-2xl font-medium">Office Hours</h2>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between font-figtree pb-3 border-b border-border last:border-0"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <p className="font-figtree text-sm text-muted-foreground mt-4">
                * After-hours arrivals can be arranged with advance notice
              </p>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.8!2d-113.5639!3d37.1041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA2JzE0LjgiTiAxMTPCsDMzJzUwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Hillside Palms RV Park Location"
              ></iframe>
              <div className="p-4 bg-card border-t border-border">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#156d95] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-figtree font-medium">650 East St. George Blvd</p>
                    <p className="font-figtree text-sm text-muted-foreground">St. George, UT 84770</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=650+East+St+George+Blvd+St+George+UT+84770"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#156d95] font-figtree text-sm font-medium hover:underline whitespace-nowrap"
                  >
                    Directions
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick FAQs */}
        <div className="mb-20">
          <h2 className="font-figtree text-2xl font-medium text-center mb-8">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-figtree text-lg font-medium mb-3">{faq.question}</h3>
                <p className="font-figtree text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-[#156d95]/5 border border-[#156d95]/20">
          <h2 className="font-figtree text-2xl font-medium mb-4">Ready to Book Your Stay?</h2>
          <p className="font-figtree text-lg text-muted-foreground mb-6">
            Skip the contact form and reserve your space directly online.
          </p>
          <Link
            href="/reserve"
            className="bg-[#156d95] text-white px-8 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/90 transition-all inline-block"
          >
            Reserve Your Space Now
          </Link>
        </div>
      </div>
    </section>
  )
}

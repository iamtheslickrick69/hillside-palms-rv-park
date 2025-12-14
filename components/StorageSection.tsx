"use client"

import * as React from "react"
import { Shield, Camera, Lock, Lightbulb, CheckCircle2, Phone, Clock, MapPin, Car } from "lucide-react"

const securityFeatures = [
  {
    icon: Camera,
    title: "24/7 Camera Surveillance",
    description: "Round-the-clock video monitoring of all storage areas",
  },
  { icon: Lock, title: "Controlled Access", description: "Secure gated entry with authorized access only" },
  { icon: Lightbulb, title: "Well-Lit Facility", description: "Fully illuminated for safety day and night" },
  { icon: Shield, title: "Fenced & Gated", description: "Perimeter fencing with secure gate entry" },
  { icon: Car, title: "Paved Storage Areas", description: "Quality paved surfaces protect your investment" },
]

const storageOptions = [
  { title: "Short-Term Storage", description: "Daily/weekly rates available for temporary storage needs" },
  { title: "Long-Term Storage", description: "Monthly rates (best value) for extended storage" },
  { title: "Covered Storage", description: "Limited availability - protects from sun and weather" },
  { title: "Uncovered Storage", description: "Multiple sizes available for all RV types" },
]

const whatsIncluded = [
  "24/7 Monitored Security",
  "Paved Storage Surface",
  "Easy In/Out Access",
  "No Long-Term Contracts Required",
  "Flexible Payment Options",
  "On-Site Management",
  "Close to I-15 (5 minutes)",
  "Accommodates Large RVs & Trailers",
]

const requirements = [
  "Current vehicle registration required",
  "Proof of insurance required",
  "Storage agreement & background check",
  "First & last month payment",
]

export function StorageSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    rvLength: "",
    duration: "",
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
          <h1 className="font-figtree text-[48px] md:text-[56px] font-normal leading-tight mb-4">
            Secure RV Storage in St. George
          </h1>
          <p className="font-figtree text-xl text-muted-foreground max-w-2xl mx-auto">
            Safe • Monitored • Convenient • Affordable
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="mb-20">
          <h2 className="font-figtree text-2xl font-medium text-center mb-8">Security & Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl border border-border bg-card text-center">
                <div className="w-14 h-14 rounded-full bg-[#156d95]/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#156d95]" />
                </div>
                <h3 className="font-figtree text-lg font-medium mb-2">{feature.title}</h3>
                <p className="font-figtree text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Storage Options */}
        <div className="mb-20">
          <h2 className="font-figtree text-2xl font-medium text-center mb-8">Storage Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageOptions.map((option) => (
              <div key={option.title} className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-figtree text-xl font-medium mb-2">{option.title}</h3>
                <p className="font-figtree text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & What's Included */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Pricing */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <h2 className="font-figtree text-2xl font-medium mb-6">Monthly Storage Rates</h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-[#156d95]/5 border border-[#156d95]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-figtree text-sm text-muted-foreground">Uncovered Storage</p>
                    <p className="font-figtree text-2xl font-semibold text-[#156d95]">$125-175/mo</p>
                  </div>
                  <p className="font-figtree text-xs text-muted-foreground">Based on RV size</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#156d95]/5 border border-[#156d95]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-figtree text-sm text-muted-foreground">Covered Storage</p>
                    <p className="font-figtree text-2xl font-semibold text-[#156d95]">$225-275/mo</p>
                  </div>
                  <p className="font-figtree text-xs text-muted-foreground">Limited availability</p>
                </div>
              </div>
              <div className="text-center py-2">
                <p className="font-figtree text-sm text-muted-foreground">10% discount for 6+ month commitments</p>
              </div>
            </div>
            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-center justify-between font-figtree text-sm">
                <span>Auto-pay options available</span>
                <CheckCircle2 className="w-5 h-5 text-[#156d95]" />
              </div>
              <div className="flex items-center justify-between font-figtree text-sm">
                <span>No long-term contracts</span>
                <CheckCircle2 className="w-5 h-5 text-[#156d95]" />
              </div>
              <div className="flex items-center justify-between font-figtree text-sm">
                <span>Flexible payment plans</span>
                <CheckCircle2 className="w-5 h-5 text-[#156d95]" />
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <h2 className="font-figtree text-2xl font-medium mb-6">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whatsIncluded.map((item) => (
                <div key={item} className="flex items-center gap-3 font-figtree">
                  <CheckCircle2 className="w-5 h-5 text-[#156d95] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <div className="p-8 rounded-2xl border border-border bg-secondary/30">
            <h2 className="font-figtree text-2xl font-medium mb-6 text-center">Storage Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {requirements.map((req, index) => (
                <div key={req} className="flex items-center gap-3 font-figtree">
                  <div className="w-8 h-8 rounded-full bg-[#156d95] flex items-center justify-center text-white font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl border border-border bg-card text-center">
            <MapPin className="w-8 h-8 text-[#156d95] mx-auto mb-3" />
            <h3 className="font-figtree text-lg font-medium mb-2">Convenient Location</h3>
            <p className="font-figtree text-muted-foreground">Easy access off 600 East, St. George</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card text-center">
            <Car className="w-8 h-8 text-[#156d95] mx-auto mb-3" />
            <h3 className="font-figtree text-lg font-medium mb-2">Close to I-15</h3>
            <p className="font-figtree text-muted-foreground">Just 5 minutes from the interstate</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card text-center">
            <Clock className="w-8 h-8 text-[#156d95] mx-auto mb-3" />
            <h3 className="font-figtree text-lg font-medium mb-2">Easy Access</h3>
            <p className="font-figtree text-muted-foreground">No difficult turns or tight spaces</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl border border-border bg-card">
            <h2 className="font-figtree text-2xl font-medium mb-2 text-center">Ready to Store Your RV?</h2>
            <p className="font-figtree text-muted-foreground text-center mb-8">
              Protect your investment with secure, affordable RV storage at Hillside Palms.
            </p>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-figtree text-xl font-medium mb-2">Inquiry Received!</h3>
                <p className="font-figtree text-muted-foreground">
                  We'll contact you within 24 hours to discuss your storage needs.
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
                    <label className="block font-figtree text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">RV Length (feet)</label>
                    <input
                      type="number"
                      value={formData.rvLength}
                      onChange={(e) => setFormData({ ...formData, rvLength: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                    />
                  </div>
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">Storage Duration</label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                    >
                      <option value="">Select duration...</option>
                      <option value="1-month">1 Month</option>
                      <option value="3-months">3 Months</option>
                      <option value="6-months">6 Months</option>
                      <option value="12-months">12 Months</option>
                      <option value="ongoing">Ongoing / Indefinite</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-figtree text-sm font-medium mb-2">Message / Questions</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95] resize-none"
                    placeholder="Any questions or special requirements..."
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#156d95] text-white px-6 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/90 transition-all"
                  >
                    Submit Inquiry
                  </button>
                  <a
                    href="tel:4356732809"
                    className="flex-1 flex items-center justify-center gap-2 border border-[#156d95] text-[#156d95] px-6 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/10 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    (435) 673-2809
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

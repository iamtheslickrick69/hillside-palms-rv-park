"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Phone, Gift, Star, Shield, Users } from "lucide-react"
import Link from "next/link"

type PlanLevel = "nightly" | "weekly" | "monthly" | "seasonal"

interface PricingFeature {
  name: string
  included: PlanLevel | "all"
}

interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    standard: number | string
    premium: number | string
  }
  description: string
  popular?: boolean
}

const features: PricingFeature[] = [
  { name: "Full RV Hookups (Water, Sewer, Electric)", included: "all" },
  { name: "Free City Water & Sewer", included: "all" },
  { name: "Free Garbage Service", included: "all" },
  { name: "Complimentary WiFi (Upper Level)", included: "all" },
  { name: "Paved Roads & Concrete Pads", included: "all" },
  { name: "24/7 Camera Security", included: "all" },
  { name: "On-Site Management", included: "all" },
  { name: "Pet-Friendly Environment", included: "all" },
  { name: "Weekly rate savings ($35 off)", included: "weekly" },
  { name: "Best value per-night cost", included: "monthly" },
  { name: "Snowbird-friendly terms", included: "seasonal" },
  { name: "Returning guest discounts", included: "seasonal" },
  { name: "Flexible arrival/departure dates", included: "seasonal" },
]

const plans: PricingPlan[] = [
  {
    name: "Nightly",
    price: { standard: 55, premium: 65 },
    level: "nightly",
    description: "Perfect for short visits and weekend getaways",
  },
  {
    name: "Weekly",
    price: { standard: 350, premium: 420 },
    level: "weekly",
    popular: true,
    description: "Save $35 compared to nightly rates",
  },
  {
    name: "Monthly",
    price: { standard: 1200, premium: 1400 },
    level: "monthly",
    description: "Best value for extended stays",
  },
  {
    name: "Seasonal",
    price: { standard: "From $1,080/mo", premium: "From $1,260/mo" },
    level: "seasonal",
    description: "3-6 month snowbird packages (10% discount)",
  },
]

const additionalFees = [
  { name: "Pet Fee", price: "$50/month", note: "per dog (under 20 lbs, limit 1)" },
  { name: "Guest Fee", price: "$50/month", note: "per person (stays over 7 days, max 27 days with approval)" },
  { name: "Electricity", price: "Metered", note: "Billed monthly based on usage" },
  { name: "Optional Yard Care", price: "$50/month", note: "for large lots" },
]

const specialOffers = [
  { icon: Star, title: "Returning Guest Discount", description: "10% off monthly rates for returning guests" },
  { icon: Users, title: "Senior Discount", description: "Ask about our special 55+ rates" },
  { icon: Shield, title: "Military Discount", description: "Thank you for your service" },
  { icon: Gift, title: "Extended Stay Bonus", description: "Stay 6+ months, get 1 month free" },
]

function shouldShowCheck(included: PricingFeature["included"], level: PlanLevel): boolean {
  if (included === "all") return true
  const hierarchy: PlanLevel[] = ["nightly", "weekly", "monthly", "seasonal"]
  const featureIndex = hierarchy.indexOf(included)
  const planIndex = hierarchy.indexOf(level)
  return planIndex >= featureIndex
}

export function RatesPricingSection() {
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>("weekly")

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-figtree text-[48px] md:text-[56px] font-normal leading-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="font-figtree text-xl text-muted-foreground max-w-2xl mx-auto">
            No Hidden Fees • Flexible Terms • Best Value in St. George
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.level)}
              className={cn(
                "relative p-6 rounded-2xl text-left transition-all border-2",
                selectedPlan === plan.level
                  ? "border-[#156d95] bg-[#156d95]/5"
                  : "border-border hover:border-[#156d95]/50",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#156d95] text-white px-4 py-1 rounded-full text-sm font-figtree">
                  Best Value
                </span>
              )}
              <div className="mb-4">
                <h3 className="font-figtree text-2xl font-medium mb-1">{plan.name}</h3>
                <p className="font-figtree text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-figtree text-sm text-muted-foreground">Standard:</span>
                  <span className="font-figtree text-xl font-medium">
                    {typeof plan.price.standard === "number" ? `$${plan.price.standard}` : plan.price.standard}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-figtree text-sm text-muted-foreground">City View:</span>
                  <span className="font-figtree text-xl font-medium text-[#156d95]">
                    {typeof plan.price.premium === "number" ? `$${plan.price.premium}` : plan.price.premium}
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  "w-full py-2 px-4 rounded-full font-figtree text-base transition-all text-center",
                  selectedPlan === plan.level ? "bg-[#156d95] text-white" : "bg-secondary text-foreground",
                )}
              >
                {selectedPlan === plan.level ? "Selected" : "Select"}
              </div>
            </button>
          ))}
        </div>

        {/* Features Table */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card mb-16">
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Table Header */}
              <div className="flex items-center p-6 bg-secondary border-b border-border">
                <div className="flex-1">
                  <h3 className="font-figtree text-xl font-medium">What's Included</h3>
                </div>
                <div className="flex items-center gap-6">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-20 text-center font-figtree text-base font-medium">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-6 transition-colors",
                    index % 2 === 0 ? "bg-background" : "bg-secondary/30",
                  )}
                >
                  <div className="flex-1">
                    <span className="font-figtree text-base">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    {plans.map((plan) => (
                      <div key={plan.level} className="w-20 flex justify-center">
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <div className="w-6 h-6 rounded-full bg-[#156d95] flex items-center justify-center">
                            <CheckIcon className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Fees */}
        <div className="mb-16">
          <h2 className="font-figtree text-2xl font-medium mb-6 text-center">Additional Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFees.map((fee) => (
              <div key={fee.name} className="p-4 rounded-xl border border-border bg-card">
                <div className="font-figtree text-lg font-medium">{fee.name}</div>
                <div className="font-figtree text-xl text-[#156d95] font-medium">{fee.price}</div>
                <div className="font-figtree text-sm text-muted-foreground">{fee.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-16">
          <h2 className="font-figtree text-2xl font-medium mb-6 text-center">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialOffers.map((offer) => (
              <div key={offer.title} className="p-6 rounded-xl border border-border bg-card text-center">
                <div className="w-12 h-12 rounded-full bg-[#156d95]/10 flex items-center justify-center mx-auto mb-4">
                  <offer.icon className="w-6 h-6 text-[#156d95]" />
                </div>
                <div className="font-figtree text-lg font-medium mb-1">{offer.title}</div>
                <div className="font-figtree text-sm text-muted-foreground">{offer.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Cancellation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-figtree text-xl font-medium mb-4">Payment Options</h3>
            <ul className="space-y-2 font-figtree text-muted-foreground">
              <li>• Credit/Debit Cards Accepted</li>
              <li>• First & Last Month Required (Long-Term)</li>
              <li>• Auto-Pay Available</li>
              <li>• Monthly Billing for Utilities</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-figtree text-xl font-medium mb-4">Cancellation Policy</h3>
            <div className="space-y-3 font-figtree text-muted-foreground">
              <div>
                <div className="font-medium text-foreground">Nightly/Weekly Reservations:</div>
                <p>Cancel 48 hours before arrival for full refund. Late cancellations forfeit one night's rent.</p>
              </div>
              <div>
                <div className="font-medium text-foreground">Monthly/Long-Term:</div>
                <p>30-day written notice required. Prorated refunds not available.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-figtree text-lg text-muted-foreground mb-6">
            Ready to book? Call us or submit a reservation request online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reserve"
              className="bg-[#156d95] text-white px-8 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/90 transition-all inline-flex items-center gap-2"
            >
              Reserve Now
            </Link>
            <a
              href="tel:4356732809"
              className="border border-[#156d95] text-[#156d95] px-8 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/10 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (435) 673-2809
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

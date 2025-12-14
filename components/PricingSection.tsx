"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

type PlanLevel = "nightly" | "weekly" | "monthly"

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
  { name: "Snowbird-friendly terms", included: "monthly" },
  { name: "Returning guest discounts", included: "monthly" },
]

const plans: PricingPlan[] = [
  {
    name: "Nightly",
    price: { standard: 55, premium: 65 },
    level: "nightly",
  },
  {
    name: "Weekly",
    price: { standard: 350, premium: 420 },
    level: "weekly",
    popular: true,
  },
  {
    name: "Monthly",
    price: { standard: "Call", premium: "Call" },
    level: "monthly",
  },
]

function shouldShowCheck(included: PricingFeature["included"], level: PlanLevel): boolean {
  if (included === "all") return true
  if (included === "monthly" && level === "monthly") return true
  if (included === "weekly" && (level === "weekly" || level === "monthly")) return true
  if (included === "nightly") return true
  return false
}

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>("weekly")

  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-figtree text-[40px] font-normal leading-tight mb-4">Simple, Transparent Pricing</h2>
          <p className="font-figtree text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. Flexible terms. The best value RV park in St. George, Utah.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.level)}
              className={cn(
                "relative p-8 rounded-2xl text-left transition-all border-2",
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
              <div className="mb-6">
                <h3 className="font-figtree text-2xl font-medium mb-2">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="font-figtree text-sm text-muted-foreground">Standard:</span>
                    <span className="font-figtree text-2xl font-medium">
                      {typeof plan.price.standard === "number" ? `$${plan.price.standard}` : plan.price.standard}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-figtree text-sm text-muted-foreground">City View:</span>
                    <span className="font-figtree text-2xl font-medium text-[#156d95]">
                      {typeof plan.price.premium === "number" ? `$${plan.price.premium}` : plan.price.premium}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  "w-full py-3 px-6 rounded-full font-figtree text-lg transition-all text-center",
                  selectedPlan === plan.level ? "bg-[#156d95] text-white" : "bg-secondary text-foreground",
                )}
              >
                {selectedPlan === plan.level ? "Selected" : "Select Plan"}
              </div>
            </button>
          ))}
        </div>

        {/* Features Table */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              {/* Table Header */}
              <div className="flex items-center p-6 bg-secondary border-b border-border">
                <div className="flex-1">
                  <h3 className="font-figtree text-xl font-medium">What's Included</h3>
                </div>
                <div className="flex items-center gap-8">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-24 text-center font-figtree text-lg font-medium">
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
                    feature.included === selectedPlan && "bg-[#156d95]/5",
                  )}
                >
                  <div className="flex-1">
                    <span className="font-figtree text-lg">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    {plans.map((plan) => (
                      <div key={plan.level} className="w-24 flex justify-center">
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

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="font-figtree text-muted-foreground mb-4">
            Pet Fee: $50/month • Guest Fee: $50/month • Electricity billed based on usage
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="bg-[#156d95] text-white px-[18px] py-[15px] rounded-full font-figtree text-lg hover:rounded-2xl transition-all inline-block"
          >
            Reserve Your Space Today
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import {
  Calendar,
  Users,
  Coffee,
  Utensils,
  Music,
  Heart,
  Sun,
  Snowflake,
  Leaf,
  Flower2,
  Dumbbell,
  BookOpen,
  Palette,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

type Season = "winter" | "spring" | "summer" | "fall"

interface Event {
  title: string
  description: string
  frequency: string
  icon: React.ComponentType<{ className?: string }>
}

interface SeasonEvents {
  name: string
  icon: React.ComponentType<{ className?: string }>
  months: string
  events: Event[]
}

const seasonalEvents: Record<Season, SeasonEvents> = {
  winter: {
    name: "Winter",
    icon: Snowflake,
    months: "November - February",
    events: [
      {
        title: "Welcome Back Snowbirds BBQ",
        description: "Annual kickoff celebration for returning guests",
        frequency: "November",
        icon: Utensils,
      },
      {
        title: "Holiday Potluck Dinner",
        description: "Community holiday celebration with dishes from around the country",
        frequency: "December",
        icon: Heart,
      },
      {
        title: "New Year's Eve Party",
        description: "Ring in the new year with friends old and new",
        frequency: "December 31",
        icon: Music,
      },
      {
        title: "Weekly Coffee Socials",
        description: "Morning coffee and conversation at the pavilion",
        frequency: "Every Wednesday",
        icon: Coffee,
      },
      {
        title: "Super Bowl Party",
        description: "Big screen viewing with snacks and friendly competition",
        frequency: "February",
        icon: Users,
      },
    ],
  },
  spring: {
    name: "Spring",
    icon: Flower2,
    months: "March - May",
    events: [
      {
        title: "Easter Brunch",
        description: "Community brunch celebration",
        frequency: "Easter Sunday",
        icon: Utensils,
      },
      {
        title: "Spring Cleaning Day",
        description: "Community beautification and garden prep",
        frequency: "March",
        icon: Leaf,
      },
      {
        title: "Cinco de Mayo Fiesta",
        description: "Festive celebration with Mexican cuisine",
        frequency: "May 5",
        icon: Music,
      },
      {
        title: "Mother's Day Brunch",
        description: "Special brunch honoring the moms in our community",
        frequency: "May",
        icon: Heart,
      },
      {
        title: "Weekly Game Nights",
        description: "Cards, board games, and friendly competition",
        frequency: "Every Friday",
        icon: Users,
      },
    ],
  },
  summer: {
    name: "Summer",
    icon: Sun,
    months: "June - August",
    events: [
      {
        title: "Fourth of July BBQ",
        description: "Patriotic celebration with grilling and fireworks viewing",
        frequency: "July 4",
        icon: Utensils,
      },
      {
        title: "Ice Cream Socials",
        description: "Beat the heat with cold treats and good company",
        frequency: "Weekly",
        icon: Coffee,
      },
      {
        title: "Summer Movie Nights",
        description: "Outdoor movie screenings under the stars",
        frequency: "Monthly",
        icon: Music,
      },
      { title: "Labor Day Cookout", description: "End of summer celebration", frequency: "September", icon: Utensils },
    ],
  },
  fall: {
    name: "Fall",
    icon: Leaf,
    months: "September - October",
    events: [
      {
        title: "Fall Festival",
        description: "Celebrate the changing seasons with autumn activities",
        frequency: "October",
        icon: Leaf,
      },
      { title: "Halloween Party", description: "Costume contest and spooky fun", frequency: "October 31", icon: Music },
      {
        title: "Thanksgiving Potluck",
        description: "Community feast with all the trimmings",
        frequency: "November",
        icon: Utensils,
      },
      {
        title: "Welcome Snowbirds Mixer",
        description: "Meet and greet for the winter season",
        frequency: "Late October",
        icon: Users,
      },
    ],
  },
}

const regularActivities = [
  { title: "Morning Coffee Social", day: "Wednesday", time: "8:00 AM", icon: Coffee },
  { title: "Game Night", day: "Friday", time: "6:00 PM", icon: Users },
  { title: "Potluck Dinner", day: "First Saturday", time: "5:00 PM", icon: Utensils },
  { title: "Book Club", day: "Second Tuesday", time: "2:00 PM", icon: BookOpen },
  { title: "Craft Circle", day: "Thursday", time: "2:00 PM", icon: Palette },
  { title: "Morning Walks", day: "Daily", time: "7:00 AM", icon: Dumbbell },
]

const snowbirdBenefits = [
  "Extended stay discounts (3-6 months)",
  "Returning guest loyalty discounts",
  "Flexible arrival and departure dates",
  "First & last month payment plans",
  "Reserved space for returning snowbirds",
  "Community of like-minded travelers",
  "Mild winter climate (avg. 55°F)",
  "Close to medical facilities",
]

const nearbyAttractions = [
  { name: "Zion National Park", distance: "45 minutes" },
  { name: "Snow Canyon State Park", distance: "20 minutes" },
  { name: "Downtown St. George", distance: "5 minutes" },
  { name: "Tuacahn Amphitheatre", distance: "25 minutes" },
  { name: "Red Cliffs Desert Reserve", distance: "10 minutes" },
  { name: "Golf Courses (20+)", distance: "Within 15 minutes" },
]

const healthAmenities = [
  "Dixie Regional Medical Center - 10 min",
  "Multiple pharmacies within 5 min",
  "Urgent care facilities nearby",
  "Walking paths on-site",
  "Quiet, peaceful environment",
  "On-site management for assistance",
]

export function SeniorsAndEventsSection() {
  const [selectedSeason, setSelectedSeason] = React.useState<Season>("winter")

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-figtree text-sm uppercase tracking-wider text-[#156d95] mb-4">
            55+ Community & Year-Round Events
          </span>
          <h1 className="font-figtree text-[48px] md:text-[56px] font-normal leading-tight mb-4">
            Senior Living & Community Events
          </h1>
          <p className="font-figtree text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant 55+ community for snowbird living, social activities, and year-round events
          </p>
        </div>

        {/* Why Seniors Choose Us */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-figtree text-3xl font-medium mb-6">Why Snowbirds Choose Hillside Palms</h2>
              <p className="font-figtree text-lg text-muted-foreground mb-6">
                For over 30 years, Hillside Palms has been a favorite winter destination for snowbirds seeking warm
                weather, friendly community, and easy access to Southern Utah's natural wonders.
              </p>
              <p className="font-figtree text-lg text-muted-foreground mb-6">
                Our park offers the perfect blend of peaceful relaxation and active social engagement, with organized
                activities, comfortable amenities, and a welcoming community atmosphere.
              </p>
              <div className="flex items-center gap-4">
                <Sun className="w-12 h-12 text-[#156d95]" />
                <div>
                  <p className="font-figtree text-2xl font-medium">300+ Days of Sunshine</p>
                  <p className="font-figtree text-muted-foreground">Average winter temp: 55°F</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-card">
              <h3 className="font-figtree text-xl font-medium mb-6">Snowbird Benefits</h3>
              <div className="space-y-3">
                {snowbirdBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 font-figtree">
                    <CheckCircle2 className="w-5 h-5 text-[#156d95] flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regular Weekly Activities */}
        <div className="mb-20">
          <h2 className="font-figtree text-3xl font-medium text-center mb-4">Daily & Weekly Activities</h2>
          <p className="font-figtree text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Stay active and social with our regularly scheduled activities designed for all interests
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularActivities.map((activity) => (
              <div key={activity.title} className="p-6 rounded-2xl border border-border bg-card text-center">
                <div className="w-12 h-12 rounded-full bg-[#156d95]/10 flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="w-6 h-6 text-[#156d95]" />
                </div>
                <h3 className="font-figtree text-lg font-medium mb-1">{activity.title}</h3>
                <p className="font-figtree text-[#156d95] font-medium">{activity.day}</p>
                <p className="font-figtree text-sm text-muted-foreground">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Season Selector */}
        <div className="mb-12">
          <h2 className="font-figtree text-3xl font-medium text-center mb-4">Seasonal Events Calendar</h2>
          <p className="font-figtree text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Celebrate the seasons with our special events and holiday celebrations throughout the year
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {(Object.keys(seasonalEvents) as Season[]).map((season) => {
              const SeasonIcon = seasonalEvents[season].icon
              return (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full font-figtree text-lg transition-all",
                    selectedSeason === season
                      ? "bg-[#156d95] text-white"
                      : "border border-border hover:border-[#156d95]/50",
                  )}
                >
                  <SeasonIcon className="w-5 h-5" />
                  {seasonalEvents[season].name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Season Events */}
        <div className="mb-20">
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(seasonalEvents[selectedSeason].icon, { className: "w-8 h-8 text-[#156d95]" })}
              <div>
                <h3 className="font-figtree text-2xl font-medium">{seasonalEvents[selectedSeason].name} Events</h3>
                <p className="font-figtree text-muted-foreground">{seasonalEvents[selectedSeason].months}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {seasonalEvents[selectedSeason].events.map((event) => (
                <div key={event.title} className="p-4 rounded-xl bg-secondary/50 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#156d95]/10 flex items-center justify-center flex-shrink-0">
                    <event.icon className="w-5 h-5 text-[#156d95]" />
                  </div>
                  <div>
                    <h4 className="font-figtree font-medium">{event.title}</h4>
                    <p className="font-figtree text-sm text-muted-foreground mb-1">{event.description}</p>
                    <p className="font-figtree text-sm text-[#156d95]">{event.frequency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nearby Attractions & Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Nearby Attractions */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-[#156d95]" />
              <h3 className="font-figtree text-xl font-medium">Nearby Attractions</h3>
            </div>
            <div className="space-y-4">
              {nearbyAttractions.map((attraction) => (
                <div
                  key={attraction.name}
                  className="flex items-center justify-between font-figtree pb-3 border-b border-border last:border-0"
                >
                  <span>{attraction.name}</span>
                  <span className="text-muted-foreground">{attraction.distance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health & Safety */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-[#156d95]" />
              <h3 className="font-figtree text-xl font-medium">Health & Convenience</h3>
            </div>
            <div className="space-y-3">
              {healthAmenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 font-figtree">
                  <CheckCircle2 className="w-5 h-5 text-[#156d95] flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-20">
          <div className="p-8 rounded-2xl bg-[#156d95]/5 border border-[#156d95]/20">
            <p className="font-figtree text-xl italic text-center mb-6">
              "We've been coming to Hillside Palms for 8 winters now. The community here feels like family, and the mild
              weather is perfect for our morning walks and afternoon golf. We wouldn't spend our winters anywhere else!"
            </p>
            <p className="font-figtree text-center">
              <span className="font-medium">— Bob & Linda T.</span>
              <span className="text-muted-foreground"> | Returning snowbirds from Minnesota</span>
            </p>
          </div>
        </div>

        {/* Community Spirit */}
        <div className="mb-20">
          <div className="p-8 rounded-2xl bg-[#156d95]/5 border border-[#156d95]/20 text-center">
            <Calendar className="w-12 h-12 text-[#156d95] mx-auto mb-4" />
            <h2 className="font-figtree text-2xl font-medium mb-4">Join Our Community</h2>
            <p className="font-figtree text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              At Hillside Palms, we believe in creating more than just a place to park - we create a community. Our
              events bring together guests from across the country to share experiences, make friends, and create
              lasting memories.
            </p>
            <p className="font-figtree text-muted-foreground">
              Event schedule subject to change. Ask at the office for the current month's calendar!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-figtree text-2xl font-medium mb-4">Plan Your Snowbird Season</h2>
          <p className="font-figtree text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Peak season (November - March) fills up quickly. Contact us early to reserve your space and secure the best
            rates for extended stays.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reserve"
              className="bg-[#156d95] text-white px-8 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/90 transition-all inline-flex items-center gap-2"
            >
              Reserve Your Space
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

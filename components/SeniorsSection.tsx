"use client"
import {
  Heart,
  Users,
  Coffee,
  Dumbbell,
  BookOpen,
  Palette,
  Music,
  Sun,
  CheckCircle2,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react"
import Link from "next/link"

const seniorActivities = [
  {
    icon: Coffee,
    title: "Morning Coffee Social",
    description: "Start your day with friendly conversation and fresh coffee at our community pavilion",
    schedule: "Every Wednesday, 8:00 AM",
  },
  {
    icon: Users,
    title: "Game Nights",
    description: "Cards, dominos, board games, and more. Bring your favorites or learn something new!",
    schedule: "Every Friday, 6:00 PM",
  },
  {
    icon: Dumbbell,
    title: "Morning Walks",
    description: "Join fellow guests for a leisurely morning walk around the park",
    schedule: "Daily, 7:00 AM",
  },
  {
    icon: BookOpen,
    title: "Book Club",
    description: "Monthly book discussions with fellow readers",
    schedule: "2nd Tuesday, 2:00 PM",
  },
  {
    icon: Palette,
    title: "Craft Circle",
    description: "Knitting, crocheting, and crafting together",
    schedule: "Thursdays, 2:00 PM",
  },
  {
    icon: Music,
    title: "Music & Entertainment",
    description: "Live music, karaoke nights, and entertainment events",
    schedule: "Monthly events",
  },
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

export function SeniorsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-figtree text-sm uppercase tracking-wider text-[#156d95] mb-4">
            55+ Community
          </span>
          <h1 className="font-figtree text-[48px] md:text-[56px] font-normal leading-tight mb-4">
            Senior Activities & Snowbird Living
          </h1>
          <p className="font-figtree text-xl text-muted-foreground max-w-2xl mx-auto">
            "Where the Summer Sun Spends the Winter" - Join our vibrant 55+ community
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

        {/* Activities Grid */}
        <div className="mb-20">
          <h2 className="font-figtree text-2xl font-medium text-center mb-8">Senior Activities & Social Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seniorActivities.map((activity) => (
              <div key={activity.title} className="p-6 rounded-2xl border border-border bg-card">
                <div className="w-12 h-12 rounded-full bg-[#156d95]/10 flex items-center justify-center mb-4">
                  <activity.icon className="w-6 h-6 text-[#156d95]" />
                </div>
                <h3 className="font-figtree text-xl font-medium mb-2">{activity.title}</h3>
                <p className="font-figtree text-muted-foreground mb-3">{activity.description}</p>
                <p className="font-figtree text-sm text-[#156d95] font-medium">{activity.schedule}</p>
              </div>
            ))}
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

        {/* CTA Section */}
        <div className="text-center">
          <Calendar className="w-12 h-12 text-[#156d95] mx-auto mb-4" />
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
              Reserve for Winter Season
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

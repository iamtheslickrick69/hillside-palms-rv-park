"use client"
import { CheckCircle2, Phone, Star, Eye, Mountain, Sunrise, Moon, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const premiumFeatures = [
  {
    icon: Eye,
    title: "Panoramic City Views",
    description: "Unobstructed vistas of St. George and the surrounding red rock formations",
  },
  {
    icon: Mountain,
    title: "Elevated Location",
    description: "Upper level spaces with the best views in the park",
  },
  {
    icon: Sunrise,
    title: "Stunning Sunrises",
    description: "Wake up to breathtaking desert sunrises over the red cliffs",
  },
  {
    icon: Moon,
    title: "City Lights at Night",
    description: "Enjoy the twinkling lights of St. George after sunset",
  },
  {
    icon: Camera,
    title: "Photo-Worthy Scenery",
    description: "Every day feels like a vacation with these views",
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "The best spots in the park, reserved for those who appreciate the view",
  },
]

const whatMakesPremium = [
  "Larger lot sizes for maximum comfort",
  "Best WiFi coverage (upper level)",
  "Quieter, more private locations",
  "Easy access to main facilities",
  "Concrete pads with quality finishes",
  "Dedicated 50/30 amp service",
]

const testimonials = [
  {
    quote:
      "The city view space was absolutely worth the upgrade. Watching the sunset over St. George from our RV was magical.",
    author: "Patricia & Tom",
    stay: "3-month winter stay",
  },
  {
    quote:
      "We specifically booked a city view space and it exceeded expectations. The views are stunning day and night!",
    author: "Robert M.",
    stay: "Snowbird guest",
  },
]

export function CityViewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-figtree text-sm uppercase tracking-wider text-[#156d95] mb-4">
            Premium Spaces
          </span>
          <h1 className="font-figtree text-[48px] md:text-[56px] font-normal leading-tight mb-4">City View Spaces</h1>
          <p className="font-figtree text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the best of Hillside Palms with our elevated, premium city view locations
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 rounded-2xl overflow-hidden">
          <Image
            src="/images/hillside-palms-hero.jpg"
            alt="City View from Hillside Palms RV Park"
            width={1200}
            height={500}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Premium Features Grid */}
        <div className="mb-20">
          <h2 className="font-figtree text-2xl font-medium text-center mb-8">Why Choose a City View Space?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl border border-border bg-card">
                <div className="w-12 h-12 rounded-full bg-[#156d95]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#156d95]" />
                </div>
                <h3 className="font-figtree text-xl font-medium mb-2">{feature.title}</h3>
                <p className="font-figtree text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standard */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <h3 className="font-figtree text-2xl font-medium mb-2">Standard Spaces</h3>
              <p className="font-figtree text-muted-foreground mb-6">Great value RV camping</p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-figtree">
                  <span>Nightly</span>
                  <span className="font-medium">$55</span>
                </div>
                <div className="flex justify-between font-figtree">
                  <span>Weekly</span>
                  <span className="font-medium">$350</span>
                </div>
                <div className="flex justify-between font-figtree">
                  <span>Monthly</span>
                  <span className="font-medium">Call for rates</span>
                </div>
              </div>
              <Link
                href="/reserve"
                className="block w-full text-center border border-[#156d95] text-[#156d95] px-6 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/10 transition-all"
              >
                Reserve Standard
              </Link>
            </div>

            {/* City View */}
            <div className="p-8 rounded-2xl border-2 border-[#156d95] bg-[#156d95]/5 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#156d95] text-white px-4 py-1 rounded-full text-sm font-figtree">
                Premium
              </span>
              <h3 className="font-figtree text-2xl font-medium mb-2">City View Spaces</h3>
              <p className="font-figtree text-muted-foreground mb-6">Elevated premium experience</p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-figtree">
                  <span>Nightly</span>
                  <span className="font-medium text-[#156d95]">$65</span>
                </div>
                <div className="flex justify-between font-figtree">
                  <span>Weekly</span>
                  <span className="font-medium text-[#156d95]">$420</span>
                </div>
                <div className="flex justify-between font-figtree">
                  <span>Monthly</span>
                  <span className="font-medium text-[#156d95]">Call for rates</span>
                </div>
              </div>
              <Link
                href="/reserve"
                className="block w-full text-center bg-[#156d95] text-white px-6 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/90 transition-all"
              >
                Reserve City View
              </Link>
            </div>
          </div>
        </div>

        {/* What Makes It Premium */}
        <div className="mb-20">
          <div className="p-8 rounded-2xl border border-border bg-secondary/30">
            <h2 className="font-figtree text-2xl font-medium mb-6 text-center">What Makes City View Spaces Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatMakesPremium.map((item) => (
                <div key={item} className="flex items-center gap-3 font-figtree">
                  <CheckCircle2 className="w-5 h-5 text-[#156d95] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="font-figtree text-2xl font-medium text-center mb-8">What Guests Say About City View</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#156d95] text-[#156d95]" />
                  ))}
                </div>
                <p className="font-figtree text-lg italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-figtree font-medium">{testimonial.author}</p>
                  <p className="font-figtree text-sm text-muted-foreground">{testimonial.stay}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-figtree text-lg text-muted-foreground mb-6">
            City View spaces are in high demand, especially during peak season. Reserve early to secure your spot!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reserve"
              className="bg-[#156d95] text-white px-8 py-4 rounded-full font-figtree text-lg hover:bg-[#156d95]/90 transition-all inline-flex items-center gap-2"
            >
              Reserve a City View Space
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

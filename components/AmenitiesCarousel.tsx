"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Zap, Droplets, Wifi, Car, Shield, TreePine, Mountain, Sun } from "lucide-react"

type Amenity = {
  name: string
  icon: React.ReactNode
}

const amenitiesRow1: Amenity[] = [
  { name: "50 & 30 Amp Service", icon: <Zap className="w-6 h-6 text-[#156d95]" /> },
  { name: "Full Hookups", icon: <Droplets className="w-6 h-6 text-[#156d95]" /> },
  { name: "Free WiFi", icon: <Wifi className="w-6 h-6 text-[#156d95]" /> },
  { name: "Paved Roads", icon: <Car className="w-6 h-6 text-[#156d95]" /> },
  { name: "24/7 Security", icon: <Shield className="w-6 h-6 text-[#156d95]" /> },
  { name: "Pet Friendly", icon: <TreePine className="w-6 h-6 text-[#156d95]" /> },
  { name: "City Views", icon: <Mountain className="w-6 h-6 text-[#156d95]" /> },
  { name: "Concrete Pads", icon: <Sun className="w-6 h-6 text-[#156d95]" /> },
]

const amenitiesRow2: Amenity[] = [
  { name: "RV Storage", icon: <Car className="w-6 h-6 text-[#156d95]" /> },
  { name: "Free Water & Sewer", icon: <Droplets className="w-6 h-6 text-[#156d95]" /> },
  { name: "Free Garbage", icon: <TreePine className="w-6 h-6 text-[#156d95]" /> },
  { name: "Tiny Homes Welcome", icon: <Sun className="w-6 h-6 text-[#156d95]" /> },
  { name: "Grass Between Sites", icon: <TreePine className="w-6 h-6 text-[#156d95]" /> },
  { name: "Near Hiking Trails", icon: <Mountain className="w-6 h-6 text-[#156d95]" /> },
  { name: "Monthly Rates", icon: <Zap className="w-6 h-6 text-[#156d95]" /> },
  { name: "Snowbird Friendly", icon: <Sun className="w-6 h-6 text-[#156d95]" /> },
]

// @component: AmenitiesCarousel
export const AmenitiesCarousel = () => {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let topAnimationId: number
    let bottomAnimationId: number
    let topPosition = 0
    let bottomPosition = 0

    const animateTopRow = () => {
      if (topRowRef.current) {
        topPosition -= 0.5
        if (Math.abs(topPosition) >= topRowRef.current.scrollWidth / 2) {
          topPosition = 0
        }
        topRowRef.current.style.transform = `translateX(${topPosition}px)`
      }
      topAnimationId = requestAnimationFrame(animateTopRow)
    }

    const animateBottomRow = () => {
      if (bottomRowRef.current) {
        bottomPosition -= 0.65
        if (Math.abs(bottomPosition) >= bottomRowRef.current.scrollWidth / 2) {
          bottomPosition = 0
        }
        bottomRowRef.current.style.transform = `translateX(${bottomPosition}px)`
      }
      bottomAnimationId = requestAnimationFrame(animateBottomRow)
    }

    topAnimationId = requestAnimationFrame(animateTopRow)
    bottomAnimationId = requestAnimationFrame(animateBottomRow)

    return () => {
      cancelAnimationFrame(topAnimationId)
      cancelAnimationFrame(bottomAnimationId)
    }
  }, [])

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#222222] text-center tracking-tight mb-0"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              Everything You Need for a Perfect Stay
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] text-center max-w-[600px] mt-2"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Full hookups, premium amenities, and stunning views — all included at Hillside Palms RV Park.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="flex gap-3 mt-6"
          >
            <a
              href="#pricing"
              className="inline-block px-5 py-2.5 rounded-full bg-white text-[#222222] text-[15px] font-medium leading-6 text-center whitespace-nowrap transition-all duration-75 ease-out w-[182px] cursor-pointer hover:shadow-lg"
              style={{
                boxShadow:
                  "0 -1px 0 0 rgb(181, 181, 181) inset, -1px 0 0 0 rgb(227, 227, 227) inset, 1px 0 0 0 rgb(227, 227, 227) inset, 0 1px 0 0 rgb(227, 227, 227) inset",
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.06) 80%, rgba(255, 255, 255, 0.12))",
              }}
            >
              View Rates & Pricing
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-[268px] -mt-6 mb-0 pb-0 relative overflow-hidden">
        <div
          ref={topRowRef}
          className="flex items-start gap-6 absolute top-6 whitespace-nowrap"
          style={{
            willChange: "transform",
          }}
        >
          {[...amenitiesRow1, ...amenitiesRow1].map((amenity, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center justify-center gap-3 px-6 h-24 rounded-3xl flex-shrink-0"
              style={{
                backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252))",
                boxShadow:
                  "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.4px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 12px 12px -6px, rgba(0, 0, 0, 0.04) 0px 12px 12px -12px",
              }}
            >
              {amenity.icon}
              <span
                className="text-sm font-medium text-[#202020]"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                {amenity.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 right-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(255, 255, 255))",
          }}
        />

        <div
          className="absolute top-0 left-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 0, 0, 0))",
          }}
        />

        <div
          ref={bottomRowRef}
          className="flex items-start gap-6 absolute top-[148px] whitespace-nowrap"
          style={{
            willChange: "transform",
          }}
        >
          {[...amenitiesRow2, ...amenitiesRow2].map((amenity, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center justify-center gap-3 px-6 h-24 rounded-3xl flex-shrink-0"
              style={{
                backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252))",
                boxShadow:
                  "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.4px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 12px 12px -6px, rgba(0, 0, 0, 0.04) 0px 12px 12px -12px",
              }}
            >
              {amenity.icon}
              <span
                className="text-sm font-medium text-[#202020]"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                {amenity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

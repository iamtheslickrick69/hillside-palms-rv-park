"use client"
import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

type FooterProps = {
  companyName?: string
  tagline?: string
  sections?: FooterSection[]
  copyrightText?: string
}

const defaultSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Rates & Pricing", href: "/rates" },
      { label: "Reserve Now", href: "/reserve" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Nearby Attractions",
    links: [
      { label: "Zion National Park", href: "https://www.nps.gov/zion" },
      { label: "Snow Canyon State Park", href: "https://stateparks.utah.gov/parks/snow-canyon" },
      { label: "Downtown St. George", href: "https://www.sgcity.org" },
      { label: "Sand Hollow Reservoir", href: "https://stateparks.utah.gov/parks/sand-hollow" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "RV Storage", href: "/storage" },
      { label: "City View Spaces", href: "/city-view" },
      { label: "Senior Activities", href: "/seniors" },
      { label: "Events Calendar", href: "/events" },
    ],
  },
]

export const Footer = ({
  companyName = "Hillside Palms",
  tagline = "Where the Summer Sun Spends the Winter",
  sections = defaultSections,
  copyrightText,
}: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const copyright = copyrightText || `© ${currentYear} ${companyName} RV Park. All rights reserved.`
  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5]" id="footer">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-2"
          >
            <div className="mb-4">
              <Image
                src="/images/hillside-palms-logo.png"
                alt="Hillside Palms RV Park"
                width={80}
                height={80}
                className="h-20 w-20 object-contain mb-4"
              />
              <h3
                className="text-2xl font-semibold text-[#202020] mb-2"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {companyName}
              </h3>
              <p className="text-sm leading-5 text-[#666666] max-w-xs italic" style={{ fontFamily: "Figtree" }}>
                "{tagline}"
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="tel:4356732809"
                className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                <Phone className="w-4 h-4" />
                (435) 673-2809
              </a>
              <a
                href="mailto:info@hillsidepalms.com"
                className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                <Mail className="w-4 h-4" />
                info@hillsidepalms.com
              </a>
              <div className="flex items-center gap-2 text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                <MapPin className="w-4 h-4" />
                650 East St. George Blvd, St. George, UT 84770
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <p
                className="text-sm font-medium text-[#202020] mb-1"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                Office Hours
              </p>
              <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                Monday - Sunday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </motion.div>

          {/* Link Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="col-span-1"
            >
              <h4
                className="text-sm font-medium text-[#202020] mb-4 uppercase tracking-wide"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                        style={{ fontFamily: "Figtree" }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                        style={{ fontFamily: "Figtree" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-[#e5e5e5]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
              {copyright}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

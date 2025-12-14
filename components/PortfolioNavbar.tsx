"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Lock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Rates", href: "/rates" },
  { name: "Reserve", href: "/reserve" },
  { name: "Storage", href: "/storage" },
  { name: "City View", href: "/city-view" },
  { name: "Community", href: "/seniors" },
  { name: "Contact", href: "/contact" },
]

export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/images/hillside-palms-logo.png"
                alt="Hillside Palms RV Park"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div className="hidden xl:block">
                <div className="text-[#156d95] font-semibold text-lg leading-tight" style={{ fontFamily: "Figtree" }}>
                  Hillside Palms
                </div>
                <div className="text-gray-600 text-xs font-medium" style={{ fontFamily: "Figtree" }}>
                  RV Park & Storage
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center flex-1 justify-between ml-12">
            <div className="flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-700 hover:text-[#156d95] px-1 py-2 text-[15px] font-medium transition-colors duration-200 relative group ${pathname === link.href ? "text-[#156d95]" : ""}`}
                  style={{ fontFamily: "Figtree, sans-serif", fontWeight: "500" }}
                >
                  <span>{link.name}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#156d95] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></div>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="tel:4356732809"
                className="flex items-center gap-2 text-gray-700 hover:text-[#156d95] text-[15px] font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
                style={{ fontFamily: "Figtree" }}
              >
                <Phone className="w-4 h-4" />
                (435) 673-2809
              </a>
              <div className="w-px h-8 bg-gray-200"></div>
              <Link
                href="/resident/login"
                className="flex items-center gap-2 text-gray-700 hover:text-[#156d95] px-4 py-2 rounded-lg text-[14px] font-medium hover:bg-gray-50 transition-all duration-200"
                style={{ fontFamily: "Figtree" }}
              >
                <User className="w-4 h-4" />
                Resident
              </Link>
              <Link
                href="/admin/login"
                className="flex items-center gap-2 text-gray-700 hover:text-[#156d95] px-4 py-2 rounded-lg text-[14px] font-medium hover:bg-gray-50 transition-all duration-200"
                style={{ fontFamily: "Figtree" }}
              >
                <Lock className="w-4 h-4" />
                Admin
              </Link>
              <Link
                href="/reserve"
                className="bg-[#156d95] text-white px-6 py-2.5 rounded-full text-[15px] font-semibold hover:bg-[#125780] transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                style={{ fontFamily: "Figtree", fontWeight: "600" }}
              >
                Reserve Now
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-6 py-6 space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block w-full text-left text-gray-700 hover:text-[#156d95] hover:bg-gray-50 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${pathname === link.href ? "text-[#156d95] bg-gray-50" : ""}`}
                  style={{ fontFamily: "Figtree, sans-serif", fontWeight: "500" }}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3 mt-4">
                <a
                  href="tel:4356732809"
                  className="flex items-center justify-center gap-2 w-full text-gray-700 hover:bg-gray-50 rounded-lg py-3 text-base font-medium"
                  style={{ fontFamily: "Figtree" }}
                >
                  <Phone className="w-5 h-5" />
                  (435) 673-2809
                </a>
                <Link
                  href="/resident/login"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full text-gray-700 hover:bg-gray-50 py-3 rounded-lg text-base font-medium transition-all duration-200"
                  style={{ fontFamily: "Figtree" }}
                >
                  <User className="w-4 h-4" />
                  Resident Login
                </Link>
                <Link
                  href="/admin/login"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full text-gray-700 hover:bg-gray-50 py-3 rounded-lg text-base font-medium transition-all duration-200"
                  style={{ fontFamily: "Figtree" }}
                >
                  <Lock className="w-4 h-4" />
                  Admin Login
                </Link>
                <Link
                  href="/reserve"
                  onClick={closeMobileMenu}
                  className="block w-full bg-[#156d95] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-[#125780] transition-all duration-200 text-center shadow-sm"
                  style={{ fontFamily: "Figtree", fontWeight: "600" }}
                >
                  Reserve Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

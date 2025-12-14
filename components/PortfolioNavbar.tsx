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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/images/hillside-palms-logo.png"
                alt="Hillside Palms RV Park"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-foreground hover:text-primary px-2 py-2 text-base font-medium transition-colors duration-200 relative group ${pathname === link.href ? "text-[#156d95]" : ""}`}
                  style={{ fontFamily: "Figtree, sans-serif", fontWeight: "400" }}
                >
                  <span>{link.name}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#156d95] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></div>
                </Link>
              ))}
              <Link
                href="/resident/login"
                className="flex items-center gap-1.5 border border-border text-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-muted transition-all duration-200"
                style={{ fontFamily: "Figtree" }}
              >
                <User className="w-3.5 h-3.5" />
                Resident
              </Link>
              <Link
                href="/admin/login"
                className="flex items-center gap-1.5 border border-border text-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-muted transition-all duration-200"
                style={{ fontFamily: "Figtree" }}
              >
                <Lock className="w-3.5 h-3.5" />
                Admin
              </Link>
              <Link
                href="/reserve"
                className="bg-[#156d95] text-white px-[18px] rounded-full text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200 hover:rounded-2xl shadow-sm hover:shadow-md whitespace-nowrap leading-4 py-[15px]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <span style={{ fontFamily: "Figtree", fontWeight: "500" }}>Reserve Now</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:4356732809"
              className="flex items-center gap-2 text-foreground hover:text-primary text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "Figtree" }}
            >
              <Phone className="w-4 h-4" />
              (435) 673-2809
            </a>
            <Link
              href="/resident/login"
              className="flex items-center gap-1.5 border border-border text-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-muted transition-all duration-200"
              style={{ fontFamily: "Figtree" }}
            >
              <User className="w-3.5 h-3.5" />
              Resident
            </Link>
            <Link
              href="/admin/login"
              className="flex items-center gap-1.5 border border-border text-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-muted transition-all duration-200"
              style={{ fontFamily: "Figtree" }}
            >
              <Lock className="w-3.5 h-3.5" />
              Admin
            </Link>
            <Link
              href="/reserve"
              className="bg-[#156d95] text-white px-[18px] rounded-full text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200 hover:rounded-2xl shadow-sm hover:shadow-md whitespace-nowrap leading-4 py-[15px]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <span style={{ fontFamily: "Figtree", fontWeight: "500" }}>Reserve Now</span>
            </Link>
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
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200 ${pathname === link.href ? "text-[#156d95]" : ""}`}
                  style={{ fontFamily: "Figtree, sans-serif", fontWeight: "400" }}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:4356732809"
                  className="flex items-center justify-center gap-2 w-full text-foreground py-3 text-lg font-medium"
                  style={{ fontFamily: "Figtree" }}
                >
                  <Phone className="w-5 h-5" />
                  (435) 673-2809
                </a>
                <Link
                  href="/resident/login"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full border border-border text-foreground py-3 rounded-full text-base font-medium hover:bg-muted transition-all duration-200"
                  style={{ fontFamily: "Figtree" }}
                >
                  <User className="w-4 h-4" />
                  Resident Login
                </Link>
                <Link
                  href="/admin/login"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full border border-border text-foreground py-3 rounded-full text-base font-medium hover:bg-muted transition-all duration-200"
                  style={{ fontFamily: "Figtree" }}
                >
                  <Lock className="w-4 h-4" />
                  Admin Login
                </Link>
                <Link
                  href="/reserve"
                  onClick={closeMobileMenu}
                  className="block w-full bg-[#156d95] text-white px-[18px] py-[15px] rounded-full text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200 text-center"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  <span>Reserve Now</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { HeroSection } from "@/components/HeroSection"
import { WelcomeHeroSection } from "@/components/WelcomeHeroSection"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { AmenitiesCarousel } from "@/components/AmenitiesCarousel"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <>
      <PortfolioNavbar />
      <HeroSection />
      <WelcomeHeroSection />
      <TestimonialsCarousel />
      <AmenitiesCarousel />
      <PricingSection />
      <FAQSection />
      <Footer />
    </>
  )
}

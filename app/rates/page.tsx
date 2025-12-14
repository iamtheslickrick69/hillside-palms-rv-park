import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { RatesPricingSection } from "@/components/RatesPricingSection"

export default function RatesPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <RatesPricingSection />
      </main>
      <Footer />
    </>
  )
}

import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { SeniorsAndEventsSection } from "@/components/SeniorsAndEventsSection"

export default function SeniorsPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <SeniorsAndEventsSection />
      </main>
      <Footer />
    </>
  )
}

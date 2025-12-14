import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { EventsSection } from "@/components/EventsSection"

export default function EventsPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <EventsSection />
      </main>
      <Footer />
    </>
  )
}

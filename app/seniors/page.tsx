import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { SeniorsSection } from "@/components/SeniorsSection"

export default function SeniorsPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <SeniorsSection />
      </main>
      <Footer />
    </>
  )
}

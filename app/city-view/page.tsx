import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { CityViewSection } from "@/components/CityViewSection"

export default function CityViewPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <CityViewSection />
      </main>
      <Footer />
    </>
  )
}

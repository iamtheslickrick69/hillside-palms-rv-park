import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { StorageSection } from "@/components/StorageSection"

export default function StoragePage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <StorageSection />
      </main>
      <Footer />
    </>
  )
}

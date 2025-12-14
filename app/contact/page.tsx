import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ContactSection } from "@/components/ContactSection"

export default function ContactPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

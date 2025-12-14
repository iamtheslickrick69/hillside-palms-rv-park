import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { ReservationForm } from "@/components/ReservationForm"

export default function ReservePage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-20">
        <ReservationForm />
      </main>
      <Footer />
    </>
  )
}

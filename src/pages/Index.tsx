import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  )
}
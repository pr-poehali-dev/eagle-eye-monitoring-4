import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { PlaySection } from "@/components/PlaySection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlaySection />
      <Footer />
    </main>
  )
}
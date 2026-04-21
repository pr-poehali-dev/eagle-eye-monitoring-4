import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:inline-flex border-primary/20 hover:border-primary hover:bg-primary/5" asChild>
              <a href="https://arizonarpcopy.sampproject.ru/" target="_blank" rel="noopener noreferrer">Форум</a>
            </Button>
            <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25" asChild>
              <a href="https://drive.usercontent.google.com/download?id=1gbC0eF-MCSUE7m0ZovNvXirny9X-qJC5&export=download&authuser=0&confirm=t&uuid=54ab7dc6-b904-44d2-80a7-0ac7926eab8d&at=ALBwUgnSPo_75uImxR4Mqh5KgdLj%3A1776062362514" target="_blank" rel="noopener noreferrer">Начать играть</a>
            </Button>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
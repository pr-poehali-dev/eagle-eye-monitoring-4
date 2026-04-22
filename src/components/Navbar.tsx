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
            <Button variant="outline" size="sm" className="hidden md:inline-flex border-primary/20 hover:border-primary hover:bg-primary/5" asChild>
              <a href="https://vk.ru/club237955389" target="_blank" rel="noopener noreferrer">
                <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.19 1.366 1.26 2.182 1.817.616.422 1.083.33 1.083.33l2.17-.03s1.137-.07.597-1.965c-.044-.143-.312-.66-1.597-1.865-1.345-1.26-1.165-1.057.455-3.239.988-1.315 1.382-2.118 1.259-2.462-.117-.327-.84-.24-.84-.24l-2.44.015s-.181-.025-.315.056c-.132.079-.216.262-.216.262s-.382 1.018-.89 1.883c-1.071 1.82-1.499 1.917-1.674 1.804-.407-.263-.306-1.06-.306-1.626 0-1.767.268-2.504-.521-2.695-.262-.063-.454-.105-1.123-.112-.858-.009-1.585.003-1.996.204-.274.133-.485.43-.356.447.159.021.52.097.712.358.247.337.238 1.093.238 1.093s.142 2.08-.33 2.337c-.324.173-.768-.18-1.723-1.793-.489-.847-.859-1.785-.859-1.785s-.071-.176-.201-.271c-.157-.114-.376-.15-.376-.15l-2.316.015s-.347.01-.474.161c-.112.134-.009.411-.009.411s1.814 4.243 3.868 6.381c1.883 1.96 4.019 1.832 4.019 1.832h.968z"/>
                </svg>
                Сообщество
              </a>
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
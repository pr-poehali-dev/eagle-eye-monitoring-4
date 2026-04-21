import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#pricing", label: "Тарифы" },
    { href: "#contact", label: "Контакты" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Меню навигации</SheetTitle>
          <SheetDescription>Переход к разделам сайта</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-3 mt-8">
          <a
            href="https://arizonarpcopy.sampproject.ru/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-base font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg border-b border-border/50"
          >
            Форум
          </a>
          <a
            href="https://drive.usercontent.google.com/download?id=1gbC0eF-MCSUE7m0ZovNvXirny9X-qJC5&export=download&authuser=0&confirm=t&uuid=54ab7dc6-b904-44d2-80a7-0ac7926eab8d&at=ALBwUgnSPo_75uImxR4Mqh5KgdLj%3A1776062362514"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-base font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg"
          >
            Начать играть
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
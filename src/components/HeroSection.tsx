import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code2, Palette, MessageSquare, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-muted/40 blur-3xl animate-pulse"
          style={{
            top: "20%",
            left: "10%",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-muted/30 blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            right: "15%",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        {/* Subtle mouse-following gradient */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-muted/20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Code2
          className="absolute text-muted-foreground/30 animate-float"
          style={{
            top: "15%",
            left: "15%",
            animationDelay: "0s",
          }}
          size={40}
        />
        <Palette
          className="absolute text-muted-foreground/30 animate-float"
          style={{
            top: "25%",
            right: "20%",
            animationDelay: "2s",
          }}
          size={35}
        />
        <Sparkles
          className="absolute text-muted-foreground/30 animate-float"
          style={{
            bottom: "20%",
            left: "20%",
            animationDelay: "1s",
          }}
          size={30}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Edgar Russia RP server RedBull</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
          Edgar{" "}
          <span className="text-primary relative inline-block">
            Russia
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 5 150 5 198 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Начинай играть с нами! Скачай клиент и присоединяйся к нашему сообществу прямо сейчас.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="https://drive.usercontent.google.com/download?id=1gbC0eF-MCSUE7m0ZovNvXirny9X-qJC5&export=download&authuser=0&confirm=t&uuid=54ab7dc6-b904-44d2-80a7-0ac7926eab8d&at=ALBwUgnSPo_75uImxR4Mqh5KgdLj%3A1776062362514" target="_blank" rel="noopener noreferrer">
              <Play className="mr-2 h-5 w-5" />
              Начать играть
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="https://edgarrussiarp.sampproject.ru/index.php" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" />
              Наш форум
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="https://vk.ru/club237955389" target="_blank" rel="noopener noreferrer">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.19 1.366 1.26 2.182 1.817.616.422 1.083.33 1.083.33l2.17-.03s1.137-.07.597-1.965c-.044-.143-.312-.66-1.597-1.865-1.345-1.26-1.165-1.057.455-3.239.988-1.315 1.382-2.118 1.259-2.462-.117-.327-.84-.24-.84-.24l-2.44.015s-.181-.025-.315.056c-.132.079-.216.262-.216.262s-.382 1.018-.89 1.883c-1.071 1.82-1.499 1.917-1.674 1.804-.407-.263-.306-1.06-.306-1.626 0-1.767.268-2.504-.521-2.695-.262-.063-.454-.105-1.123-.112-.858-.009-1.585.003-1.996.204-.274.133-.485.43-.356.447.159.021.52.097.712.358.247.337.238 1.093.238 1.093s.142 2.08-.33 2.337c-.324.173-.768-.18-1.723-1.793-.489-.847-.859-1.785-.859-1.785s-.071-.176-.201-.271c-.157-.114-.376-.15-.376-.15l-2.316.015s-.347.01-.474.161c-.112.134-.009.411-.009.411s1.814 4.243 3.868 6.381c1.883 1.96 4.019 1.832 4.019 1.832h.968z"/>
              </svg>
              Наше сообщество
            </a>
          </Button>
        </div>


      </div>
    </section>
  )
}
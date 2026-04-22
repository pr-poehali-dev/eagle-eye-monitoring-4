import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const screenshots = [
  {
    url: "https://cdn.poehali.dev/projects/2a9df3da-3722-4390-851e-521260d99775/files/2c2d416e-a868-4569-b7e8-94b51f0c7a88.jpg",
    alt: "Скриншот игры 1",
  },
  {
    url: "https://cdn.poehali.dev/projects/2a9df3da-3722-4390-851e-521260d99775/files/ab49a4fa-8a0a-488b-8e5d-69827f7201df.jpg",
    alt: "Скриншот игры 2",
  },
  {
    url: "https://cdn.poehali.dev/projects/2a9df3da-3722-4390-851e-521260d99775/files/eb848be3-cec4-4b70-9230-2cd09122362d.jpg",
    alt: "Скриншот игры 3",
  },
]

export function PlaySection() {
  return (
    <section className="relative bg-[#0d0d0d] overflow-hidden py-16">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Character image */}
          <div className="flex-shrink-0 w-full lg:w-[380px] flex justify-center lg:justify-start">
            <img
              src="https://cdn.poehali.dev/projects/2a9df3da-3722-4390-851e-521260d99775/files/963bcea1-ee35-4ffe-9b6d-201bf2f51ab7.jpg"
              alt="Персонаж"
              className="w-[300px] lg:w-[360px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl sm:text-6xl font-black uppercase text-white leading-tight mb-4">
              Начинай <span className="text-primary">играть!</span>
            </h2>

            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Играть на нашем проекте очень просто. Достаточно скачать наш лаунчер, который сам установит все необходимые компоненты игры.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase px-12 py-6 text-lg shadow-lg shadow-primary/40 tracking-widest mb-10"
              asChild
            >
              <a
                href="https://drive.usercontent.google.com/download?id=1gbC0eF-MCSUE7m0ZovNvXirny9X-qJC5&export=download&authuser=0&confirm=t&uuid=54ab7dc6-b904-44d2-80a7-0ac7926eab8d&at=ALBwUgnSPo_75uImxR4Mqh5KgdLj%3A1776062362514"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Скачать с сайта
              </a>
            </Button>

            {/* Screenshots */}
            <div className="grid grid-cols-3 gap-3">
              {screenshots.map((s, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-white/10 shadow-lg">
                  <img src={s.url} alt={s.alt} className="w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm max-w-sm text-center md:text-left leading-relaxed">
            Игра бесплатная и не требует денежных средств. Однако в игре предусмотрена возможность приобретения внутриигровых предметов, валюты, игровых статусов.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://vk.ru/club237955389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all text-sm font-semibold uppercase tracking-wider"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.19 1.366 1.26 2.182 1.817.616.422 1.083.33 1.083.33l2.17-.03s1.137-.07.597-1.965c-.044-.143-.312-.66-1.597-1.865-1.345-1.26-1.165-1.057.455-3.239.988-1.315 1.382-2.118 1.259-2.462-.117-.327-.84-.24-.84-.24l-2.44.015s-.181-.025-.315.056c-.132.079-.216.262-.216.262s-.382 1.018-.89 1.883c-1.071 1.82-1.499 1.917-1.674 1.804-.407-.263-.306-1.06-.306-1.626 0-1.767.268-2.504-.521-2.695-.262-.063-.454-.105-1.123-.112-.858-.009-1.585.003-1.996.204-.274.133-.485.43-.356.447.159.021.52.097.712.358.247.337.238 1.093.238 1.093s.142 2.08-.33 2.337c-.324.173-.768-.18-1.723-1.793-.489-.847-.859-1.785-.859-1.785s-.071-.176-.201-.271c-.157-.114-.376-.15-.376-.15l-2.316.015s-.347.01-.474.161c-.112.134-.009.411-.009.411s1.814 4.243 3.868 6.381c1.883 1.96 4.019 1.832 4.019 1.832h.968z"/>
              </svg>
              ВКонтакте
            </a>
            <a
              href="https://arizonarpcopy.sampproject.ru/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all text-sm font-semibold uppercase tracking-wider"
            >
              Форум
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

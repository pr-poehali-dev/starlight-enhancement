import { useReveal } from "@/hooks/use-reveal"

const falseFriends = [
  {
    number: "01",
    english: "Accurate",
    wrong: "Аккуратный",
    correct: "Точный, правильный",
    direction: "left",
  },
  {
    number: "02",
    english: "Magazine",
    wrong: "Магазин",
    correct: "Журнал",
    direction: "right",
  },
  {
    number: "03",
    english: "Fabric",
    wrong: "Фабрика",
    correct: "Ткань",
    direction: "left",
  },
  {
    number: "04",
    english: "Sympathetic",
    wrong: "Симпатичный",
    correct: "Сочувствующий",
    direction: "right",
  },
  {
    number: "05",
    english: "Prospect",
    wrong: "Проспект (улица)",
    correct: "Перспектива, возможность",
    direction: "left",
  },
  {
    number: "06",
    english: "Brilliant",
    wrong: "Бриллиант",
    correct: "Блестящий, великолепный",
    direction: "right",
  },
  {
    number: "07",
    english: "Cabinet",
    wrong: "Кабинет",
    correct: "Шкаф, тумба",
    direction: "left",
  },
  {
    number: "08",
    english: "Compositor",
    wrong: "Композитор",
    correct: "Наборщик (типографский)",
    direction: "right",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Справочник
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Избранные ложные друзья переводчика</p>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-16">
          {falseFriends.map((item, i) => (
            <FalseFriendCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FalseFriendCard({
  item,
  index,
  isVisible,
}: {
  item: { number: string; english: string; wrong: string; correct: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-3 transition-all duration-700 hover:border-foreground/20 md:py-4 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-baseline gap-3 md:gap-6">
        <span className="font-mono text-xs text-foreground/30 transition-colors group-hover:text-foreground/50">
          {item.number}
        </span>
        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="font-sans text-lg font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
              {item.english}
            </h3>
            <span className="font-mono text-xs text-foreground/40 line-through">{item.wrong}</span>
          </div>
          <p className="font-mono text-xs text-foreground/70">{item.correct}</p>
        </div>
      </div>
    </div>
  )
}

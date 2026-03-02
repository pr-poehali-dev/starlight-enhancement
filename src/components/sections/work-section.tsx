import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { FALSE_FRIENDS, ALL_TOPICS, type Topic, type FalseFriend } from "@/lib/false-friends-data"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [activeTopic, setActiveTopic] = useState<Topic>("Все")

  const filtered = activeTopic === "Все"
    ? FALSE_FRIENDS
    : FALSE_FRIENDS.filter((f) => f.topic === activeTopic)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-24 pb-8 md:px-12 md:pt-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full">
        <div
          className={`mb-6 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Справочник
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ {FALSE_FRIENDS.length} ложных друзей переводчика</p>
        </div>

        <div
          className={`mb-5 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {ALL_TOPICS.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200 ${
                activeTopic === topic
                  ? "border-foreground/60 bg-foreground/15 text-foreground"
                  : "border-foreground/20 text-foreground/50 hover:border-foreground/40 hover:text-foreground/70"
              }`}
            >
              {topic}
              {topic !== "Все" && (
                <span className="ml-1.5 text-foreground/30">
                  {FALSE_FRIENDS.filter((f) => f.topic === topic).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-16">
            {filtered.map((item, i) => (
              <FalseFriendCard
                key={item.english}
                item={item}
                index={i}
                isVisible={isVisible}
              />
            ))}
          </div>
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
  item: FalseFriend
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-3 transition-all duration-500 hover:border-foreground/20 ${
        isVisible ? "translate-x-0 opacity-100" : index % 2 === 0 ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
      }`}
      style={{ transitionDelay: `${Math.min(index * 50, 600)}ms` }}
    >
      <div className="flex items-baseline gap-3 md:gap-6">
        <span className="font-mono text-xs text-foreground/25 transition-colors group-hover:text-foreground/40 w-6 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="font-sans text-base font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
              {item.english}
            </h3>
            <span className="font-mono text-xs text-foreground/35 line-through">{item.wrong}</span>
          </div>
          <p className="font-mono text-xs text-foreground/65">{item.correct}</p>
        </div>
      </div>
      <span className="ml-4 shrink-0 rounded-full border border-foreground/15 px-2 py-0.5 font-mono text-[10px] text-foreground/40">
        {item.topic}
      </span>
    </div>
  )
}

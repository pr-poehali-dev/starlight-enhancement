import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const questions = [
  {
    question: "Что значит английское слово «accurate»?",
    options: ["Аккуратный, опрятный", "Точный, правильный", "Быстрый, ловкий", "Умный, сообразительный"],
    correct: 1,
    explanation: "«Accurate» — точный, правильный. «Аккуратный» по-английски — «neat» или «tidy».",
  },
  {
    question: "Переведите: «She bought a magazine at the shop»",
    options: ["Она купила магазин", "Она купила журнал в магазине", "Она открыла магазин", "Она нашла журнал"],
    correct: 1,
    explanation: "«Magazine» — журнал, а не магазин. «Магазин» по-английски — «shop» или «store».",
  },
  {
    question: "Что значит «fabric» в предложении «The fabric was soft»?",
    options: ["Фабрика была большой", "Ткань была мягкой", "Завод был новым", "Здание было старым"],
    correct: 1,
    explanation: "«Fabric» — ткань, материал. «Фабрика» по-английски — «factory» или «plant».",
  },
  {
    question: "«He was sympathetic» — что это значит?",
    options: ["Он был симпатичным", "Он был добрым", "Он выражал сочувствие", "Он был весёлым"],
    correct: 2,
    explanation: "«Sympathetic» — сочувствующий, понимающий. «Симпатичный» по-английски — «attractive» или «good-looking».",
  },
  {
    question: "Что означает «brilliant idea»?",
    options: ["Бриллиантовая идея", "Блестящая идея", "Дорогая идея", "Редкая идея"],
    correct: 1,
    explanation: "«Brilliant» — блестящий, великолепный. «Бриллиант» по-английски — «diamond».",
  },
]

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const q = questions[current]

  const handleAnswer = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    setShowExplanation(true)
    if (idx === q.correct) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setShowExplanation(false)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setShowExplanation(false)
  }

  const getScoreLabel = () => {
    if (score === 5) return "Превосходно! Вы настоящий знаток."
    if (score >= 3) return "Хороший результат! Почти всё верно."
    if (score >= 1) return "Есть над чем поработать."
    return "Нужно подучиться! Загляните в справочник."
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Мини-
                <br />
                тест
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Проверьте себя</p>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-xs text-sm leading-relaxed text-foreground/80 md:text-base">
                5 вопросов на знание ложных друзей переводчика. Выберите правильный перевод.
              </p>
              {!finished && (
                <div className="flex items-center gap-3">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                        i < current
                          ? "bg-foreground/70"
                          : i === current
                            ? "bg-foreground"
                            : "bg-foreground/20"
                      }`}
                    />
                  ))}
                </div>
              )}
              {!finished && (
                <p className="font-mono text-xs text-foreground/50">
                  Вопрос {current + 1} из {questions.length}
                </p>
              )}
            </div>
          </div>

          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {finished ? (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl font-light text-foreground md:text-8xl">{score}</div>
                  <div>
                    <div className="font-sans text-lg font-light text-foreground md:text-2xl">из {questions.length}</div>
                    <div className="font-mono text-xs text-foreground/60">правильных ответов</div>
                  </div>
                </div>
                <p className="font-sans text-base text-foreground/90 md:text-lg">{getScoreLabel()}</p>
                <MagneticButton variant="primary" size="lg" onClick={handleRestart}>
                  Пройти снова
                </MagneticButton>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                <p className="font-sans text-base font-light text-foreground md:text-xl lg:text-2xl leading-snug">
                  {q.question}
                </p>

                <div className="space-y-2 md:space-y-3">
                  {q.options.map((opt, idx) => {
                    const isChosen = selected === idx
                    const isCorrect = idx === q.correct
                    const revealed = selected !== null

                    let borderClass = "border-foreground/20 hover:border-foreground/40"
                    let bgClass = "bg-transparent"
                    let textClass = "text-foreground/80"

                    if (revealed) {
                      if (isCorrect) {
                        borderClass = "border-foreground/60"
                        bgClass = "bg-foreground/10"
                        textClass = "text-foreground"
                      } else if (isChosen) {
                        borderClass = "border-foreground/20"
                        bgClass = "bg-transparent"
                        textClass = "text-foreground/40 line-through"
                      } else {
                        borderClass = "border-foreground/10"
                        textClass = "text-foreground/40"
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className={`w-full border px-4 py-2.5 text-left font-sans text-sm transition-all duration-300 md:px-5 md:py-3 md:text-base ${borderClass} ${bgClass} ${textClass} ${
                          !revealed ? "cursor-pointer" : "cursor-default"
                        }`}
                      >
                        <span className="font-mono text-xs text-foreground/40 mr-3">{String.fromCharCode(65 + idx)}.</span>
                        {opt}
                        {revealed && isCorrect && (
                          <Icon name="Check" size={14} className="inline ml-2 text-foreground/70" />
                        )}
                      </button>
                    )
                  })}
                </div>

                {showExplanation && (
                  <div className="border-l border-foreground/30 pl-4 py-1">
                    <p className="font-mono text-xs text-foreground/70 leading-relaxed">{q.explanation}</p>
                  </div>
                )}

                {selected !== null && (
                  <MagneticButton variant="primary" onClick={handleNext}>
                    {current + 1 >= questions.length ? "Посмотреть результат" : "Следующий вопрос"}
                  </MagneticButton>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

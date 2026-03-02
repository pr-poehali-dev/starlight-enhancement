import { useReveal } from "@/hooks/use-reveal"
import { useState, useMemo } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"
import { ALL_QUESTIONS, shuffleArray, type QuizQuestion } from "@/lib/false-friends-data"

const QUIZ_LENGTH = 7

function buildQuiz(): QuizQuestion[] {
  return shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_LENGTH)
}

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>(() => buildQuiz())
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const q = quizQuestions[current]

  const handleAnswer = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    setShowExplanation(true)
    if (idx === q.correct) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (current + 1 >= quizQuestions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setShowExplanation(false)
    }
  }

  const handleRestart = () => {
    setQuizQuestions(buildQuiz())
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setShowExplanation(false)
  }

  const getScoreLabel = () => {
    const pct = score / quizQuestions.length
    if (pct === 1) return "Превосходно! Вы настоящий знаток."
    if (pct >= 0.7) return "Хороший результат! Почти всё верно."
    if (pct >= 0.4) return "Есть над чем поработать."
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
              className={`mb-6 transition-all duration-700 md:mb-10 ${
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
                {QUIZ_LENGTH} случайных вопросов из банка {ALL_QUESTIONS.length}. Каждый раз — новый набор.
              </p>
              {!finished && (
                <div className="flex items-center gap-1.5">
                  {quizQuestions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
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
                  Вопрос {current + 1} из {quizQuestions.length}
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
                    <div className="font-sans text-lg font-light text-foreground md:text-2xl">из {quizQuestions.length}</div>
                    <div className="font-mono text-xs text-foreground/60">правильных ответов</div>
                  </div>
                </div>
                <p className="font-sans text-base text-foreground/90 md:text-lg">{getScoreLabel()}</p>
                <MagneticButton variant="primary" size="lg" onClick={handleRestart}>
                  Новый набор вопросов
                </MagneticButton>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-5">
                <p className="font-sans text-base font-light text-foreground md:text-xl lg:text-2xl leading-snug">
                  {q.question}
                </p>

                <div className="space-y-2 md:space-y-2.5">
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
                        className={`w-full border px-4 py-2 text-left font-sans text-sm transition-all duration-300 md:px-5 md:py-2.5 md:text-base ${borderClass} ${bgClass} ${textClass} ${
                          !revealed ? "cursor-pointer" : "cursor-default"
                        }`}
                      >
                        <span className="font-mono text-xs text-foreground/35 mr-3">{String.fromCharCode(65 + idx)}.</span>
                        {opt}
                        {revealed && isCorrect && (
                          <Icon name="Check" size={13} className="inline ml-2 text-foreground/70" />
                        )}
                      </button>
                    )
                  })}
                </div>

                {showExplanation && (
                  <div className="border-l border-foreground/30 pl-4 py-0.5">
                    <p className="font-mono text-xs text-foreground/70 leading-relaxed">{q.explanation}</p>
                  </div>
                )}

                {selected !== null && (
                  <MagneticButton variant="primary" onClick={handleNext}>
                    {current + 1 >= quizQuestions.length ? "Посмотреть результат" : "Следующий вопрос"}
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

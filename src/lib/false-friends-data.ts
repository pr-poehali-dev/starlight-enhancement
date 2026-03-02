export type Topic = "Повседневность" | "Профессии" | "Предметы" | "Качества" | "Наука" | "Все"

export interface FalseFriend {
  english: string
  wrong: string
  correct: string
  topic: Topic
}

export interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export const ALL_TOPICS: Topic[] = ["Все", "Повседневность", "Профессии", "Предметы", "Качества", "Наука"]

export const FALSE_FRIENDS: FalseFriend[] = [
  { english: "Accurate", wrong: "Аккуратный", correct: "Точный, правильный", topic: "Качества" },
  { english: "Magazine", wrong: "Магазин", correct: "Журнал", topic: "Повседневность" },
  { english: "Fabric", wrong: "Фабрика", correct: "Ткань", topic: "Предметы" },
  { english: "Sympathetic", wrong: "Симпатичный", correct: "Сочувствующий", topic: "Качества" },
  { english: "Prospect", wrong: "Проспект (улица)", correct: "Перспектива, возможность", topic: "Повседневность" },
  { english: "Brilliant", wrong: "Бриллиант", correct: "Блестящий, великолепный", topic: "Качества" },
  { english: "Cabinet", wrong: "Кабинет", correct: "Шкаф, тумба", topic: "Предметы" },
  { english: "Compositor", wrong: "Композитор", correct: "Наборщик (типографский)", topic: "Профессии" },
  { english: "Conductor", wrong: "Кондуктор (в автобусе)", correct: "Дирижёр", topic: "Профессии" },
  { english: "Complexion", wrong: "Комплекция (телосложение)", correct: "Цвет лица", topic: "Качества" },
  { english: "Consistent", wrong: "Консистентный", correct: "Последовательный, стабильный", topic: "Качества" },
  { english: "Crucial", wrong: "Жестокий", correct: "Решающий, ключевой", topic: "Качества" },
  { english: "Decade", wrong: "Декада (10 дней)", correct: "Десятилетие", topic: "Наука" },
  { english: "Dramatic", wrong: "Драматический (плохой)", correct: "Разительный, впечатляющий", topic: "Качества" },
  { english: "Eventual", wrong: "Возможный", correct: "Конечный, итоговый", topic: "Качества" },
  { english: "Genial", wrong: "Гениальный", correct: "Радушный, приветливый", topic: "Качества" },
  { english: "Gymnasium", wrong: "Гимназия (школа)", correct: "Спортивный зал", topic: "Предметы" },
  { english: "Intelligent", wrong: "Интеллигентный (культурный)", correct: "Умный, сообразительный", topic: "Качества" },
  { english: "Lecture", wrong: "Лекарство", correct: "Лекция", topic: "Наука" },
  { english: "Lunatic", wrong: "Лунатик (снохождение)", correct: "Сумасшедший, безумец", topic: "Повседневность" },
  { english: "Minister", wrong: "Министр", correct: "Священник (в протестантской церкви)", topic: "Профессии" },
  { english: "Miserable", wrong: "Мизерный (маленький)", correct: "Несчастный, жалкий", topic: "Качества" },
  { english: "Novel", wrong: "Новый", correct: "Роман (книга)", topic: "Повседневность" },
  { english: "Pathetic", wrong: "Пафосный", correct: "Жалкий, вызывающий жалость", topic: "Качества" },
  { english: "Physic", wrong: "Физика (наука)", correct: "Слабительное (устар.)", topic: "Наука" },
  { english: "Pretend", wrong: "Претендовать", correct: "Притворяться, делать вид", topic: "Повседневность" },
  { english: "Principal", wrong: "Принципиальный", correct: "Директор, главный", topic: "Профессии" },
  { english: "Replica", wrong: "Реплика (фраза)", correct: "Точная копия", topic: "Предметы" },
  { english: "Resin", wrong: "Изюм", correct: "Смола", topic: "Предметы" },
  { english: "Sensible", wrong: "Сенсибельный, чувствительный", correct: "Разумный, здравомыслящий", topic: "Качества" },
  { english: "Speculation", wrong: "Спекуляция (мошенничество)", correct: "Размышление, предположение", topic: "Наука" },
  { english: "Stamp", wrong: "Штамп (клише)", correct: "Почтовая марка", topic: "Предметы" },
  { english: "Stool", wrong: "Стул (мебель)", correct: "Табурет (без спинки)", topic: "Предметы" },
  { english: "Surgeon", wrong: "Сержант", correct: "Хирург", topic: "Профессии" },
  { english: "Technically", wrong: "Технически (формально)", correct: "С технической точки зрения", topic: "Наука" },
]

export const ALL_QUESTIONS: QuizQuestion[] = [
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
  {
    question: "Кто такой «conductor» в контексте симфонического оркестра?",
    options: ["Кондуктор в автобусе", "Дирижёр", "Контролёр", "Водитель"],
    correct: 1,
    explanation: "«Conductor» в музыкальном контексте — дирижёр. «Кондуктор» (в транспорте) — «bus conductor».",
  },
  {
    question: "Что значит «eventual result»?",
    options: ["Возможный результат", "Итоговый результат", "Внезапный результат", "Необычный результат"],
    correct: 1,
    explanation: "«Eventual» — конечный, итоговый. «Возможный» по-английски — «possible» или «potential».",
  },
  {
    question: "«A genial host» — что это значит?",
    options: ["Гениальный хозяин", "Жестокий хозяин", "Радушный хозяин", "Богатый хозяин"],
    correct: 2,
    explanation: "«Genial» — радушный, приветливый. «Гениальный» по-английски — «genius» или «brilliant».",
  },
  {
    question: "Где в Англии находится «gymnasium»?",
    options: ["Это тип школы", "Это спортивный зал", "Это театр", "Это библиотека"],
    correct: 1,
    explanation: "В английском «gymnasium» (gym) — спортивный зал. «Гимназия» (школа) — «grammar school».",
  },
  {
    question: "Чем занимается «lunatic»?",
    options: ["Ходит во сне", "Изучает Луну", "Ведёт себя безумно", "Работает ночью"],
    correct: 2,
    explanation: "«Lunatic» — сумасшедший. «Лунатик» (снохождение) по-английски — «sleepwalker».",
  },
  {
    question: "«A novel approach» — что это?",
    options: ["Новый подход", "Книжный подход", "Романтичный подход", "Необычный подход"],
    correct: 0,
    explanation: "«Novel» как прилагательное — новый, оригинальный. Как существительное — роман (книга).",
  },
  {
    question: "«His performance was pathetic» — что имеется в виду?",
    options: ["Его выступление было пафосным", "Его выступление было жалким", "Его выступление было трогательным", "Его выступление было пустым"],
    correct: 1,
    explanation: "«Pathetic» — жалкий, вызывающий жалость или презрение. «Пафосный» по-английски — «pompous».",
  },
  {
    question: "Что делает человек, когда «pretends»?",
    options: ["Претендует на должность", "Притворяется, делает вид", "Обвиняет кого-то", "Предупреждает"],
    correct: 1,
    explanation: "«To pretend» — притворяться. «Претендовать» по-английски — «to claim» или «to aspire».",
  },
  {
    question: "Кто такой «principal» в американской школе?",
    options: ["Принципиальный учитель", "Директор школы", "Главный предмет", "Старший класс"],
    correct: 1,
    explanation: "«Principal» — директор школы. «Принципиальный» по-английски — «principled».",
  },
  {
    question: "Что такое «replica» в музее?",
    options: ["Реплика (цитата экспоната)", "Точная копия предмета", "Аудиогид", "Этикетка"],
    correct: 1,
    explanation: "«Replica» — точная копия. «Реплика» (фраза в разговоре) по-английски — «remark» или «line».",
  },
  {
    question: "Что значит «sensible decision»?",
    options: ["Чувствительное решение", "Разумное решение", "Сенсационное решение", "Неожиданное решение"],
    correct: 1,
    explanation: "«Sensible» — разумный, здравомыслящий. «Чувствительный» по-английски — «sensitive».",
  },
  {
    question: "«Miserable weather» — какая погода?",
    options: ["Мизерная (маленький дождь)", "Ужасная, отвратительная", "Холодная", "Тёплая"],
    correct: 1,
    explanation: "«Miserable» — несчастный, ужасный. «Мизерный» (маленький) по-английски — «tiny» или «meagre».",
  },
  {
    question: "«A dramatic change» — что это за изменение?",
    options: ["Плохое изменение", "Разительное, резкое изменение", "Театральное изменение", "Медленное изменение"],
    correct: 1,
    explanation: "«Dramatic» значит разительный, впечатляющий — необязательно плохой. Просто очень заметный.",
  },
  {
    question: "Что такое «speculation» в философии?",
    options: ["Мошенничество", "Спекуляция (торговля)", "Теоретическое размышление", "Обман"],
    correct: 2,
    explanation: "«Speculation» — размышление, предположение, теория. «Спекуляция» как мошенничество — устаревшее советское значение.",
  },
  {
    question: "«Crucial moment» — что это?",
    options: ["Жестокий момент", "Решающий, ключевой момент", "Странный момент", "Последний момент"],
    correct: 1,
    explanation: "«Crucial» — решающий, ключевой. Не путать с «cruel» (жестокий).",
  },
]

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

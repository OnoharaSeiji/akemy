const AKEMY_WEEKS = [
  { number: 1,  start: "2026-03-20", end: "2026-03-26", theme: "Método de estudo, leitura da prova, interpretação básica, números e operações, linha do tempo geral" },
  { number: 2,  start: "2026-03-27", end: "2026-04-02", theme: "Gêneros textuais, assunto x tema, ideia principal, célula, níveis de organização dos seres vivos, espaço geográfico" },
  { number: 3,  start: "2026-04-03", end: "2026-04-09", theme: "Razão, proporção, conversão de unidades, grandezas físicas, estrutura atômica inicial e gráfico de setor" },
  { number: 4,  start: "2026-04-10", end: "2026-04-16", theme: "Funções da linguagem, biomas brasileiros, leitura de mapas, localização e orientação espacial" },
  { number: 5,  start: "2026-04-17", end: "2026-04-23", theme: "Sistema digestório, substâncias e misturas, equação do 1º grau e problemas contextualizados" },
  { number: 6,  start: "2026-04-24", end: "2026-04-30", theme: "Figuras de linguagem, pressão, sociedade medieval e transição para a Idade Moderna" },
  { number: 7,  start: "2026-05-01", end: "2026-05-07", theme: "Geometria plana, perímetro, área, ecologia básica, cadeia alimentar, relevo e impacto humano" },
  { number: 8,  start: "2026-05-08", end: "2026-05-14", theme: "Pronomes, conectivos, coesão, pH, calor e temperatura com humor e duplo sentido em texto" },
  { number: 9,  start: "2026-05-15", end: "2026-05-21", theme: "Genética introdutória, Brasil República em visão geral, estatística básica e leitura de gráficos" },
  { number: 10, start: "2026-05-22", end: "2026-05-28", theme: "Consolidação da fase: 21 questões mistas, correção comentada e mapa de erros por disciplina" },
  { number: 11, start: "2026-05-29", end: "2026-06-04", theme: "Textos multimodais, Bhaskara no nível necessário, Segunda Guerra e Guerra Fria" },
  { number: 12, start: "2026-06-05", end: "2026-06-11", theme: "Sistema nervoso, estequiometria introdutória, óptica e interpretação de medidas no enunciado" },
  { number: 13, start: "2026-06-12", end: "2026-06-18", theme: "Formação de palavras, classes gramaticais em contexto, sistemas de equações, escala e coordenadas geográficas" },
  { number: 14, start: "2026-06-19", end: "2026-06-25", theme: "Mercantilismo, expansão marítima, colonização, evolução biológica e radioatividade básica" },
  { number: 15, start: "2026-06-26", end: "2026-07-02", theme: "Estatística, média, moda, amplitude, ondas, correntes marítimas e placas tectônicas" },
  { number: 16, start: "2026-07-03", end: "2026-07-09", theme: "Variação linguística, inferência, coesão, doenças parasitárias, urbanização e problemas urbanos" },
  { number: 17, start: "2026-07-10", end: "2026-07-16", theme: "Notação científica, corpo humano II e química orgânica básica no essencial" },
  { number: 18, start: "2026-07-17", end: "2026-07-23", theme: "Energia, máquinas simples, biodiversidade, hotspots e leitura de infográficos" },
  { number: 19, start: "2026-07-24", end: "2026-07-30", theme: "Porcentagem, descontos, aumentos sucessivos, área/perímetro e separação de misturas" },
  { number: 20, start: "2026-07-31", end: "2026-08-06", theme: "Sintaxe básica, eletrostática, magnetismo, território, cidade, clima e ambiente no Brasil" },
  { number: 21, start: "2026-08-07", end: "2026-08-13", theme: "Fotossíntese, respiração, interpretação quantitativa, estatística e problemas mistos" },
  { number: 22, start: "2026-08-14", end: "2026-08-20", theme: "Leitura crítica, opinião x fato, tese implícita, ditadura militar, industrialização e questões ambientais" },
  { number: 23, start: "2026-08-21", end: "2026-08-27", theme: "Revisão da fase + Simulado 1: 50 questões, correção por assunto e replanejamento" },
  { number: 24, start: "2026-08-28", end: "2026-09-03", theme: "Diagnóstico fino: levantamento dos 12 assuntos mais errados e reforço imediato" },
  { number: 25, start: "2026-09-04", end: "2026-09-10", theme: "Revisão intensiva de Biologia, Química e Física com foco nas provas de 2020 a 2026" },
  { number: 26, start: "2026-09-11", end: "2026-09-17", theme: "História e Geografia por questões + Simulado 2 com foco em ambiente, Brasil e leitura de fonte" },
  { number: 27, start: "2026-09-18", end: "2026-09-24", theme: "Prova 2024 comentada + reforço dos pontos fracos expostos pelo exame" },
  { number: 28, start: "2026-09-25", end: "2026-10-01", theme: "Reforço de Química, Física e Geografia com bloco obrigatório de mapa e gráfico/tabela" },
  { number: 29, start: "2026-10-02", end: "2026-10-08", theme: "Simulado 3: 50 questões, correção por tema e ranking de erros reincidentes" },
  { number: 30, start: "2026-10-09", end: "2026-10-15", theme: "Revisão intensiva de Português e Matemática: interpretação, conectivos, razão, porcentagem e gráficos" },
  { number: 31, start: "2026-10-16", end: "2026-10-22", theme: "Prova 2026 comentada com atenção especial a razão, gráfico de setor e contexto histórico-cultural" },
  { number: 32, start: "2026-10-23", end: "2026-10-29", theme: "Fechamento do intensivo com lista mista pesada e revisão dos 20 erros mais comuns" },
  { number: 33, start: "2026-10-30", end: "2026-11-05", theme: "Simulado 4 + correção aprofundada com foco em tempo, resistência e estratégia" },
  { number: 34, start: "2026-11-06", end: "2026-11-12", theme: "Revisão temática rápida: Português/Matemática, Bio/Química e Física/História/Geografia" },
  { number: 35, start: "2026-11-13", end: "2026-11-19", theme: "Dois simulados: 50 questões em 4h e 40 questões em 3h para adaptação de ritmo" },
  { number: 36, start: "2026-11-20", end: "2026-11-26", theme: "Revisão final pelo caderno de erros, fórmulas essenciais e pegadinhas recorrentes" },
  { number: 37, start: "2026-11-27", end: "2026-11-29", theme: "Semana leve e estratégica: revisão final, organização da prova e estabilidade emocional" }
];

function akemyMainTopic(theme) {
  return String(theme).split(/[,:]/)[0].trim();
}

function akemyBuildTitle(dayNumber) {
  const customTitles = {
    1: "Como a prova funciona e como começar a acertar",
    2: "Interpretação de texto sem adivinhação",
    3: "Números, operações, frações, porcentagem e cronologia histórica",
    4: "Gêneros textuais, finalidade, público e efeitos de sentido"
  };

  if (customTitles[dayNumber]) return customTitles[dayNumber];

  const weekNumber = Math.min(Math.ceil(dayNumber / 7), AKEMY_WEEKS.length);
  const week = AKEMY_WEEKS[weekNumber - 1];
  const topic = akemyMainTopic(week.theme);
  const dayInWeek = ((dayNumber - 1) % 7) + 1;
  const label = String(weekNumber).padStart(2, "0");

  const patterns = {
    1: `Fundamentos — ${topic}`,
    2: `Aprofundamento — ${topic}`,
    3: `Prática guiada — ${topic}`,
    4: `Prática independente — ${topic}`,
    5: `Revisão acumulativa da semana ${label}`,
    6: `Mini-simulado e correção da semana ${label}`,
    7: `Revisão leve e memória estratégica`
  };

  return patterns[dayInWeek];
}

const AKEMY_APOSTILA_TITLES = Object.fromEntries(
  Array.from({ length: 255 }, (_, i) => {
    const day = i + 1;
    return [day, akemyBuildTitle(day)];
  })
);

window.AKEMY_CONFIG = {
  projectName: "Akemy Estudos",
  examTitle: "Vestibulinho ETEC 2026",
  examDateTime: "2026-11-30T13:30:00-03:00",
  studyStart: "2026-03-20",
  studyEnd: "2026-11-29",
  totalStudyDays: 255,
  weeklyGoalMinutes: "60–90 minutos por apostila",
  availableApostilas: Array.from({ length: 255 }, (_, i) => i + 1),
  apostilaTitles: AKEMY_APOSTILA_TITLES,
  phases: [
    {
      id: "fase1",
      name: "Fase 1 — Alicerce",
      start: "2026-03-20",
      end: "2026-05-31",
      daily: "60–90 min",
      color: "#2f7a50"
    },
    {
      id: "fase2",
      name: "Fase 2 — Construção",
      start: "2026-06-01",
      end: "2026-08-31",
      daily: "90–120 min",
      color: "#1e5a8e"
    },
    {
      id: "fase3",
      name: "Fase 3 — Intensivo",
      start: "2026-09-01",
      end: "2026-10-31",
      daily: "120–150 min",
      color: "#8d3f20"
    },
    {
      id: "fase4",
      name: "Fase 4 — Sprint Final",
      start: "2026-11-01",
      end: "2026-11-29",
      daily: "120–150 min",
      color: "#6d3cc2"
    }
  ],
  fixedRules: [
    "1 bloco de revisão acumulativa de 20–30 min por semana",
    "1 mini-lista mista com 6 a 10 questões antigas",
    "1 treino com visual: mapa, gráfico, tabela, charge ou infográfico",
    "1 registro obrigatório no caderno de erros",
    "Sexta ou sábado com bloco cronometrado",
    "Domingo livre ou com revisão leve"
  ],
  weeklyRoutine: [
    { day: "Segunda", task: "Teoria principal da semana" },
    { day: "Terça", task: "Teoria + exemplos resolvidos" },
    { day: "Quarta", task: "Exercícios guiados" },
    { day: "Quinta", task: "Exercícios independentes" },
    { day: "Sexta", task: "Revisão acumulativa + mini-lista mista" },
    { day: "Sábado", task: "Bloco cronometrado ou simulado parcial" },
    { day: "Domingo", task: "Descanso ou revisão leve" }
  ],
  weeks: AKEMY_WEEKS
};

window.AKEMY_HELPERS = {
  formatDayNumber(n) {
    return String(n).padStart(3, "0");
  },

  getPhaseByDate(dateStr) {
    const time = new Date(`${dateStr}T12:00:00`);
    return window.AKEMY_CONFIG.phases.find((phase) => {
      const start = new Date(`${phase.start}T00:00:00`);
      const end = new Date(`${phase.end}T23:59:59`);
      return time >= start && time <= end;
    });
  },

  generateStudyDays() {
    const days = [];
    const start = new Date(`${window.AKEMY_CONFIG.studyStart}T12:00:00`);
    const end = new Date(`${window.AKEMY_CONFIG.studyEnd}T12:00:00`);
    let current = new Date(start);
    let number = 1;

    while (current <= end) {
      const iso = current.toISOString().slice(0, 10);
      const available = window.AKEMY_CONFIG.availableApostilas.includes(number);

      days.push({
        number,
        date: iso,
        title:
          window.AKEMY_CONFIG.apostilaTitles[number] ||
          `Apostila ${String(number).padStart(3, "0")}`,
        phase: window.AKEMY_HELPERS.getPhaseByDate(iso)?.id || null,
        available,
        href: available
          ? `apostilas/dia-${String(number).padStart(3, "0")}.html`
          : null
      });

      current.setDate(current.getDate() + 1);
      number += 1;
    }

    return days;
  }
};

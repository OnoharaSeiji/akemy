window.AKEMY_CONFIG = (() => {
  const projectName = "Akemy Estudos · ETEC 2026";
  const startDate = "2026-03-23";
  const endDate = "2026-11-29";
  const examDateTime = "2026-11-30T13:30:00-03:00";
  const publishedAt = "2026-03-24";
  const autoDetectApostilas = true;
  const availableApostilas = [];
  const totalStudyDays = 216;

  const weeklyPlan = [
    {
      "week": 1,
      "arc": "Fase 1 · Base",
      "theme": "Diagnóstico e alinhamento",
      "playlist": "foco inicial",
      "monday": "Português · diagnóstico de leitura, comando e ideia principal",
      "tuesday": "Matemática · diagnóstico de operações, valor posicional e cálculo",
      "wednesday": "Humanas · linha do tempo, mapa e leitura inicial de gráfico",
      "thursday": "Ciências · método científico, observação, hipótese e leitura de tabela"
    },
    {
      "week": 2,
      "arc": "Fase 1 · Base",
      "theme": "Base de leitura e número",
      "playlist": "foco inicial",
      "monday": "Português · explícito, implícito e inferência básica",
      "tuesday": "Matemática · adição, subtração e problemas curtos",
      "wednesday": "Geografia · orientação, mapas, escala e pontos cardeais",
      "thursday": "Ciências · seres vivos, níveis de organização e características gerais"
    },
    {
      "week": 3,
      "arc": "Fase 1 · Base",
      "theme": "Fundamentos operatórios",
      "playlist": "foco inicial",
      "monday": "Português · gênero textual, finalidade e suporte",
      "tuesday": "Matemática · multiplicação, divisão e cálculo mental",
      "wednesday": "História · Brasil colonial, indígenas e colonização",
      "thursday": "Ciências · água, ar, solo e estados físicos da matéria"
    },
    {
      "week": 4,
      "arc": "Fase 1 · Base",
      "theme": "Frações e espaço",
      "playlist": "foco inicial",
      "monday": "Português · coesão, referência e sentido global",
      "tuesday": "Matemática · frações I",
      "wednesday": "Geografia · paisagem, lugar, território e urbanização inicial",
      "thursday": "Ciências · cadeia alimentar, relações ecológicas e equilíbrio ambiental"
    },
    {
      "week": 5,
      "arc": "Fase 1 · Base",
      "theme": "Frações aplicadas",
      "playlist": "foco inicial",
      "monday": "Português · pontuação e efeito de sentido",
      "tuesday": "Matemática · frações II e problemas cotidianos",
      "wednesday": "História · escravidão, resistência e abolição",
      "thursday": "Ciências · alimentação, digestão, nutrientes e saúde"
    },
    {
      "week": 6,
      "arc": "Fase 1 · Base",
      "theme": "Números decimais e medidas",
      "playlist": "foco inicial",
      "monday": "Português · classes de palavras em contexto",
      "tuesday": "Matemática · números decimais e sistema monetário",
      "wednesday": "Geografia · clima, tempo, relevo e paisagens do Brasil",
      "thursday": "Ciências · calor, temperatura e mudanças de estado"
    },
    {
      "week": 7,
      "arc": "Fase 1 · Base",
      "theme": "Porcentagem e cidadania",
      "playlist": "foco inicial",
      "monday": "Português · sintaxe básica e ordem da frase",
      "tuesday": "Matemática · porcentagem simples e descontos/acréscimos",
      "wednesday": "História · império, república e cidadania",
      "thursday": "Ciências · sistema respiratório, circulação e hábitos saudáveis"
    },
    {
      "week": 8,
      "arc": "Fase 1 · Base",
      "theme": "Razão e revisão de base",
      "playlist": "foco inicial",
      "monday": "Português · ortografia frequente, acentuação e regularidades",
      "tuesday": "Matemática · razão, proporção e escalas simples",
      "wednesday": "Geografia · população, migração e redes urbanas",
      "thursday": "Ciências · força, movimento e máquinas simples"
    },
    {
      "week": 9,
      "arc": "Fase 2 · Consolidação",
      "theme": "Ler melhor, resolver melhor",
      "playlist": "ritmo constante",
      "monday": "Português · revisão estratégica de leitura, inferência e comando",
      "tuesday": "Matemática · porcentagem em problemas e múltiplas etapas",
      "wednesday": "Humanas · leitura de gráficos, tabelas e infográficos sociais",
      "thursday": "Ciências · ecossistemas brasileiros e impactos humanos"
    },
    {
      "week": 10,
      "arc": "Fase 2 · Consolidação",
      "theme": "Narrativa, lógica e cartografia",
      "playlist": "ritmo constante",
      "monday": "Português · narrativa, crônica e elementos do enredo",
      "tuesday": "Matemática · equações do 1º grau I",
      "wednesday": "Geografia · cartografia, escala, legenda e coordenadas",
      "thursday": "Ciências · células, tecidos e organização do corpo"
    },
    {
      "week": 11,
      "arc": "Fase 2 · Consolidação",
      "theme": "Linguagem figurada e trabalho",
      "playlist": "ritmo constante",
      "monday": "Português · poema, conotação, denotação e figuras de linguagem",
      "tuesday": "Matemática · equações do 1º grau II",
      "wednesday": "História · trabalho, industrialização e transformações sociais",
      "thursday": "Ciências · misturas, separação de materiais e densidade"
    },
    {
      "week": 12,
      "arc": "Fase 2 · Consolidação",
      "theme": "Construir precisão",
      "playlist": "ritmo constante",
      "monday": "Português · concordância nominal e verbal em contexto",
      "tuesday": "Matemática · geometria plana I",
      "wednesday": "Geografia · recursos naturais, energia e impactos ambientais",
      "thursday": "Ciências · eletricidade básica, circuitos simples e consumo consciente"
    },
    {
      "week": 13,
      "arc": "Fase 2 · Consolidação",
      "theme": "Comparar e decidir",
      "playlist": "ritmo constante",
      "monday": "Português · variação linguística, norma e adequação",
      "tuesday": "Matemática · geometria plana II",
      "wednesday": "História · século XX, ditadura, democracia e direitos",
      "thursday": "Ciências · sistema nervoso, sentidos e coordenação do corpo"
    },
    {
      "week": 14,
      "arc": "Fase 2 · Consolidação",
      "theme": "Argumentar com clareza",
      "playlist": "ritmo constante",
      "monday": "Português · argumentação, opinião, fato e tese",
      "tuesday": "Matemática · perímetro, área e composição de figuras",
      "wednesday": "Geografia · economia, trabalho, consumo e globalização",
      "thursday": "Ciências · saúde pública, vacinas, vírus, bactérias e prevenção"
    },
    {
      "week": 15,
      "arc": "Fase 2 · Consolidação",
      "theme": "Ajuste fino da linguagem",
      "playlist": "ritmo constante",
      "monday": "Português · reescrita, coesão e coerência",
      "tuesday": "Matemática · grandezas, medidas e conversões",
      "wednesday": "História · república, cidadania e participação social",
      "thursday": "Ciências · genética básica, hereditariedade e biotecnologia inicial"
    },
    {
      "week": 16,
      "arc": "Fase 2 · Consolidação",
      "theme": "Interpretar além do óbvio",
      "playlist": "ritmo constante",
      "monday": "Português · leitura avançada com textos verbais e não verbais",
      "tuesday": "Matemática · estatística I · tabelas, médias e gráficos",
      "wednesday": "Geografia · campo, cidade, redes de produção e circulação",
      "thursday": "Ciências · astronomia, Terra, Lua, Sol e movimentos"
    },
    {
      "week": 17,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Comparar textos e estratégias",
      "playlist": "mistura inteligente",
      "monday": "Português · leitura comparativa de textos e fontes",
      "tuesday": "Matemática · estatística II e interpretação de dados",
      "wednesday": "História · ciência, tecnologia e sociedade",
      "thursday": "Ciências · matéria, materiais e propriedades"
    },
    {
      "week": 18,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Dados, mídia e mundo",
      "playlist": "mistura inteligente",
      "monday": "Português · infográficos, quadrinhos, propaganda e intenção",
      "tuesday": "Matemática · probabilidade I",
      "wednesday": "Geografia · água, energia e sustentabilidade",
      "thursday": "Ciências · transformações físicas e químicas no cotidiano"
    },
    {
      "week": 19,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Tempo, mudança e processo",
      "playlist": "mistura inteligente",
      "monday": "Português · verbos, tempos verbais e efeitos de sequência",
      "tuesday": "Matemática · probabilidade II",
      "wednesday": "História · movimentos sociais, cultura e cidadania",
      "thursday": "Ciências · eletricidade, magnetismo e aplicações cotidianas"
    },
    {
      "week": 20,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Aplicar em contexto",
      "playlist": "mistura inteligente",
      "monday": "Português · figuras de linguagem em textos reais",
      "tuesday": "Matemática · álgebra aplicada e problemas contextualizados",
      "wednesday": "Geografia · agro, indústria, serviços e cadeias produtivas",
      "thursday": "Ciências · força, velocidade, trajetórias e interpretação de situações"
    },
    {
      "week": 21,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Ciência, texto e sociedade",
      "playlist": "mistura inteligente",
      "monday": "Português · texto de divulgação científica",
      "tuesday": "Matemática · proporcionalidade, escalas e mapas",
      "wednesday": "História · democracia, participação e leitura de fontes",
      "thursday": "Ciências · corpo humano integrado e homeostase"
    },
    {
      "week": 22,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Misto com controle",
      "playlist": "mistura inteligente",
      "monday": "Português · revisão mista de leitura, gramática e comando",
      "tuesday": "Matemática · revisão mista de frações, porcentagem, equações e medidas",
      "wednesday": "Humanas · mapas, escalas, gráficos e cronologia",
      "thursday": "Ciências · ecologia, matéria, energia e corpo humano"
    },
    {
      "week": 23,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Leitura crítica de mídias",
      "playlist": "mistura inteligente",
      "monday": "Português · leitura crítica de mídias e redes",
      "tuesday": "Matemática · gráficos, médias, porcentagens e interpretação",
      "wednesday": "Humanas · Brasil contemporâneo, território e cidadania",
      "thursday": "Ciências · recursos naturais, clima, energia e impactos ambientais"
    },
    {
      "week": 24,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Interleaving 1",
      "playlist": "mistura inteligente",
      "monday": "Português · textos curtos de prova com comparação e inferência",
      "tuesday": "Matemática · operações, geometria e medidas em mistura",
      "wednesday": "Humanas · linha do tempo, mapa, gráfico e fonte histórica",
      "thursday": "Ciências · corpo humano, ecologia e matéria em mistura"
    },
    {
      "week": 25,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Interleaving 2",
      "playlist": "mistura inteligente",
      "monday": "Português · inferência, tese e linguagem figurada em contexto",
      "tuesday": "Matemática · equações, porcentagem e proporção em conjunto",
      "wednesday": "Humanas · urbanização, cidadania, economia e território",
      "thursday": "Ciências · energia, eletricidade, saúde e ambiente"
    },
    {
      "week": 26,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Interleaving 3",
      "playlist": "mistura inteligente",
      "monday": "Português · revisão de gêneros textuais e estratégias de prova",
      "tuesday": "Matemática · estatística, probabilidade e leitura gráfica",
      "wednesday": "Humanas · atualidades, documentos e leitura interdisciplinar",
      "thursday": "Ciências · experimentos, tabelas, gráficos e interpretação integrada"
    },
    {
      "week": 27,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 1",
      "playlist": "reta final",
      "monday": "Português · prova guiada de leitura e comando fino",
      "tuesday": "Matemática · prova guiada de problemas e estratégia",
      "wednesday": "Humanas · prova guiada com mapas, cronologia e gráficos",
      "thursday": "Ciências · prova guiada com experimentos, energia e corpo humano"
    },
    {
      "week": 28,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 2",
      "playlist": "reta final",
      "monday": "Português · recuperação de erros frequentes",
      "tuesday": "Matemática · recuperação de erros frequentes",
      "wednesday": "Humanas · recuperação de erros frequentes",
      "thursday": "Ciências · recuperação de erros frequentes"
    },
    {
      "week": 29,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 3",
      "playlist": "reta final",
      "monday": "Português · velocidade com precisão",
      "tuesday": "Matemática · rapidez sem pular etapas",
      "wednesday": "Humanas · leitura rápida de fontes e gráficos",
      "thursday": "Ciências · interpretação visual e experimental de questões"
    },
    {
      "week": 30,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 4",
      "playlist": "reta final",
      "monday": "Português · textos híbridos, inferência e tese",
      "tuesday": "Matemática · problemas de múltiplas etapas e gestão de tempo",
      "wednesday": "Humanas · mapas, tabelas e leitura crítica interdisciplinar",
      "thursday": "Ciências · experimentos, gráficos, cotidiano e intervenção humana"
    },
    {
      "week": 31,
      "arc": "Fase 5 · Simulados",
      "theme": "Simulados orientados 1",
      "playlist": "simulados",
      "monday": "Português · bloco cronometrado de alta recorrência",
      "tuesday": "Matemática · bloco cronometrado de alta recorrência",
      "wednesday": "Humanas · bloco cronometrado de alta recorrência",
      "thursday": "Ciências · bloco cronometrado de alta recorrência"
    },
    {
      "week": 32,
      "arc": "Fase 5 · Simulados",
      "theme": "Simulados orientados 2",
      "playlist": "simulados",
      "monday": "Português · textos mais difíceis e revisão final",
      "tuesday": "Matemática · problemas mais difíceis e revisão final",
      "wednesday": "Humanas · leitura integrada e revisão final",
      "thursday": "Ciências · interpretação integrada e revisão final"
    },
    {
      "week": 33,
      "arc": "Fase 5 · Simulados",
      "theme": "Ataque aos erros recorrentes",
      "playlist": "simulados",
      "monday": "Português · caderno de erros e reensino",
      "tuesday": "Matemática · caderno de erros e reensino",
      "wednesday": "Humanas · caderno de erros e reensino",
      "thursday": "Ciências · caderno de erros e reensino"
    },
    {
      "week": 34,
      "arc": "Fase 5 · Simulados",
      "theme": "Prova real 1",
      "playlist": "simulados",
      "monday": "Português · simulado parcial com correção guiada",
      "tuesday": "Matemática · simulado parcial com correção guiada",
      "wednesday": "Humanas · simulado parcial com correção guiada",
      "thursday": "Ciências · simulado parcial com correção guiada"
    },
    {
      "week": 35,
      "arc": "Fase 5 · Simulados",
      "theme": "Prova real 2",
      "playlist": "simulados",
      "monday": "Português · itens de alta recorrência",
      "tuesday": "Matemática · itens de alta recorrência",
      "wednesday": "Humanas · itens de alta recorrência",
      "thursday": "Ciências · itens de alta recorrência"
    },
    {
      "week": 36,
      "arc": "Fase 5 · Simulados",
      "theme": "Semana leve pré-prova",
      "playlist": "simulados",
      "monday": "Português · leitura leve de confiança e repertório",
      "tuesday": "Matemática · revisão essencial e aquecimento",
      "wednesday": "Humanas · revisão essencial e segurança",
      "thursday": "Ciências · revisão essencial e segurança"
    }
  ];

  const cadenceLabels = [
    { key: "conteudo", label: "Seg–Qui · Conteúdo" },
    { key: "revisao", label: "Sex · Revisão" },
    { key: "mini_simulado", label: "Sáb · Mini Simulado" },
    { key: "descanso", label: "Dom · Descanso" }
  ];

  function parseIso(iso) {
    const [year, month, day] = iso.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day));
  }

  function addDays(iso, amount) {
    const date = parseIso(iso);
    date.setUTCDate(date.getUTCDate() + amount);
    return date.toISOString().slice(0, 10);
  }

  function padDay(n) {
    return String(n).padStart(3, "0");
  }

  function getReviewTitle(weekNumber) {
    const label = String(weekNumber).padStart(2, "0");

    if (weekNumber === 1) {
      return `Revisão diagnóstica da semana ${label} · corrigir base e ajustar ritmo`;
    }

    if (weekNumber % 4 === 0 && weekNumber <= 24) {
      return `Revisão acumulada ${String(weekNumber / 4).padStart(2, "0")} · últimas 4 semanas + caderno de erros`;
    }

    if (weekNumber >= 27 && weekNumber <= 30) {
      return `Revisão estratégica ${label} · recuperação de lacunas e ajuste fino`;
    }

    if (weekNumber >= 31) {
      return `Correção orientada ${label} · erros recorrentes e decisão de prova`;
    }

    return `Revisão da semana ${label} · consolidar erros, padrões e atalhos`;
  }

  function getSimuladoTitle(weekNumber) {
    const label = String(weekNumber).padStart(2, "0");

    if (weekNumber === 1) {
      return `Mini simulado diagnóstico ${label} · leitura, cálculo e noção de prova`;
    }

    if (weekNumber % 4 === 0 && weekNumber <= 24) {
      return `Simulado acumulado ${String(weekNumber / 4).padStart(2, "0")} · bloco misto das últimas 4 semanas`;
    }

    if (weekNumber >= 27 && weekNumber <= 30) {
      return `Simulado parcial ${label} · prova mista por áreas`;
    }

    if (weekNumber >= 31) {
      return `Simulado cronometrado ${label} · alta recorrência e estratégia`;
    }

    return `Mini simulado da semana ${label} · ritmo, leitura e confiança`;
  }

  const weeks = weeklyPlan.map((item, index) => {
    const start = addDays(startDate, index * 7);
    const end = addDays(startDate, index * 7 + 6);

    return {
      number: item.week,
      start,
      end,
      theme: item.theme,
      arc: item.arc,
      playlist: item.playlist
    };
  });

  const phaseRanges = [];
  for (const week of weeks) {
    const current = phaseRanges[phaseRanges.length - 1];
    if (!current || current.label !== week.arc) {
      phaseRanges.push({
        key: `fase-${phaseRanges.length + 1}`,
        label: week.arc,
        start: week.start,
        end: week.end
      });
    } else {
      current.end = week.end;
    }
  }

  const visuals = ["playlist", "logica", "mapa", "laboratorio", "revisao", "simulado", "descanso"];
  const studyDays = [];
  let dayNumber = 1;

  weeklyPlan.forEach((week, weekIndex) => {
    const baseOffset = weekIndex * 7;
    const contentTitles = [week.monday, week.tuesday, week.wednesday, week.thursday];

    for (let weekday = 0; weekday < 7; weekday++) {
      const date = addDays(startDate, baseOffset + weekday);

      if (weekday <= 3) {
        studyDays.push({
          date,
          week: week.week,
          weekday,
          mode: "conteudo",
          title: contentTitles[weekday],
          theme: week.theme,
          arc: week.arc,
          playlist: week.playlist,
          visual: visuals[weekday],
          number: dayNumber,
          slug: `dia-${padDay(dayNumber)}.html`,
          href: `apostilas/dia-${padDay(dayNumber)}.html`
        });
        dayNumber++;
        continue;
      }

      if (weekday === 4) {
        studyDays.push({
          date,
          week: week.week,
          weekday,
          mode: "revisao",
          title: getReviewTitle(week.week),
          theme: week.theme,
          arc: week.arc,
          playlist: week.playlist,
          visual: visuals[weekday],
          number: dayNumber,
          slug: `dia-${padDay(dayNumber)}.html`,
          href: `apostilas/dia-${padDay(dayNumber)}.html`
        });
        dayNumber++;
        continue;
      }

      if (weekday === 5) {
        studyDays.push({
          date,
          week: week.week,
          weekday,
          mode: "mini_simulado",
          title: getSimuladoTitle(week.week),
          theme: week.theme,
          arc: week.arc,
          playlist: week.playlist,
          visual: visuals[weekday],
          number: dayNumber,
          slug: `dia-${padDay(dayNumber)}.html`,
          href: `apostilas/dia-${padDay(dayNumber)}.html`
        });
        dayNumber++;
        continue;
      }

      studyDays.push({
        date,
        week: week.week,
        weekday,
        mode: "descanso",
        title: "Descanso ativo · recuperar energia e manter contato leve",
        theme: week.theme,
        arc: week.arc,
        playlist: week.playlist,
        visual: visuals[weekday]
      });
    }
  });

  return {
    projectName,
    startDate,
    endDate,
    examDateTime,
    publishedAt,
    autoDetectApostilas,
    availableApostilas,
    totalStudyDays,
    weeklyPlan,
    weeks,
    studyDays,
    phases: phaseRanges,
    cadenceLabels
  };
})();

window.AKEMY_HELPERS = {
  formatDayNumber(n) {
    return String(n).padStart(3, "0");
  },
  getPhaseByDate(iso) {
    return window.AKEMY_CONFIG.phases.find(phase => iso >= phase.start && iso <= phase.end) || null;
  },
  getStudyDayByIso(iso) {
    return window.AKEMY_CONFIG.studyDays.find(day => day.date === iso) || null;
  },
  generateStudyDays() {
    return window.AKEMY_CONFIG.studyDays;
  }
};

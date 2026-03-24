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
      "theme": "Aquecimento e diagnóstico inteligente",
      "playlist": "rock de largada",
      "monday": "Português · leitura de comando, assunto e ideia principal",
      "tuesday": "Matemática · valor posicional e as 4 operações",
      "wednesday": "Humanas · tempo histórico, século e linha do tempo",
      "thursday": "Ciências · observação, hipótese e leitura de tabelas"
    },
    {
      "week": 2,
      "arc": "Fase 1 · Base",
      "theme": "Entender antes de decorar",
      "playlist": "feed de organização",
      "monday": "Português · explícito, implícito e inferência básica",
      "tuesday": "Matemática · adição, subtração e problemas curtos",
      "wednesday": "Geografia · orientação, mapas e pontos cardeais",
      "thursday": "Ciências · seres vivos e características gerais"
    },
    {
      "week": 3,
      "arc": "Fase 1 · Base",
      "theme": "Leitura que enxerga pistas",
      "playlist": "clima de saga",
      "monday": "Português · gênero textual e finalidade",
      "tuesday": "Matemática · multiplicação e divisão",
      "wednesday": "História · Brasil colonial em linguagem simples",
      "thursday": "Ciências · cadeia alimentar e relações ecológicas"
    },
    {
      "week": 4,
      "arc": "Fase 1 · Base",
      "theme": "Compreender relações e padrões",
      "playlist": "cinema fantástico",
      "monday": "Português · coesão, referência e sentido no texto",
      "tuesday": "Matemática · frações I",
      "wednesday": "Geografia · paisagem, lugar e território",
      "thursday": "Ciências · água, ar e solo"
    },
    {
      "week": 5,
      "arc": "Fase 1 · Base",
      "theme": "Fundação sólida sem pressa",
      "playlist": "playlist de foco",
      "monday": "Português · pontuação e efeito de sentido",
      "tuesday": "Matemática · frações II",
      "wednesday": "História · indígenas, colonização e resistência",
      "thursday": "Ciências · sistema digestório e hábitos saudáveis"
    },
    {
      "week": 6,
      "arc": "Fase 1 · Base",
      "theme": "Leitura e número em conexão",
      "playlist": "estética social",
      "monday": "Português · classes de palavras I",
      "tuesday": "Matemática · números decimais",
      "wednesday": "Geografia · clima, tempo e relevo",
      "thursday": "Ciências · estados físicos e mudanças da matéria"
    },
    {
      "week": 7,
      "arc": "Fase 1 · Base",
      "theme": "Do concreto para o símbolo",
      "playlist": "castelo mágico",
      "monday": "Português · classes de palavras II",
      "tuesday": "Matemática · porcentagem simples",
      "wednesday": "História · independência, império e república",
      "thursday": "Ciências · energia, calor e transformações"
    },
    {
      "week": 8,
      "arc": "Fase 1 · Base",
      "theme": "Primeiro fechamento de ciclo",
      "playlist": "rock melódico",
      "monday": "Português · sintaxe básica e ordem da frase",
      "tuesday": "Matemática · razão e proporção",
      "wednesday": "Geografia · população, urbanização e migração",
      "thursday": "Ciências · sistema respiratório e circulação"
    },
    {
      "week": 9,
      "arc": "Fase 2 · Consolidação",
      "theme": "Ler melhor, resolver melhor",
      "playlist": "feed criativo",
      "monday": "Português · revisão estratégica de leitura e inferência",
      "tuesday": "Matemática · porcentagem em problemas",
      "wednesday": "Humanas · leitura de gráficos e tabelas sociais",
      "thursday": "Ciências · método científico e interpretação de dados"
    },
    {
      "week": 10,
      "arc": "Fase 2 · Consolidação",
      "theme": "Narrativa, lógica e localização",
      "playlist": "universo de magia",
      "monday": "Português · narrativa, crônica e elementos do enredo",
      "tuesday": "Matemática · equações do 1º grau I",
      "wednesday": "Geografia · cartografia, escala e legenda",
      "thursday": "Ciências · ecossistemas brasileiros"
    },
    {
      "week": 11,
      "arc": "Fase 2 · Consolidação",
      "theme": "Imagem, texto e conta",
      "playlist": "noite lilás",
      "monday": "Português · poema, conotação e linguagem figurada",
      "tuesday": "Matemática · equações do 1º grau II",
      "wednesday": "História · trabalho, escravidão e abolição",
      "thursday": "Ciências · células, tecidos e organização do corpo"
    },
    {
      "week": 12,
      "arc": "Fase 2 · Consolidação",
      "theme": "Construir precisão",
      "playlist": "playlist vintage",
      "monday": "Português · concordância nominal e verbal básica",
      "tuesday": "Matemática · geometria plana I",
      "wednesday": "Geografia · recursos naturais e impactos ambientais",
      "thursday": "Ciências · alimentação, nutrientes e energia"
    },
    {
      "week": 13,
      "arc": "Fase 2 · Consolidação",
      "theme": "Comparar e decidir",
      "playlist": "romance sombrio",
      "monday": "Português · variação linguística e uso da norma",
      "tuesday": "Matemática · geometria plana II",
      "wednesday": "História · industrialização e vida urbana",
      "thursday": "Ciências · sistema excretor e equilíbrio do corpo"
    },
    {
      "week": 14,
      "arc": "Fase 2 · Consolidação",
      "theme": "Argumentar com clareza",
      "playlist": "feed storytelling",
      "monday": "Português · argumentação, opinião e fato",
      "tuesday": "Matemática · perímetro e área",
      "wednesday": "Geografia · economia, trabalho e consumo",
      "thursday": "Ciências · saúde pública, vacinas e prevenção"
    },
    {
      "week": 15,
      "arc": "Fase 2 · Consolidação",
      "theme": "Ajuste fino da linguagem",
      "playlist": "rock nacional",
      "monday": "Português · ortografia, acentuação e regularidades",
      "tuesday": "Matemática · grandezas e medidas",
      "wednesday": "História · república, cidadania e participação",
      "thursday": "Ciências · sistema nervoso e sentidos"
    },
    {
      "week": 16,
      "arc": "Fase 2 · Consolidação",
      "theme": "Interpretar além do óbvio",
      "playlist": "cinema de aventura",
      "monday": "Português · interpretação avançada com múltiplas pistas",
      "tuesday": "Matemática · estatística I",
      "wednesday": "Geografia · globalização, redes e circulação",
      "thursday": "Ciências · genética básica e hereditariedade"
    },
    {
      "week": 17,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Comparar textos e estratégias",
      "playlist": "luzes do palco",
      "monday": "Português · leitura comparativa de textos",
      "tuesday": "Matemática · estatística II",
      "wednesday": "História · século XX em linhas gerais",
      "thursday": "Ciências · probabilidade em situações cotidianas"
    },
    {
      "week": 18,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Dados, mídia e mundo",
      "playlist": "feed noturno",
      "monday": "Português · infográficos, quadrinhos e propaganda",
      "tuesday": "Matemática · probabilidade I",
      "wednesday": "Geografia · água, energia e sustentabilidade",
      "thursday": "Ciências · astronomia e movimentos da Terra"
    },
    {
      "week": 19,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Tempo, mudança e processo",
      "playlist": "mistério pop",
      "monday": "Português · verbos, tempos verbais e efeito de sequência",
      "tuesday": "Matemática · probabilidade II",
      "wednesday": "História · ditadura, democracia e direitos",
      "thursday": "Ciências · transformações químicas e físicas"
    },
    {
      "week": 20,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Aplicar em contexto",
      "playlist": "aquarela mágica",
      "monday": "Português · figuras de linguagem em textos reais",
      "tuesday": "Matemática · álgebra aplicada a problemas",
      "wednesday": "Geografia · campo, cidade e redes de produção",
      "thursday": "Ciências · sistema locomotor e movimento"
    },
    {
      "week": 21,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Ciência, texto e sociedade",
      "playlist": "mood de revisão",
      "monday": "Português · texto de divulgação científica",
      "tuesday": "Matemática · proporcionalidade e escalas",
      "wednesday": "História · ciência, tecnologia e sociedade",
      "thursday": "Ciências · corpo humano integrado"
    },
    {
      "week": 22,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Misto com controle",
      "playlist": "tela widescreen",
      "monday": "Português · revisão mista de leitura e gramática",
      "tuesday": "Matemática · revisão mista de frações, porcentagem e equações",
      "wednesday": "Geografia · mapas, escalas e gráficos",
      "thursday": "Ciências · ecologia e corpo humano em alternância"
    },
    {
      "week": 23,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Leitura crítica de mídias",
      "playlist": "reels com propósito",
      "monday": "Português · leitura crítica de mídias e redes",
      "tuesday": "Matemática · gráficos, médias e interpretação",
      "wednesday": "História · movimentos sociais e cultura",
      "thursday": "Ciências · ecossistemas e impactos humanos"
    },
    {
      "week": 24,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Interleaving 1",
      "playlist": "setlist misto",
      "monday": "Português · textos curtos de prova com comparação",
      "tuesday": "Matemática · mistura de operações e geometria",
      "wednesday": "Humanas · linha do tempo + mapa + gráfico",
      "thursday": "Ciências · mistura de corpo humano e ecologia"
    },
    {
      "week": 25,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Interleaving 2",
      "playlist": "noite de maratona",
      "monday": "Português · inferência + gramática em contexto",
      "tuesday": "Matemática · equações + porcentagem + medidas",
      "wednesday": "Humanas · urbanização + cidadania + história do Brasil",
      "thursday": "Ciências · matéria + energia + saúde"
    },
    {
      "week": 26,
      "arc": "Fase 3 · Aprofundamento",
      "theme": "Interleaving 3",
      "playlist": "castelo e cidade",
      "monday": "Português · revisão de gêneros textuais",
      "tuesday": "Matemática · estatística + probabilidade + leitura gráfica",
      "wednesday": "Humanas · atualidades e interpretação documental",
      "thursday": "Ciências · revisão interdisciplinar com tabelas e diagramas"
    },
    {
      "week": 27,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 1",
      "playlist": "palco principal",
      "monday": "Português · prova guiada de leitura",
      "tuesday": "Matemática · prova guiada de problemas",
      "wednesday": "Humanas · prova guiada com mapas e cronologia",
      "thursday": "Ciências · prova guiada com gráficos e experimentos"
    },
    {
      "week": 28,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 2",
      "playlist": "filme de virada",
      "monday": "Português · recuperação de erros frequentes",
      "tuesday": "Matemática · recuperação de erros frequentes",
      "wednesday": "Humanas · recuperação de erros frequentes",
      "thursday": "Ciências · recuperação de erros frequentes"
    },
    {
      "week": 29,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 3",
      "playlist": "álbum favorito",
      "monday": "Português · velocidade com precisão",
      "tuesday": "Matemática · rapidez sem pular etapas",
      "wednesday": "Humanas · leitura rápida de fontes",
      "thursday": "Ciências · interpretação visual de questões"
    },
    {
      "week": 30,
      "arc": "Fase 4 · Reta final",
      "theme": "Reta final 4",
      "playlist": "feed impecável",
      "monday": "Português · textos híbridos e comando fino",
      "tuesday": "Matemática · problemas de múltiplas etapas",
      "wednesday": "Humanas · mapas, tabelas e leitura crítica",
      "thursday": "Ciências · experimentos, gráficos e cotidiano"
    },
    {
      "week": 31,
      "arc": "Fase 5 · Simulados",
      "theme": "Simulados orientados 1",
      "playlist": "saga final",
      "monday": "Português · treino por blocos cronometrados",
      "tuesday": "Matemática · treino por blocos cronometrados",
      "wednesday": "Humanas · treino por blocos cronometrados",
      "thursday": "Ciências · treino por blocos cronometrados"
    },
    {
      "week": 32,
      "arc": "Fase 5 · Simulados",
      "theme": "Simulados orientados 2",
      "playlist": "clima de estreia",
      "monday": "Português · textos mais difíceis e revisão final",
      "tuesday": "Matemática · problemas mais difíceis e revisão final",
      "wednesday": "Humanas · leitura integrada e revisão final",
      "thursday": "Ciências · interpretação integrada e revisão final"
    },
    {
      "week": 33,
      "arc": "Fase 5 · Simulados",
      "theme": "Ataque aos erros recorrentes",
      "playlist": "edição deluxe",
      "monday": "Português · erros do caderno de erros",
      "tuesday": "Matemática · erros do caderno de erros",
      "wednesday": "Humanas · erros do caderno de erros",
      "thursday": "Ciências · erros do caderno de erros"
    },
    {
      "week": 34,
      "arc": "Fase 5 · Simulados",
      "theme": "Prova real 1",
      "playlist": "ensaio geral",
      "monday": "Português · simulado parcial com correção guiada",
      "tuesday": "Matemática · simulado parcial com correção guiada",
      "wednesday": "Humanas · simulado parcial com correção guiada",
      "thursday": "Ciências · simulado parcial com correção guiada"
    },
    {
      "week": 35,
      "arc": "Fase 5 · Simulados",
      "theme": "Prova real 2",
      "playlist": "último ato",
      "monday": "Português · itens de alta recorrência",
      "tuesday": "Matemática · itens de alta recorrência",
      "wednesday": "Humanas · itens de alta recorrência",
      "thursday": "Ciências · itens de alta recorrência"
    },
    {
      "week": 36,
      "arc": "Fase 5 · Simulados",
      "theme": "Semana leve pré-prova",
      "playlist": "respira e confia",
      "monday": "Português · leitura leve de confiança",
      "tuesday": "Matemática · revisão essencial",
      "wednesday": "Humanas · revisão essencial",
      "thursday": "Ciências · revisão essencial"
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
          title: `Revisão da semana ${String(week.week).padStart(2, "0")} · consolidar erros, padrões e atalhos`,
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
          title: `Mini simulado da semana ${String(week.week).padStart(2, "0")} · ritmo, leitura e confiança`,
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

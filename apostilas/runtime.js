(() => {
  const cfg = window.AKEMY_CONFIG;
  if (!cfg) {
    document.body.innerHTML = '<main style="font-family:Arial,sans-serif;padding:24px;color:#1f2937;background:#f7f6f2;min-height:100vh">Erro ao carregar config.js</main>';
    return;
  }

  const dayNumber = Number(document.body.dataset.day || (location.pathname.match(/dia-(\d+)\.html/) || [])[1]);
  const current = cfg.studyDays.find(d => d.number === dayNumber);
  const prev = cfg.studyDays.find(d => d.number === dayNumber - 1);
  const next = cfg.studyDays.find(d => d.number === dayNumber + 1);

  const pad = n => String(n).padStart(3, '0');
  const esc = s => String(s ?? '').replace(/[&<>\\"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  const slug = txt => encodeURIComponent(String(txt || '').toLowerCase());
  const yt = q => `https://www.youtube.com/results?search_query=${slug(q)}`;

  const styles = `
    :root{
      --bg:#f7f6f2;--panel:#ffffff;--panel2:#f3efe7;--line:rgba(31,41,55,.12);--text:#1f2937;
      --muted:#4b5563;--soft:#6b7280;--rose:#b85c6b;--wine:#a84b4b;--violet:#6d56c9;--blue:#243b6b;
      --gold:#e9d8a6;--mint:#2f6f5e;--shadow:0 20px 48px rgba(31,41,55,.08)
    }
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,Segoe UI,Arial,sans-serif;color:var(--text);background:
      radial-gradient(circle at 8% 10%, rgba(36,59,107,.06), transparent 25%),
      radial-gradient(circle at 92% 14%, rgba(47,111,94,.05), transparent 22%),
      linear-gradient(180deg,#f7f6f2 0%,#f3efe7 100%)}
    a{color:inherit}.page{width:min(1180px,calc(100% - 24px));margin:0 auto;padding:24px 0 52px}
    .hero,.section{background:#fff;border:1px solid var(--line);border-radius:28px;box-shadow:var(--shadow)}
    .hero{padding:26px;position:relative;overflow:hidden}.hero:before,.hero:after{content:"";position:absolute;border-radius:50%;filter:blur(22px);opacity:.28}
    .hero:before{width:180px;height:180px;right:-30px;top:-30px;background:radial-gradient(circle,rgba(184,92,107,.32),transparent 70%)}
    .hero:after{width:220px;height:220px;left:-50px;bottom:-70px;background:radial-gradient(circle,rgba(36,59,107,.22),transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:1.12fr .88fr;gap:20px;position:relative;z-index:1}.hero-art{display:grid;gap:12px}
    .eyebrow{display:flex;gap:8px;flex-wrap:wrap}.pill,.chip,.tag,.mode-badge{display:inline-flex;align-items:center;gap:8px;border-radius:999px;border:1px solid var(--line)}
    .pill{padding:8px 12px;background:rgba(233,216,166,.42);font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#5b4a18}
    h1,h2,h3,h4,p{margin:0}.hero h1{margin-top:14px;font-size:clamp(2rem,5vw,3.6rem);line-height:1.03;max-width:12ch}
    .lead{margin-top:16px;color:var(--muted);font-size:1.06rem;line-height:1.72;max-width:64ch}
    .hero-actions,.nav{display:flex;gap:12px;flex-wrap:wrap;margin-top:20px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 18px;border-radius:16px;text-decoration:none;font-weight:800;border:1px solid var(--line)}
    .btn-primary{background:linear-gradient(135deg,var(--blue),#2e4a85);color:#fff;border-color:transparent}.btn-secondary{background:#fff}
    .hero-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:18px}.mini-card,.card,.quiz-card,.flow-card,.exercise,.video,.week-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:18px}
    .mini-card span,.muted-label,.tiny{display:block;color:var(--soft);font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:.08em}.mini-card strong{font-size:1.05rem}
    .poster{min-height:170px;padding:18px;border-radius:24px;position:relative;overflow:hidden;border:1px solid rgba(31,41,55,.08);display:flex;flex-direction:column;justify-content:flex-end}
    .poster:before{content:"";position:absolute;right:-20px;top:-18px;width:140px;height:140px;border-radius:50%;opacity:.28}.poster-rock{background:linear-gradient(160deg,rgba(184,92,107,.14),rgba(255,255,255,.98))}.poster-rock:before{background:radial-gradient(circle,rgba(233,216,166,.9),transparent 62%)}
    .poster-social{background:linear-gradient(160deg,rgba(36,59,107,.10),rgba(255,255,255,.98))}.poster-social:before{background:radial-gradient(circle,rgba(47,111,94,.22),transparent 62%)}
    .poster .mode-badge{position:absolute;top:16px;left:16px;padding:7px 10px;background:#f8fafc;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#243b6b}
    .poster strong{font-size:1.35rem;line-height:1.08;max-width:12ch}.poster small{margin-top:8px;color:var(--muted);line-height:1.6}
    .stack{display:grid;gap:18px;margin-top:18px}.section{padding:22px}.section-title{color:#243b6b;text-transform:uppercase;letter-spacing:.12em;font-size:12px;font-weight:800;margin-bottom:10px}
    .section h2{font-size:clamp(1.6rem,3vw,2.5rem);margin-bottom:10px}.section-intro,.card p,.card li,.exercise li,.exercise p,.quiz-card p,.video p,.week-card p{color:var(--muted);line-height:1.72}
    .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:18px}.grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.focus-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:16px}
    .focus-box{padding:16px;border-radius:18px;background:#fff;border:1px solid var(--line)}.focus-box strong{display:block;font-size:1rem;margin-bottom:8px}.focus-box p{color:var(--muted);line-height:1.65}
    .formula{margin-top:14px;padding:14px 16px;border-radius:18px;background:rgba(233,216,166,.42);border:1px solid rgba(31,41,55,.10);color:#5b4a18;line-height:1.68;font-weight:700}
    details{margin-top:12px;border-radius:16px;border:1px solid var(--line);background:#f9fafb;overflow:hidden}summary{cursor:pointer;list-style:none;padding:14px 16px;font-weight:800}summary::-webkit-details-marker{display:none}details div{padding:0 16px 16px;color:var(--muted);line-height:1.7}
    .quiz-wrap,.qa,.practice-list,.videos,.week-grid{display:grid;gap:14px;margin-top:16px}.chip-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}.chip{padding:8px 12px;background:#f8fafc;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#243b6b}
    .flow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:14px}.flow-card strong{display:block;margin-bottom:8px}.table-wrap{overflow:auto;margin-top:16px;border:1px solid var(--line);border-radius:18px}table{width:100%;min-width:560px;border-collapse:collapse;background:#fff}th,td{padding:14px 16px;text-align:left;border-bottom:1px solid var(--line);color:var(--muted);line-height:1.62}th{color:#243b6b;background:#f8fafc;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
    .exercise strong,.video strong,.week-card strong{display:block;font-size:1rem;line-height:1.55;margin-bottom:8px}.video a{text-decoration:none;color:#243b6b}.nav{justify-content:space-between}.footer-note{margin-top:12px;color:var(--soft);font-size:.92rem;text-align:center}
    @media (max-width:1024px){.hero-grid,.grid-2,.grid-3,.focus-row,.flow{grid-template-columns:1fr}.hero-meta{grid-template-columns:1fr 1fr}}
    @media (max-width:720px){.page{width:min(100% - 16px,1180px)}.hero,.section{padding:18px}.hero-meta{grid-template-columns:1fr}.nav,.hero-actions{flex-direction:column;align-items:stretch}}
  `;

  function injectStyles(){
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function splitTitle(title){
    const parts = String(title || '').split('·').map(p => p.trim()).filter(Boolean);
    if (parts.length >= 2) return { subject: parts[0], topic: parts.slice(1).join(' · ') };
    return { subject: 'Estudos', topic: String(title || '') };
  }

  function daySummary(day){
    if (!day) return 'Nenhuma aula anterior encontrada.';
    if (day.mode === 'conteudo') {
      const {subject, topic} = splitTitle(day.title);
      return `A aula trabalhou ${topic.toLowerCase()} em ${subject}, sempre saindo do concreto para a aplicação em prova.`;
    }
    if (day.mode === 'revisao') return `A revisão da semana ${String(day.week).padStart(2,'0')} consolidou os conteúdos, puxou padrões de erro e preparou a base para o mini simulado.`;
    return `O mini simulado da semana ${String(day.week).padStart(2,'0')} mediu ritmo, leitura de comando e consistência entre assuntos misturados.`;
  }

  function commonError(subject, topic){
    const t = topic.toLowerCase();
    if (subject === 'Português') {
      if (t.includes('infer')) return 'inventar interpretação sem base suficiente nas pistas do texto';
      if (t.includes('gênero')) return 'confundir forma do texto com finalidade comunicativa';
      if (t.includes('pontuação')) return 'achar que pontuação serve só para pausa e ignorar efeito de sentido';
      return 'ler rápido, responder bonito e não fiel ao texto';
    }
    if (subject === 'Matemática') {
      if (t.includes('fraç')) return 'olhar só para os números e não para a relação parte-todo';
      if (t.includes('porcent')) return 'aplicar regra sem entender o valor de referência';
      if (t.includes('equa')) return 'mexer nos dois lados da igualdade sem manter equilíbrio';
      return 'escolher a operação pelo impulso e não pelo sentido do enunciado';
    }
    if (subject === 'Ciências') return 'tirar conclusão maior do que os dados realmente permitem';
    if (subject === 'Geografia') return 'decorar palavras do mapa sem ler relações espaciais';
    if (subject === 'História' || subject === 'Humanas') return 'misturar fatos, tempo e contexto sem organizar a sequência';
    return 'pular da informação solta para a resposta final sem organizar o raciocínio';
  }

  function concreteScenario(subject, topic){
    if (subject === 'Português') return {
      badge:'feed + leitura',
      title:`Um texto curto sobre ${topic.toLowerCase()}`,
      text:`Imagine um post, uma legenda, um aviso da escola ou um trecho de prova. O treino de hoje é perceber como ${topic.toLowerCase()} aparece em textos reais, sem depender de decoração vazia.`
    };
    if (subject === 'Matemática') return {
      badge:'loja + contagem',
      title:`Problema real com ${topic.toLowerCase()}`,
      text:`Pense em compra, kit, ingresso, divisão de itens ou medição de espaço. A meta é transformar ${topic.toLowerCase()} em algo visível antes de cair na conta.`
    };
    if (subject === 'Geografia') return {
      badge:'mapa + deslocamento',
      title:`Ver ${topic.toLowerCase()} no mundo concreto`,
      text:`Você parte da escola, olha um mapa, lê um bairro, entende posição, circulação ou paisagem. O conteúdo de hoje nasce do espaço vivido antes de virar conceito.`
    };
    if (subject === 'História' || subject === 'Humanas') return {
      badge:'linha do tempo',
      title:`Contexto primeiro, nome depois`,
      text:`O foco de hoje é organizar tempo, processo, mudança e permanência. Em vez de decorar datas soltas, você enxerga por que ${topic.toLowerCase()} importa no fluxo histórico e social.`
    };
    return {
      badge:'laboratório + cotidiano',
      title:`Ciência aplicada a ${topic.toLowerCase()}`,
      text:`A aula começa com observação do cotidiano, tabela, comparação ou experimento simples. O objetivo é entender ${topic.toLowerCase()} com evidência antes da formalização.`
    };
  }

  function conceptCards(subject, topic){
    return [
      {title:'Entender', text:`Compreender ${topic.toLowerCase()} sem decorar seco, usando exemplos reais e linguagem clara.`},
      {title:'Visualizar', text:`Transformar o conteúdo em esquema, comparação, fluxo ou quadro-resumo para reduzir confusão.`},
      {title:'Aplicar', text:`Resolver itens com cara de prova usando estratégia e não impulso.`}
    ];
  }

  function guidedQuestions(subject, topic){
    return [
      {
        q:`Qual é a ideia central que você precisa dominar em ${topic.toLowerCase()}?`,
        a:`A base é entender como ${topic.toLowerCase()} funciona por dentro, identificar o padrão e só depois aplicar em exercício.`
      },
      {
        q:`Que pista do enunciado ajuda mais a reconhecer ${topic.toLowerCase()} em uma questão?`,
        a:`As palavras-chave, o contexto do problema e o tipo de relação pedida pelo comando costumam apontar o caminho correto.`
      },
      {
        q:`Qual erro comum deve ser evitado hoje?`,
        a:`Evite ${commonError(subject, topic)}.`
      }
    ];
  }

  function practiceItems(subject, topic){
    return [
      `Explique com suas palavras o que significa ${topic.toLowerCase()} sem copiar definição pronta.`,
      `Crie um exemplo curto do cotidiano em que ${topic.toLowerCase()} apareça de forma clara.`,
      `Resolva um item de prova perguntando primeiro: o que o enunciado realmente quer de mim?`,
      `Anote no caderno qual seria a pegadinha mais provável desse tema e como você vai neutralizá-la.`
    ];
  }

  function contentPage(){
    const {subject, topic} = splitTitle(current.title);
    const scenario = concreteScenario(subject, topic);
    const cards = conceptCards(subject, topic);
    const guided = guidedQuestions(subject, topic);
    const practice = practiceItems(subject, topic);
    document.title = `Akemy Estudos · Dia ${pad(current.number)}`;
    return `
      <main class="page">
        <section class="hero">
          <div class="hero-grid">
            <div>
              <div class="eyebrow">
                <span class="pill">${esc(current.arc)}</span>
                <span class="pill">Semana ${String(current.week).padStart(2,'0')}</span>
                <span class="pill">Dia ${pad(current.number)}</span>
                <span class="pill">${esc(subject)}</span>
              </div>
              <h1>${esc(current.title)}</h1>
              <p class="lead">Hoje o foco é ensinar ${esc(topic.toLowerCase())} de verdade: primeiro com uma situação concreta, depois com organização visual e só então com linguagem de prova. O objetivo não é enfeitar o conteúdo, e sim fazer você compreender, aplicar e lembrar melhor.</p>
              <div class="hero-actions">
                <a class="btn btn-primary" href="#quiz">Começar a apostila</a>
                <a class="btn btn-secondary" href="../index.html">Voltar para o cronograma</a>
              </div>
              <div class="hero-meta">
                <div class="mini-card"><span>Meta do dia</span><strong>${esc(topic)}</strong></div>
                <div class="mini-card"><span>Modelo</span><strong>Concreto → visual → abstrato</strong></div>
                <div class="mini-card"><span>Tempo sugerido</span><strong>60–90 min</strong></div>
              </div>
            </div>
            <div class="hero-art">
              <article class="poster poster-rock"><span class="mode-badge">${esc(current.playlist)}</span><strong>${esc(topic)}</strong><small>Mais clareza, menos decoreba e mais domínio prático.</small></article>
              <article class="poster poster-social"><span class="mode-badge">feed de treino</span><strong>${esc(scenario.title)}</strong><small>${esc(scenario.text)}</small></article>
            </div>
          </div>
        </section>
        <div class="stack">
          ${renderQuiz(prev)}
          <section class="section" id="missao">
            <div class="section-title">Mapa da missão</div>
            <h2>O que precisa sair dominado hoje</h2>
            <p class="section-intro">Em ${esc(subject)}, o assunto de hoje costuma travar quando a pessoa tenta decorar antes de compreender. Aqui o caminho é o contrário: você entende ${esc(topic.toLowerCase())}, visualiza os padrões e só depois transforma isso em resposta de prova.</p>
            <div class="focus-row">${cards.map(c=>`<div class="focus-box"><strong>${esc(c.title)}</strong><p>${esc(c.text)}</p></div>`).join('')}</div>
          </section>
          <section class="section">
            <div class="section-title">Entrada concreta</div>
            <h2>Primeiro veja isso em uma situação real</h2>
            <div class="grid-2" style="margin-top:16px;align-items:start">
              <article class="card"><span class="tiny">${esc(scenario.badge)}</span><h3>${esc(scenario.title)}</h3><p>${esc(scenario.text)}</p><div class="formula">Pergunta-base do dia: como reconhecer ${esc(topic.toLowerCase())} sem cair na armadilha do chute?</div></article>
              <article class="card"><h3>Leitura guiada da situação</h3><p>1. Observe o contexto.</p><p>2. Identifique a relação principal.</p><p>3. Nomeie o conceito.</p><p>4. Só depois parta para a linguagem formal da prova.</p><div class="formula">Erro comum a vigiar: ${esc(commonError(subject, topic))}.</div></article>
            </div>
          </section>
          <section class="section">
            <div class="section-title">Visualização</div>
            <h2>Organize o conteúdo antes de abstrair</h2>
            <div class="flow">
              <article class="flow-card"><strong>Passo 1</strong><p>Reconheça o cenário em que ${esc(topic.toLowerCase())} aparece.</p></article>
              <article class="flow-card"><strong>Passo 2</strong><p>Transforme esse cenário em esquema, comparação ou quadro-resumo.</p></article>
              <article class="flow-card"><strong>Passo 3</strong><p>Converta o esquema em linguagem de prova, sem perder o sentido original.</p></article>
            </div>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Camada</th><th>O que você faz</th><th>Alerta</th></tr></thead>
                <tbody>
                  <tr><td>Concreta</td><td>Enxerga ${esc(topic.toLowerCase())} em uma situação viva.</td><td>Não pule direto para a definição.</td></tr>
                  <tr><td>Pictórica</td><td>Resume com setas, blocos, fluxos, tabela ou quadro.</td><td>Evite excesso de texto sem estrutura.</td></tr>
                  <tr><td>Abstrata</td><td>Nomeia a regra, o conceito ou o padrão cobrado.</td><td>Não decorar sem conexão com o exemplo.</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section class="section">
            <div class="section-title">Abstração</div>
            <h2>Agora formalize o conceito</h2>
            <div class="grid-3" style="margin-top:16px">
              <article class="card"><h3>Definição-base</h3><p>${esc(topic)} pode ser entendido como o núcleo conceitual que organiza a leitura e a resolução das questões deste dia.</p></article>
              <article class="card"><h3>Como a prova cobra</h3><p>Normalmente por comando, comparação, interpretação de situação, uso em contexto ou identificação do padrão correto.</p></article>
              <article class="card"><h3>O que não fazer</h3><p>${esc(commonError(subject, topic).charAt(0).toUpperCase()+commonError(subject, topic).slice(1))}.</p></article>
            </div>
            <div class="formula">Regra curta para guardar: compreender ${esc(topic.toLowerCase())} primeiro; acelerar depois.</div>
          </section>
          <section class="section">
            <div class="section-title">Worked examples</div>
            <h2>Exemplo resolvido → prática guiada → prática independente</h2>
            <div class="grid-2" style="margin-top:16px">
              <article class="card"><h3>Exemplo resolvido</h3><p>Imagine uma questão em que ${esc(topic.toLowerCase())} aparece misturado ao contexto do cotidiano. Primeiro você localiza a relação principal, depois elimina distrações e só então chega à resposta.</p><div class="formula">Modelo mental: comando → relação central → conceito → resposta.</div></article>
              <article class="card"><h3>Por que isso funciona</h3><p>Porque impede que você responda por reflexo. Em vez de decorar uma “cara” de questão, você aprende a reconhecer a estrutura do problema.</p></article>
            </div>
            <div class="qa">
              ${guided.map(item => `<article class="quiz-card"><strong>${esc(item.q)}</strong><details><summary>Mostrar resposta</summary><div>${esc(item.a)}</div></details></article>`).join('')}
            </div>
          </section>
          <section class="section">
            <div class="section-title">Prática independente</div>
            <h2>Treino com cara de prova</h2>
            <div class="practice-list">
              ${practice.map((item,i)=>`<article class="exercise"><strong>${i+1}. ${esc(item)}</strong></article>`).join('')}
            </div>
            <details><summary>Mostrar gabarito orientativo</summary><div>Um bom gabarito aqui precisa mencionar ${esc(topic.toLowerCase())}, mostrar o raciocínio passo a passo e deixar claro como você identificou o padrão correto sem depender de chute.</div></details>
          </section>
          <section class="section">
            <div class="section-title">Fechamento</div>
            <h2>Checklist e caderno de erros</h2>
            <div class="grid-2" style="margin-top:16px">
              <article class="card"><h3>Checklist de saída</h3><p>• Consigo explicar ${esc(topic.toLowerCase())} com minhas palavras.</p><p>• Consigo reconhecer o conceito em uma situação concreta.</p><p>• Consigo aplicar em item com cara de prova.</p><p>• Sei qual erro preciso vigiar no caderno.</p></article>
              <article class="card"><h3>Erro mais caro hoje</h3><p>${esc(commonError(subject, topic).charAt(0).toUpperCase()+commonError(subject, topic).slice(1))}.</p><div class="formula">Anotação boa de caderno de erros: “Quando vi este tema, quase fui por impulso. Da próxima vez vou primeiro localizar a relação central do enunciado.”</div></article>
            </div>
          </section>
          ${renderVideos(subject, topic)}
          ${renderNav()}
        </div>
      </main>`;
  }

  function renderQuiz(previous){
    if (!previous || current.number === 1) return '';
    const prevSplit = splitTitle(previous.title);
    const prompts = [
      {q:`Qual era o foco central da aula anterior?`, a: daySummary(previous)},
      {q:`Em uma frase, o que precisava ficar claro sobre ${prevSplit.topic.toLowerCase()}?`, a:`A base era compreender ${prevSplit.topic.toLowerCase()} sem automatismo e reconhecer o padrão essencial do tema.`},
      {q:`Qual erro comum da aula anterior precisava ser vigiado?`, a:`${commonError(prevSplit.subject, prevSplit.topic).charAt(0).toUpperCase()+commonError(prevSplit.subject, prevSplit.topic).slice(1)}.`},
      {q:`Como o conteúdo anterior ajuda a aula de hoje?`, a:`Porque o projeto acumula repertório: cada aula nova se apoia na anterior para fortalecer memória, confiança e transferência.`}
    ];
    return `
      <section class="section" id="quiz">
        <div class="section-title">Revisão espaçada · 24h</div>
        <h2>Quiz rápido do Dia ${pad(previous.number)}</h2>
        <p class="section-intro">Antes de seguir, recupere da memória o que foi estudado ontem. Pense primeiro. Só depois abra as respostas.</p>
        <div class="quiz-wrap">
          <article class="quiz-card"><strong>Como usar este bloco</strong><p>Recuperação ativa curta: ler, responder sem cola, conferir e seguir. É assim que a revisão deixa de ser só reconhecimento passivo.</p><div class="chip-row"><span class="chip">sem cola</span><span class="chip">2–5 min</span><span class="chip">memória em ação</span></div></article>
          ${prompts.map(item=>`<article class="quiz-card"><strong>${esc(item.q)}</strong><details><summary>Mostrar resposta</summary><div>${esc(item.a)}</div></details></article>`).join('')}
        </div>
      </section>`;
  }

  function weekContentDays(){
    return cfg.studyDays.filter(d => d.week === current.week && d.mode === 'conteudo');
  }

  function reviewPage(){
    const items = weekContentDays();
    document.title = `Akemy Estudos · Dia ${pad(current.number)}`;
    return `
      <main class="page">
        <section class="hero">
          <div class="hero-grid">
            <div>
              <div class="eyebrow"><span class="pill">${esc(current.arc)}</span><span class="pill">Semana ${String(current.week).padStart(2,'0')}</span><span class="pill">Dia ${pad(current.number)}</span><span class="pill">Revisão</span></div>
              <h1>${esc(current.title)}</h1>
              <p class="lead">Hoje é dia de consolidar o que a semana ensinou, misturar formatos, perceber padrão de erro e transformar conteúdo estudado em memória realmente utilizável.</p>
              <div class="hero-actions"><a class="btn btn-primary" href="#quiz">Começar a revisão</a><a class="btn btn-secondary" href="../index.html">Voltar para o cronograma</a></div>
              <div class="hero-meta"><div class="mini-card"><span>Missão</span><strong>consolidar + corrigir</strong></div><div class="mini-card"><span>Estratégia</span><strong>interleaving</strong></div><div class="mini-card"><span>Tempo</span><strong>60–90 min</strong></div></div>
            </div>
            <div class="hero-art"><article class="poster poster-rock"><span class="mode-badge">semana ${String(current.week).padStart(2,'0')}</span><strong>Revisar com inteligência</strong><small>Menos repetição cega, mais diagnóstico de padrão.</small></article><article class="poster poster-social"><span class="mode-badge">caderno de erros</span><strong>Consertar antes que endureça</strong><small>Revisão forte serve para deixar o mini simulado mais estável.</small></article></div>
          </div>
        </section>
        <div class="stack">
          ${renderQuiz(prev)}
          <section class="section"><div class="section-title">Mapa da semana</div><h2>O que esta revisão precisa amarrar</h2><p class="section-intro">A revisão não serve para reler tudo de forma passiva. Serve para juntar os temas, reconhecer o que já ficou e enxergar o que ainda precisa de apoio.</p><div class="week-grid">${items.map(d=>{return `<article class="week-card"><span class="tiny">Dia ${pad(d.number)}</span><strong>${esc(d.title)}</strong><p>${esc(daySummary(d))}</p></article>`;}).join('')}</div></section>
          <section class="section"><div class="section-title">Puxando conexões</div><h2>Como revisar sem cair em tédio</h2><div class="flow"><article class="flow-card"><strong>1. Recuperar</strong><p>Responder de cabeça antes de olhar material ou gabarito.</p></article><article class="flow-card"><strong>2. Misturar</strong><p>Alternar assuntos para treinar escolha de estratégia, não só execução mecânica.</p></article><article class="flow-card"><strong>3. Corrigir</strong><p>Nomear o erro e registrar o ajuste no caderno.</p></article></div></section>
          <section class="section"><div class="section-title">Treino misto</div><h2>Blocos de revisão da semana</h2><div class="practice-list">${items.map((d,idx)=>`<article class="exercise"><strong>Bloco ${idx+1} · ${esc(d.title)}</strong><p>Explique o conceito central, dê um exemplo concreto e diga qual armadilha mais costuma aparecer nesse tema.</p></article>`).join('')}<article class="exercise"><strong>Bloco final · conexão entre os temas</strong><p>Escreva como os quatro temas da semana podem aparecer misturados numa prova curta e qual pista ajuda a reconhecer cada um.</p></article></div><details><summary>Mostrar resposta orientativa</summary><div>Uma boa revisão traz o conceito central de cada aula, um exemplo real, um erro comum e um critério de reconhecimento rápido na prova.</div></details></section>
          <section class="section"><div class="section-title">Pós-revisão</div><h2>Checklist do dia</h2><div class="grid-2" style="margin-top:16px"><article class="card"><h3>Checklist</h3><p>• Consigo resumir os quatro conteúdos da semana sem ler.</p><p>• Sei onde meu desempenho caiu.</p><p>• Já deixei o mini simulado preparado com foco e sem ansiedade boba.</p></article><article class="card"><h3>Caderno de erros</h3><p>Registre não apenas o que errou, mas o mecanismo: leitura ruim, distração, estratégia errada, cálculo, contexto ou definição frouxa.</p><div class="formula">Quem revisa apontando o tipo de erro cresce muito mais rápido do que quem só marca acerto e erro.</div></article></div></section>
          ${renderWeekVideos(items)}
          ${renderNav()}
        </div>
      </main>`;
  }

  function makeQuestions(){
    const items = weekContentDays();
    const questions = [];
    items.forEach((d) => {
      const {subject, topic} = splitTitle(d.title);
      questions.push({subject, q:`Questão ${questions.length+1} · ${topic}: qual é o foco central que a prova quer que você reconheça nesse tema?`, a:`Reconhecer ${topic.toLowerCase()} com base no comando da questão e na relação principal do enunciado.`});
      questions.push({subject, q:`Questão ${questions.length+1} · ${topic}: qual erro comum mais derruba quem estudou esse assunto só de forma decorada?`, a:`${commonError(subject, topic).charAt(0).toUpperCase()+commonError(subject, topic).slice(1)}.`});
      questions.push({subject, q:`Questão ${questions.length+1} · ${topic}: escreva uma pista de prova que ajudaria você a identificar esse conteúdo no meio de outros assuntos.`, a:`Uma boa pista é o tipo de comando, o vocabulário do enunciado e a relação principal que o problema exige enxergar.`});
    });
    return questions.slice(0,12);
  }

  function simuladoPage(){
    const questions = makeQuestions();
    document.title = `Akemy Estudos · Dia ${pad(current.number)}`;
    return `
      <main class="page">
        <section class="hero"><div class="hero-grid"><div><div class="eyebrow"><span class="pill">${esc(current.arc)}</span><span class="pill">Semana ${String(current.week).padStart(2,'0')}</span><span class="pill">Dia ${pad(current.number)}</span><span class="pill">Mini simulado</span></div><h1>${esc(current.title)}</h1><p class="lead">Hoje a meta é trocar leitura confortável por situação de prova: assuntos misturados, foco no comando e correção com diagnóstico honesto.</p><div class="hero-actions"><a class="btn btn-primary" href="#quiz">Começar o mini simulado</a><a class="btn btn-secondary" href="../index.html">Voltar para o cronograma</a></div><div class="hero-meta"><div class="mini-card"><span>Modo</span><strong>misto</strong></div><div class="mini-card"><span>Questões</span><strong>12</strong></div><div class="mini-card"><span>Tempo</span><strong>35–50 min</strong></div></div></div><div class="hero-art"><article class="poster poster-rock"><span class="mode-badge">ritmo de prova</span><strong>Treinar sem glamour</strong><small>Ler, decidir, responder e corrigir com critério.</small></article><article class="poster poster-social"><span class="mode-badge">mindset</span><strong>Simulado é diagnóstico</strong><small>Não mede valor pessoal. Mede estágio de preparo.</small></article></div></div></section>
        <div class="stack">${renderQuiz(prev)}<section class="section"><div class="section-title">Como usar</div><h2>Faça em clima de prova, corrija em clima de treino</h2><div class="flow"><article class="flow-card"><strong>1. Leia tudo</strong><p>Marque as mais fáceis e ganhe ritmo.</p></article><article class="flow-card"><strong>2. Resolva por camadas</strong><p>Fáceis, médias e depois as que exigem mais energia.</p></article><article class="flow-card"><strong>3. Corrija com lupa</strong><p>Nomeie o tipo de erro no caderno.</p></article></div></section>
        <section class="section"><div class="section-title">Mini simulado</div><h2>12 questões mistas</h2><div class="qa">${questions.map((item)=>`<article class="quiz-card"><span class="tiny">${esc(item.subject)}</span><strong>${esc(item.q)}</strong><details><summary>Mostrar gabarito orientativo</summary><div>${esc(item.a)}</div></details></article>`).join('')}</div></section>
        <section class="section"><div class="section-title">Pós-prova</div><h2>Transforme o erro em ajuste</h2><div class="grid-2" style="margin-top:16px"><article class="card"><h3>Checklist de correção</h3><p>• Eu li o comando com atenção?</p><p>• Escolhi a estratégia certa?</p><p>• Meu erro foi de conteúdo, leitura, distração ou execução?</p><p>• Como evito repetir isso na próxima semana?</p></article><article class="card"><h3>Interpretação do resultado</h3><p>Acertar muito mostra base firme. Acertar médio mostra boa construção. Acertar pouco mostra onde a próxima semana deve reforçar. Tudo isso é dado de treino.</p><div class="formula">O simulado só vale de verdade quando ele gera caderno de erros útil.</div></article></div></section>
        ${renderWeekVideos(weekContentDays())}${renderNav()}</div></main>`;
  }

  function renderVideos(subject, topic){
    return `<section class="section"><div class="section-title">Vídeo-aulas</div><h2>Apoio para reforçar o tema do dia</h2><div class="videos">
      <article class="video"><a href="${yt(`${subject} ${topic} videoaula`) }" target="_blank" rel="noopener noreferrer"><strong>YouTube · ${esc(topic)}</strong></a><p>Busca direta por videoaulas atualizadas do tema.</p></article>
      <article class="video"><a href="${yt(`${subject} ${topic} exercícios`) }" target="_blank" rel="noopener noreferrer"><strong>YouTube · exercícios de ${esc(topic)}</strong></a><p>Busca útil para praticar logo após a teoria.</p></article>
      <article class="video"><a href="${yt(`${subject} ${topic} resumo`) }" target="_blank" rel="noopener noreferrer"><strong>YouTube · resumo de ${esc(topic)}</strong></a><p>Boa para revisar depois e fixar o essencial.</p></article>
    </div></section>`;
  }

  function renderWeekVideos(days){
    const queries = days.map(d => splitTitle(d.title)).slice(0,3);
    return `<section class="section"><div class="section-title">Vídeo-aulas</div><h2>Apoio para reforçar a semana</h2><div class="videos">${queries.map(item => `<article class="video"><a href="${yt(`${item.subject} ${item.topic} videoaula`) }" target="_blank" rel="noopener noreferrer"><strong>${esc(item.subject)} · ${esc(item.topic)}</strong></a><p>Busca rápida por aula e exercícios atualizados desse eixo da semana.</p></article>`).join('')}</div></section>`;
  }

  function renderNav(){
    const nextHref = next && next.mode !== 'descanso' ? `dia-${pad(next.number)}.html` : '../index.html';
    return `<nav class="nav"><a class="btn btn-secondary" href="../index.html">← Voltar para o cronograma</a><a class="btn btn-primary" href="${esc(nextHref)}">Próxima apostila →</a></nav><p class="footer-note">Constância vence intensidade solta. Hoje vale pelo passo dado com clareza.</p>`;
  }

  if (!current) {
    document.body.innerHTML = '<main class="page"><section class="hero"><h1>Dia não encontrado</h1><p class="lead">Esta apostila ainda não foi mapeada pelo cronograma.</p></section></main>';
    return;
  }

  injectStyles();
  const page = current.mode === 'conteudo' ? contentPage() : current.mode === 'revisao' ? reviewPage() : simuladoPage();
  document.body.innerHTML = page;
})();

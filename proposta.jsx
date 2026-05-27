/* TEVAH — Proposta Comercial
 * Reusa Icon, Wordmark, Photo de components.jsx.
 */

const u2 = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const PIMG = {
  cover: u2("1490578474895-699cd4e2cf59", 1800), // atelier
  diagBg: u2("1543132220-3ec99c6094dc", 1200), // editorial
  position: u2("1617137968427-85924c800a22", 1400),
  cta: u2("1488161628813-04466f872be2", 1400)
};

/* ---------- NAV ---------- */
const PropNav = () => {
  const items = [
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "oportunidade", label: "Oportunidade" },
  { id: "posicionamento", label: "Posicionamento" },
  { id: "solucao", label: "Solução" },
  { id: "entregaveis", label: "Entregáveis" },
  { id: "cronograma", label: "Cronograma" },
  { id: "head", label: "Head" },
  { id: "investimento", label: "Investimento" },
  { id: "receita", label: "Receita" }];

  return (
    <header className="nav-glass sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[64px] flex items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-3">
          <Wordmark style={{ fontSize: 16 }} />
          <span className="hidden md:inline text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-2)] border-l border-[var(--tv-line)] pl-3">Proposta · 2026</span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-[13px]">
          {items.map((i) => <a key={i.id} href={"#" + i.id} className="text-[var(--tv-ink-2)] hover:text-[var(--tv-ink)] transition">{i.label}</a>)}
        </nav>
        <a href="Tevah Home.html" className="btn-primary !h-10 !text-[13px]">Ver design preview <Icon name="arrow-right" size={14} /></a>
      </div>
    </header>);

};

/* ---------- COVER ---------- */
const Cover = () =>
<section className="relative overflow-hidden bg-[#0A0A0A] text-white">
    <div className="absolute inset-0">
      <img src={PIMG.cover} alt="Atelier Tevah" className="w-full h-full object-cover opacity-50" style={{ objectPosition: "50% 35%" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
    </div>
    <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 pt-24 pb-28 lg:pt-32 lg:pb-36">
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-white/60">
        <span>Proposta Comercial · 001 / 2026</span>
        <span className="hidden md:inline">Confidencial · Tevah Indústria</span>
      </div>

      <h1 className="font-display text-[56px] md:text-[88px] lg:text-[120px] leading-[0.92] tracking-[-0.045em] mt-16 max-w-[14ch]">
        Da loja física à <span className="font-editorial text-white/70 font-normal">liderança digital.</span>
      </h1>

      <div className="grid grid-cols-12 gap-6 mt-14 items-end">
        <div className="col-span-12 md:col-span-7">
          <p className="text-[17px] text-white/70 leading-relaxed max-w-[58ch]">
            Proposta para o desenvolvimento da plataforma <strong className="text-white">e-commerce + CRM unificados</strong> da Tevah —
            traduzindo 65 anos de autoridade em moda masculina para uma experiência digital
            à altura da posição da marca no Sul do Brasil.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#investimento" className="btn-ghost-light">Ver investimento <Icon name="arrow-right" size={14} /></a>
            <a href="Tevah Home.html" className="btn-ghost-light !border-white !bg-white !text-black hover:!bg-white/90">Abrir design preview</a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="grid grid-cols-3 gap-4 text-white/80">
            {[
          { k: "06", v: "telas + área cliente" },
          { k: "16", v: "semanas até o go-live" },
          { k: "42", v: "lojas integradas" }].
          map((s, i) =>
          <div key={i} className="border-t border-white/15 pt-3">
                <div className="num-display text-[44px] lg:text-[56px] text-white">{s.k}</div>
                <div className="text-[11px] mt-2 uppercase tracking-[0.16em] font-mono text-white/55">{s.v}</div>
              </div>
          )}
          </div>
        </div>
      </div>
    </div>
  </section>;


/* ---------- DIAGNÓSTICO ---------- */
const Diagnostico = () => {
  const issues = [
  { tag: "Crítico", tone: "rose", t: "SSL expirado", d: "Navegador bloqueia o acesso. Browsers de empresa derrubam confiança de marca e SEO no Google." },
  { tag: "Estrutural", tone: "rose", t: "Sem e-commerce", d: "Marca líder no físico opera digitalmente como cartão de visita. Ticket médio do segmento R$ 458 escoa para concorrentes online." },
  { tag: "Bloqueador", tone: "amber", t: "Sem catálogo digital", d: "Coleção de fábrica própria invisível fora do RS. Franquias não têm ferramenta de vitrine compartilhada." },
  { tag: "SEO", tone: "amber", t: "Meta descriptions vazias", d: "Google não entende a página. Buscas por “moda masculina porto alegre” entregam concorrentes menores." }];

  return (
    <section id="diagnostico" className="bg-white border-b border-[var(--tv-line)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-4">01 · Ponto de partida</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
              A Tevah é líder offline. <span className="font-editorial text-[var(--tv-ink-2)]">Online, ainda invisível.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] text-[var(--tv-ink-2)] leading-relaxed max-w-[48ch]">
              Auditoria realizada em tevah.com.br em maio/2026. Quatro pontos comprometem
              hoje a percepção de uma marca que deveria projetar autoridade no digital
              como projeta no físico.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-5 mt-14">
          {issues.map((it, i) =>
          <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 border border-[var(--tv-line)] rounded-2xl p-6 bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition">
              <div className="flex items-center justify-between">
                <span className={"badge " + (it.tone === "rose" ? "badge-rose" : "badge-amber")}>{it.tag}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">0{i + 1} / 04</span>
              </div>
              <div className="num-display text-[60px] lg:text-[72px] mt-6 text-[var(--tv-ink)]">{String(i + 1).padStart(2, "0")}</div>
              <div className="text-[18px] mt-3 leading-tight">{it.t}</div>
              <div className="text-[13px] text-[var(--tv-ink-2)] mt-2 leading-relaxed">{it.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

/* ---------- OPORTUNIDADE ---------- */
const Oportunidade = () => {
  const stats = [
  { k: "R$ 458", v: "Ticket médio · moda masculina premium", src: "ABRADI · 2025" },
  { k: "+38%", v: "Crescimento anual e-commerce vestuário", src: "E-bit · 2024-25" },
  { k: "67%", v: "Homens 30-55 preferem site próprio", src: "Opinion Box · 2025" },
  { k: "82%", v: "Compram no celular após pesquisar", src: "Think with Google · 2025" }];

  return (
    <section id="oportunidade" className="bg-[var(--tv-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="tv-eyebrow mb-4">02 · Oportunidade</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em]">
              O cliente Tevah <span className="font-editorial text-[var(--tv-ink-2)]">já está</span><br /> pronto para comprar.
            </h2>
            <p className="text-[15px] text-[var(--tv-ink-2)] mt-6 max-w-[44ch] leading-relaxed">
              Profissional liberal, empresário, executivo. Não navega por lazer —
              compra com propósito, no celular, depois das 20h. Prefere falar
              com a marca direto, não com marketplace.
            </p>
            <div className="mt-8 p-5 bg-white border border-[var(--tv-line)] rounded-2xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Persona principal</div>
              <div className="text-[18px] mt-2">"Não tenho tempo para ir à loja, mas quero a experiência Tevah."</div>
              <div className="text-[12px] text-[var(--tv-ink-2)] mt-2">Homem · 38 a 52 anos · B1/B2 · capital ou interior · agenda travada</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {stats.map((s, i) =>
              <div key={i} className="border border-[var(--tv-line)] rounded-2xl p-7 bg-white">
                  <div className="num-display text-[64px] lg:text-[88px] text-[var(--tv-ink)]">{s.k}</div>
                  <div className="text-[14px] mt-4 leading-snug max-w-[28ch]">{s.v}</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)] mt-4">Fonte · {s.src}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

/* ---------- POSICIONAMENTO ---------- */
const Posicionamento = () => {
  const pillars = [
  { n: "01", t: "Quiet luxury, escalado", d: "Estética sóbria, foto-produto como protagonista, sem ruído. A linguagem do executivo que valoriza discrição." },
  { n: "02", t: "Atelier no bolso", d: "A consultoria física da Tevah levada ao digital — videochamada, perfil de estilo, sob medida com 14 dias." },
  { n: "03", t: "42 lojas, um único estoque", d: "A rede física vira diferencial competitivo: retirada, troca e devolução em qualquer franquia do país." }];

  return (
    <section id="posicionamento" className="bg-white border-y border-[var(--tv-line)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-4">03 · Posicionamento estratégico</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[18ch]">
              Não é "loja online". <span className="font-editorial text-[var(--tv-ink-2)]">É a Tevah, no celular dele.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] text-[var(--tv-ink-2)] leading-relaxed max-w-[46ch]">
              Três pilares orientam cada decisão de produto, copy e tecnologia ao longo do projeto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {pillars.map((p, i) =>
          <div key={i} className="col-span-12 lg:col-span-4 border-t border-[var(--tv-line)] pt-8">
              <div className="num-display text-[80px] lg:text-[112px] text-[var(--tv-ink)]">{p.n}</div>
              <div className="text-[24px] mt-4 font-display tracking-[-0.025em]">{p.t}</div>
              <div className="text-[14px] text-[var(--tv-ink-2)] mt-3 leading-relaxed max-w-[42ch]">{p.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

/* ---------- SOLUÇÃO / ESCOPO ---------- */
const Solucao = () => {
  const telas = [
  { n: "01", t: "Home", d: "Editorial. Hero de marca, categorias, consultoria, novidades, herança.", items: ["Hero editorial", "Trust bar", "4 categorias", "Consultoria CTA", "Heritage timeline"], status: "Pronto" },
  { n: "02", t: "Catálogo (PLP)", d: "Grid responsivo com filtros laterais, quick-view e infinite scroll suave.", items: ["Filtros laterais", "Quick-view hover", "Ordenação", "Badge sob medida", "Skeleton loading"], status: "Especificado" },
  { n: "03", t: "Produto (PDP)", d: "Galeria 5+ ângulos, guia de medidas, Complete o Look, avaliações verificadas.", items: ["Galeria zoom", "Size guide", "Complete o look", "Disponibilidade por loja", "CTA consultoria"], status: "Especificado" },
  { n: "04", t: "Checkout", d: "3 passos: Identificação → Entrega → Pagamento. Pix, cartão até 10x, boleto.", items: ["Step progress", "Resumo lateral fixo", "Pix com desconto", "Frete tempo real", "One-tap login"], status: "Especificado" },
  { n: "05", t: "Área do Cliente", d: "CRM visível. Histórico, perfil de estilo, catálogos curados, agendamento.", items: ["Dashboard pessoal", "Meu Estilo", "Catálogos curados", "Rastreamento", "Wishlist"], status: "Especificado" },
  { n: "06", t: "Consultoria", d: "Landing + agendamento de videochamada + questionário de estilo prévio.", items: ["Tipos (Casual/Social/Completa)", "Agenda consultor", "Questionário", "Histórico"], status: "Especificado" }];

  return (
    <section id="solucao" className="bg-[var(--tv-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-4">04 · Solução proposta</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
              Seis telas. Um sistema. <span className="font-editorial text-[var(--tv-ink-2)]">Uma única plataforma.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] text-[var(--tv-ink-2)] leading-relaxed">
              Arquitetura modular sobre design system próprio. Tudo conectado ao CRM —
              cada visita, cada item olhado, cada consultoria informa o próximo contato.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[var(--tv-line)] overflow-hidden">
          {telas.map((t, i) =>
          <div key={i} className={"grid grid-cols-12 gap-6 px-6 py-7 lg:px-10 " + (i < telas.length - 1 ? "border-b border-[var(--tv-line)]" : "")}>
              <div className="col-span-2 lg:col-span-1">
                <div className="num-display text-[44px] text-[var(--tv-ink)]">{t.n}</div>
              </div>
              <div className="col-span-10 lg:col-span-4">
                <div className="text-[22px] font-display tracking-[-0.025em]">{t.t}</div>
                <div className="text-[13px] text-[var(--tv-ink-2)] mt-1.5 leading-relaxed">{t.d}</div>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-1.5 lg:items-start lg:pt-1">
                {t.items.map((x, j) =>
              <span key={j} className="text-[11px] px-2.5 py-1 rounded-md bg-[var(--tv-bg)] border border-[var(--tv-line)] text-[var(--tv-ink)]">{x}</span>
              )}
              </div>
              <div className="col-span-12 lg:col-span-2 flex lg:justify-end items-start">
                <span className={"badge " + (t.status === "Pronto" ? "badge-emerald" : "badge-light")}>
                  {t.status === "Pronto" && <Icon name="check" size={10} />}
                  {t.status}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* design system + CRM modules */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5 mt-6">
          {[
          { t: "Design System", d: "Tipografia, paleta, grid, ~28 componentes reutilizáveis. Tokens versionados.", ico: "spark" },
          { t: "CRM + Cliente 360", d: "Histórico, preferências, segmentação, integração com franquias.", ico: "user" },
          { t: "Integrações", d: "ERP de fábrica, gateway de pagamento, antifraude, transportadoras, e-mail/CRM.", ico: "truck" }].
          map((m, i) =>
          <div key={i} className="col-span-12 md:col-span-4 bg-white rounded-2xl border border-[var(--tv-line)] p-6 flex gap-4">
              <div className="h-10 w-10 grid place-items-center rounded-full border border-[var(--tv-line)] flex-shrink-0">
                <Icon name={m.ico} size={18} />
              </div>
              <div>
                <div className="text-[16px] font-display">{m.t}</div>
                <div className="text-[13px] text-[var(--tv-ink-2)] mt-1 leading-relaxed">{m.d}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

/* ---------- PREVIEW DO DESIGN ---------- */
const PreviewDesign = () => {
  return (
    <section className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow !text-white/55 mb-4">05 · Design preview · Home</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[22ch]">
              Um protótipo navegável <span className="font-editorial text-white/65">já entregue.</span>
            </h2>
            <p className="text-[15px] text-white/65 mt-6 max-w-[58ch] leading-relaxed">
              Antes mesmo do contrato. A Home foi construída em alta fidelidade, com
              o design system completo, todos os componentes e micro-interações.
              Abra em outra aba e role.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <a href="Tevah Home.html" target="_blank" className="btn-ghost-light !border-white !bg-white !text-black hover:!bg-white/90">Abrir Home Tevah <Icon name="arrow-right" size={14} /></a>
          </div>
        </div>

        {/* Faux browser frame embedding the home */}
        <div className="rounded-2xl overflow-hidden border border-white/15 shadow-[0_60px_120px_-30px_rgba(0,0,0,.7)]">
          <div className="browserbar h-10 flex items-center px-4 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <div className="mx-auto px-4 py-1 rounded-md bg-white text-[12px] text-[#1D1D1F] flex items-center gap-2 max-w-[420px]">
              <Icon name="shield" size={12} /> <span>tevah.com.br</span>
            </div>
          </div>
          <iframe
            src="Tevah Home.html"
            title="Tevah Home Preview"
            className="w-full bg-white"
            style={{ height: 720, border: 0 }}
            loading="lazy" />
          
        </div>
        <div className="text-[12px] text-white/45 mt-3 font-mono uppercase tracking-[0.16em] text-center">Preview em escala · 1440px · Clique para abrir em tela cheia</div>
      </div>
    </section>);

};

/* ---------- ENTREGÁVEIS ---------- */
const Entregaveis = () => {
  const groups = [
  {
    cat: "Design",
    items: [
    "Pesquisa de usuário (5 entrevistas com cliente Tevah)",
    "Design system completo (tokens, tipografia, ~28 componentes)",
    "Telas em alta fidelidade — Home, PLP, PDP, Checkout, Cliente, Consultoria",
    "Protótipo navegável (Figma + HTML interativo)",
    "Guia de marca digital · 24 páginas"]

  },
  {
    cat: "Engenharia",
    items: [
    "Frontend React/Next.js · SSR + PWA",
    "Backend Node.js · API REST + GraphQL",
    "Banco de dados PostgreSQL + cache Redis",
    "Painel administrativo (catálogo, estoque, pedidos, banners)",
    "Infra · AWS · CI/CD · monitoramento e backups"]

  },
  {
    cat: "CRM + Operação",
    items: [
    "Cliente 360 — histórico unificado físico + digital",
    "Módulo de consultoria com agenda compartilhada",
    "Segmentação automática · 12 jornadas prontas",
    "Integração com 4 franquias-piloto · expansão modular",
    "Treinamento da equipe · 8 horas · presencial em POA"]

  }];

  return (
    <section id="entregaveis" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="tv-eyebrow mb-4">06 · O que está incluso</div>
        <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[18ch]">
          Tudo pronto para <span className="font-editorial text-[var(--tv-ink-2)]">o dia do go-live.</span>
        </h2>

        <div className="grid grid-cols-12 gap-6 lg:gap-8 mt-14">
          {groups.map((g, gi) =>
          <div key={gi} className="col-span-12 lg:col-span-4">
              <div className="flex items-baseline justify-between border-b border-[var(--tv-line)] pb-3 mb-5">
                <div className="text-[16px] font-display">{g.cat}</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">0{gi + 1} / 03</div>
              </div>
              <ul className="space-y-3.5">
                {g.items.map((it, i) =>
              <li key={i} className="flex items-start gap-3">
                    <span className="tv-check is-on mt-1"><Icon name="check" size={10} /></span>
                    <span className="text-[14px] text-[var(--tv-ink)] leading-relaxed">{it}</span>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

};

/* ---------- CRONOGRAMA ---------- */
const Cronograma = () => {
  const phases = [
  { p: "01", t: "Discovery + Design System", w: "Sem. 01 — 03", d: "Entrevistas, auditoria, definição do design system. Aprovação visual da Home.", color: "#0A0A0A" },
  { p: "02", t: "Frontend + Backend (paralelos)", w: "Sem. 04 — 09", d: "6 telas em React. APIs de catálogo, pedido e estoque. Painel administrativo.", color: "#3C3F35" },
  { p: "03", t: "CRM + Integrações", w: "Sem. 10 — 13", d: "Cliente 360, módulo consultoria, ERP fábrica, gateway, transportadoras.", color: "#1E2632" },
  { p: "04", t: "QA, deploy, treinamento, go-live", w: "Sem. 14 — 16", d: "Testes carga, beta com 50 clientes Tevah, deploy AWS, treinamento equipe.", color: "#86868B" }];

  return (
    <section id="cronograma" className="bg-[var(--tv-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-4">07 · Cronograma</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[18ch]">
              16 semanas <span className="font-editorial text-[var(--tv-ink-2)]">do contrato</span> ao go-live.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] text-[var(--tv-ink-2)] leading-relaxed">
              Quatro fases sequenciais. Frontend e backend em paralelo a partir da semana 4.
              Aprovações de marca em pontos-chave para evitar retrabalho.
            </p>
          </div>
        </div>

        {/* Gantt-like bar */}
        <div className="bg-white border border-[var(--tv-line)] rounded-2xl p-6 lg:p-8 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-16 gap-px text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--tv-ink-3)]" style={{ gridTemplateColumns: "repeat(16, minmax(0,1fr))" }}>
              {Array.from({ length: 16 }).map((_, i) =>
              <div key={i} className="text-center py-2">S{String(i + 1).padStart(2, "0")}</div>
              )}
            </div>
            <div className="tv-rule" />
            <div className="space-y-3 pt-5">
              {[
              { name: "Discovery + Design System", start: 0, end: 3, color: "#0A0A0A" },
              { name: "Frontend (6 telas + DS code)", start: 3, end: 12, color: "#3C3F35" },
              { name: "Backend + Painel admin", start: 3, end: 11, color: "#1E2632" },
              { name: "CRM + Integrações", start: 9, end: 13, color: "#1F4D3A" },
              { name: "QA + beta + treinamento", start: 12, end: 16, color: "#86868B" }].
              map((b, i) =>
              <div key={i} className="grid items-center" style={{ gridTemplateColumns: "260px 1fr" }}>
                  <div className="text-[13px] pr-4">{b.name}</div>
                  <div className="relative h-7 bg-[var(--tv-bg)] rounded-md border border-[var(--tv-line)]">
                    <div
                    className="absolute top-0 bottom-0 rounded-md flex items-center justify-end pr-2 text-[10px] font-mono uppercase tracking-[0.14em] text-white/85"
                    style={{ left: b.start / 16 * 100 + "%", width: (b.end - b.start) / 16 * 100 + "%", background: b.color }}>
                    
                      <span>S{String(b.start + 1).padStart(2, "0")}–S{String(b.end).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5 mt-6">
          {phases.map((p, i) =>
          <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-2xl border border-[var(--tv-line)] p-6">
              <div className="flex items-center justify-between">
                <span className="badge badge-light">Fase {p.p}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">{p.w}</span>
              </div>
              <div className="text-[18px] mt-5 font-display tracking-[-0.02em]">{p.t}</div>
              <div className="text-[13px] text-[var(--tv-ink-2)] mt-2 leading-relaxed">{p.d}</div>
              <div className="mt-5 h-1 rounded-full bg-[var(--tv-bg)] overflow-hidden">
                <div className="h-full" style={{ width: (i + 1) / 4 * 100 + "%", background: p.color }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

/* ---------- HEAD DO PROJETO ---------- */
const HeadProjeto = () => {
  const projects = [
  {
    n: "01",
    name: "Planejador Tributário 360 AI",
    tag: "Fiscal · IA",
    desc: "Ferramenta de análise tributária para contadores e advogados. Cruza histórico fiscal, regimes e simulações com IA para gerar planejamento sob medida. Reduz horas de consultoria manual e amplia margens dos escritórios."
  },
  {
    n: "02",
    name: "Commentfy",
    tag: "Reputação · IA",
    desc: "Plataforma de IA que monitora e modera comentários negativos sobre empresas e marcas em redes sociais, blogs e marketplaces. Identifica padrões de difamação, sinaliza riscos reputacionais e automatiza respostas — protegendo a imagem corporativa em tempo real."
  },
  {
    n: "03",
    name: "Wise Checkout",
    tag: "E-commerce · Conversão",
    desc: "Checkout one-page de alta conversão desenvolvido para info produtores e players do mercado digital. Order bump, cross-sell, upsell e downsell nativos, integração com múltiplos gateways, antifraude embutido e billing recorrente. Eleva a conversão final em relação a checkouts genéricos."
  },
  {
    n: "04",
    name: "Safefy Pay",
    tag: "Pagamentos · PSP",
    desc: "Solução completa de processamento para e-commerce e info produtos. Pix, boleto e cartão com split automático entre múltiplos beneficiários, recorrência, antifraude e conciliação financeira embutidos. Dashboards de gestão consolidada e API simples para integração rápida com qualquer storefront."
  },
  {
    n: "05",
    name: "Zyn Cash",
    tag: "Sub adquirente",
    desc: "Sub adquirente que conecta lojistas a múltiplos adquirentes (Cielo, Rede, Stone e outros) e roteia cada transação para a melhor taxa em tempo real. Gestão de chargebacks, antifraude integrado, MDR otimizado por bandeira e relatórios consolidados — reduz custos de processamento sem trocar de PSP."
  }];


  return (
    <section id="head" className="bg-white border-t border-[var(--tv-line)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-4">08 · Head do projeto</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
              Quem assina cada decisão <span className="font-editorial text-[var(--tv-ink-2)]">de design e código.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] text-[var(--tv-ink-2)] leading-relaxed max-w-[48ch]">
              O projeto é conduzido diretamente por quem já levou outros produtos de
              0 a operação real no mercado brasileiro — de fintechs a checkouts
              de alta conversão.
            </p>
          </div>
        </div>

        {/* Bio block */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Avatar card */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0A] text-white p-7 flex flex-col justify-between">
              <img
                src="assets/andre-pimentel.jpg"
                alt="André Pimentel"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "50% 25%" }}
              />
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,0) 28%, rgba(0,0,0,0) 55%, rgba(0,0,0,.85) 100%)"
              }} />

              <div className="relative flex items-start justify-between">
                <span className="badge badge-light !bg-white/15 !border-white/25 !text-white backdrop-blur-sm">Head</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/75" style={{ textShadow: "0 1px 4px rgba(0,0,0,.6)" }}>2005 — 2026</span>
              </div>

              <div className="relative">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/75" style={{ textShadow: "0 1px 4px rgba(0,0,0,.6)" }}>Project Lead · Design + Eng.</div>
                <div className="text-[26px] mt-1.5 font-display tracking-[-0.025em]" style={{ textShadow: "0 2px 12px rgba(0,0,0,.7)" }}>André Pimentel</div>
                <div className="text-[13px] text-white/80 mt-1" style={{ textShadow: "0 1px 4px rgba(0,0,0,.6)" }}>Designer Gráfico · Web Developer</div>
              </div>
            </div>
          </div>

          {/* Bio + credentials */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
              <div className="border border-[var(--tv-line)] rounded-2xl p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Experiência</div>
                <div className="whitespace-nowrap tabular-nums mt-2" style={{ fontFamily: "\"Times New Roman\", Times, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 4.5vw, 52px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  +20 anos
                </div>
                <div className="text-[11px] text-[var(--tv-ink-2)] mt-2 leading-snug">Design gráfico com foco em desenvolvimento web</div>
              </div>
              <div className="border border-[var(--tv-line)] rounded-2xl p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Faturado · Infoprodutos</div>
                <div className="whitespace-nowrap tabular-nums mt-2" style={{ fontFamily: "\"Times New Roman\", Times, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(36px, 4.5vw, 52px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  +R$ 8M
                </div>
                <div className="text-[11px] text-[var(--tv-ink-2)] mt-2 leading-snug">Vendido pessoalmente em infoprodutos próprios</div>
              </div>
              <div className="border border-[var(--tv-line)] rounded-2xl p-5 bg-[#0A0A0A] text-white">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/55">Safefy Pay · processamento</div>
                <div className="whitespace-nowrap tabular-nums mt-2" style={{ fontFamily: "\"Times New Roman\", Times, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(34px, 4.2vw, 50px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  +R$ 20M
                </div>
                <div className="text-[11px] text-white/65 mt-2 leading-snug">Volume mensal processado hoje na Safefy Pay</div>
              </div>
              <div className="border border-[var(--tv-line)] rounded-2xl p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Formação</div>
                <div className="text-[16px] mt-2 leading-tight">Sistemas para Internet</div>
                <div className="text-[11px] text-[var(--tv-ink-2)] mt-2 leading-relaxed">
                  Faculdade CET-PI · Centro de Ensino Tecnológico do Estado do Piauí
                </div>
              </div>
            </div>

            <div className="border border-[var(--tv-line)] rounded-2xl p-6 lg:p-7 flex-1">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Sobre</div>
              <p className="text-[16px] mt-3 leading-relaxed text-[var(--tv-ink)]">
                Designer gráfico desde 2005, especializado na ponte entre desenho e engenharia
                de produto. Atua direto na bancada — protótipo, design system, frontend e
                arquitetura de produto — em ciclos curtos de iteração com fundadores.
              </p>
              <p className="text-[14px] mt-3 leading-relaxed text-[var(--tv-ink-2)]">
                Conduz pessoalmente cada decisão crítica do projeto Tevah: desde a definição
                do design system e a tradução visual da marca até a integração com
                pagamentos (Safefy Pay) e a arquitetura do CRM unificado entre as 42 franquias.
              </p>
              <div className="mt-5 pt-5 border-t border-[var(--tv-line-2)] flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[var(--tv-ink-2)]">
                <span className="flex items-center gap-1.5"><Icon name="check" size={13} /> Fundador, Safefy Pay</span>
                <span className="flex items-center gap-1.5"><Icon name="check" size={13} /> Fundador, Zyn Cash</span>
                <span className="flex items-center gap-1.5"><Icon name="check" size={13} /> Fundador, Wise Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="mt-14">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="tv-eyebrow mb-2">Portfólio · projetos próprios</div>
              <div className="text-[22px] lg:text-[26px] font-display tracking-[-0.025em]">Cinco produtos que entraram em operação real.</div>
            </div>
            <div className="hidden md:block text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">05 produtos</div>
          </div>

          <div className="border border-[var(--tv-line)] rounded-2xl bg-white overflow-hidden">
            {projects.map((p, i) =>
            <div key={i} className={"grid grid-cols-12 gap-4 lg:gap-6 px-6 lg:px-8 py-7 " + (i < projects.length - 1 ? "border-b border-[var(--tv-line)]" : "")}>
                <div className="col-span-2 lg:col-span-1">
                  <div className="num-display text-[36px] text-[var(--tv-ink)]">{p.n}</div>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">{p.tag}</div>
                  <div className="text-[22px] lg:text-[24px] mt-1.5 font-display tracking-[-0.025em]">{p.name}</div>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <p className="text-[14px] leading-relaxed text-[var(--tv-ink-2)] max-w-[68ch]">{p.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

/* ---------- INVESTIMENTO ---------- */
const Investimento = () => {
  const modules = [
  { n: "M1", t: "Discovery + Design System", d: "Pesquisa, design system, telas em alta fidelidade.", v: "48.000", hours: "320h", req: true },
  { n: "M2", t: "Frontend — 6 telas + componentes", d: "React/Next.js, PWA, animações, responsivo, acessibilidade.", v: "120.000", hours: "780h", req: true },
  { n: "M3", t: "Backend & APIs", d: "Node.js, catálogo, pedidos, estoque, painel administrativo.", v: "95.000", hours: "620h", req: true },
  { n: "M4", t: "CRM — Cliente 360 + Consultoria", d: "Cliente unificado, agenda, perfil de estilo, jornadas.", v: "65.000", hours: "420h", req: true },
  { n: "M5", t: "Integrações com franquias", d: "ERP fábrica, gateway, transportadoras, e-mail. 4 franquias-piloto.", v: "38.000", hours: "240h", req: true },
  { n: "M6", t: "Deploy, treinamento, 90 dias suporte", d: "AWS, CI/CD, treinamento presencial, 3 meses de suporte 8x5.", v: "32.000", hours: "200h", req: true }];

  const total = modules.reduce((acc, m) => acc + parseInt(m.v.replace(/\./g, "")), 0);
  return (
    <section id="investimento" className="bg-white border-t border-[var(--tv-line)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-4">09 · Investimento</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
              Modular. <span className="font-editorial text-[var(--tv-ink-2)]">Auditável. Previsível.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] text-[var(--tv-ink-2)] leading-relaxed">
              Cada módulo é precificado por horas de execução e pode ser
              isoladamente aprovado. Pagamento em 4 marcos contratuais, atrelados a entregas.
            </p>
          </div>
        </div>

        <div className="border border-[var(--tv-line)] rounded-2xl overflow-hidden bg-white">
          {/* table head */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-7 py-4 bg-[var(--tv-bg)] border-b border-[var(--tv-line)] text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Módulo</div>
            <div className="col-span-2">Esforço</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Investimento</div>
          </div>
          {modules.map((m, i) =>
          <div key={i} className="grid grid-cols-12 gap-4 px-6 lg:px-7 py-5 border-b border-[var(--tv-line)] last:border-b-0 items-center">
              <div className="col-span-2 lg:col-span-1 num-display text-[28px] text-[var(--tv-ink)]">{m.n}</div>
              <div className="col-span-10 lg:col-span-5">
                <div className="text-[15px] leading-snug">{m.t}</div>
                <div className="text-[12px] text-[var(--tv-ink-2)] mt-1">{m.d}</div>
              </div>
              <div className="col-span-6 lg:col-span-2 text-[13px] font-mono">{m.hours}</div>
              <div className="col-span-6 lg:col-span-2">
                <span className="badge badge-emerald">{m.req ? "Incluso" : "Opcional"}</span>
              </div>
              <div className="col-span-12 lg:col-span-2 lg:text-right tabular-nums text-[17px]">R$ {m.v}</div>
            </div>
          )}

          {/* total */}
          <div className="grid grid-cols-12 gap-4 px-6 lg:px-7 py-8 bg-[#0A0A0A] text-white items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/55">Investimento total</div>
              <div className="text-[16px] mt-1 max-w-[60ch]">Plataforma e-commerce + CRM unificados · 16 semanas · 90 dias de suporte incluídos</div>
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
                <Icon name="spark" size={12} />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em]">Condição especial · projeto fundador</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-right">
              <div className="flex flex-col lg:items-end gap-1.5">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/45">Valor de tabela</div>
                <div className="relative inline-block self-start lg:self-end whitespace-nowrap text-[24px] lg:text-[28px] text-white/45 tabular-nums">
                  R$ {total.toLocaleString("pt-BR")}
                  <span aria-hidden className="absolute left-[-4px] right-[-4px] top-1/2 h-[1.5px] bg-rose-400 -rotate-[5deg]"></span>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/55 mt-5">Sua proposta</div>
                <div className="whitespace-nowrap tabular-nums" style={{ fontSize: "clamp(48px, 8.5vw, 88px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 400, fontStyle: "italic", fontFamily: "\"Times New Roman\", Times, serif" }}>R$ 150.000,00

                </div>

                <div className="text-[11px] text-emerald-300 font-mono uppercase tracking-[0.16em] mt-2">
                  Economia de R$ {(total - 150000).toLocaleString("pt-BR")} · {Math.round((1 - 150000 / total) * 100)}%
                </div>
              </div>
              <div className="text-[11px] mt-6 text-white/55 font-mono uppercase tracking-[0.14em] lg:text-right">EM 2 MARCOS · 50% SINAL · 50% GO-LIVE</div>
            </div>
          </div>
        </div>

        {/* Pagamentos — Safefy Pay */}
        <div className="mt-6 border border-[var(--tv-line)] rounded-2xl bg-white p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 min-w-0">
            <div className="h-11 w-11 grid place-items-center rounded-full border border-[var(--tv-line)] flex-shrink-0">
              <Icon name="shield" size={18} />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Pagamentos seguros</div>
              <div className="text-[15px] mt-1.5 leading-snug">Processamento gerenciado por <strong>Safefy Pay</strong>.</div>
              <div className="text-[12px] text-[var(--tv-ink-2)] mt-1 leading-relaxed max-w-[60ch]">
                Pix, boleto e cartão à vista ou parcelado. Split automático entre os marcos contratuais, antifraude e conciliação financeira inclusos.
              </div>
            </div>
          </div>
          <a href="https://safefypay.com.br" target="_blank" rel="noopener" className="flex items-center gap-3 flex-shrink-0 group">
            <img src="assets/safefypay-logo.png" alt="Safefy Pay" className="h-9 md:h-10 w-auto select-none transition-opacity group-hover:opacity-80" />
          </a>
        </div>

        {/* recurring + optional */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5 mt-6">
          <div className="col-span-12 lg:col-span-6 border border-[var(--tv-line)] rounded-2xl p-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Recorrente · após go-live</div>
            <div className="text-[24px] font-display mt-2">Sustentação · R$ 14.500 / mês</div>
            <ul className="mt-4 space-y-2.5 text-[13px] text-[var(--tv-ink-2)]">
              <li className="flex items-start gap-2"><Icon name="check" size={14} /> SLA 8x5 · resposta em 4h · resolução em 24h</li>
              <li className="flex items-start gap-2"><Icon name="check" size={14} /> Infra AWS · monitoramento · backups</li>
              <li className="flex items-start gap-2"><Icon name="check" size={14} /> Até 24h/mês de evolução de produto</li>
              <li className="flex items-start gap-2"><Icon name="check" size={14} /> Squad dedicado · PM + Dev + Designer on-call</li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6 border border-[var(--tv-line)] rounded-2xl p-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Opcionais · escala</div>
            <div className="text-[24px] font-display mt-2">Módulos adicionais</div>
            <ul className="mt-4 space-y-3 text-[13px]">
              {[
              { t: "Expansão para 42 franquias", v: "R$ 4.200 / loja" },
              { t: "App nativo iOS + Android", v: "R$ 180.000" },
              { t: "Programa de fidelidade Tevah Club", v: "R$ 58.000" },
              { t: "Marketplace de outlets físicos", v: "R$ 42.000" }].
              map((o, i) =>
              <li key={i} className="flex items-baseline justify-between border-b border-[var(--tv-line-2)] last:border-b-0 pb-2">
                  <span className="text-[var(--tv-ink)]">{o.t}</span>
                  <span className="tabular-nums text-[var(--tv-ink-2)]">{o.v}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

};

/* ---------- RECEITA PROJETADA · Consultoria ---------- */
const ReceitaProjetada = () => {
  // WhatsApp links (51 99005-9251)
  const waNum = "5551990059251";
  const msgHuman = "Olá! Tenho interesse no módulo de *Consultoria de Estilo com consultor humano* para a Tevah. Gostaria de entender melhor o desenvolvimento e o investimento.";
  const msgAI = "Olá! Tenho interesse no módulo de *Consultoria de Estilo com IA (análise instantânea)* para a Tevah. Gostaria de entender melhor o desenvolvimento e o investimento.";
  const waHuman = "https://wa.me/" + waNum + "?text=" + encodeURIComponent(msgHuman);
  const waAI = "https://wa.me/" + waNum + "?text=" + encodeURIComponent(msgAI);

  const cenarios = [
  {
    tipo: "Humano",
    tag: "Premium · agendado",
    title: "Consultor de estilo",
    subtitle: "Videochamada de 30 min com consultor Tevah.",
    desc: "Mesma experiência da loja física. Curadoria pessoal, follow-up por WhatsApp, peças entregues prontas para experimentar em casa.",
    precoLabel: "Sessão",
    preco: "R$ 380",
    volume: "120",
    volumeUnit: "sessões / mês",
    conversao: "78%",
    ticket: "R$ 1.240",
    receitaDireta: 547200, // 380 × 120 × 12
    receitaAtribuida: 1392768, // 120 × 0.78 × 1240 × 12
    devCost: "R$ 18.000",
    cta: { href: waHuman, label: "Quero consultor humano" },
    ico: "user",
    accent: "#1D1D1F",
    darkCard: true,
    notes: ["Agenda compartilhada · 12 consultores", "Follow-up automatizado por CRM", "Histórico unificado no Cliente 360"]
  },
  {
    tipo: "IA",
    tag: "Instantâneo · escalável",
    title: "Consultoria com IA",
    subtitle: "Análise de estilo em menos de 60 segundos.",
    desc: "Cliente envia foto e responde 6 perguntas. IA da Tevah devolve curadoria personalizada com 8 a 12 peças. Disponível 24/7 no app e no site.",
    precoLabel: "Análise",
    preco: "R$ 49",
    volume: "2.800",
    volumeUnit: "análises / mês",
    conversao: "16%",
    ticket: "R$ 620",
    receitaDireta: 1646400, // 49 × 2800 × 12
    receitaAtribuida: 3333120, // 2800 × 0.16 × 620 × 12
    devCost: "R$ 62.000",
    cta: { href: waAI, label: "Quero consultoria com IA" },
    ico: "spark",
    accent: "#0A6E4E",
    darkCard: false,
    notes: ["Primeira análise grátis para captação", "Volume escala sem aumentar headcount", "Aprendizado contínuo · CRM unificado"]
  }];


  const fmt = (n) => "R$ " + (n / 1000000).toFixed(2).replace(".", ",") + "M";

  return (
    <section id="receita" className="bg-[var(--tv-bg)] border-t border-[var(--tv-line)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-4">10 · Receita projetada · Consultoria</div>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[20ch]">
              Consultoria vira <span className="font-editorial text-[var(--tv-ink-2)]">canal</span> de receita.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] text-[var(--tv-ink-2)] leading-relaxed max-w-[48ch]">
              Hoje, a consultoria existe só no atendimento físico. Levá-la ao digital cria um
              novo fluxo de receita — direta (cobrada por sessão) e indireta (conversão para
              e-commerce). Duas formas, dois investimentos, mesma rede de 42 lojas.
            </p>
          </div>
        </div>

        {/* Opportunity headline */}
        <div className="border border-[var(--tv-line)] rounded-2xl bg-white p-7 lg:p-9 mb-8 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Potencial · 12 meses · ambos cenários</div>
            <div className="text-[20px] mt-2 leading-snug max-w-[58ch]">Projeção combinada de receita atribuída à consultoria — sessões cobradas <em className="font-editorial">+</em> conversão e-commerce gerada pelo módulo.</div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Receita anual estimada</div>
            <div className="whitespace-nowrap tabular-nums mt-1" style={{ fontFamily: "\"Times New Roman\", Times, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
              até R$ 4,98M
            </div>
            <div className="text-[11px] text-[var(--tv-ink-2)] mt-2 font-mono uppercase tracking-[0.14em]">Cenário IA · 2.800 análises/mês × 16% conversão</div>
          </div>
        </div>

        {/* Scenario cards */}
        <div className="grid grid-cols-12 gap-5">
          {cenarios.map((c, i) => {
            const total = c.receitaDireta + c.receitaAtribuida;
            return (
              <div
                key={i}
                className={"col-span-12 lg:col-span-6 rounded-2xl p-7 lg:p-9 flex flex-col " + (c.darkCard ? "bg-[#0A0A0A] text-white border border-white/10" : "bg-white text-[var(--tv-ink)] border border-[var(--tv-line)]")}>
                
                {/* head */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={"h-10 w-10 grid place-items-center rounded-full border " + (c.darkCard ? "border-white/20" : "border-[var(--tv-line)]")}>
                      <Icon name={c.ico} size={18} />
                    </div>
                    <div>
                      <div className={"text-[10px] font-mono uppercase tracking-[0.18em] " + (c.darkCard ? "text-white/55" : "text-[var(--tv-ink-3)]")}>{c.tag}</div>
                      <div className="text-[22px] mt-1 font-display tracking-[-0.025em]">{c.title}</div>
                    </div>
                  </div>
                  <span className={"badge " + (c.darkCard ? "!bg-white/10 !border-white/20 !text-white" : "badge-light")}>
                    {c.tipo}
                  </span>
                </div>

                <div className={"text-[14px] mt-4 leading-relaxed " + (c.darkCard ? "text-white/65" : "text-[var(--tv-ink-2)]")}>{c.desc}</div>

                {/* price strip */}
                <div className={"mt-7 pt-5 grid grid-cols-2 gap-5 border-t " + (c.darkCard ? "border-white/15" : "border-[var(--tv-line)]")}>
                  <div>
                    <div className={"text-[10px] font-mono uppercase tracking-[0.18em] " + (c.darkCard ? "text-white/55" : "text-[var(--tv-ink-3)]")}>Preço sugerido · {c.precoLabel.toLowerCase()}</div>
                    <div className="whitespace-nowrap tabular-nums mt-1" style={{ fontFamily: "\"Times New Roman\", Times, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(40px, 6vw, 60px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                      {c.preco}
                    </div>
                  </div>
                  <div>
                    <div className={"text-[10px] font-mono uppercase tracking-[0.18em] " + (c.darkCard ? "text-white/55" : "text-[var(--tv-ink-3)]")}>Volume estabilizado</div>
                    <div className="whitespace-nowrap tabular-nums mt-1" style={{ fontFamily: "\"Times New Roman\", Times, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(40px, 6vw, 60px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                      {c.volume}
                    </div>
                    <div className={"text-[11px] mt-1 font-mono uppercase tracking-[0.14em] " + (c.darkCard ? "text-white/55" : "text-[var(--tv-ink-3)]")}>{c.volumeUnit}</div>
                  </div>
                </div>

                {/* secondary metrics */}
                <div className={"mt-6 grid grid-cols-2 gap-3"}>
                  <div className={"px-4 py-3 rounded-xl border " + (c.darkCard ? "border-white/15" : "border-[var(--tv-line)]")}>
                    <div className={"text-[10px] font-mono uppercase tracking-[0.18em] " + (c.darkCard ? "text-white/45" : "text-[var(--tv-ink-3)]")}>Conversão e-commerce</div>
                    <div className="text-[20px] mt-1 tabular-nums">{c.conversao}</div>
                  </div>
                  <div className={"px-4 py-3 rounded-xl border " + (c.darkCard ? "border-white/15" : "border-[var(--tv-line)]")}>
                    <div className={"text-[10px] font-mono uppercase tracking-[0.18em] " + (c.darkCard ? "text-white/45" : "text-[var(--tv-ink-3)]")}>Ticket médio</div>
                    <div className="text-[20px] mt-1 tabular-nums">{c.ticket}</div>
                  </div>
                </div>

                {/* annual revenue */}
                <div className={"mt-6 p-5 rounded-xl " + (c.darkCard ? "bg-white/[.06] border border-white/10" : "bg-[var(--tv-bg)] border border-[var(--tv-line)]")}>
                  <div className={"text-[10px] font-mono uppercase tracking-[0.18em] " + (c.darkCard ? "text-white/55" : "text-[var(--tv-ink-3)]")}>Receita anual atribuída · 12 meses</div>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="whitespace-nowrap tabular-nums" style={{ fontFamily: "\"Times New Roman\", Times, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(40px, 7vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                      {fmt(total)}
                    </span>
                    <span className={"text-[11px] font-mono uppercase tracking-[0.16em] " + (c.darkCard ? "text-emerald-300" : "text-emerald-700")}>+novo canal</span>
                  </div>
                  <div className={"mt-3 text-[12px] " + (c.darkCard ? "text-white/55" : "text-[var(--tv-ink-2)]")}>
                    Direta {fmt(c.receitaDireta)} <span className="opacity-60">·</span> Atribuída e-commerce {fmt(c.receitaAtribuida)}
                  </div>
                </div>

                {/* notes */}
                <ul className="mt-6 space-y-2">
                  {c.notes.map((n, j) =>
                  <li key={j} className="flex items-start gap-2.5 text-[13px]">
                      <Icon name="check" size={14} className={c.darkCard ? "text-white/70 mt-1" : "text-[var(--tv-ink)] mt-1"} />
                      <span className={c.darkCard ? "text-white/75" : "text-[var(--tv-ink)]"}>{n}</span>
                    </li>
                  )}
                </ul>

                {/* dev cost + CTA */}
                <div className={"mt-7 pt-6 border-t flex flex-col gap-4 " + (c.darkCard ? "border-white/15" : "border-[var(--tv-line)]")}>
                  <div className="flex items-baseline justify-between gap-3">
                    <div className={"text-[12px] " + (c.darkCard ? "text-white/55" : "text-[var(--tv-ink-2)]")}>
                      Custo adicional de desenvolvimento<br />
                      <span className="text-[11px] font-mono uppercase tracking-[0.14em] opacity-80">não incluso na proposta base R$ 150.000</span>
                    </div>
                    <div className="text-[22px] tabular-nums whitespace-nowrap">{c.devCost}</div>
                  </div>
                  <a
                    href={c.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                    "h-12 rounded-lg px-5 inline-flex items-center justify-center gap-2.5 text-[14px] font-medium transition " + (
                    c.darkCard ?
                    "bg-white text-black hover:bg-white/90" :
                    "bg-[#0A0A0A] text-white hover:bg-[#1D1D1F]")
                    }>
                    
                    {c.cta.label}
                  </a>
                </div>
              </div>);

          })}
        </div>

        {/* footnote */}
        <div className="mt-6 border border-dashed border-[var(--tv-line)] rounded-xl bg-white px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="text-[12px] text-[var(--tv-ink-2)] leading-relaxed">
            <strong className="text-[var(--tv-ink)]">Nota:</strong> os módulos de Consultoria Humana e IA representam custo adicional de desenvolvimento — não estão inclusos na proposta base de R$ 150.000.
            Projeções baseadas em benchmark de marcas premium de moda masculina · 12 meses após go-live.
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--tv-ink-3)] whitespace-nowrap">
            <Icon name="shield" size={12} /> Cenário estimado · não vinculante
          </div>
        </div>
      </div>
    </section>);

};

/* ---------- PRÓXIMOS PASSOS / CTA ---------- */
const Proximos = () =>
<section className="relative bg-[#0A0A0A] text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src={PIMG.cta} alt="" className="w-full h-full object-cover opacity-25" style={{ objectPosition: "50% 30%" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
    </div>
    <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
      <div className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-8">
          <div className="tv-eyebrow !text-white/55 mb-5">11 · Próximos passos</div>
          <h2 className="font-display text-[44px] md:text-[68px] leading-[0.96] tracking-[-0.035em] max-w-[18ch]">
            Vamos transformar 65 anos de autoridade em <span className="font-editorial text-white/70">vendas digitais.</span>
          </h2>

          <div className="grid grid-cols-3 gap-4 mt-12 max-w-[700px]">
            {[
          { n: "01", t: "Assinatura", d: "Aprovação desta proposta e contrato." },
          { n: "02", t: "Kick-off", d: "Workshop presencial em Porto Alegre." },
          { n: "03", t: "Sprint 1", d: "Discovery começa em 5 dias úteis." }].
          map((s, i) =>
          <div key={i} className="border-t border-white/15 pt-4">
                <div className="num-display text-[40px] text-white">{s.n}</div>
                <div className="text-[14px] mt-3">{s.t}</div>
                <div className="text-[12px] text-white/55 mt-1">{s.d}</div>
              </div>
          )}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="Aprovar Proposta.html"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.search) {
                  e.preventDefault();
                  window.location.href = "Aprovar Proposta.html" + window.location.search;
                }
              }}
              className="btn-ghost-light !border-white !bg-white !text-black hover:!bg-white/90"
            >
              Aprovar proposta
              <Icon name="arrow-right" size={14} />
            </a>
            <a
              href={"https://wa.me/5551990059251?text=" + encodeURIComponent("Olá André! Gostaria de marcar uma conversa de 30 minutos sobre a proposta da Tevah. Quais horários você tem disponíveis?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.5.7 4.8 1.8 6.8L3 29l6.8-2.1c2 1.1 4.2 1.6 6.4 1.6 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 22.9c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.2 1.3-3.9-.3-.4c-1-1.6-1.6-3.5-1.6-5.5C5.4 9.7 10.2 4.9 16 4.9s10.6 4.8 10.6 10.7-4.8 10.3-10.6 10.3zm5.8-7.7c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.5 4.8.8.3 1.4.5 1.8.7.8.2 1.4.2 2 .1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/>
              </svg>
              Marcar conversa de 30 min
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:text-right">
          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/45">Contato</div>
          <div className="text-[15px] mt-3 text-white/80">contato@safefypay.com.br<br />+55 51 99005-9251</div>
          <div className="tv-rule-dark my-6 lg:ml-auto lg:w-40" />
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/45">Validade</div>
          <div className="text-[13px] mt-2 text-white/70">Esta proposta é válida por 30 dias.<br />Expira em 25 de junho de 2026.</div>
        </div>
      </div>
    </div>
  </section>;


/* ---------- FOOTER ---------- */
const PropFooter = () =>
<footer className="bg-[var(--tv-bg)] border-t border-[var(--tv-line)]">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Wordmark style={{ fontSize: 16 }} />
        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Proposta 001 · 26/05/2026</span>
      </div>
      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)] flex items-center gap-4">
        <span>Confidencial</span>
        <span>·</span>
        <span>Documento de 11 seções</span>
        <span>·</span>
        <a href="#">PDF</a>
      </div>
    </div>
  </footer>;


/* ---------- ROOT ---------- */
const Proposta = () =>
<div data-screen-label="Proposta" className="min-h-screen">
    <PropNav />
    <Cover />
    <Diagnostico />
    <Oportunidade />
    <Posicionamento />
    <Solucao />
    <PreviewDesign />
    <Entregaveis />
    <Cronograma />
    <HeadProjeto />
    <Investimento />
    <ReceitaProjetada />
    <Proximos />
    <PropFooter />
  </div>;


Object.assign(window, { Proposta });
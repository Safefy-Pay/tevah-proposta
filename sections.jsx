/* TEVAH — Home Page Sections */

/* Curated menswear imagery (Unsplash). The Photo component gracefully falls
   back to a studio placeholder if any URL fails to load. */
const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const IMG = {
  heroMain:    u("1617137968427-85924c800a22", 1400), // editorial blazer
  heroDetailA: u("1488161628813-04466f872be2", 800),  // detail · social
  heroDetailB: u("1490578474895-699cd4e2cf59", 800),  // detail · atelier

  catSocial:   u("1488161628813-04466f872be2", 900),  // terno
  catCasual:   u("1542327897-d73f4005b533", 900),     // tricô
  catEsporte:  u("1507003211169-0a1dd7228f2d", 900),  // casual lifestyle
  catAtelier:  u("1490578474895-699cd4e2cf59", 1400), // alfaiate

  consultoria: u("1507003211169-0a1dd7228f2d", 1100), // homem com phone

  // produtos
  pCamisa:     u("1604176354204-9268737828e4", 800),
  pCamisaB:    u("1602810316693-3667c854239a", 800),
  pBlazer:     u("1617137968427-85924c800a22", 800),
  pBlazerB:    u("1490578474895-699cd4e2cf59", 800),
  pPolo:       u("1521572163474-6864f9cf17ab", 800),
  pPoloB:      u("1542327897-d73f4005b533", 800),
  pCalca:      u("1602810316693-3667c854239a", 800),
  pCalcaB:     u("1488161628813-04466f872be2", 800),
  pLinho:      u("1602810316693-3667c854239a", 800),
  pLinhoB:     u("1604176354204-9268737828e4", 800),
  pBermuda:    u("1521572163474-6864f9cf17ab", 800),
  pBermudaB:   u("1542327897-d73f4005b533", 800),
  pSueter:     u("1542327897-d73f4005b533", 800),
  pSueterB:    u("1617137968427-85924c800a22", 800),
  pCinto:      u("1624222247344-550fb60583dc", 800),
  pCintoB:     u("1606483956061-46a898dce538", 800),

  // look
  lookFull:    u("1516257984-b1b4d707412e", 1200),
};

/* ---------- HERO ---------- */
const Hero = () => {
  const [layout, setLayout] = useState("editorial"); // "editorial" | "banner"
  return (
    <section className="relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-6 lg:pt-8">
        {/* Layout switcher */}
        <div className="flex items-center justify-between mb-4">
          <div className="tv-eyebrow">Hero · variante</div>
          <div className="inline-flex rounded-full border border-[var(--tv-line)] bg-white p-1 text-[12px]">
            {["editorial","banner"].map(v => (
              <button
                key={v}
                onClick={() => setLayout(v)}
                className={"px-4 h-8 rounded-full transition " + (layout === v ? "bg-[#0A0A0A] text-white" : "text-[var(--tv-ink-2)] hover:text-[var(--tv-ink)]")}
              >
                {v === "editorial" ? "Editorial" : "Banner"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {layout === "editorial" ? <HeroEditorial/> : <HeroBanner/>}
    </section>
  );
};

const HeroEditorial = () => (
  <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-2 lg:pt-4 pb-16 lg:pb-24">
    <div className="grid grid-cols-12 gap-6 lg:gap-10">
      {/* Left — statement */}
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-between min-h-[420px]">
        <div>
          <div className="tv-eyebrow mb-6 flex items-center gap-3">
            <span>Inverno · 26</span>
            <span className="w-6 h-px bg-[var(--tv-ink-3)] inline-block"/>
            <span>Coleção Atemporal</span>
          </div>
          <h1 className="font-display text-[56px] lg:text-[88px] leading-[0.94] tracking-[-0.045em]">
            Líder em moda<br/>
            masculina <span className="font-editorial font-normal text-[var(--tv-ink-2)]">desde</span><br/>
            1959.
          </h1>
          <p className="text-[15px] text-[var(--tv-ink-2)] mt-6 max-w-[44ch] leading-relaxed">
            A experiência das 42 lojas Tevah agora ao alcance do seu tempo.
            Catálogo completo, alfaiataria sob medida e consultoria de estilo —
            sem sair de onde você está.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div className="flex flex-wrap gap-3">
            <a href="#" className="btn-primary">Ver coleção<Icon name="arrow-right" size={16}/></a>
            <a href="#consultoria" className="btn-secondary">Agendar consultoria<Icon name="calendar" size={16}/></a>
          </div>
          <div className="flex items-center gap-6 text-[12px] text-[var(--tv-ink-2)]">
            <span className="flex items-center gap-1.5"><Icon name="check" size={14}/> Troca grátis em 30 dias</span>
            <span className="flex items-center gap-1.5"><Icon name="check" size={14}/> Retirada em 42 lojas</span>
          </div>
        </div>
      </div>

      {/* Right — editorial photo grid */}
      <div className="col-span-12 lg:col-span-7">
        <div className="grid grid-cols-6 grid-rows-6 gap-3 lg:gap-4 h-[520px] lg:h-[640px]">
          <div className="col-span-4 row-span-6 relative overflow-hidden rounded-xl">
            <Photo src={IMG.heroMain} ratio="auto" tone="warm" tag="HERO · MODEL · BLAZER 03" objectPos="50% 30%" className="absolute inset-0 h-full"/>
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="badge badge-dark">Em destaque</span>
            </div>
            <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between text-white">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] opacity-80">Linha · Atelier</div>
                <div className="text-[18px] font-display mt-1">Blazer Mescla Lã Fria</div>
              </div>
              <a href="#" className="badge badge-light !bg-white/95 !backdrop-blur">Ver peça →</a>
            </div>
          </div>
          <div className="col-span-2 row-span-3 relative overflow-hidden rounded-xl">
            <Photo src={IMG.heroDetailA} ratio="auto" tone="olive" tag="DETAIL · LAPELA" className="absolute inset-0 h-full"/>
          </div>
          <div className="col-span-2 row-span-3 relative overflow-hidden rounded-xl">
            <Photo src={IMG.heroDetailB} ratio="auto" tone="navy" tag="DETAIL · PUNHO" className="absolute inset-0 h-full"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HeroBanner = () => (
  <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-2 lg:pt-4 pb-16 lg:pb-24">
    <div className="relative overflow-hidden rounded-2xl bg-[#0A0A0A]">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <img src={IMG.heroMain} alt="Tevah Inverno 26" className="w-full h-full object-cover" style={{ objectPosition: "50% 30%" }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
      </div>

      {/* Content */}
      <div className="relative grid grid-cols-12 gap-6 lg:gap-10 px-6 py-12 lg:px-14 lg:py-20 min-h-[520px] lg:min-h-[680px]">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-between text-white">
          <div>
            <div className="tv-eyebrow !text-white/65 mb-6 flex items-center gap-3">
              <span>Inverno · 26</span>
              <span className="w-6 h-px bg-white/40 inline-block"/>
              <span>Coleção Atemporal</span>
            </div>
            <h1 className="font-display text-[56px] lg:text-[104px] leading-[0.92] tracking-[-0.045em]">
              Líder em moda<br/>
              masculina <span className="font-editorial font-normal text-white/70">desde</span><br/>
              1959.
            </h1>
            <p className="text-[15px] lg:text-[17px] text-white/75 mt-6 max-w-[44ch] leading-relaxed">
              A experiência das 42 lojas Tevah agora ao alcance do seu tempo.
              Catálogo completo, alfaiataria sob medida e consultoria de estilo.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <div className="flex flex-wrap gap-3">
              <a href="#" className="btn-primary !bg-white !text-black hover:!bg-white/90">Ver coleção<Icon name="arrow-right" size={16}/></a>
              <a href="#consultoria" className="btn-ghost-light" style={{ borderColor: "rgba(255,255,255,.4)" }}>Agendar consultoria<Icon name="calendar" size={16}/></a>
            </div>
            <div className="flex items-center gap-6 text-[12px] text-white/65">
              <span className="flex items-center gap-1.5"><Icon name="check" size={14}/> Troca grátis em 30 dias</span>
              <span className="flex items-center gap-1.5"><Icon name="check" size={14}/> Retirada em 42 lojas</span>
            </div>
          </div>
        </div>

        {/* Right product hint card */}
        <div className="hidden lg:flex col-span-5 items-end justify-end">
          <div className="bg-white/95 backdrop-blur rounded-2xl p-5 w-[300px] shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Em destaque · Atelier</div>
            <div className="text-[20px] mt-2 font-display">Blazer Mescla Lã Fria</div>
            <div className="flex items-baseline justify-between mt-3">
              <span className="text-[16px] tabular-nums">R$ 1.890</span>
              <span className="text-[11px] text-[var(--tv-ink-2)]">em até 10x</span>
            </div>
            <div className="flex gap-1.5 mt-3">
              {["#1E2632","#3C3F35","#1D1D1F"].map((c,i) => (
                <span key={i} className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ background: c }}/>
              ))}
            </div>
            <a href="#" className="mt-5 btn-primary w-full !h-10 !text-[13px]">Ver peça<Icon name="arrow-right" size={14}/></a>
          </div>
        </div>
      </div>

      {/* Caption strip */}
      <div className="absolute right-5 top-5 hidden md:flex items-center gap-2">
        <span className="badge badge-light">Hero · Banner</span>
      </div>
      <div className="absolute left-6 lg:left-14 bottom-5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/45">
        Banner · Atelier 03 · Inverno 26
      </div>
    </div>
  </div>
);

/* ---------- CATEGORIES (editorial 4-up) ---------- */
const Categories = () => {
  const cats = [
    { name: "Social",     tag: "01", desc: "Camisaria, costume, gravataria.",     count: "184 peças", tone: "navy",  img: IMG.catSocial,  pos: "50% 25%" },
    { name: "Casual",     tag: "02", desc: "Polos, malhas, jeans, chinos.",       count: "246 peças", tone: "warm",  img: IMG.catCasual,  pos: "50% 30%" },
    { name: "Esporte",    tag: "03", desc: "Bermudas, tees, jaquetas leves.",     count: "92 peças",  tone: "olive", img: IMG.catEsporte, pos: "50% 30%" },
    { name: "Sob Medida", tag: "04", desc: "Alfaiataria própria. 14 dias.",       count: "Por encomenda", tone: "dark", img: IMG.catAtelier, pos: "50% 40%", featured: true },
  ];
  return (
    <section className="bg-[var(--tv-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <SectionHead
            eyebrow="Categorias"
            title="Vista o que faz sentido para a sua"
            italic="agenda."
            link="Ver tudo"
          />
        </Reveal>

        <div className="grid grid-cols-12 gap-4 lg:gap-6 mt-12">
          {cats.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} className={c.featured ? "col-span-12 md:col-span-6 lg:col-span-6" : "col-span-6 md:col-span-3 lg:col-span-2"}>
              <a href="#" className="group block">
                <div className="relative overflow-hidden rounded-xl">
                  <Photo
                    src={c.img}
                    objectPos={c.pos}
                    ratio={c.featured ? "16/11" : "3/4"}
                    tone={c.tone}
                    tag={c.name.toUpperCase() + " · LOOK"}
                    className="transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 text-white/70 font-mono text-[10px] tracking-[0.18em]">
                    {c.tag} / 04
                  </div>
                  {c.featured && (
                    <div className="absolute top-4 right-4 badge badge-light">Atelier Tevah</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 bg-gradient-to-t from-black/55 to-transparent text-white">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className={"font-display tracking-[-0.03em] " + (c.featured ? "text-[34px] lg:text-[42px]" : "text-[22px]")}>{c.name}</div>
                        <div className="text-[12px] opacity-80 mt-0.5">{c.desc}</div>
                      </div>
                      <div className="text-[11px] font-mono uppercase tracking-[0.18em] opacity-80 whitespace-nowrap">{c.count} →</div>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- CONSULTORIA (dark feature) ---------- */
const Consultoria = () => {
  return (
    <section id="consultoria" className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="tv-eyebrow !text-white/60 mb-6">Diferencial Tevah · Online</div>
            <h2 className="font-display text-[44px] lg:text-[68px] leading-[0.98] tracking-[-0.04em]">
              Sua loja Tevah,<br/>
              <span className="font-editorial text-white/70 font-normal">onde você estiver.</span>
            </h2>
            <p className="text-[15px] text-white/65 mt-6 max-w-[46ch] leading-relaxed">
              Um consultor de estilo da Tevah analisa seu perfil, sua agenda e suas
              preferências, e monta seleções curadas em videochamada de 30 minutos.
              Mesma atenção da loja física. Sem deslocamento.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[520px]">
              {[
                { t: "Casual",   s: "Dia a dia, viagens" },
                { t: "Social",   s: "Reuniões, jantares" },
                { t: "Completa", s: "Guarda-roupa anual" },
              ].map((m, i) => (
                <button key={i} className={"text-left rounded-xl border p-4 transition " + (i === 1 ? "border-white bg-white/[.06]" : "border-white/15 hover:border-white/40")}>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/55">Tipo · 0{i+1}</div>
                  <div className="text-[16px] mt-2">{m.t}</div>
                  <div className="text-[12px] text-white/55 mt-0.5">{m.s}</div>
                </button>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#" className="btn-primary !bg-white !text-black hover:!bg-white/90">
                Agendar agora <Icon name="arrow-right" size={16}/>
              </a>
              <a href="#" className="tv-link !text-white" style={{ "--tw":"" }}>
                Como funciona <Icon name="play" size={12}/>
              </a>
              <div className="flex items-center gap-2 text-[12px] text-white/55">
                <span className="flex -space-x-2">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-stone-300 to-stone-500 border border-black"/>
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-stone-400 to-stone-700 border border-black"/>
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-stone-200 to-stone-400 border border-black"/>
                </span>
                12 consultores · resposta em 24h
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="consul-photo aspect-[4/5] rounded-2xl relative overflow-hidden">
                <Photo src={IMG.consultoria} ratio="auto" tone="dark" tag="CONSULTORIA · VIDEOCALL · MODEL" objectPos="50% 20%" className="absolute inset-0 h-full w-full"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"/>
                {/* Floating UI card — booking */}
                <div className="absolute right-6 top-6 w-[280px] rounded-xl bg-white text-[#1D1D1F] shadow-[0_20px_60px_rgba(0,0,0,.4)] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-2)]">Próxima janela</div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"/>
                  </div>
                  <div className="text-[18px] mt-2 font-display">Hoje · 19:30</div>
                  <div className="text-[12px] text-[var(--tv-ink-2)] mt-0.5">Com Rafael — Atelier · 28 min</div>
                  <div className="mt-3 grid grid-cols-4 gap-1.5">
                    {["18:30","19:00","19:30","20:00"].map((t,i) => (
                      <span key={i} className={"text-[11px] text-center py-1.5 rounded " + (i===2 ? "bg-black text-white" : "bg-black/[.04]")}>{t}</span>
                    ))}
                  </div>
                  <button className="mt-3 w-full h-9 bg-black text-white text-[12px] rounded-md">Confirmar agendamento</button>
                </div>

                {/* Floating UI card — preference */}
                <div className="absolute left-6 bottom-6 w-[260px] rounded-xl bg-white/95 backdrop-blur text-[#1D1D1F] shadow-[0_20px_60px_rgba(0,0,0,.4)] p-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-2)]">Seu perfil de estilo</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 rounded-full bg-black/[.06] overflow-hidden">
                      <div className="h-full bg-[#1D1D1F]" style={{ width: "72%" }}/>
                    </div>
                    <span className="text-[11px] font-mono">72%</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Quiet luxury","Tons neutros","Slim fit","Lã & linho"].map((t,i) => (
                      <span key={i} className="tv-chip !h-7 !text-[11px] !px-2.5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- NOVIDADES ---------- */
const products = [
  { name: "Camisa Social Algodão Egípcio",  cat: "Social",  price: "459",  badge: "Sob Medida", new: true,  imgA: IMG.pCamisa,  imgB: IMG.pCamisaB,  toneA:"light", toneB:"warm",  tagA:"CAMISA · FRONT", tagB:"CAMISA · COSTAS", colors:["#fff","#0A0A0A","#A8B4C0","#6E6E73"], colorsExtra: 2 },
  { name: "Blazer Mescla Lã Fria",          cat: "Atelier", price: "1.890",badge: "Atelier",    new: false, imgA: IMG.pBlazer,  imgB: IMG.pBlazerB,  toneA:"navy",  toneB:"olive", tagA:"BLAZER · LOOK",  tagB:"BLAZER · DETALHE", colors:["#1E2632","#3C3F35","#1D1D1F"], colorsExtra: 1 },
  { name: "Polo Piquet Mercerizada",        cat: "Casual",  price: "289",  badge: null,         new: true,  imgA: IMG.pPolo,    imgB: IMG.pPoloB,    toneA:"warm",  toneB:"light", tagA:"POLO · FRONT",   tagB:"POLO · DETALHE", colors:["#EFEAE3","#1D1D1F","#5C6A53"], colorsExtra: 3 },
  { name: "Calça Alfaiataria Lã 130's",     cat: "Social",  price: "649",  badge: "Sob Medida", new: false, imgA: IMG.pCalca,   imgB: IMG.pCalcaB,   toneA:"olive", toneB:"navy",  tagA:"CALCA · FRONT",  tagB:"CALCA · BARRA", colors:["#1D1D1F","#3C3F35","#1E2632"], colorsExtra: 1 },
  { name: "Camisa Linho Italiano",          cat: "Casual",  price: "399",  badge: null,         new: true,  imgA: IMG.pLinho,   imgB: IMG.pLinhoB,   toneA:"warm",  toneB:"light", tagA:"LINHO · FRONT",  tagB:"LINHO · COSTAS", colors:["#fff","#EFEAE3","#A8B4C0"], colorsExtra: 2 },
  { name: "Bermuda Sarja Stretch",          cat: "Esporte", price: "229",  badge: null,         new: false, imgA: IMG.pBermuda, imgB: IMG.pBermudaB, toneA:"light", toneB:"olive", tagA:"BERMUDA · FRONT",tagB:"BERMUDA · BOLSO", colors:["#3C3F35","#1D1D1F","#A8B4C0"], colorsExtra: 1 },
  { name: "Suéter Tricô Lã Merino",         cat: "Casual",  price: "569",  badge: null,         new: true,  imgA: IMG.pSueter,  imgB: IMG.pSueterB,  toneA:"warm",  toneB:"navy",  tagA:"TRICO · FRONT",  tagB:"TRICO · DETALHE", colors:["#EFEAE3","#1E2632","#1D1D1F"], colorsExtra: 2 },
  { name: "Cinto Couro Vegetal Italiano",   cat: "Acessórios",price: "349",badge: null,         new: false, imgA: IMG.pCinto,   imgB: IMG.pCintoB,   toneA:"warm",  toneB:"light", tagA:"CINTO · DETALHE",tagB:"CINTO · FIVELA", colors:["#3a2b22","#1D1D1F"], colorsExtra: 1 },
];

const Novidades = () => {
  const [tab, setTab] = useState("Novidades");
  const tabs = ["Novidades", "Mais vendidos", "Sob Medida", "Atelier"];

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <SectionHead
            eyebrow="Recém-chegados"
            title="Edição de inverno,"
            italic="curada."
            link="Ver catálogo completo"
          />
        </Reveal>

        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} className={"tv-chip " + (tab === t ? "is-on" : "")}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[12px] text-[var(--tv-ink-2)]">
            <span>Ordenar por</span>
            <button className="flex items-center gap-1.5 text-[var(--tv-ink)]">Relevância <Icon name="chev-down" size={14}/></button>
          </div>
        </div>

        <Reveal className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-12">
            {products.map((p, i) => (<ProductCard key={i} p={p}/>))}
          </div>
        </Reveal>

        <div className="mt-14 flex justify-center">
          <a href="#" className="btn-secondary">Ver mais 240 peças <Icon name="arrow-right" size={16}/></a>
        </div>
      </div>
    </section>
  );
};

/* ---------- HERITAGE ---------- */
const Heritage = () => {
  return (
    <section className="bg-[var(--tv-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">
            <div className="tv-eyebrow mb-6">Herança · 1959 — 2026</div>
            <h2 className="font-display text-[44px] lg:text-[64px] leading-[0.98] tracking-[-0.04em]">
              Sessenta e seis anos<br/>
              <span className="font-editorial text-[var(--tv-ink-2)] font-normal">vestindo</span> o Sul.
            </h2>
            <p className="text-[15px] text-[var(--tv-ink-2)] mt-6 max-w-[46ch] leading-relaxed">
              Da primeira loja em Porto Alegre à fábrica própria, a Tevah é a marca de
              moda masculina mais lembrada do Rio Grande do Sul. A mesma alfaiataria
              que veste o empresário gaúcho há gerações agora opera com logística
              unificada entre as 42 franquias.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#" className="btn-secondary">Nossa história</a>
              <a href="#" className="btn-secondary">Visite uma loja</a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-4">
            {[
              { y: "1959", t: "Fundação", d: "A primeira loja abre em Porto Alegre.", num: "01" },
              { y: "1987", t: "Fábrica própria", d: "Inauguração da unidade industrial — alfaiataria sob medida em escala.", num: "02" },
              { y: "2008", t: "Top of Mind", d: "Marca mais lembrada em moda masculina no RS pela primeira vez.", num: "03" },
              { y: "2026", t: "Tevah Digital", d: "E-commerce + CRM unificados. A loja inteira na palma da mão.", num: "04", current: true },
            ].map((row, i) => (
              <div key={i} className={"grid grid-cols-12 gap-4 items-center py-6 border-b border-[var(--tv-line)] " + (row.current ? "bg-white rounded-2xl px-5 border-0 shadow-[var(--tv-shadow)]" : "")}>
                <div className="col-span-3 lg:col-span-2">
                  <div className="heritage-num text-[68px] lg:text-[96px] text-[var(--tv-ink)]">
                    {row.y.slice(2)}
                  </div>
                </div>
                <div className="col-span-9 lg:col-span-9">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">{row.num} · {row.y}</div>
                  <div className="text-[22px] lg:text-[26px] font-display mt-1 tracking-[-0.02em]">{row.t}</div>
                  <div className="text-[14px] text-[var(--tv-ink-2)] mt-1.5 max-w-[56ch]">{row.d}</div>
                </div>
                <div className="hidden lg:flex col-span-1 justify-end">
                  {row.current ? <span className="badge badge-dark">Hoje</span> : <Icon name="chev-right" size={18} className="text-[var(--tv-ink-3)]"/>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- COMPLETE O LOOK (editorial product set) ---------- */
const CompleteLook = () => {
  const items = [
    { name: "Blazer Mescla", price: "1.890", dot: { x: 38, y: 30 } },
    { name: "Camisa Egípcia", price: "459",  dot: { x: 44, y: 52 } },
    { name: "Calça Lã 130's", price: "649",  dot: { x: 46, y: 76 } },
    { name: "Cinto Couro",    price: "349",  dot: { x: 50, y: 64 } },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="bg-white border-y border-[var(--tv-line)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <SectionHead
            eyebrow="Look · 03 · Atelier"
            title="Monte o look"
            italic="completo."
            link="Ver todos os looks"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden">
              <Photo src={IMG.lookFull} ratio="4/5" tone="navy" tag="LOOK 03 · FULL · MODEL" objectPos="50% 30%"/>
              {items.map((it, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="absolute w-7 h-7 rounded-full bg-white/95 grid place-items-center shadow-lg transition-transform hover:scale-110"
                  style={{ left: it.dot.x + "%", top: it.dot.y + "%", transform: "translate(-50%,-50%)" }}
                  aria-label={it.name}
                >
                  <span className={"w-2 h-2 rounded-full " + (active === i ? "bg-black" : "bg-black/30")}/>
                  {active === i && <span className="absolute inset-0 rounded-full border border-white animate-ping"/>}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-2">
              {items.map((it, i) => (
                <button key={i} onClick={() => setActive(i)} className={"w-full text-left flex items-center gap-4 p-3 rounded-xl border transition " + (active === i ? "border-black bg-[var(--tv-bg)]" : "border-transparent hover:bg-[var(--tv-bg)]")}>
                  <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Photo
                      src={[IMG.pBlazer, IMG.pCamisa, IMG.pCalca, IMG.pCinto][i]}
                      ratio="auto"
                      tone={i % 2 === 0 ? "warm" : "olive"}
                      tag=""
                      className="h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">0{i+1} / 04</div>
                    <div className="text-[15px] mt-1">{it.name}</div>
                    <div className="text-[12px] text-[var(--tv-ink-2)] mt-0.5">R$ {it.price}</div>
                  </div>
                  <Icon name="plus" size={16} className="text-[var(--tv-ink-2)]"/>
                </button>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl bg-[var(--tv-bg)] border border-[var(--tv-line)]">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[var(--tv-ink-2)]">Look completo · 4 peças</span>
                <span className="text-[20px] font-display tabular-nums">R$ 3.347</span>
              </div>
              <div className="mt-1 text-[12px] text-emerald-700">Economize R$ 167 montando o look completo.</div>
              <button className="btn-primary mt-4 w-full">Adicionar look à sacola</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- LOJAS / DISPONIBILIDADE ---------- */
const Lojas = () => {
  const cities = [
    { c: "Porto Alegre",  n: 7 },
    { c: "Caxias do Sul", n: 3 },
    { c: "Pelotas",       n: 2 },
    { c: "Florianópolis", n: 4 },
    { c: "Curitiba",      n: 3 },
    { c: "Joinville",     n: 2 },
    { c: "Novo Hamburgo", n: 2 },
    { c: "Santa Maria",   n: 2 },
  ];
  return (
    <section className="bg-[var(--tv-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-8 items-end mb-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="tv-eyebrow mb-3">Rede física · Logística unificada</div>
            <h2 className="font-display text-[34px] md:text-[44px] leading-[1.02] tracking-[-0.035em]">
              42 lojas. Um único estoque. <span className="font-editorial text-[var(--tv-ink-2)]">Seu.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[14px] text-[var(--tv-ink-2)] leading-relaxed">
              Compre online e retire em qualquer franquia. Provou e não serviu?
              Devolva em qualquer loja Tevah do país.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-t border-[var(--tv-line)]">
          {cities.map((ci, i) => (
            <a key={i} href="#" className="group p-5 border-b border-r border-[var(--tv-line)] hover:bg-white transition">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)] flex items-center gap-1.5">
                <Icon name="pin" size={12}/> {ci.n} {ci.n === 1 ? "loja" : "lojas"}
              </div>
              <div className="text-[16px] mt-2">{ci.c}</div>
              <div className="text-[12px] text-[var(--tv-ink-2)] mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                Ver lojas <Icon name="arrow-right" size={12}/>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- NEWSLETTER ---------- */
const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="tv-eyebrow !text-white/50 mb-4">Tevah Atelier · Newsletter</div>
          <h3 className="font-display text-[34px] lg:text-[48px] leading-[1] tracking-[-0.035em]">
            Editoriais de inverno,<br/>
            <span className="font-editorial text-white/65">na sua caixa.</span>
          </h3>
          <p className="text-[14px] text-white/55 mt-4 max-w-[44ch]">
            Uma vez por mês. Curadoria, lançamentos da fábrica e convites para experiências fechadas. Zero spam.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 max-w-[480px] lg:ml-auto">
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-3 text-[16px] placeholder:text-white/30 transition"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-white text-black">
                <Icon name="arrow-right" size={16}/>
              </button>
            </div>
            <label className="flex items-center gap-2 text-[12px] text-white/55">
              <span className="w-4 h-4 rounded border border-white/40 grid place-items-center">
                <Icon name="check" size={10}/>
              </span>
              Aceito receber comunicações Tevah, conforme a Política de Privacidade.
            </label>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-3 overflow-hidden">
          <div className="marquee-track text-white/40 font-mono text-[11px] tracking-[0.18em] uppercase whitespace-nowrap">
            {Array.from({length: 2}).map((_, k) => (
              <React.Fragment key={k}>
                <span>Top of Mind 2024 · Moda Masculina · RS</span><span>·</span>
                <span>Fábrica própria · Porto Alegre</span><span>·</span>
                <span>Alfaiataria sob medida em 14 dias</span><span>·</span>
                <span>42 franquias · Brasil</span><span>·</span>
                <span>Frete grátis acima de R$ 499</span><span>·</span>
                <span>Tevah · desde 1959</span><span>·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- FOOTER ---------- */
const Footer = () => {
  const cols = [
    { t: "Comprar", links: ["Social", "Casual", "Esporte", "Sob Medida", "Acessórios", "Outlet"] },
    { t: "Serviços", links: ["Consultoria de Estilo", "Atelier · Sob Medida", "Guia de Tamanhos", "Cuidados com a peça"] },
    { t: "Atendimento", links: ["Trocas e devoluções", "Rastrear pedido", "Formas de pagamento", "Frete e prazos", "Contato"] },
    { t: "Institucional", links: ["A Tevah", "Fábrica", "Franquias", "Trabalhe conosco", "Sustentabilidade", "Imprensa"] },
  ];
  return (
    <footer className="bg-[var(--tv-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <Wordmark style={{ fontSize: 22 }}/>
            <p className="text-[13px] text-[var(--tv-ink-2)] mt-4 max-w-[36ch] leading-relaxed">
              Líder em moda masculina no Sul do Brasil desde 1959. Fábrica em Porto Alegre.
              42 franquias. Alfaiataria própria.
            </p>
            <div className="mt-6 flex gap-3">
              {["instagram","facebook","youtube","linkedin"].map((s,i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-[var(--tv-line)] hover:bg-white transition text-[10px] font-mono uppercase">
                  {s.slice(0,2)}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i} className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)] mb-4">{c.t}</div>
              <ul className="space-y-2.5">
                {c.links.map(l => <li key={l}><a href="#" className="text-[13px] text-[var(--tv-ink)] hover:text-[var(--tv-ink-2)] transition">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-[var(--tv-line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[var(--tv-ink-2)] font-mono uppercase tracking-[0.12em]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 1959 — 2026 Tevah Indústria de Confecções</span>
            <span className="hidden md:inline">·</span>
            <a href="#">Política de privacidade</a>
            <a href="#">Termos de uso</a>
            <a href="#">LGPD</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5"><Icon name="shield" size={12}/> Site seguro · SSL</span>
            <span className="flex items-center gap-2 normal-case tracking-normal font-sans">
              <span className="px-2 py-1 rounded bg-white border border-[var(--tv-line)] text-[var(--tv-ink-2)]">Pix</span>
              <span className="px-2 py-1 rounded bg-white border border-[var(--tv-line)] text-[var(--tv-ink-2)]">Visa</span>
              <span className="px-2 py-1 rounded bg-white border border-[var(--tv-line)] text-[var(--tv-ink-2)]">Master</span>
              <span className="px-2 py-1 rounded bg-white border border-[var(--tv-line)] text-[var(--tv-ink-2)]">Elo</span>
              <span className="px-2 py-1 rounded bg-white border border-[var(--tv-line)] text-[var(--tv-ink-2)]">Boleto</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Hero, Categories, Consultoria, Novidades, Heritage, CompleteLook, Lojas, Newsletter, Footer });

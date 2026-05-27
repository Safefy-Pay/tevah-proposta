/* TEVAH — Design System Components
 * Original premium-minimal system using Helvetica + custom tokens.
 */

const { useState, useEffect, useRef } = React;

/* ---------- Tiny SVG icons ---------- */
const Icon = ({ name, size = 18, stroke = 1.5, className = "" }) => {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search":     return (<svg viewBox="0 0 24 24" {...s} className={className}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>);
    case "bag":        return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M5 8h14l-1.2 11.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>);
    case "user":       return (<svg viewBox="0 0 24 24" {...s} className={className}><circle cx="12" cy="8" r="3.5"/><path d="M4.5 20c1.5-3.5 4.5-5 7.5-5s6 1.5 7.5 5"/></svg>);
    case "heart":      return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M12 20s-7-4.5-9-9.2C1.5 7 4 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3 0 5.5 3 4 6.8C19 15.5 12 20 12 20Z"/></svg>);
    case "menu":       return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M4 7h16M4 12h16M4 17h16"/></svg>);
    case "arrow-right":return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrow-left": return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>);
    case "play":       return (<svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}><path d="M8 5v14l11-7z"/></svg>);
    case "check":      return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="m5 12 5 5L20 7"/></svg>);
    case "ruler":      return (<svg viewBox="0 0 24 24" {...s} className={className}><rect x="2" y="9" width="20" height="6" rx="1"/><path d="M6 9v3M9 9v4M12 9v3M15 9v4M18 9v3"/></svg>);
    case "calendar":   return (<svg viewBox="0 0 24 24" {...s} className={className}><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3.5v3M16 3.5v3"/></svg>);
    case "truck":      return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M2 7h11v9H2zM13 10h5l3 3v3h-8zM6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>);
    case "scissors":   return (<svg viewBox="0 0 24 24" {...s} className={className}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m20 4-9 8 9 8M14 12h-3"/></svg>);
    case "shield":     return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"/></svg>);
    case "pin":        return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M12 21s-7-7.2-7-12a7 7 0 1 1 14 0c0 4.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>);
    case "plus":       return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M12 5v14M5 12h14"/></svg>);
    case "x":          return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M6 6l12 12M18 6 6 18"/></svg>);
    case "chev-down":  return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="m6 9 6 6 6-6"/></svg>);
    case "chev-right": return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="m9 6 6 6-6 6"/></svg>);
    case "spark":      return (<svg viewBox="0 0 24 24" {...s} className={className}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>);
    default: return null;
  }
};

/* ---------- TEVAH Wordmark ---------- */
const Wordmark = ({ className = "", style = {} }) => (
  <span className={"font-display tracking-[0.32em] " + className} style={{ fontWeight: 600, ...style }}>TEVAH</span>
);

/* ---------- Photo placeholder (studio look) ---------- */
/* Studio photo. Accepts a `src` for real imagery; falls back to a tinted placeholder. */
const Photo = ({ src, ratio = "3/4", tag = "PRODUCT SHOT", tone = "light", objectPos = "center", children, className = "", style = {} }) => {
  const toneStyle = tone === "dark"
    ? { background: "linear-gradient(180deg,#1c1c1e 0%,#131315 60%,#0c0c0e 100%)" }
    : tone === "warm"
    ? { background: "linear-gradient(180deg,#EFEAE3 0%,#E4DDD2 100%)" }
    : tone === "olive"
    ? { background: "linear-gradient(180deg,#3C3F35 0%,#272a23 100%)" }
    : tone === "navy"
    ? { background: "linear-gradient(180deg,#1E2632 0%,#11161e 100%)" }
    : {};
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const hasImg = !!src && !errored;
  return (
    <div className={"tv-photo " + className} style={{ aspectRatio: ratio, ...toneStyle, ...style }}>
      {src && !errored && (
        <img
          src={src}
          alt={tag}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          style={{ objectPosition: objectPos }}
          className={"absolute inset-0 w-full h-full object-cover transition-opacity duration-700 " + (loaded ? "opacity-100" : "opacity-0")}
        />
      )}
      <span className="tag" style={ (tone !== "light" || hasImg) ? { color: "rgba(255,255,255,.7)", mixBlendMode: hasImg ? "difference" : "normal" } : {}}>{tag}</span>
      {children}
    </div>
  );
};

/* ---------- Announcement bar ---------- */
const Announce = () => (
  <div className="w-full text-[11px] tracking-[0.18em] uppercase font-mono text-white bg-[#0A0A0A] py-2 text-center">
    Frete grátis acima de R$ 499 · 10x sem juros · Consultoria de estilo online disponível
  </div>
);

/* ---------- Navbar ---------- */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const bagRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      setCartCount((c) => c + 1);
      // bounce bag + pop badge
      const bag = bagRef.current;
      if (bag) {
        bag.classList.remove("tv-bag-bounce");
        void bag.offsetWidth;
        bag.classList.add("tv-bag-bounce");
      }
      const badge = badgeRef.current;
      if (badge) {
        badge.classList.remove("tv-badge-pop");
        void badge.offsetWidth;
        badge.classList.add("tv-badge-pop");
      }
    };
    window.addEventListener("tv:cart-add", handler);
    return () => window.removeEventListener("tv:cart-add", handler);
  }, []);
  const items = [
    { label: "Social",    sub: "Camisas, calças, blazers" },
    { label: "Casual",    sub: "Polos, malhas, jeans" },
    { label: "Esporte",   sub: "Bermudas, tees, jaquetas" },
    { label: "Sob Medida",sub: "Alfaiataria própria" },
    { label: "Acessórios",sub: "Cintos, gravatas, lenços" },
  ];
  return (
    <header className="nav-glass sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="lg:hidden text-[#1D1D1F]" onClick={() => setOpen(true)} aria-label="Menu"><Icon name="menu" size={22}/></button>
          <a href="#" className="flex items-center"><Wordmark style={{ fontSize: 18 }}/></a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[14px] text-[#1D1D1F]">
          {items.map(i => (
            <a key={i.label} href="#" className="relative py-2 hover:text-black/60 transition-colors">{i.label}</a>
          ))}
          <span className="w-px h-4 bg-[var(--tv-line)]"></span>
          <a href="#consultoria" className="relative py-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Consultoria
          </a>
        </nav>

        <div className="flex items-center gap-1">
          {!searchOn ? (
            <button className="h-10 w-10 grid place-items-center rounded-full hover:bg-black/[.04] transition" onClick={() => setSearchOn(true)} aria-label="Buscar"><Icon name="search"/></button>
          ) : (
            <div className="hidden md:flex items-center gap-2 h-10 px-3 rounded-full bg-white border border-[var(--tv-line)] w-[280px]">
              <Icon name="search" size={16}/>
              <input autoFocus placeholder="Buscar produtos, coleções, ocasiões…" className="flex-1 bg-transparent outline-none text-[13px]"/>
              <button onClick={() => setSearchOn(false)} aria-label="Fechar busca"><Icon name="x" size={14}/></button>
            </div>
          )}
          <button className="h-10 w-10 grid place-items-center rounded-full hover:bg-black/[.04] transition" aria-label="Conta"><Icon name="user"/></button>
          <button className="h-10 w-10 grid place-items-center rounded-full hover:bg-black/[.04] transition" aria-label="Favoritos"><Icon name="heart"/></button>
          <button data-cart-btn className="h-10 px-3 rounded-full hover:bg-black/[.04] transition flex items-center gap-2 relative" aria-label="Sacola">
            <span ref={bagRef} className="inline-flex"><Icon name="bag"/></span>
            <span ref={badgeRef} className="text-[12px] font-mono tabular-nums">{cartCount}</span>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white animate-in fade-in" onClick={() => setOpen(false)}>
          <div className="px-6 py-5 flex items-center justify-between border-b border-[var(--tv-line)]">
            <Wordmark style={{ fontSize: 18 }}/>
            <button onClick={() => setOpen(false)}><Icon name="x"/></button>
          </div>
          <div className="px-6 py-6 space-y-1">
            {items.map(i => (
              <a key={i.label} href="#" className="flex items-center justify-between py-4 border-b border-[var(--tv-line-2)]">
                <div>
                  <div className="text-[20px] font-display">{i.label}</div>
                  <div className="text-[12px] text-[var(--tv-ink-2)] mt-0.5">{i.sub}</div>
                </div>
                <Icon name="chev-right" size={18}/>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

/* ---------- Trust pillars ---------- */
const TrustBar = () => {
  const items = [
    { ico: "shield",   t: "65+ anos", s: "Desde 1959" },
    { ico: "spark",    t: "Top of Mind", s: "Moda masculina · RS" },
    { ico: "scissors", t: "Alfaiataria própria", s: "Fábrica em Porto Alegre" },
    { ico: "truck",    t: "Entrega nacional", s: "42 franquias · logística unificada" },
  ];
  return (
    <section className="border-y border-[var(--tv-line)] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i, idx) => (
          <div key={idx} className="flex items-center gap-3.5">
            <div className="h-10 w-10 grid place-items-center rounded-full border border-[var(--tv-line)] text-[#1D1D1F]">
              <Icon name={i.ico} size={18}/>
            </div>
            <div>
              <div className="text-[14px] font-medium leading-tight">{i.t}</div>
              <div className="text-[12px] text-[var(--tv-ink-2)] leading-tight mt-0.5">{i.s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- Cart system: fly-to-cart + bag bounce + toast ---------- */
const flyToCart = (srcEl, product) => {
  const cartBtn = document.querySelector("[data-cart-btn]");
  if (!srcEl || !cartBtn) return;

  const srcRect = srcEl.getBoundingClientRect();
  const dstRect = cartBtn.getBoundingClientRect();

  // Build the flying clone
  const clone = document.createElement("div");
  clone.className = "tv-fly";
  clone.style.left = srcRect.left + "px";
  clone.style.top = srcRect.top + "px";
  clone.style.width = srcRect.width + "px";
  clone.style.height = srcRect.height + "px";
  if (product?.imgA) {
    const img = document.createElement("img");
    img.src = product.imgA;
    img.style.width = "100%"; img.style.height = "100%"; img.style.objectFit = "cover";
    clone.appendChild(img);
  } else {
    clone.style.background = "#e2e2e5";
  }
  document.body.appendChild(clone);

  // Trigger animation on next frame
  requestAnimationFrame(() => {
    const dx = dstRect.left + dstRect.width / 2 - srcRect.left - srcRect.width / 2;
    const dy = dstRect.top + dstRect.height / 2 - srcRect.top - srcRect.height / 2;
    clone.style.transform = `translate(${dx}px, ${dy}px) scale(0.08) rotate(-6deg)`;
    clone.style.opacity = "0.2";
    clone.style.borderRadius = "9999px";
  });

  setTimeout(() => clone.remove(), 900);

  // Notify
  window.dispatchEvent(new CustomEvent("tv:cart-add", { detail: { product } }));
};

const showToast = (product) => {
  const t = document.createElement("div");
  t.className = "tv-toast";
  t.innerHTML = `
    <img alt="" src="${(product && product.imgA) || ""}" />
    <div style="min-width:0">
      <div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;font-family:'SF Mono',Menlo,monospace;color:rgba(255,255,255,.55)">Adicionado · Sacola</div>
      <div style="font-size:13px;margin-top:2px;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:230px">${(product && product.name) || "Item"}</div>
      <div style="font-size:11px;color:rgba(255,255,255,.55);margin-top:2px">R$ ${(product && product.price) || ""}</div>
    </div>
    <button aria-label="Fechar" style="margin-left:6px;background:transparent;color:rgba(255,255,255,.7);border:0;padding:6px;cursor:pointer">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
  `;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("in"));
  const close = () => { t.classList.remove("in"); setTimeout(() => t.remove(), 350); };
  t.querySelector("button").addEventListener("click", close);
  setTimeout(close, 2600);
};

const ProductCard = ({ p }) => {
  const [liked, setLiked] = useState(false);
  const imgWrapRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    flyToCart(imgWrapRef.current, p);
    showToast(p);
  };

  return (
    <a href="#" className="product-card group block">
      <div className="relative" ref={imgWrapRef}>
        <Photo src={p.imgA} ratio="3/4" tone={p.toneA || "light"} tag={p.tagA || "FRONT VIEW"} className="img-a absolute inset-0"/>
        <Photo src={p.imgB} ratio="3/4" tone={p.toneB || "warm"} tag={p.tagB || "ALT VIEW"} className="img-b absolute inset-0"/>
        <div className="relative invisible"><Photo ratio="3/4" /></div>

        {/* badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {p.badge && <span className={"badge " + (p.badge === "Sob Medida" ? "badge-dark" : "badge-light")}>{p.badge}</span>}
          {p.new && <span className="badge badge-light">Novo</span>}
        </div>

        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-white/90 backdrop-blur border border-[var(--tv-line)] opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Favoritar"
        >
          <Icon name="heart" size={16} className={liked ? "fill-black" : ""}/>
        </button>

        {/* quick view */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
          <div className="bg-white/95 backdrop-blur rounded-lg border border-[var(--tv-line)] flex">
            <button onClick={(e) => e.preventDefault()} className="flex-1 h-10 text-[12px] font-medium hover:bg-black/[.04]">Vista rápida</button>
            <span className="w-px bg-[var(--tv-line)]"/>
            <button onClick={handleAdd} className="flex-1 h-10 text-[12px] font-medium hover:bg-black/[.04] flex items-center justify-center gap-1.5">
              <Icon name="plus" size={12}/> Sacola
            </button>
          </div>
        </div>
      </div>

      <div className="pt-4 px-0.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">{p.cat}</div>
            <div className="text-[15px] mt-1.5 leading-snug">{p.name}</div>
          </div>
          <div className="text-[15px] tabular-nums whitespace-nowrap">R$ {p.price}</div>
        </div>
        {p.colors && (
          <div className="flex gap-1.5 mt-2.5">
            {p.colors.map((c, i) => <span key={i} className="w-3 h-3 rounded-full border border-black/10" style={{ background: c }}/>)}
            <span className="text-[11px] text-[var(--tv-ink-2)] ml-1">+{p.colorsExtra || 0}</span>
          </div>
        )}
      </div>
    </a>
  );
};

/* ---------- Section header (eyebrow + title + link) ---------- */
const SectionHead = ({ eyebrow, title, link, italic, className = "" }) => (
  <div className={"flex items-end justify-between gap-6 " + className}>
    <div>
      <div className="tv-eyebrow mb-3">{eyebrow}</div>
      <h2 className="font-display text-[34px] md:text-[44px] leading-[1.02] tracking-[-0.035em] max-w-[18ch]">
        {title} {italic && <span className="font-editorial text-[var(--tv-ink-2)]">{italic}</span>}
      </h2>
    </div>
    {link && (
      <a href="#" className="tv-link hidden md:inline-flex">{link} <Icon name="arrow-right" size={16}/></a>
    )}
  </div>
);

/* ---------- Reveal-on-scroll wrapper ---------- */
const Reveal = ({ children, className = "" }) => (
  <div className={"reveal " + className}>{children}</div>
);

Object.assign(window, { Icon, Wordmark, Photo, Announce, Navbar, TrustBar, ProductCard, SectionHead, Reveal });

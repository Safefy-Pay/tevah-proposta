/* TEVAH — Aprovação de proposta
 * Formulário que coleta dados pessoais + empresariais e envia para o WhatsApp
 * com mensagem formatada, preservando UTMs da URL.
 */

const { useState, useMemo, useEffect } = React;

const UFS = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

/* ---------- CONTRATADA (prestadora) ---------- */
const CONTRATADA = {
  razaoSocial: "MENTES TRILIONARIAS LTDA",
  nomeFantasia: "Mentes Trilionarias",
  cnpj: "36.495.595/0001-40",
  inscEstadual: "003680020.00-26",
  endereco: "Estrada Dom João Becker, 2000 · Bloco B Apt 208",
  bairro: "Ingleses/Santinho",
  cep: "88058-600",
  cidade: "Florianópolis",
  estado: "SC",
  representante: "André Pimentel",
  cargo: "Sócio Administrador",
  email: "pimentasforever@gmail.com",
  telefone: "(51) 99005-9251"
};

/* ---------- Masks ---------- */
const onlyDigits = (s) => (s || "").replace(/\D/g, "");
const maskCpf = (v) => onlyDigits(v).slice(0, 11).
replace(/(\d{3})(\d)/, "$1.$2").
replace(/(\d{3})(\d)/, "$1.$2").
replace(/(\d{3})(\d{1,2})$/, "$1-$2");
const maskCnpj = (v) => onlyDigits(v).slice(0, 14).
replace(/^(\d{2})(\d)/, "$1.$2").
replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").
replace(/\.(\d{3})(\d)/, ".$1/$2").
replace(/(\d{4})(\d)/, "$1-$2");
const maskTel = (v) => {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 10) return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
};
const maskCep = (v) => onlyDigits(v).slice(0, 8).replace(/^(\d{5})(\d)/, "$1-$2");

/* ---------- Header nav ---------- */
const TopBar = () =>
<header className="nav-glass sticky top-0 z-30">
    <div className="max-w-[1180px] mx-auto px-6 lg:px-10 h-[60px] flex items-center justify-between">
      <a href="Proposta Tevah.html" className="flex items-center gap-3">
        <Wordmark style={{ fontSize: 15 }} />
        <span className="hidden md:inline text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-2)] border-l border-[var(--tv-line)] pl-3">
          Aprovação · Contrato
        </span>
      </a>
      <a href="Proposta Tevah.html" className="text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-2)] hover:text-[var(--tv-ink)] transition flex items-center gap-2">
        <Icon name="arrow-left" size={14} /> Voltar à proposta
      </a>
    </div>
  </header>;


/* ---------- Field components ---------- */
const Field = ({ label, name, value, onChange, type = "text", required = false, placeholder, maxLength, span = 12, mask, autoComplete, error }) => {
  const handle = (e) => {
    const raw = e.target.value;
    onChange(name, mask ? mask(raw) : raw);
  };
  return (
    <div className={"col-span-12 " + (span === 6 ? "md:col-span-6" : span === 4 ? "md:col-span-4" : span === 8 ? "md:col-span-8" : span === 3 ? "md:col-span-3" : span === 9 ? "md:col-span-9" : "")}>
      <label htmlFor={name} className="field-label block mb-2">
        {label}{required && <span className="text-[var(--tv-ink-3)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handle}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className={"field-input " + (error ? "is-error" : "")} />
      
    </div>);

};

const Select = ({ label, name, value, onChange, required = false, options, span = 12 }) =>
<div className={"col-span-12 " + (span === 6 ? "md:col-span-6" : span === 4 ? "md:col-span-4" : span === 3 ? "md:col-span-3" : span === 9 ? "md:col-span-9" : "")}>
    <label htmlFor={name} className="field-label block mb-2">
      {label}{required && <span className="text-[var(--tv-ink-3)]"> *</span>}
    </label>
    <div className="relative">
      <select
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      required={required}
      className="field-input appearance-none pr-10">
      
        <option value="">Selecione</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--tv-ink-3)]">
        <Icon name="chev-down" size={16} />
      </span>
    </div>
  </div>;


const SectionTitle = ({ n, title, subtitle }) =>
<div className="flex items-start gap-4 mb-6">
    <span className="step-dot is-done">{n}</span>
    <div>
      <div className="text-[18px] font-display tracking-[-0.025em]">{title}</div>
      {subtitle && <div className="text-[13px] text-[var(--tv-ink-2)] mt-1 leading-relaxed">{subtitle}</div>}
    </div>
  </div>;


/* ---------- Main form ---------- */
const Aprovacao = () => {
  // Capture UTMs once on mount
  const utms = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    const out = {};
    for (const [k, v] of params.entries()) {
      if (k.startsWith("utm_") || ["src", "ref", "origem", "cupom", "gclid", "fbclid"].includes(k)) out[k] = v;
    }
    return out;
  }, []);

  const [data, setData] = useState({
    nome: "", email: "", telefone: "", cpf: "",
    razaoSocial: "", nomeFantasia: "", cnpj: "", inscEstadual: "",
    endereco: "", numero: "", complemento: "", bairro: "",
    cidade: "", estado: "", cep: "",
    cargo: "", notas: "",
    aceiteContrato: false, aceiteLgpd: false
  });
  const [sent, setSent] = useState(false);

  const set = (name, value) => setData((d) => ({ ...d, [name]: value }));

  const isValid =
  data.nome && data.email && data.telefone && data.cpf &&
  data.razaoSocial && data.cnpj && data.endereco && data.numero &&
  data.bairro && data.cidade && data.estado && data.cep &&
  data.cargo && data.aceiteContrato && data.aceiteLgpd;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("Não foi possível carregar o gerador de PDF. Recarregue a página e tente novamente.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const W = 595, H = 842, M = 48;
    const today = new Date();
    const fmtDate = today.toLocaleDateString("pt-BR");
    const fmtDateLong = today.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
    const docId = "CTR-TEV-" + today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + String(today.getDate()).padStart(2, "0") + "-" + String(today.getHours()).padStart(2, "0") + String(today.getMinutes()).padStart(2, "0");
    let y = 0;

    // ---------- Helpers ----------
    const pageBreakIfNeeded = (need) => { if (y > H - need) { doc.addPage(); y = M + 12; } };

    const subhead = (text) => {
      pageBreakIfNeeded(40);
      doc.setFont("courier", "bold");
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      doc.text(text.toUpperCase(), M, y);
      y += 4;
      doc.setDrawColor(220, 220, 220);
      doc.line(M, y, W - M, y);
      y += 14;
    };

    const para = (text, opts = {}) => {
      const lh = opts.lh || 13;
      const size = opts.size || 9.5;
      pageBreakIfNeeded(40);
      doc.setFont("helvetica", opts.bold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(29, 29, 31);
      const split = doc.splitTextToSize(text, W - 2 * M);
      split.forEach((line) => {
        pageBreakIfNeeded(30);
        doc.text(line, M, y);
        y += lh;
      });
      y += 6;
    };

    const kv = (items) => {
      doc.setFontSize(9.5);
      items.forEach(([k, v]) => {
        if (v === null || v === undefined || v === "") return;
        pageBreakIfNeeded(30);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(120, 120, 120);
        doc.text(k, M, y);
        doc.setTextColor(29, 29, 31);
        const split = doc.splitTextToSize(String(v), W - M - 175);
        doc.text(split, M + 145, y);
        y += 13 * split.length;
      });
      y += 10;
    };

    const clause = (num, title, paragraphs) => {
      pageBreakIfNeeded(80);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(29, 29, 31);
      doc.text(`CLÁUSULA ${num} — ${title.toUpperCase()}`, M, y);
      y += 16;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      paragraphs.forEach((p, idx) => {
        const numbered = paragraphs.length > 1 ? `${num.replace("ª", "")}.${idx + 1}. ${p}` : p;
        pageBreakIfNeeded(40);
        const split = doc.splitTextToSize(numbered, W - 2 * M);
        split.forEach((line) => {
          pageBreakIfNeeded(30);
          doc.text(line, M, y);
          y += 13;
        });
        y += 6;
      });
      y += 8;
    };

    // ---------- COVER ----------
    doc.setFillColor(10, 10, 10);
    doc.rect(0, 0, W, 96, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("TEVAH", M, 44);
    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text("CONTRATO DE PRESTAÇÃO DE SERVIÇOS · PROPOSTA 001/2026", M, 62);
    doc.text(docId, W - M, 62, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Documento gerado a partir do formulário de aprovação online", M, 82);

    y = 130;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(29, 29, 31);
    const titleLines = doc.splitTextToSize("Contrato de Prestação de Serviços de Design e Desenvolvimento — Plataforma E-commerce + CRM Tevah", W - 2 * M);
    titleLines.forEach((line) => { doc.text(line, M, y); y += 22; });
    y += 8;
    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`Documento: ${docId} · Emitido em ${fmtDate}`, M, y);
    y += 22;

    para("Pelo presente instrumento particular, as partes a seguir qualificadas têm entre si justo e contratado o seguinte:", { size: 10 });

    // ---------- PARTES ----------
    subhead("Contratada · Prestadora dos serviços");
    kv([
      ["Razão Social", CONTRATADA.razaoSocial],
      ["Nome Fantasia", CONTRATADA.nomeFantasia],
      ["CNPJ", CONTRATADA.cnpj],
      ["Inscrição Estadual", CONTRATADA.inscEstadual],
      ["Endereço", CONTRATADA.endereco],
      ["Bairro", CONTRATADA.bairro],
      ["Cidade / UF / CEP", `${CONTRATADA.cidade} / ${CONTRATADA.estado} · CEP ${CONTRATADA.cep}`],
      ["Representante", `${CONTRATADA.representante} · ${CONTRATADA.cargo}`],
      ["Contato", `${CONTRATADA.email} · ${CONTRATADA.telefone}`]
    ]);

    subhead("Contratante · Tomadora dos serviços");
    kv([
      ["Razão Social", data.razaoSocial],
      ["Nome Fantasia", data.nomeFantasia],
      ["CNPJ", data.cnpj],
      ["Inscrição Estadual", data.inscEstadual],
      ["Endereço", `${data.endereco}, ${data.numero}${data.complemento ? " · " + data.complemento : ""}`],
      ["Bairro", data.bairro],
      ["Cidade / UF / CEP", `${data.cidade} / ${data.estado} · CEP ${data.cep}`],
      ["Representante", `${data.nome} · ${data.cargo}`],
      ["CPF do representante", data.cpf],
      ["Contato", `${data.email} · ${data.telefone}`]
    ]);

    // ---------- CLÁUSULAS ----------
    clause("1ª", "Objeto", [
      "A CONTRATADA prestará à CONTRATANTE serviços profissionais de design, desenvolvimento e implantação da plataforma digital de e-commerce integrada ao CRM da marca Tevah (\"Plataforma Tevah Digital\"), conforme proposta comercial nº 001/2026 aceita pela CONTRATANTE, parte integrante e indissociável deste contrato.",
      "O escopo dos serviços compreende: (a) Design System completo — tipografia, paleta, ~28 componentes reutilizáveis e tokens versionados; (b) Telas em alta fidelidade — Home, Catálogo (PLP), Produto (PDP), Checkout, Área do Cliente e Consultoria; (c) Frontend em React/Next.js com renderização do lado do servidor (SSR) e Progressive Web App (PWA); (d) Backend em Node.js com APIs REST e GraphQL; (e) Banco de dados PostgreSQL com cache Redis; (f) Painel administrativo para gestão de catálogo, estoque, pedidos e banners; (g) Módulo CRM com Cliente 360, unificando histórico físico e digital; (h) Módulo de Consultoria de Estilo com agendamento de videochamada, perfil de estilo e jornadas; (i) Integrações com ERP da fábrica, gateway de pagamento, antifraude, e-mail marketing e transportadoras; (j) Integração com 4 (quatro) franquias-piloto; (k) Infraestrutura AWS com CI/CD, monitoramento e backups automáticos; (l) Treinamento presencial da equipe Tevah em Porto Alegre, com carga horária de 8 (oito) horas; (m) Suporte técnico durante 90 (noventa) dias após o go-live, em regime 8x5."
    ]);

    clause("2ª", "Prazo e cronograma", [
      "O prazo total de execução é de 16 (dezesseis) semanas, contado do recebimento do sinal previsto na Cláusula 3ª e da realização do kick-off do projeto.",
      "O cronograma é dividido em 4 (quatro) fases: Fase 01 — Discovery e Design System (semanas 01 a 03); Fase 02 — Frontend e Backend em paralelo (semanas 04 a 09); Fase 03 — CRM e Integrações (semanas 10 a 13); Fase 04 — QA, deploy, beta com 50 clientes Tevah, treinamento e go-live (semanas 14 a 16).",
      "Atrasos imputáveis à CONTRATANTE — ausência de aprovações, materiais ou acessos — suspendem o cronograma proporcionalmente, sem prejuízo à CONTRATADA."
    ]);

    clause("3ª", "Valor e forma de pagamento", [
      "O valor total dos serviços é de R$ 150.000,00 (cento e cinquenta mil reais), pago em 2 (dois) marcos: (a) Sinal de R$ 75.000,00 (setenta e cinco mil reais), equivalente a 50% (cinquenta por cento) do valor total, devido na assinatura deste contrato; e (b) Saldo de R$ 75.000,00 (setenta e cinco mil reais), equivalente a 50% (cinquenta por cento) do valor total, devido na data do go-live (entrega final em produção).",
      "Os pagamentos serão realizados via PIX, processados pela plataforma Safefy Pay, gerida pela CONTRATADA.",
      "O atraso superior a 5 (cinco) dias úteis no pagamento de qualquer marco acarretará suspensão imediata dos trabalhos, multa de 2% (dois por cento) sobre o valor em aberto e juros de mora de 1% (um por cento) ao mês, sem prejuízo das demais sanções legais."
    ]);

    clause("4ª", "Obrigações da contratada", [
      "Executar os serviços com diligência técnica, observando as melhores práticas de mercado e os padrões definidos no Design System aprovado.",
      "Cumprir os prazos do cronograma da Cláusula 2ª, comunicando previamente eventuais riscos de atraso.",
      "Manter sigilo absoluto sobre informações estratégicas, comerciais, técnicas e financeiras da CONTRATANTE, nos termos da Cláusula 7ª.",
      "Entregar todos os artefatos do projeto: código-fonte completo, design system, documentação técnica, credenciais de infraestrutura e acessos administrativos.",
      "Prestar suporte técnico durante 90 (noventa) dias após o go-live, com SLA 8x5, resposta em até 4 (quatro) horas úteis e resolução em até 24 (vinte e quatro) horas úteis."
    ]);

    clause("5ª", "Obrigações da contratante", [
      "Realizar os pagamentos nas datas e formas pactuadas na Cláusula 3ª.",
      "Fornecer, em até 5 (cinco) dias úteis após o kick-off, todos os materiais e acessos necessários — fotografia de produto em qualidade studio, identidade visual completa, conteúdo institucional, acessos a sistemas legados (ERP, e-mail marketing, redes sociais) e contatos das franquias-piloto.",
      "Indicar 1 (um) ponto focal único e com autoridade para aprovações de marca, produto e contrato.",
      "Aprovar entregas dentro de 5 (cinco) dias úteis após o envio. Decorrido esse prazo sem manifestação, a entrega será considerada tacitamente aprovada."
    ]);

    clause("6ª", "Propriedade intelectual", [
      "Após o pagamento integral do valor previsto na Cláusula 3ª, a CONTRATANTE adquire direitos patrimoniais exclusivos, perpétuos e mundiais sobre o código-fonte, design system, marca digital e demais entregáveis produzidos especificamente para a Plataforma Tevah Digital.",
      "Bibliotecas, frameworks, componentes open-source e serviços de terceiros mantêm suas licenças originais, cuja conformidade é responsabilidade compartilhada das partes.",
      "A CONTRATADA fica autorizada a utilizar o projeto, com discrição, em seu portfólio profissional e materiais de divulgação, respeitando o sigilo de informações estratégicas."
    ]);

    clause("7ª", "Confidencialidade", [
      "As partes obrigam-se a manter sigilo absoluto sobre toda informação comercial, técnica, financeira e operacional trocada durante a execução deste contrato, pelo prazo de 5 (cinco) anos contados de seu término.",
      "A obrigação de sigilo não se aplica a informações de domínio público, obtidas legitimamente de terceiros sem dever de confidencialidade, ou cuja divulgação seja exigida por ordem judicial ou autoridade competente."
    ]);

    clause("8ª", "Garantia", [
      "A CONTRATADA garante, pelo prazo de 90 (noventa) dias após o go-live, a correção, sem custo adicional, de bugs, erros e defeitos decorrentes do desenvolvimento.",
      "Não estão cobertos pela garantia: novas funcionalidades, integrações adicionais, mudanças de escopo, problemas oriundos de terceiros (gateway, transportadoras, ERP) ou alterações realizadas pela CONTRATANTE sem acompanhamento da CONTRATADA. Tais demandas são tratadas como evolução de produto, mediante orçamento específico."
    ]);

    clause("9ª", "Proteção de dados (LGPD)", [
      "As partes obrigam-se a tratar dados pessoais conforme a Lei nº 13.709/2018 (LGPD) e demais normas aplicáveis.",
      "A Plataforma Tevah Digital será entregue em conformidade com os requisitos da LGPD para o tratamento de dados de clientes finais, incluindo gestão de consentimentos, direito de acesso, correção e eliminação, e registro de operações."
    ]);

    clause("10ª", "Rescisão", [
      "Este contrato pode ser rescindido por inadimplemento substancial de qualquer parte, mediante notificação por escrito com 15 (quinze) dias de antecedência para sanar o descumprimento.",
      "Em caso de rescisão sem justa causa por iniciativa da CONTRATANTE, o sinal de R$ 75.000,00 não será restituído, a título de cobertura dos custos de mobilização e produção já incorridos.",
      "Em caso de rescisão por culpa exclusiva da CONTRATADA, esta restituirá à CONTRATANTE o valor proporcional aos serviços não executados, descontados os já entregues e aceitos."
    ]);

    clause("11ª", "Vigência", [
      "Este contrato vigora a partir da data de sua assinatura, identificada ao fim deste instrumento, até a conclusão integral dos serviços, do período de suporte de 90 (noventa) dias e da quitação financeira de todos os marcos."
    ]);

    clause("12ª", "Foro", [
      "Fica eleito o foro da Comarca de Florianópolis, Estado de Santa Catarina, para dirimir quaisquer questões oriundas deste contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja."
    ]);

    clause("13ª", "Disposições finais", [
      "Este contrato é firmado eletronicamente, com força executiva nos termos do artigo 784 do Código de Processo Civil e da Medida Provisória nº 2.200-2/2001.",
      "Eventuais alterações ou inclusões dependem de termo aditivo por escrito, assinado por ambas as partes.",
      "Os anexos e a proposta comercial nº 001/2026 integram este contrato para todos os efeitos legais."
    ]);

    // ---------- RESUMO FINANCEIRO ----------
    subhead("Resumo financeiro");
    kv([
      ["Valor total", "R$ 150.000,00 (cento e cinquenta mil reais)"],
      ["Sinal (50%)", "R$ 75.000,00 · devido na assinatura"],
      ["Saldo (50%)", "R$ 75.000,00 · devido no go-live"],
      ["Forma de pagamento", "PIX · processamento via Safefy Pay"]
    ]);

    if (data.notas) {
      subhead("Observações da contratante");
      para(data.notas);
    }

    // ---------- ASSINATURAS ----------
    pageBreakIfNeeded(280);
    subhead("E, por estarem assim justos e contratados");
    para(`${CONTRATADA.cidade}/${CONTRATADA.estado}, ${fmtDateLong}.`);
    y += 16;

    const colW = (W - 2 * M - 32) / 2;
    const sigY = y + 50;

    // CONTRATADA signature
    doc.setDrawColor(29, 29, 31);
    doc.line(M, sigY, M + colW, sigY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(29, 29, 31);
    doc.text("CONTRATADA", M, sigY + 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(110, 110, 115);
    doc.text(CONTRATADA.razaoSocial, M, sigY + 28);
    doc.text(`CNPJ ${CONTRATADA.cnpj}`, M, sigY + 40);
    doc.text(`${CONTRATADA.representante} · ${CONTRATADA.cargo}`, M, sigY + 52);

    // CONTRATANTE signature
    const x2 = M + colW + 32;
    doc.line(x2, sigY, x2 + colW, sigY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(29, 29, 31);
    doc.text("CONTRATANTE", x2, sigY + 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(110, 110, 115);
    doc.text(doc.splitTextToSize(data.razaoSocial, colW), x2, sigY + 28);
    doc.text(`CNPJ ${data.cnpj}`, x2, sigY + 40);
    doc.text(`${data.nome} · ${data.cargo}`, x2, sigY + 52);
    doc.text(`CPF ${data.cpf}`, x2, sigY + 64);

    y = sigY + 90;

    pageBreakIfNeeded(50);
    doc.setFont("courier", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(120, 120, 120);
    const aceiteStamp = `Aceite registrado eletronicamente em ${today.toLocaleString("pt-BR")} · Documento ${docId} · Aceite proposta: ${data.aceiteContrato ? "Sim" : "Não"} · Aceite LGPD: ${data.aceiteLgpd ? "Sim" : "Não"}`;
    doc.text(doc.splitTextToSize(aceiteStamp, W - 2 * M), M, y);

    // ---------- HEADER + FOOTER em todas as páginas ----------
    const totalPages = doc.internal.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      doc.setPage(p);
      // Mini header band nas páginas internas (p > 1)
      if (p > 1) {
        doc.setFillColor(10, 10, 10);
        doc.rect(0, 0, W, 22, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFont("courier", "normal");
        doc.setFontSize(7);
        doc.text("TEVAH · CONTRATO 001/2026", M, 15);
        doc.text(docId, W - M, 15, { align: "right" });
      }
      // Footer
      doc.setFont("courier", "normal");
      doc.setFontSize(7);
      doc.setTextColor(150, 150, 155);
      doc.text(`${CONTRATADA.razaoSocial} · CNPJ ${CONTRATADA.cnpj} · Confidencial`, M, H - 20);
      doc.text(`Pág. ${p} / ${totalPages}`, W - M, H - 20, { align: "right" });
      if (Object.keys(utms).length && p === totalPages) {
        const utmStr = "Origem: " + Object.entries(utms).map(([k, v]) => `${k}=${v}`).join(" · ");
        doc.text(doc.splitTextToSize(utmStr, W - 2 * M), M, H - 32);
      }
    }

    // Persist
    try {
      localStorage.setItem("tevah:aprovacao:" + Date.now(), JSON.stringify({ data, utms, sentAt: new Date().toISOString(), docId }));
    } catch (_) {}

    const slug = (data.razaoSocial || data.nome || "Tevah").replace(/[^\w]+/g, "-").slice(0, 40);
    doc.save(`Contrato-Tevah-${slug}.pdf`);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen">
        <TopBar />
        <div className="max-w-[720px] mx-auto px-6 lg:px-10 py-24">
          <div className="text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-500 grid place-items-center text-white">
              <Icon name="check" size={26} stroke={2.5} />
            </div>
            <div className="tv-eyebrow mt-8">Contrato gerado</div>
            <h1 className="font-display text-[40px] md:text-[56px] leading-[1] tracking-[-0.035em] mt-4">
              Pronto. <span className="font-editorial text-[var(--tv-ink-2)]">PDF baixado.</span>
            </h1>
            <p className="text-[15px] text-[var(--tv-ink-2)] mt-6 leading-relaxed max-w-[52ch] mx-auto">
              O contrato em PDF foi gerado com seus dados e baixado automaticamente. Confira
              o conteúdo, assine digitalmente e envie de volta para <strong className="text-[var(--tv-ink)]">contato@safefypay.com.br</strong> ou pelo WhatsApp.
              O pagamento do sinal de <strong className="text-[var(--tv-ink)]">R$ 75.000</strong> abre o kick-off do projeto.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => window.location.reload()} className="btn-primary">
                Gerar PDF novamente <Icon name="arrow-right" size={14} />
              </button>
              <a href={"https://wa.me/5551990059251?text=" + encodeURIComponent("Olá André! Acabei de gerar o PDF de aprovação da proposta Tevah. Te enviei por e-mail.")} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Avisar pelo WhatsApp
              </a>
              <a href="Proposta Tevah.html" className="btn-secondary">Voltar à proposta</a>
            </div>
            <div className="mt-12 pt-8 border-t border-[var(--tv-line)] text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)] flex items-center justify-center gap-4">
              <span className="flex items-center gap-1.5"><Icon name="shield" size={12} /> SSL · LGPD</span>
              <span>·</span>
              <span>Confidencial</span>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen">
      <TopBar />

      {/* Hero */}
      <section className="max-w-[1180px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="tv-eyebrow mb-4 flex items-center gap-3">
              <span className="badge badge-emerald"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Aprovação · 01 de 01</span>
              <span>Último passo</span>
            </div>
            <h1 className="font-display text-[44px] md:text-[64px] leading-[0.98] tracking-[-0.04em]">
              Falta um passo para <span className="font-editorial text-[var(--tv-ink-2)]">começarmos.</span>
            </h1>
            <p className="text-[15px] text-[var(--tv-ink-2)] mt-5 max-w-[58ch] leading-relaxed">
              Preencha os dados a seguir para gerarmos o contrato. Em até 2 horas úteis o
              documento chega no seu e-mail e WhatsApp para assinatura digital — sem
              precisar imprimir nem reconhecer firma.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Investimento aprovado</div>
            <div className="num-display text-[var(--tv-ink)] mt-1" style={{ fontSize: "clamp(40px, 5vw, 56px)" }}>R$ 150.000</div>
            <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--tv-ink-2)] mt-1">50% sinal + 50% go-live · Safefy Pay</div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-[1180px] mx-auto px-6 lg:px-10 pb-20">
        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Form columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-2xl border border-[var(--tv-line)] p-6 lg:p-9">
              {/* Personal */}
              <SectionTitle n="1" title="Dados do responsável" subtitle="Quem assina o contrato pela empresa." />
              <div className="grid grid-cols-12 gap-4 lg:gap-5">
                <Field span={12} required label="Nome completo" name="nome" value={data.nome} onChange={set} autoComplete="name" placeholder="Como aparece no documento" />
                <Field span={6} required label="E-mail" name="email" value={data.email} onChange={set} type="email" autoComplete="email" placeholder="voce@empresa.com" />
                <Field span={6} required label="Telefone / WhatsApp" name="telefone" value={data.telefone} onChange={set} mask={maskTel} type="tel" autoComplete="tel" placeholder="(00) 00000-0000" />
                <Field span={6} required label="CPF" name="cpf" value={data.cpf} onChange={set} mask={maskCpf} placeholder="000.000.000-00" />
                <Field span={6} required label="Cargo na empresa" name="cargo" value={data.cargo} onChange={set} placeholder="Sócio, Diretor, CEO…" />
              </div>

              {/* Company */}
              <div className="border-t border-[var(--tv-line)] mt-10 pt-10">
                <SectionTitle n="2" title="Dados da empresa" subtitle="Pessoa jurídica que será titular do contrato." />
                <div className="grid grid-cols-12 gap-4 lg:gap-5">
                  <Field span={12} required label="Razão social" name="razaoSocial" value={data.razaoSocial} onChange={set} placeholder="Nome conforme cartão CNPJ" />
                  <Field span={6} label="Nome fantasia" name="nomeFantasia" value={data.nomeFantasia} onChange={set} placeholder="Nome comercial / da marca" />
                  <Field span={6} required label="CNPJ" name="cnpj" value={data.cnpj} onChange={set} mask={maskCnpj} placeholder="00.000.000/0000-00" />
                  <Field span={12} label="Inscrição estadual" name="inscEstadual" value={data.inscEstadual} onChange={set} placeholder="Opcional · contribuintes ICMS" />
                </div>
              </div>

              {/* Address */}
              <div className="border-t border-[var(--tv-line)] mt-10 pt-10">
                <SectionTitle n="3" title="Endereço da empresa" subtitle="Sede fiscal — onde será emitida a nota." />
                <div className="grid grid-cols-12 gap-4 lg:gap-5">
                  <Field span={3} required label="CEP" name="cep" value={data.cep} onChange={set} mask={maskCep} placeholder="00000-000" autoComplete="postal-code" />
                  <Field span={9} required label="Endereço" name="endereco" value={data.endereco} onChange={set} placeholder="Rua, avenida…" autoComplete="street-address" />
                  <Field span={3} required label="Número" name="numero" value={data.numero} onChange={set} />
                  <Field span={9} label="Complemento" name="complemento" value={data.complemento} onChange={set} placeholder="Sala, andar, conjunto (opcional)" />
                  <Field span={6} required label="Bairro" name="bairro" value={data.bairro} onChange={set} />
                  <Field span={3} required label="Cidade" name="cidade" value={data.cidade} onChange={set} autoComplete="address-level2" />
                  <Select span={3} required label="UF" name="estado" value={data.estado} onChange={set} options={UFS} />
                </div>
              </div>

              {/* Notas */}
              <div className="border-t border-[var(--tv-line)] mt-10 pt-10">
                <SectionTitle n="4" title="Observações" subtitle="Cláusulas específicas, prazos, condições especiais. (Opcional.)" />
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <label htmlFor="notas" className="field-label block mb-2">Observações para o contrato</label>
                    <textarea
                      id="notas"
                      name="notas"
                      value={data.notas}
                      onChange={(e) => set("notas", e.target.value)}
                      placeholder="Ex.: prazo de pagamento específico, anexar termo de confidencialidade, etc."
                      className="field-input field-textarea" />
                    
                  </div>
                </div>
              </div>

              {/* Aceites */}
              <div className="border-t border-[var(--tv-line)] mt-10 pt-10 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={data.aceiteContrato}
                    onChange={(e) => set("aceiteContrato", e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#0A0A0A]"
                    required />
                  
                  <span className="text-[14px] text-[var(--tv-ink)] leading-relaxed">
                    Confirmo o aceite da proposta comercial Tevah no valor de <strong>R$ 150.000</strong>,
                    com sinal de 50% (R$ 75.000) na assinatura e 50% (R$ 75.000) no go-live, processados pela Safefy Pay.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={data.aceiteLgpd}
                    onChange={(e) => set("aceiteLgpd", e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#0A0A0A]"
                    required />
                  
                  <span className="text-[14px] text-[var(--tv-ink)] leading-relaxed">
                    Concordo com o tratamento dos meus dados pessoais nos termos da LGPD,
                    exclusivamente para elaboração do contrato e contato comercial.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button type="submit" disabled={!isValid} className="btn-primary">
                  Gerar e baixar contrato em PDF
                  <Icon name="arrow-right" size={16} />
                </button>
                <div className="text-[12px] text-[var(--tv-ink-2)]">
                  Um PDF do contrato com seus dados será gerado e baixado automaticamente.
                </div>
              </div>
            </div>
          </div>

          {/* Aside summary */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-[84px] space-y-4">
              <div className="bg-[#0A0A0A] text-white rounded-2xl p-7">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/55">O que acontece a seguir</div>
                <ul className="mt-5 space-y-4">
                  {[
                  { n: "01", t: "Você envia os dados", d: "Formulário ao lado → PDF do contrato." },
                  { n: "02", t: "PDF do contrato", d: "Gerado automaticamente com seus dados." },
                  { n: "03", t: "Sinal de 50%", d: "R$ 75.000 · via PIX · Safefy Pay." },
                  { n: "04", t: "Kick-off", d: "Workshop em até 5 dias úteis." }].
                  map((s, i) =>
                  <li key={i} className="flex gap-4">
                      <span className="num-display text-white/80 text-[28px] leading-none w-9 flex-shrink-0">{s.n}</span>
                      <div>
                        <div className="text-[14px]">{s.t}</div>
                        <div className="text-[12px] text-white/55 mt-0.5">{s.d}</div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div className="bg-white border border-[var(--tv-line)] rounded-2xl p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Segurança</div>
                <ul className="mt-4 space-y-2.5 text-[13px]">
                  <li className="flex items-start gap-2.5"><span className="tv-check"><Icon name="check" size={10} /></span> Conexão SSL · dados criptografados</li>
                  <li className="flex items-start gap-2.5"><span className="tv-check"><Icon name="check" size={10} /></span> Tratamento LGPD · finalidade contratual</li>
                  <li className="flex items-start gap-2.5"><span className="tv-check"><Icon name="check" size={10} /></span> Pagamentos via <strong>Safefy Pay</strong></li>
                  <li className="flex items-start gap-2.5"><span className="tv-check"><Icon name="check" size={10} /></span> Sem cobrança até a assinatura</li>
                </ul>
              </div>

              {Object.keys(utms).length > 0 &&
              <div className="bg-[var(--tv-bg)] border border-dashed border-[var(--tv-line)] rounded-xl p-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Origem · UTM capturado</div>
                  <div className="mt-2 text-[11px] font-mono text-[var(--tv-ink-2)] break-all leading-relaxed">
                    {Object.entries(utms).map(([k, v]) => k + "=" + v).join(" · ")}
                  </div>
                </div>
              }
            </div>
          </aside>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tv-line)] bg-[var(--tv-bg)]">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Wordmark style={{ fontSize: 14 }} />
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)]">Aprovação · Proposta 001 / 2026</span>
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--tv-ink-3)] flex items-center gap-4">
            <span>Confidencial</span>
            <span>·</span>
            <a href="Proposta Tevah.html">Voltar à proposta</a>
          </div>
        </div>
      </footer>
    </div>);

};

Object.assign(window, { Aprovacao });
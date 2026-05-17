import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Radar, BrainCircuit, Target, Link2, BarChart3, ShieldAlert, MessagesSquare, Mail } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Dashboard } from "@/components/landing/Dashboard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <PlatformSection />
      <HowItWorks />
      <Features />
      <DepthSection />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-20">
      <div className="absolute inset-0 -z-10 bg-radial-teal" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.06] px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-dot" />
              <span className="font-mono uppercase tracking-wider text-muted-foreground">AI GovTech Platform</span>
            </div>

            <h1 className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Licita<span className="text-teal">OS</span>
              <span className="mt-3 block gradient-text text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Inteligência Artificial para Licitações Públicas
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Monitore, priorize e analise oportunidades públicas com inteligência artificial.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow-teal"
              >
                Solicitar Demonstração
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.05]"
              >
                Ver Plataforma
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/5 pt-6">
              <Metric value="+180 mil" label="licitações/mês" />
              <Metric value="R$ 1 Tri+" label="em compras públicas" />
              <Metric value="24/7" label="monitoramento PNCP" />
            </div>
          </div>

          <div className="lg:col-span-6 animate-fade-up [animation-delay:150ms]">
            <Dashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-foreground md:text-2xl">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

/* ---------------- PLATFORM ANCHOR ---------------- */
function PlatformSection() {
  return <div id="platform" className="h-1" />;
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: Radar,
      title: "Monitoramento Inteligente",
      desc: "LicitaOS monitora automaticamente novas licitações públicas em tempo real.",
    },
    {
      n: "02",
      icon: BrainCircuit,
      title: "Análise por IA",
      desc: "Os modelos analíticos identificam aderência, padrões e oportunidades relevantes.",
    },
    {
      n: "03",
      icon: Target,
      title: "Priorização Estratégica",
      desc: "Empresas focam nas oportunidades com maior potencial competitivo.",
    },
  ];
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Como funciona" title="Da publicação ao insight em segundos." />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0F172A]/60 p-6 transition hover:border-teal/30"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-teal/20 bg-teal/[0.08] text-teal">
                  <s.icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="font-display mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    { icon: Link2, title: "Relinking NCM/CATMAT", desc: "Detecta oportunidades mesmo com categorização incorreta." },
    { icon: BarChart3, title: "Analytics Histórico", desc: "Priorização baseada em dados reais." },
    { icon: ShieldAlert, title: "Risk Intelligence", desc: "Identificação de inconsistências e riscos." },
    { icon: MessagesSquare, title: "Suporte Analítico", desc: "Interpretação inteligente de requisitos licitatórios." },
  ];
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Diferenciais" title="Engenharia de dados aplicada ao setor público." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0F172A]/60 p-5 transition hover:-translate-y-0.5 hover:border-teal/30"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal/[0.08] text-teal ring-1 ring-teal/20">
                <it.icon className="h-4 w-4" />
              </div>
              <h3 className="font-display mt-5 text-base font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DEPTH SECTION ---------------- */
function DepthSection() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Plataforma"
          title="Um ecossistema completo para inteligência licitatória."
        />

        <div className="relative mt-16">
          {/* floating widgets */}
          <FloatCard className="absolute -left-2 top-6 hidden w-64 md:block animate-float">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>Score de aderência</span>
              <span className="font-mono text-teal">94 / 100</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-teal to-teal/70" />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Edital alinhado ao seu portfólio em <span className="text-foreground">8 dos 9 critérios</span> técnicos.
            </p>
          </FloatCard>

          <FloatCard className="absolute -right-2 top-20 hidden w-60 md:block animate-float [animation-delay:1.5s]">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse-dot" />
              <span className="font-medium">Risco detectado</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Cláusula 7.3 com restrição de marca incompatível com o item solicitado.
            </p>
            <p className="mt-3 font-mono text-[10px] text-muted-foreground">PE 0421/2026 · TJ-MG</p>
          </FloatCard>

          {/* Central panel */}
          <div className="mx-auto max-w-3xl rounded-2xl border border-teal/20 bg-[#0B1220] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">LicitaOS · Analytics</p>
                <p className="font-display text-lg font-semibold">Volume de compras públicas por categoria</p>
              </div>
              <span className="rounded-md bg-teal/15 px-2 py-1 font-mono text-[10px] text-teal ring-1 ring-teal/30">
                Últimos 12 meses
              </span>
            </div>
            <BarChart />
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/5 pt-5">
              <MiniStat label="Editais analisados" value="2.4M" />
              <MiniStat label="Órgãos cobertos" value="14.218" />
              <MiniStat label="Precisão do score" value="96.2%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass rounded-xl p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ${className ?? ""}`}>
      {children}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">{label}</p>
      <p className="font-display mt-1 text-lg font-bold">{value}</p>
    </div>
  );
}

function BarChart() {
  const data = [
    { l: "TI", v: 92 },
    { l: "Saúde", v: 76 },
    { l: "Infra", v: 68 },
    { l: "Educação", v: 54 },
    { l: "Segurança", v: 47 },
    { l: "Serviços", v: 39 },
    { l: "Logística", v: 32 },
    { l: "Energia", v: 26 },
  ];
  return (
    <div className="flex h-44 items-end gap-3">
      {data.map((d, i) => (
        <div key={d.l} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full rounded-t bg-gradient-to-t from-teal/30 to-teal"
            style={{ height: `${d.v}%`, animation: `fade-up 0.6s ${i * 60}ms both` }}
          />
          <span className="text-[10px] text-muted-foreground">{d.l}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-teal/20 bg-gradient-to-br from-[#0F172A] via-[#0B1220] to-[#070B14] p-12 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,212,168,0.15),transparent_60%)]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

          <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Transformando dados públicos em <span className="text-teal">vantagem competitiva</span>.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:melendez9104@gmail.com"
              className="group inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow-teal"
            >
              Acompanhar Desenvolvimento
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:melendez9104@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.05]"
            >
              <Mail className="h-4 w-4" />
              melendez9104@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-base font-bold">
            Licita<span className="text-teal">OS</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Inteligência Artificial para Oportunidades Públicas
          </p>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Julio César H. Meléndez</p>
      </div>
    </footer>
  );
}

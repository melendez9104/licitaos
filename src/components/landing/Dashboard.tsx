import { Activity, Bell, Search, Filter, TrendingUp, AlertTriangle, Sparkles, ChevronRight, Circle } from "lucide-react";

/**
 * Fictional product dashboard mock. Pure visual UI — no data fetching.
 */
export function Dashboard() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(0,212,168,0.18),transparent_60%)] blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-teal/20 bg-[#0B1220] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#0F172A] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="ml-4 flex items-center gap-2 rounded-md bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground ring-1 ring-white/5">
              <Search className="h-3 w-3" />
              <span className="font-mono">licitaos.app / oportunidades</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-dot" />
              <span className="font-mono">PNCP · live</span>
            </span>
            <Bell className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          {/* sidebar */}
          <aside className="col-span-2 hidden border-r border-white/5 p-3 md:block">
            <p className="px-2 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">Workspace</p>
            <SideItem label="Oportunidades" active />
            <SideItem label="Score IA" />
            <SideItem label="Alertas" badge="12" />
            <SideItem label="Analytics" />
            <SideItem label="Fornecedores" />
            <p className="mt-5 px-2 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">Filtros</p>
            <SideItem label="UASG · ativa" />
            <SideItem label="CATMAT · TI" />
          </aside>

          {/* main */}
          <main className="col-span-12 md:col-span-7 p-5">
            {/* KPIs */}
            <div className="grid grid-cols-3 gap-3">
              <Kpi label="Oportunidades hoje" value="284" delta="+12%" />
              <Kpi label="Score médio" value="78.4" delta="+3.1" accent="teal" />
              <Kpi label="Valor monitorado" value="R$ 412M" delta="+8%" />
            </div>

            {/* chart */}
            <div className="mt-4 rounded-xl border border-white/5 bg-[#0F172A]/60 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Volume de licitações · 30d</p>
                  <p className="font-display text-lg font-semibold">8.214 publicações</p>
                </div>
                <div className="flex gap-1.5 text-[10px] font-mono text-muted-foreground">
                  <span className="rounded bg-white/[0.04] px-2 py-1">7D</span>
                  <span className="rounded bg-teal/15 px-2 py-1 text-teal ring-1 ring-teal/30">30D</span>
                  <span className="rounded bg-white/[0.04] px-2 py-1">90D</span>
                </div>
              </div>
              <Sparkline />
            </div>

            {/* table */}
            <div className="mt-4 overflow-hidden rounded-xl border border-white/5">
              <div className="flex items-center justify-between bg-[#0F172A]/60 px-4 py-2.5 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-2"><Filter className="h-3 w-3" /> Oportunidades priorizadas</span>
                <span className="font-mono">12 / 284</span>
              </div>
              <table className="w-full text-left text-xs">
                <thead className="border-y border-white/5 bg-white/[0.02] text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  <tr>
                    <th className="px-4 py-2 font-medium">Órgão</th>
                    <th className="px-4 py-2 font-medium">Objeto</th>
                    <th className="px-4 py-2 font-medium">Valor</th>
                    <th className="px-4 py-2 font-medium">Score</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <Row org="MEC · UFRJ" obj="Servidores de alta densidade" val="R$ 4.2M" score={94} status="match" />
                  <Row org="MS · DATASUS" obj="Licenças de software analítico" val="R$ 1.8M" score={88} status="match" />
                  <Row org="TJSP · DTI" obj="Storage corporativo NVMe" val="R$ 6.1M" score={81} status="review" />
                  <Row org="MJ · Polícia Federal" obj="Solução de cibersegurança" val="R$ 12.4M" score={76} status="match" />
                  <Row org="INSS · DTI" obj="Consultoria em dados" val="R$ 920K" score={64} status="watch" />
                </tbody>
              </table>
            </div>
          </main>

          {/* right panel */}
          <aside className="col-span-12 md:col-span-3 border-l border-white/5 p-4">
            <div className="rounded-xl border border-teal/20 bg-gradient-to-b from-teal/[0.08] to-transparent p-3">
              <div className="mb-2 flex items-center gap-2 text-xs">
                <Sparkles className="h-3.5 w-3.5 text-teal" />
                <span className="font-medium">Insight IA</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Aumento de <span className="text-foreground">37%</span> em editais de
                infraestrutura cloud na região Sudeste nos últimos 14 dias.
              </p>
            </div>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">Alertas</p>
            <Alert icon={<AlertTriangle className="h-3 w-3 text-amber-400" />} title="NCM divergente" desc="Edital 0421/2026 · TJ-MG" />
            <Alert icon={<TrendingUp className="h-3 w-3 text-teal" />} title="Score elevado" desc="UASG 153031 · 94" />
            <Alert icon={<Activity className="h-3 w-3 text-teal" />} title="Novo órgão monitorado" desc="MPF · 12 unidades" />

            <div className="mt-5 rounded-xl border border-white/5 bg-[#0F172A]/60 p-3">
              <p className="mb-2 text-[10px] uppercase tracking-wider text-muted-foreground/70">Distribuição por modalidade</p>
              <BarMini label="Pregão eletrônico" pct={72} />
              <BarMini label="Dispensa" pct={48} />
              <BarMini label="Concorrência" pct={31} />
              <BarMini label="Inexigibilidade" pct={18} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SideItem({ label, active, badge }: { label: string; active?: boolean; badge?: string }) {
  return (
    <div
      className={`flex items-center justify-between rounded-md px-2 py-1.5 text-xs ${
        active ? "bg-teal/10 text-foreground ring-1 ring-teal/20" : "text-muted-foreground hover:bg-white/[0.03]"
      }`}
    >
      <span className="flex items-center gap-2">
        <Circle className={`h-1.5 w-1.5 ${active ? "fill-teal text-teal" : "fill-white/20 text-white/20"}`} />
        {label}
      </span>
      {badge && (
        <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-mono text-amber-400">{badge}</span>
      )}
    </div>
  );
}

function Kpi({ label, value, delta, accent }: { label: string; value: string; delta: string; accent?: "teal" }) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#0F172A]/60 p-3">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">{label}</p>
      <p className={`mt-1 font-display text-xl font-bold ${accent === "teal" ? "text-teal" : ""}`}>{value}</p>
      <p className="mt-0.5 font-mono text-[10px] text-teal">{delta}</p>
    </div>
  );
}

function Row({ org, obj, val, score, status }: { org: string; obj: string; val: string; score: number; status: "match" | "review" | "watch" }) {
  const colors = {
    match: "bg-teal/15 text-teal ring-teal/30",
    review: "bg-amber-500/15 text-amber-400 ring-amber-500/30",
    watch: "bg-white/[0.05] text-muted-foreground ring-white/10",
  } as const;
  return (
    <tr className="hover:bg-white/[0.02]">
      <td className="px-4 py-2.5 font-mono text-[11px] text-muted-foreground">{org}</td>
      <td className="px-4 py-2.5">{obj}</td>
      <td className="px-4 py-2.5 font-mono text-[11px]">{val}</td>
      <td className="px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full bg-teal" style={{ width: `${score}%` }} />
          </div>
          <span className="font-mono text-[11px] text-foreground/80">{score}</span>
        </div>
      </td>
      <td className="px-4 py-2.5">
        <span className={`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ring-1 ${colors[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

function Alert({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="mt-2 flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
      <div className="mt-0.5">{icon}</div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium">{title}</p>
        <p className="truncate text-[10px] text-muted-foreground">{desc}</p>
      </div>
      <ChevronRight className="ml-auto h-3 w-3 text-muted-foreground/50" />
    </div>
  );
}

function BarMini({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono">{pct}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full bg-gradient-to-r from-teal/80 to-teal" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function Sparkline() {
  // Static SVG area chart
  const points = [12, 28, 22, 36, 30, 48, 42, 58, 50, 62, 70, 64, 78, 72, 88, 80, 96, 90, 110, 102, 124, 118];
  const max = Math.max(...points);
  const w = 600;
  const h = 110;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - (p / max) * (h - 8)] as const);
  const path = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full">
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00D4A8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00D4A8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#area)" />
      <path d={path} fill="none" stroke="#00D4A8" strokeWidth="1.5" />
      {coords.filter((_, i) => i % 4 === 0).map((c, i) => (
        <circle key={i} cx={c[0]} cy={c[1]} r="2" fill="#00D4A8" />
      ))}
    </svg>
  );
}
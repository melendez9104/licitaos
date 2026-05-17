import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl glass px-5 py-3">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-base font-bold tracking-tight">
              Licita<span className="text-teal">OS</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#platform" className="hover:text-foreground transition">Plataforma</a>
            <a href="#how" className="hover:text-foreground transition">Como funciona</a>
            <a href="#features" className="hover:text-foreground transition">Diferenciais</a>
            <a href="#contact" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-teal px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Solicitar Demo
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="grid h-7 w-7 place-items-center rounded-md bg-teal/15 ring-1 ring-teal/30">
      <div className="h-2 w-2 rounded-sm bg-teal animate-pulse-dot" />
    </div>
  );
}
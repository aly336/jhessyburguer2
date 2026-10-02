import { useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/config/site";

const links = [
  ["Início", "#inicio"],
  ["Cardápio", "#cardapio"],
  ["Sobre", "#sobre"],
  ["Avaliações", "#avaliacoes"],
  ["Localização", "#localizacao"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#inicio" className="font-display text-2xl md:text-3xl">
          Jhessy <span className="text-fire">Burguer</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-fire px-4 py-2.5 text-sm md:px-6">
            Pedir agora
          </a>
          <button aria-label="Abrir menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 font-display text-xl">
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

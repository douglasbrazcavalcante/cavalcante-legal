import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex flex-col">
            <span className="font-heading text-lg lg:text-xl font-semibold text-primary tracking-wide">
              Douglas Cavalcante
            </span>
            <span className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.2em] uppercase">
              Advocacia & Consultoria
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-medium hover:bg-navy-light transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-body font-medium text-muted-foreground hover:text-primary px-2 py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded text-sm font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

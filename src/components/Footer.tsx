import { Phone, Mail, MapPin } from "lucide-react";
import { WHATSAPP_LINK, EMAIL, PHONE } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">Douglas Cavalcante</h3>
            <p className="text-sm opacity-70 font-body mb-4">Advocacia & Consultoria</p>
            <p className="text-sm opacity-60 font-body leading-relaxed">
              Douglas Braz Cavalcante<br />
              Advogado — OAB/SP 539817
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {["Início", "Sobre", "Áreas de Atuação", "Serviços", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item === "Início" ? "inicio" : item === "Áreas de Atuação" ? "areas" : item.toLowerCase()}`}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity font-body">
                <Phone className="w-4 h-4 flex-shrink-0" /> {PHONE}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity font-body">
                <MapPin className="w-4 h-4 flex-shrink-0" /> WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity font-body">
                <Mail className="w-4 h-4 flex-shrink-0" /> {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-xs opacity-50 font-body text-center leading-relaxed">
            © {new Date().getFullYear()} Douglas Cavalcante — Advocacia e Consultoria. Todos os direitos reservados.
            Este site tem caráter meramente informativo, não constituindo consultoria jurídica. A publicidade deste site obedece ao Código de Ética e Disciplina da OAB e ao Provimento nº 94/2000.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-lg">Fisioterapia Respiratória</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Cuidado especializado em fisioterapia respiratória pediátrica com 
              8 anos de experiência. Atendimento humanizado e baseado em evidências.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("tecnicas")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Técnicas
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Redes Sociais</h4>
            <p className="text-background/80 mb-4">
              Siga-me nas redes sociais para dicas e conteúdos sobre saúde respiratória infantil
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>
            &copy; {currentYear} Fisioterapia Respiratória Pediátrica. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

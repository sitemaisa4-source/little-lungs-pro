import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              Fisioterapia Respiratória Pediatrica Maisa
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("tecnicas")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Técnicas
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Depoimentos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="default"
              className="bg-primary hover:bg-primary/90"
            >
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("tecnicas")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Técnicas
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Depoimentos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="default"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Agendar Consulta
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

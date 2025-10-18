"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fisioterapia.JFIF";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Técnicas", href: "#tecnicas" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* 🔮 Fundo com imagem + gradiente + orbes luminosas */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fisioterapeuta trabalhando com criança em sessão de fisioterapia respiratória"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70 mix-blend-multiply" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow delay-700" />
      </div>

      {/* 🧭 Cabeçalho / Menu */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-white tracking-wide">
            Maisa<span className="text-secondary">Borges</span>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-lg font-medium tracking-wide hover:text-secondary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Menu mobile */}
          <button
            className="text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg font-semibold hover:text-secondary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 💫 Conteúdo principal */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center text-white z-10 flex-1">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Transforme a <span className="text-secondary">Respiração</span> do Seu Filho
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Fisioterapia Pediátrica Especializada com atendimento domiciliar humanizado no ABC Paulista.
        </motion.p>

        {/* ✨ Botões imponentes */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="px-10 py-5 text-lg bg-gradient-to-r from-secondary to-primary text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Agende sua Consulta
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("sobre");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-5 text-lg border-2 border-white text-white rounded-full backdrop-blur-sm hover:bg-white hover:text-primary font-semibold transition-all duration-300"
          >
            Saiba Mais
          </Button>
        </motion.div>
      </div>

      {/* 🌀 Indicador de rolagem */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

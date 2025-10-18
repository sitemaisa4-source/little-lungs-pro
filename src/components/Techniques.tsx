"use client";

import { useState, useRef } from "react";
import {
  Wind,
  Activity,
  Droplets,
  Target,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import treatmentImage from "@/assets/treatment-session.png";
import foto1 from "@/assets/Foto 1.JFIF";
import foto2 from "@/assets/Foto 2.JFIF";
import foto3 from "@/assets/Foto 3.JFIF";
import foto4 from "@/assets/Foto 4.JFIF";

const Techniques = () => {
  const techniques = [
    {
      icon: Wind,
      title: "Tosse",
      description:
        "Tratamento especializado para aliviar a tosse em crianças, utilizando técnicas de fisioterapia respiratória que promovem a limpeza das vias aéreas e melhoram a função pulmonar.",
    },
    {
      icon: Activity,
      title: "Pneumonia",
      description:
        "Na pneumonia infantil, a fisioterapia respiratória é crucial. Nossa abordagem melhora a ventilação pulmonar e promove a remoção eficaz de secreções dos pulmões usando recursos manuais e instrumentais. Isso reduz o desconforto respiratório, previne complicações como atelectasias e promove uma recuperação rápida e completa.",
    },
    {
      icon: Droplets,
      title: "Asma",
      description:
        "Na asma e em bebês com chiado no peito, a fisioterapia respiratória controla crises e melhora a capacidade pulmonar. Usamos técnicas e dispositivos para fortalecer os músculos respiratórios, reduzindo episódios de chiado. Nossa abordagem personalizada ajuda a criança a respirar melhor e viver de forma mais ativa e saudável.",
    },
    {
      icon: Target,
      title: "Bronquiolite",
      description:
        "Na bronquiolite, a fisioterapia respiratória desempenha um papel importante no manejo dos sintomas e na promoção da recuperação da criança, realizando remoção de secreção e reduzindo os desconfortos respiratórios.",
    },
  ];

  const faqs = [
    {
      question: "Atende convênio?",
      answer: "Não, o atendimento é particular.",
    },
    {
      question: "Emite nota fiscal para reembolso?",
      answer: "Sim.",
    },
    {
      question: "Quantas sessões serão necessárias?",
      answer:
        "Depende da avaliação, necessidade e resposta da criança.",
    },
    {
      question:
        "Preciso de encaminhamento médico para realizar fisioterapia respiratória domiciliar?",
      answer:
        "Não, basta você notar a necessidade de uma avaliação e entrar em contato diretamente comigo.",
    },
    {
      question: "A fisioterapia respiratória serve apenas para tratamento das doenças?",
      answer:
        "Não, além de tratar a doença aguda do momento, podemos realizar um plano de tratamento para prevenir futuras complicações.",
    },
    {
      question: "Quanto tempo dura o atendimento?",
      answer:
        "Depende da necessidade da criança, em média de 1 a 1 hora e meia.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const laserBenefits = [
    "Alívio Respiratório",
    "Melhora da Imunidade",
    "Cicatrização Rápida",
    "Modulação Inflamatória",
    "Analgesia",
    "Aumento da Microcirculação",
  ];

  const photos = [foto1, foto2, foto3, foto4];
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === "left" ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* === Seção de Técnicas === */}
      <section id="tecnicas" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-foreground">Técnicas Aplicadas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Métodos comprovados para o tratamento respiratório pediátrico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lista de Técnicas */}
            <div className="space-y-6">
              {techniques.map((technique, index) => {
                const Icon = technique.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-5 rounded-xl bg-card shadow-soft hover-lift animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {technique.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {technique.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Imagem */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-hero opacity-10 rounded-2xl blur-3xl" />
              <img
                src={treatmentImage}
                alt="Sessão de fisioterapia respiratória pediátrica em andamento"
                className="relative rounded-2xl shadow-hover w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Seção de FAQ === */}
      <section id="faq" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-foreground">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Esclareça suas dúvidas sobre o atendimento e os benefícios da fisioterapia respiratória pediátrica.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-border rounded-xl overflow-hidden transition-all duration-300 shadow-soft hover:shadow-hover bg-card/70 backdrop-blur-sm ${openIndex === index ? "ring-1 ring-secondary/40" : ""
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${openIndex === index
                      ? "max-h-40 opacity-100 p-5 pt-0"
                      : "max-h-0 opacity-0 p-0"
                    }`}
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Seção de Benefícios da Laserterapia === */}
      <section id="laserterapia" className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slower" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary/20">
                <Sparkles className="w-7 h-7 text-secondary" />
              </div>
            </div>
            <h2 className="text-foreground mb-4">Benefícios da Laserterapia</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A laserterapia é um tratamento coadjuvante, não invasivo e seguro, que proporciona uma recuperação rápida
              tanto de sintomas respiratórios quanto de lesões. Este tratamento ajuda na cicatrização de infecções de
              garganta, aftas, síndrome mão-pé-boca, assaduras e muito mais.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {laserBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-5 rounded-xl bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 border border-border/50"
              >
                <div className="w-8 h-8 flex items-center justify-center text-secondary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A laserterapia é ideal para proporcionar uma recuperação rápida e eficaz, garantindo o bem-estar e a saúde do seu filho.
            </p>
          </div>
        </div>
      </section>

      {/* === Seção Um Pouco Do Meu Trabalho === */}
      <section id="trabalho" className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Um Pouco Do Meu Trabalho</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça um pouco mais do meu dia a dia e dos cuidados dedicados aos pequenos pacientes.
            </p>
          </div>

          <div className="relative">
            {/* Botão Esquerda */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card text-secondary rounded-full p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carrossel */}
            <div
              ref={carouselRef}
              className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-6 px-2 no-scrollbar"
            >
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:scale-105 hover:rotate-1"
                >
                  <img
                    src={photo}
                    alt={`Foto ${index + 1} do trabalho`}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Botão Direita */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card text-secondary rounded-full p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CSS para ocultar scrollbars */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE e Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari e Opera */
        }
      `}</style>
    </>
  );
};

export default Techniques;

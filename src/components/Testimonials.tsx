"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mikaela H.",
      text: "Olá gente. Venho avaliar essa profissional impecável e maravilhosa que é a Maísa. Ela cuidou do meu neném com todo amor e carinho que a gente espera. Fora isso, o trabalho dela faz total diferença na vida, na saúde dos nossos pequenos. Eu amei o trabalho dela e ela!!",
      rating: 5,
    },
    {
      name: "Patria T.",
      text: "Maísa é uma profissional muito competente e carinhosa com o paciente, Já nos atendeu algumas vezes e é nítida a diferenã no meu filho após as sessões",
      rating: 5,
    },
    {
      name: "Najla N.",
      text: "Muito carinhosa e cuidadosa com meu filho. Ela ganhou confiança dele e fez as manobras com muita precisão e profissionalismo. Profissional perfeita e atenciosa!! Indico muuuuito o serviço dela! Fora que é uma Fofa S2",
      rating: 5,
    },
    {
      name: "Beatriz M.",
      text: "Maísa nos acompanha desde 3 semanas da minha filha Angelina. Uma profissional calma, com técnica e com embasamento científico em suas palavras! Recomendo de olhos fechados S2",
      rating: 5,
    },
    {
      name: "Larissa A.",
      text: "Conheci a Maisa pelo Instagram, como é bom poder aprender sobre as lavagens, mas também sobre a rotina, como dar conta de tudo. E agora tive a oportunidade de conhecer seu trabalho em domicilio! Super atenciosa e profissional. Me ensinou a fazer lavagem na minha rn e avaliou, graças a Deus não tinha nada no pulmão. Recomendo demais o serviço de fisio, evita medicações e piora no quadro.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section id="depoimentos" className="relative py-20 bg-gradient-to-b from-accent/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-12 text-foreground text-4xl font-bold">
          O Que Dizem as Famílias
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Setas de navegação */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-md transition duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-md transition duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden relative h-[360px] md:h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-10 shadow-lg mx-6 md:mx-10 text-center backdrop-blur-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-md"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg italic text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicadores (bolinhas) */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-secondary scale-125" : "bg-gray-400/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

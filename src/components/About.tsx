"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import profileImage from "@/assets/profile-fisio.webp";

const About = () => {
  const credentials = [
    "8 anos de experiência em Fisioterapia Respiratória",
    "Especialização em Pediatria",
    "Atuação em UTI Neonatal e Pediátrica",
    "Atendimento domiciliar personalizado",
    "Formação continuada em técnicas respiratórias",
  ];

  // === Variantes de animação ===
  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // === Estado para contador ===
  const [childrenCount, setChildrenCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    let started = false;

    const handleScroll = () => {
      const section = document.getElementById("sobre");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (!started && rect.top < window.innerHeight - 100) {
          started = true;
          controls.start("visible");

          // Contador de Crianças
          let count1 = 0;
          const interval1 = setInterval(() => {
            count1 += 50;
            if (count1 >= 2000) {
              count1 = 2000;
              clearInterval(interval1);
            }
            setChildrenCount(count1);
          }, 10);

          // Contador de Anos
          let count2 = 0;
          const interval2 = setInterval(() => {
            count2 += 1;
            if (count2 >= 8) {
              count2 = 8;
              clearInterval(interval2);
            }
            setYearsCount(count2);
          }, 150);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section id="sobre" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* === Imagem com animação === */}
          <motion.div
            className="order-2 md:order-1"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 rounded-2xl blur-2xl" />
              <img
                src={profileImage}
                alt="Retrato da fisioterapeuta respiratória"
                className="relative rounded-2xl shadow-hover w-full max-w-md mx-auto hover-lift"
              />
            </div>
          </motion.div>

          {/* === Texto com animação === */}
          <motion.div
            className="order-1 md:order-2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-6 text-foreground">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Olá! Sou fisioterapeuta respiratória com paixão por cuidar da saúde
              respiratória infantil. Ao longo de 8 anos de experiência, tive o
              privilégio de atuar em UTIs neonatais e pediátricas, além de oferecer
              atendimento domiciliar personalizado.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Meu compromisso é proporcionar um tratamento humanizado, baseado em
              evidências científicas e adaptado às necessidades individuais de cada
              criança, sempre em parceria com a família.
            </p>

            <div className="space-y-4 mb-10">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{credential}</span>
                </motion.div>
              ))}
            </div>

            {/* === Contadores Dinâmicos === */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={controls}
              className="flex justify-center md:justify-start gap-12"
            >
              {/* Crianças Atendidas */}
              <div className="text-center">
                <p className="text-5xl font-extrabold text-secondary">
                  {childrenCount.toLocaleString()}+
                </p>
                <p className="text-muted-foreground text-lg">
                  Crianças Atendidas
                </p>
              </div>

              {/* Anos de Experiência */}
              <div className="text-center">
                <p className="text-5xl font-extrabold text-secondary">
                  {yearsCount}+
                </p>
                <p className="text-muted-foreground text-lg">
                  Anos de Experiência
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

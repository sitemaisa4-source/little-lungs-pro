"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Atendimento Domiciliar",
      description:
        "Para a maior comodidade e conforto da sua família, oferecemos atendimento domiciliar. Elimine a necessidade de deslocamento e espera em clínicas lotadas, fugindo da aglomeração e novas contaminações por vírus. Proporcione um ambiente familiar e acolhedor para o tratamento do seu filho.",
    },
    {
      icon: Shield,
      title: "Avaliação e Tratamento",
      description:
        "Realizamos avaliação e tratamento de distúrbios respiratórios em crianças de todas as idades. Com uma abordagem personalizada e empática, garantimos o melhor cuidado para a criança. Desenvolvemos planos de tratamento individualizados para atender as necessidades específicas de cada criança.",
    },
    {
      icon: Users,
      title: "Orientação e Suporte aos Pais",
      description:
        "Oferecemos orientação e suporte aos pais para promover o autocuidado e a prevenção de problemas respiratórios. Participe ativamente do processo de tratamento e aprenda como evitar novas complicações respiratórias.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="beneficios"
      className="py-24 bg-gradient-to-b from-background via-accent/20 to-background relative overflow-hidden"
    >
      {/* Efeito de brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Sobre Meu Trabalho</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre o cuidado e dedicação oferecidos em cada atendimento.
          </p>
        </div>

        {/* Grid centralizada */}
        <div className="flex flex-wrap justify-center gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative w-full sm:w-[340px] md:w-[360px] bg-card border border-border/40 rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40"
              >
                {/* Glow animado de fundo */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-secondary to-primary flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

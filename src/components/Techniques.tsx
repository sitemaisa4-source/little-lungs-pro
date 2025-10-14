import { Wind, Activity, Droplets, Target } from "lucide-react";
import treatmentImage from "@/assets/treatment-session.jpg";

const Techniques = () => {
  const techniques = [
    {
      icon: Wind,
      title: "Drenagem Postural",
      description:
        "Técnica que utiliza posicionamento específico para facilitar a eliminação de secreções pulmonares.",
    },
    {
      icon: Activity,
      title: "Exercícios Respiratórios",
      description:
        "Exercícios personalizados para fortalecer a musculatura respiratória e melhorar a capacidade pulmonar.",
    },
    {
      icon: Droplets,
      title: "Higiene Brônquica",
      description:
        "Manobras especializadas para mobilizar e eliminar secreções das vias aéreas.",
    },
    {
      icon: Target,
      title: "Reexpansão Pulmonar",
      description:
        "Técnicas para melhorar a ventilação e prevenir complicações respiratórias.",
    },
  ];

  return (
    <section id="tecnicas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">Técnicas Aplicadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Métodos comprovados para o tratamento respiratório pediátrico
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Techniques List */}
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

          {/* Image */}
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
  );
};

export default Techniques;

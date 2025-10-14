import { Heart, Shield, Users, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description:
        "Cada criança é única. Ofereço um tratamento personalizado, respeitando as necessidades individuais e o ritmo de cada pequeno paciente.",
    },
    {
      icon: Shield,
      title: "Técnicas Baseadas em Evidências",
      description:
        "Utilizo técnicas respiratórias atualizadas e comprovadas cientificamente para garantir os melhores resultados no tratamento.",
    },
    {
      icon: Users,
      title: "Parceria com a Família",
      description:
        "Acredito que a família é parte fundamental do processo. Oriento e capacito os pais para continuidade dos cuidados em casa.",
    },
    {
      icon: Clock,
      title: "Flexibilidade de Horários",
      description:
        "Atendimento domiciliar e horários flexíveis para se adaptar à rotina da sua família, proporcionando conforto e praticidade.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">Por Que Escolher Meu Serviço</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com a excelência no cuidado respiratório pediátrico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="gradient-card rounded-xl p-6 shadow-soft hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

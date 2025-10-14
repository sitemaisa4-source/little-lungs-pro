import { CheckCircle2 } from "lucide-react";
import profileImage from "@/assets/profile-fisio.jpg";

const About = () => {
  const credentials = [
    "8 anos de experiência em Fisioterapia Respiratória",
    "Especialização em Pediatria",
    "Atuação em UTI Neonatal e Pediátrica",
    "Atendimento domiciliar personalizado",
    "Formação continuada em técnicas respiratórias",
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 rounded-2xl blur-2xl" />
              <img
                src={profileImage}
                alt="Retrato da fisioterapeuta respiratória"
                className="relative rounded-2xl shadow-hover w-full max-w-md mx-auto hover-lift"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-foreground">
              Sobre Mim
            </h2>
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

            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

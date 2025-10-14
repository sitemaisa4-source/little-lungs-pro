import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fisioterapia.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fisioterapeuta trabalhando com criança em sessão de fisioterapia respiratória"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
        <h1 className="mb-6 text-balance animate-fade-in-up">
          Fisioterapia Respiratória Pediátrica
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-balance animate-fade-in-up opacity-95" style={{ animationDelay: "0.2s" }}>
          Sou uma Fisioterapeuta Respiratória com 8 anos de experiência
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: "0.3s" }}>
          Especializada em atendimento pediátrico, atuação em UTI e atendimento domiciliar. 
          Cuidado profissional e humanizado para a saúde respiratória do seu filho.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/90 shadow-hover text-lg px-8"
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
            className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
          >
            Saiba Mais
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

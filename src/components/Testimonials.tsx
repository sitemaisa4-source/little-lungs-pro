import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "Profissional excepcional! Minha filha de 3 anos teve uma recuperação incrível após bronquiolite. O atendimento domiciliar foi um diferencial enorme para nossa família.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ",
      text: "Cuidado humanizado e técnico impecável. Nosso filho prematuro teve alta da UTI e continuamos o tratamento em casa. Resultados excelentes!",
      rating: 5,
    },
    {
      name: "Ana Paula Santos",
      location: "Belo Horizonte, MG",
      text: "A dedicação e paciência no atendimento fazem toda diferença. Meu filho adorava as sessões e melhorou muito da asma. Recomendo de olhos fechados!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">O Que Dizem as Famílias</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de pais que confiaram no meu trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-card rounded-xl p-8 shadow-soft hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

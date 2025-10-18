import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511937100402"; // Replace with actual number
  const message = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta de fisioterapia respiratória."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-secondary hover:bg-secondary/90 rounded-full shadow-hover flex items-center justify-center transition-smooth hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
        Fale no WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;

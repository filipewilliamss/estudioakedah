import { useState } from "react";
import { WHATSAPP_URL } from "@/data/services";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto"
    >
      {/* Pill com texto explicativo ao passar o mouse */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#180F0A]/95 border border-[#25D366]/35 text-white shadow-2xl backdrop-blur-md text-xs font-corporate font-semibold tracking-wide transition-all duration-300 pointer-events-none select-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Fale conosco no WhatsApp</span>
      </div>

      {/* Botão Flutuante Circular com Ícone Oficial do WhatsApp */}
      <a
        href={`${WHATSAPP_URL}?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Est%C3%BAdio%20Akedah%20e%20o%20Podcast`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_10px_35px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_45px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Anel de Pulso Suave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10 group-hover:hidden" />

        {/* Ícone Vetorial Oficial do WhatsApp */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.972.531 1.776.812 2.796.813h.005c3.179 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.689-4.078-1.09-1.09-2.538-1.692-4.084-1.692zm3.385 8.163c-.145.407-.847.777-1.18.825-.333.048-.769.071-2.484-.639-1.425-.59-2.338-2.039-2.41-2.134-.07-.096-.577-.768-.577-1.464 0-.696.363-1.038.492-1.181.13-.143.283-.179.377-.179.094 0 .188.001.27.006.086.004.202-.033.315.24.118.283.402.98.437 1.052.035.072.059.155.012.249-.047.094-.07.153-.14.236-.07.082-.148.184-.211.247-.07.07-.143.146-.061.287.082.141.365.602.784.975.539.48 0.994.629 1.135.699.141.07.224.059.307-.035.082-.094.353-.412.447-.553.094-.141.188-.118.318-.07.13.047.825.389.966.46.141.07.236.106.27.165.035.059.035.342-.11.749zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.169L2 22l4.98-1.306C8.423 21.525 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.698 0-3.27-.514-4.577-1.393l-.328-.222-2.962.777.791-2.887-.243-.387A8.204 8.204 0 0 1 3.75 12c0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z" />
        </svg>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;

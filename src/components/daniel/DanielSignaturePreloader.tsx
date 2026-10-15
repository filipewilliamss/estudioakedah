import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DanielAnimatedSignature } from "./DanielAnimatedSignature";

interface DanielSignaturePreloaderProps {
  onFinish?: () => void;
}

export const DanielSignaturePreloader: React.FC<DanielSignaturePreloaderProps> = ({
  onFinish,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // A animação da caligrafia leva ~2.52s (terminando com o ponto do 'i' de Silva).
    // Damos mais ~0.33s para visualização da assinatura completa e iniciamos o fade-out suave.
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, 2850);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const handleSkip = () => {
    setIsVisible(false);
    onFinish?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] bg-[#07132B] flex flex-col items-center justify-center p-6 select-none cursor-pointer overflow-hidden"
          title="Clique para pular"
        >
          {/* Brilho radial de fundo sofisticado */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-2xl w-full text-center">
            {/* Assinatura Vetorial Animada em Tamanho de Destaque */}
            <div className="w-full max-w-[320px] sm:max-w-[460px] md:max-w-[560px]">
              <DanielAnimatedSignature
                className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                replayOnClick={false}
              />
            </div>

            {/* Subtítulo institucional surgindo suavemente */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-6 flex flex-col items-center gap-2"
            >
              <span className="text-[#E2BA7A] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.35em]">
                Posicionamento · Estratégia · Autoridade
              </span>
              <span className="text-white/30 text-[9px] font-mono tracking-widest uppercase mt-1">
                Toque para avançar
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DanielSignaturePreloader;

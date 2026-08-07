import { motion, useScroll, useTransform } from "framer-motion";
import { 
  SiInstagram, 
  SiTiktok, 
  SiYoutube, 
  SiFacebook 
} from "react-icons/si";

export const SocialMediaCover = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for icons
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="relative w-full h-full bg-[#101010] overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern w-full h-full" />
      </div>

      {/* Floating Icons with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-[10%] top-[20%] text-white/50 text-6xl md:text-8xl"
      >
        <SiInstagram />
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute right-[15%] top-[15%] text-white/50 text-7xl md:text-9xl"
      >
        <SiTiktok />
      </motion.div>

      <motion.div 
        style={{ y: y3 }}
        className="absolute left-[15%] bottom-[20%] text-white/50 text-7xl md:text-9xl"
      >
        <SiYoutube />
      </motion.div>

      <motion.div 
        style={{ y: y4 }}
        className="absolute right-[10%] bottom-[25%] text-white/50 text-6xl md:text-8xl"
      >
        <SiFacebook />
      </motion.div>

      {/* Central Content Placeholder for visual balance */}
      <div className="relative z-10 text-center px-6">
        <h2 className="font-display font-[900] text-white/20 text-[12vw] leading-none uppercase tracking-tighter select-none">
          SOCIAL<br />MEDIA
        </h2>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101010]/20 to-[#101010]" />
    </div>
  );
};

export default SocialMediaCover;

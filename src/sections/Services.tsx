import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  PenTool, Image as ImageIcon, Share2, FileText, Megaphone, 
  Code, Layout, Camera, Video, Film, Printer, 
  TrendingUp 
} from 'lucide-react';

const icons = [
  PenTool, ImageIcon, Share2, FileText, Megaphone, 
  Code, Layout, Camera, Video, Film, Printer, 
  TrendingUp 
];

const MagneticCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const cards = t('services.cards', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section className="py-32 bg-gray-50 dark:bg-dark/50 relative" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase mb-4"
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 dark:text-white"
          >
            {t('services.title')}<span className="text-gradient">{t('services.title_span')}</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <MagneticCard>
                  <div className="group h-full relative p-1 rounded-[24px] bg-white dark:bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all duration-300 soft-shadow dark:shadow-none border border-border dark:border-white/10 hover:border-transparent dark:hover:border-transparent">
                    <div className="h-full bg-white dark:bg-dark/80 rounded-[22px] p-8 flex flex-col items-start transition-transform duration-300 group-hover:bg-transparent dark:group-hover:bg-transparent">
                      <div className="w-12 h-12 rounded-xl bg-light-purple dark:bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-white dark:group-hover:bg-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-white dark:group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-muted dark:text-gray-400 text-sm leading-relaxed group-hover:text-white/80 dark:group-hover:text-white/80 transition-colors">{service.desc}</p>
                    </div>
                  </div>
                </MagneticCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Logo3D from '../three/Logo3D';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-background dark:bg-dark pt-28 pb-12 lg:py-0">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/15 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:pt-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 dark:text-white">
              {t('hero.title1')}<span className="text-gradient">{t('hero.title1_span')}</span><br />
              {t('hero.title2')}<span className="text-gradient">{t('hero.title2_span')}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted dark:text-gray-400 max-w-lg mb-10 leading-relaxed"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2 ltr:flex-row rtl:flex-row-reverse">
                {t('hero.startProject')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
              </span>
            </button>
            <a 
              href="/portfolio.pdf"
              download="Soul_Media_Portfolio.pdf"
              className="group px-8 py-4 glass dark:glass-dark text-foreground dark:text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
            >
              <Play className="w-4 h-4 rtl:rotate-180" />
              {t('hero.viewPortfolio')}
            </a>
          </motion.div>
        </div>

        {/* 3D Canvas */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full absolute lg:relative bottom-0 lg:bottom-auto opacity-50 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Logo3D />
            <Environment preset="city" />
          </Canvas>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;

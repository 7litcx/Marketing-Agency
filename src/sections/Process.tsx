import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section className="py-32 bg-gray-50 dark:bg-dark/50 relative overflow-hidden" id="process" ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase mb-4"
          >
            {t('process.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold dark:text-white"
          >
            {t('process.title')}<span className="text-gradient">{t('process.title_span')}</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Line */}
          <div className={`absolute ${i18n.dir() === 'rtl' ? 'right-[28px] md:right-1/2 translate-x-1/2' : 'left-[28px] md:left-1/2 -translate-x-1/2'} top-0 bottom-0 w-1 bg-border dark:bg-white/10 rounded-full overflow-hidden`}>
            <motion.div 
              className={`absolute top-0 ${i18n.dir() === 'rtl' ? 'right-0' : 'left-0'} w-full bg-gradient-to-b from-primary to-secondary origin-top`}
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const numberString = `0${index + 1}`;
              
              // Determine layout based on RTL or LTR and Even/Odd
              let flexDir = 'flex-col md:flex-row'; // Default LTR, Even
              let contentPadding = 'pl-20 md:pl-0 md:pr-20 text-left md:text-right'; // Default LTR, Even
              let initialX = -50;
              
              if (i18n.dir() === 'rtl') {
                flexDir = isEven ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse';
                contentPadding = isEven ? 'pr-20 md:pr-0 md:pl-20 text-right md:text-left' : 'pr-20 md:pr-0 text-right';
                initialX = isEven ? 50 : -50;
              } else {
                flexDir = isEven ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse';
                contentPadding = isEven ? 'pl-20 md:pl-0 md:pr-20 text-left md:text-right' : 'pl-20 md:pl-0 text-left';
                initialX = isEven ? -50 : 50;
              }

              return (
                <div key={index} className={`relative flex items-center ${flexDir}`}>
                  
                  {/* Circle */}
                  <div className={`absolute ${i18n.dir() === 'rtl' ? 'right-[28px] md:right-1/2 translate-x-1/2' : 'left-[28px] md:left-1/2 -translate-x-1/2'} w-14 h-14 rounded-full bg-white dark:bg-dark border-4 border-light-purple dark:border-primary/50 flex items-center justify-center z-10 shadow-lg dark:shadow-none`}>
                    <span className="text-primary font-bold">{numberString}</span>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${contentPadding}`}>
                    <motion.div
                      initial={{ opacity: 0, x: initialX }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px 0px" }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="bg-white dark:bg-white/5 p-8 rounded-[24px] soft-shadow dark:shadow-none border border-transparent dark:border-white/10 hover:-translate-y-2 transition-transform duration-300"
                    >
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">{step.title}</h3>
                      <p className="text-muted dark:text-gray-400 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

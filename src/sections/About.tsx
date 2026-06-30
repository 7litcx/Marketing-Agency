import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Target, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Sparkles, Target, Eye, Heart];
const colors = [
  'from-primary/20 to-transparent',
  'from-secondary/20 to-transparent',
  'from-accent/20 to-transparent',
  'from-primary/20 to-transparent'
];

const About = () => {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = t('about.cards', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section className="relative py-32 bg-background dark:bg-dark overflow-hidden" id="about">
      {/* Subtle Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-primary/5 dark:text-primary/10 stroke-current fill-none" strokeWidth="0.5">
          <motion.path
            d="M 0 50 Q 25 40 50 50 T 100 50 M 0 60 Q 25 50 50 60 T 100 60"
            animate={{ d: ["M 0 50 Q 25 40 50 50 T 100 50 M 0 60 Q 25 50 50 60 T 100 60", "M 0 50 Q 25 60 50 50 T 100 50 M 0 60 Q 25 70 50 60 T 100 60"] }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase mb-4"
          >
            {t('about.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold dark:text-white"
          >
            {t('about.title1')}<span className="text-gradient">{t('about.title1_span')}</span>{t('about.title2')}<span className="text-gradient">{t('about.title2_span')}</span>.
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[24px] bg-white dark:bg-white/5 border border-border dark:border-white/10 soft-shadow dark:shadow-none overflow-hidden transition-all duration-300"
              >
                <div className={`absolute top-0 ${i18n.dir() === 'rtl' ? 'left-0 rounded-br-[100px]' : 'right-0 rounded-bl-[100px]'} w-32 h-32 bg-gradient-to-${i18n.dir() === 'rtl' ? 'br' : 'bl'} ${colors[index]} opacity-0 group-hover:opacity-100 dark:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="w-14 h-14 rounded-2xl bg-light-purple dark:bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

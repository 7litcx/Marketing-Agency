import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '../components/ui/CountUp';
import { useTranslation } from 'react-i18next';

const statsBase = [
  { value: 120, suffix: '+' },
  { value: 50, suffix: '+' },
  { value: 99, suffix: '%' },
  { value: 10, suffix: '+' },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const statLabels = t('whyChooseUs.stats', { returnObjects: true }) as Array<{ label: string }>;
  
  const stats = statsBase.map((s, i) => ({ ...s, label: statLabels[i].label }));

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-[10%] w-[50%] h-[100%] bg-white rounded-full blur-[120px] mix-blend-overlay" />
        <div className="absolute bottom-0 -right-[10%] w-[50%] h-[100%] bg-secondary rounded-full blur-[120px] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              className="flex flex-col items-center justify-center p-6"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 font-sans tracking-tighter">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <p className="text-lg text-white/80 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

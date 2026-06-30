import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const plansBase = [
  { name: 'Starter', price: '$999', isPopular: false },
  { name: 'Professional', price: '$2,499', isPopular: true },
  { name: 'Enterprise', price: 'Custom', isPopular: false }
];

const Pricing = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const planContents = t('pricing.plans', { returnObjects: true }) as Array<{ desc: string; features: string[] }>;
  const plans = plansBase.map((p, i) => ({ ...p, ...planContents[i] }));

  return (
    <section className="py-32 bg-gray-50 dark:bg-dark/50 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase mb-4"
          >
            {t('pricing.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold dark:text-white"
          >
            {t('pricing.title')}<span className="text-gradient">{t('pricing.title_span')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              className={`relative bg-white dark:bg-dark/80 rounded-[32px] p-10 transition-all duration-500 border ${
                plan.isPopular 
                  ? 'border-primary shadow-xl scale-105 z-10' 
                  : 'border-border dark:border-white/10 soft-shadow hover:border-primary/50 dark:hover:border-primary/50 hover:-translate-y-2'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                  {t('pricing.mostPopular')}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
              <p className="text-muted dark:text-gray-400 mb-8 h-12">{plan.desc}</p>
              
              <div className="mb-8 pb-8 border-b border-border dark:border-white/10">
                <span className="text-5xl font-bold dark:text-white">{plan.price}</span>
                {plan.price !== 'Custom' && plan.price !== 'مخصص' && <span className="text-muted dark:text-gray-500">/mo</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      plan.isPopular ? 'bg-primary text-white' : 'bg-primary/10 text-primary dark:bg-primary/20'
                    }`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                plan.isPopular || isHovered === index
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-gray-100 dark:bg-white/10 text-foreground dark:text-white hover:bg-gray-200 dark:hover:bg-white/20'
              }`}>
                {plan.price === 'Custom' || plan.price === 'مخصص' ? t('pricing.custom') : t('pricing.getStarted')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

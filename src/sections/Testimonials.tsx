import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir() as 'ltr' | 'rtl';
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false, direction });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{ quote: string }>;
  const users = [
    { name: 'Sarah Johnson', role: 'CEO, Aura Cosmetics', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150' },
    { name: 'Michael Chen', role: 'Founder, Nexus Group', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150' },
    { name: 'Emma Williams', role: 'Marketing Dir, Urban', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150' },
    { name: 'David Smith', role: 'CTO, Lumina Tech', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150' },
  ];

  const items = testimonials.map((t, i) => ({ ...t, ...users[i] }));

  return (
    <section className="py-32 bg-background dark:bg-dark relative overflow-hidden" id="testimonials">
      {/* Decorative blobs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase mb-4"
          >
            {t('testimonials.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold dark:text-white"
          >
            {t('testimonials.title')}<span className="text-gradient">{t('testimonials.title_span')}</span>{t('testimonials.title_end')}
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden pb-12" ref={emblaRef} dir={direction}>
            <div className="flex">
              {items.map((testimonial, index) => (
                <div key={index} className={`flex-[0_0_100%] min-w-0 ${direction === 'rtl' ? 'pl-6' : 'pr-6'} md:flex-[0_0_80%] lg:flex-[0_0_60%]`}>
                  <div className="bg-white dark:bg-white/5 p-10 md:p-14 rounded-[32px] soft-shadow dark:shadow-none border border-border dark:border-white/10 relative h-full flex flex-col justify-between">
                    <Quote className={`absolute top-10 ${direction === 'rtl' ? 'left-10 scale-x-[-1]' : 'right-10'} w-20 h-20 text-gray-100 dark:text-white/5`} />
                    
                    <div>
                      <div className="flex gap-1 mb-8">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-foreground dark:text-gray-200 relative z-10">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md"
                      />
                      <div>
                        <h4 className="font-bold text-lg dark:text-white">{testimonial.name}</h4>
                        <p className="text-muted dark:text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full bg-white dark:bg-white/10 flex items-center justify-center soft-shadow dark:shadow-none border border-border dark:border-white/10 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full bg-white dark:bg-white/10 flex items-center justify-center soft-shadow dark:shadow-none border border-border dark:border-white/10 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

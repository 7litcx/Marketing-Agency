import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { X, ArrowRight } from 'lucide-react';
import { MDLogo } from '../components/ui/MDLogo';

const projectsBase = [
  { id: 1, component: MDLogo, year: '2025', services: ['Brand Identity', 'Logo Design'], categoryIndex: 1 },
  { id: 2, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', year: '2024', services: ['UI/UX Design', 'Web Development'], categoryIndex: 4 },
  { id: 3, image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80', year: '2025', services: ['Advertising', 'Photography', 'Social Media'], categoryIndex: 3 },
  { id: 4, image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80', year: '2024', services: ['Video Production', 'Motion Graphics'], categoryIndex: 5 },
  { id: 5, image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&q=80', year: '2025', services: ['Printing', 'Brand Identity'], categoryIndex: 6 },
  { id: 6, image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80', year: '2025', services: ['Social Media', 'Content Creation'], categoryIndex: 2 },
];

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [filterIndex, setFilterIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = t('portfolio.categories', { returnObjects: true }) as string[];
  const items = t('portfolio.items', { returnObjects: true }) as Array<{ title: string; client: string; desc: string }>;

  const projects = projectsBase.map((p, i) => ({
    ...p,
    ...items[i],
    category: categories[p.categoryIndex]
  }));

  const filteredProjects = filterIndex === 0 ? projects : projects.filter(p => p.categoryIndex === filterIndex);

  return (
    <section className="py-32 bg-background dark:bg-dark relative" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase mb-4"
            >
              {t('portfolio.subtitle')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold dark:text-white"
            >
              {t('portfolio.title')}<span className="text-gradient">{t('portfolio.title_span')}</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setFilterIndex(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filterIndex === index 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-100 dark:bg-white/5 text-muted dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          ref={ref} 
          layout 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-[24px] overflow-hidden bg-white dark:bg-white/5 soft-shadow dark:shadow-none border border-border dark:border-white/10 flex flex-col"
              >
                <div className="relative h-[400px] overflow-hidden bg-gray-50 dark:bg-black flex items-center justify-center">
                  {project.component ? (
                    <div className="scale-150 transition-transform duration-700 group-hover:scale-110">
                      <project.component />
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight className="w-6 h-6 rtl:rotate-180" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl font-bold dark:text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-lg"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.9 }}
              className="bg-background dark:bg-dark w-full max-w-6xl max-h-full overflow-y-auto rounded-[32px] relative flex flex-col md:flex-row border border-border dark:border-white/10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 ${i18n.dir() === 'rtl' ? 'left-6' : 'right-6'} w-12 h-12 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-foreground dark:text-white hover:bg-black/20 dark:hover:bg-white/20 z-10 transition-colors`}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto min-h-[500px] flex items-center justify-center bg-gray-50 dark:bg-black rounded-l-[32px] overflow-hidden">
                {selectedProject.component ? (
                  <div className="scale-150">
                    <selectedProject.component />
                  </div>
                ) : (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                )}
              </div>
              
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 rounded-full bg-light-purple dark:bg-primary/20 text-primary text-sm font-semibold mb-6 w-max">
                  {selectedProject.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">{selectedProject.title}</h3>
                <p className="text-muted dark:text-gray-400 text-lg mb-10 leading-relaxed">{selectedProject.desc}</p>
                
                <div className="grid grid-cols-2 gap-8 border-t border-border dark:border-white/10 pt-8">
                  <div>
                    <p className="text-sm text-muted dark:text-gray-500 mb-1 uppercase font-semibold">{t('portfolio.client')}</p>
                    <p className="font-medium text-lg dark:text-white">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted dark:text-gray-500 mb-1 uppercase font-semibold">{t('portfolio.year')}</p>
                    <p className="font-medium text-lg dark:text-white">{selectedProject.year}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-muted dark:text-gray-500 mb-2 uppercase font-semibold">{t('portfolio.servicesLabel')}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((s: string) => (
                        <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-white/10 dark:text-gray-300 rounded-full text-sm font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

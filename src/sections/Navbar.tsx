import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun, Globe } from 'lucide-react';
import { useEffect } from 'react';


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="container mx-auto flex items-center justify-between bg-white/70 dark:bg-dark/70 backdrop-blur-md px-6 py-3 rounded-full border border-border dark:border-white/10 soft-shadow">
        
        <div className="flex items-center">
          <img
            src={theme === 'dark' ? "/logodark.svg" : "/logo.svg"}
            alt="Soul Media Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-gray-300">
          <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
          <a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">{t('nav.portfolio')}</a>
          <a href="#process" className="hover:text-primary transition-colors">{t('nav.process')}</a>
          <a href="#pricing" className="hover:text-primary transition-colors">{t('nav.pricing')}</a>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/10 dark:text-white hover:bg-primary hover:text-white transition-colors"
            title="Toggle Language"
          >
            <Globe className="w-4 h-4" />
            <span className="ml-1 text-xs font-bold uppercase">{i18n.language}</span>
          </button>
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/10 dark:text-white hover:bg-primary hover:text-white transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <a href="#contact" className="hidden sm:flex px-5 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-secondary transition-colors">
            {t('nav.contact')}
          </a>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;

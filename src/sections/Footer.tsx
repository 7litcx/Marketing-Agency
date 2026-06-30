import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';


const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className="bg-background dark:bg-dark pt-24 pb-12 border-t border-border dark:border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={theme === 'dark' ? "/logodark.svg" : "/logo.svg"}
                alt="Soul Media Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-muted dark:text-gray-400 leading-relaxed mb-8 pr-4">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/%D8%B3%D9%88%D9%84-%D9%85%D9%8A%D8%AF%D9%8A%D8%A7-soul-media/?viewAsMember=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-muted dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/soulmedia_mkt?igsh=ODE5bDBlZWgxczN1" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-muted dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 dark:text-white">{t('footer.company')}</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.about')}</a></li>
              <li><a href="#services" className="text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.services')}</a></li>
              <li><a href="#portfolio" className="text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.portfolio')}</a></li>
              <li><a href="#" className="text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.careers')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 dark:text-white">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.cookie')}</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-6 dark:text-white">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-muted dark:text-gray-400">
              <li>
                <a href="mailto:soul.agency2@gmail.com" className="hover:text-primary transition-colors">
                  soul.agency2@gmail.com
                </a>
              </li>
              <li>+967 779590734</li>
              <li>Hadramaut, Yemen</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border dark:border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-muted dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="mt-4 md:mt-0">{t('footer.designed')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

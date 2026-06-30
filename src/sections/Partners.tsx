import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FalconsLogo, 
  HouseOfCareLogo, 
  GlowArmorLogo, 
  DietHubLogo, 
  BeyondLogo, 
  AquateinLogo, 
  AlphaEliteLogo, 
  SkipLogo 
} from '../components/ui/PartnerLogos';

const partnerComponents = [
  FalconsLogo, HouseOfCareLogo, GlowArmorLogo, DietHubLogo,
  BeyondLogo, AquateinLogo, AlphaEliteLogo, SkipLogo
];

const duplicatedPartners = [...partnerComponents, ...partnerComponents, ...partnerComponents];

const Partners = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-20 bg-background dark:bg-dark border-y border-border dark:border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-sm uppercase tracking-widest text-muted dark:text-gray-400 font-semibold">{t('partners.title')}</p>
      </div>
      
      <div className="relative flex max-w-full overflow-hidden group">
        <motion.div
          animate={{ x: i18n.dir() === 'rtl' ? ["0%", "33.333333%"] : ["0%", "-33.333333%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex flex-nowrap min-w-max items-center"
        >
          {duplicatedPartners.map((PartnerComponent, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-[200px] md:w-[250px] mx-8 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-110"
            >
              <PartnerComponent />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;

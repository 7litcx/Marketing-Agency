import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { t, i18n } = useTranslation();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/soul.agency2@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: data.name,
          Email: data.email,
          Company: data.company || "Not provided",
          Phone: data.phone || "Not provided",
          Service: data.service,
          Budget: data.budget,
          Message: data.message
        })
      });

      if (response.ok) {
        toast.success(t('contact.success'));
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error(i18n.language === 'ar' ? 'حدث خطأ ما. يرجى المحاولة مرة أخرى.' : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-32 bg-gray-50 dark:bg-dark/50" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight dark:text-white"
            >
              {t('contact.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted dark:text-gray-400 text-lg mb-12"
            >
              {t('contact.desc')}
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: Mail, title: t('contact.emailUs'), content: 'soul.agency2@gmail.com' },
                { icon: Phone, title: t('contact.callUs'), content: '+967 779590734' },
                { icon: MapPin, title: t('contact.visitUs'), content: 'Hadramaut, Yemen' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-14 h-14 rounded-[16px] bg-white dark:bg-white/5 border border-border dark:border-white/10 soft-shadow dark:shadow-none flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted dark:text-gray-500 font-semibold uppercase tracking-wider mb-1">{item.title}</p>
                    <p className="text-xl font-medium dark:text-white">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-white/5 rounded-[32px] p-10 md:p-14 soft-shadow dark:shadow-none border border-border dark:border-white/10">
              <h3 className="text-2xl font-bold mb-8 dark:text-white">{t('contact.formTitle')}</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-gray-300">{t('contact.name')}</label>
                    <input 
                      {...register('name')}
                      placeholder={t('contact.namePlaceholder')}
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white ${errors.name ? 'border-red-500' : 'border-border dark:border-white/10 focus:border-primary'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-gray-300">{t('contact.email')}</label>
                    <input 
                      {...register('email')}
                      placeholder={t('contact.emailPlaceholder')}
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white ${errors.email ? 'border-red-500' : 'border-border dark:border-white/10 focus:border-primary'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-gray-300">{t('contact.company')}</label>
                    <input 
                      {...register('company')}
                      placeholder={t('contact.companyPlaceholder')}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border border-border dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-gray-300">{t('contact.phone')}</label>
                    <input 
                      {...register('phone')}
                      placeholder={t('contact.phonePlaceholder')}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border border-border dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-gray-300">{t('contact.service')}</label>
                    <select 
                      {...register('service')}
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none dark:text-white ${errors.service ? 'border-red-500' : 'border-border dark:border-white/10 focus:border-primary'}`}
                    >
                      <option value="">{t('contact.serviceOption')}</option>
                      <option value="brand">{t('contact.serviceBrand')}</option>
                      <option value="web">{t('contact.serviceWeb')}</option>
                      <option value="marketing">{t('contact.serviceMarketing')}</option>
                      <option value="video">{t('contact.serviceVideo')}</option>
                      <option value="other">{t('contact.serviceOther')}</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-gray-300">{t('contact.budget')}</label>
                    <select 
                      {...register('budget')}
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none dark:text-white ${errors.budget ? 'border-red-500' : 'border-border dark:border-white/10 focus:border-primary'}`}
                    >
                      <option value="">{t('contact.budgetOption')}</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-gray-300">{t('contact.message')}</label>
                  <textarea 
                    {...register('message')}
                    placeholder={t('contact.messagePlaceholder')}
                    rows={4}
                    className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white ${errors.message ? 'border-red-500' : 'border-border dark:border-white/10 focus:border-primary'}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? t('contact.sending') : (
                    <>
                      {t('contact.send')}
                      <Send className="w-5 h-5 rtl:rotate-180" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

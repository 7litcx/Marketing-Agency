import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        process: "Process",
        pricing: "Pricing",
        faq: "FAQ",
        contact: "Contact"
      },
      hero: {
        title1: "Creative ",
        title1_span: "Solutions.",
        title2: "Real ",
        title2_span: "Results.",
        desc: "We craft premium digital experiences that help ambitious brands grow through design, marketing, development, and storytelling.",
        startProject: "Start Your Project",
        viewPortfolio: "View Portfolio"
      },
      partners: {
        title: "Success Partners"
      },
      about: {
        subtitle: "About Soul Media",
        title1: "We blend ",
        title1_span: "creativity",
        title2: " with ",
        title2_span: "technology",
        cards: [
          { title: 'Who We Are', desc: 'A premium digital agency dedicated to elevating brands through cutting-edge design and strategic marketing.' },
          { title: 'Our Mission', desc: 'To deliver innovative, results-driven solutions that help ambitious companies thrive in the digital landscape.' },
          { title: 'Our Vision', desc: 'To be the global leader in digital transformation, setting new standards for creativity and technical excellence.' },
          { title: 'Our Values', desc: 'Innovation, integrity, collaboration, and an unrelenting commitment to exceptional quality.' }
        ]
      },
      services: {
        subtitle: "Our Expertise",
        title: "Comprehensive ",
        title_span: "Services",
        cards: [
          { title: 'Brand Identity', desc: 'Crafting cohesive brand experiences that resonate with your audience.' },
          { title: 'Website Dev', desc: 'Fast, responsive, and scalable web applications.' },
          { title: 'UI/UX Design', desc: 'Intuitive interfaces that enhance user satisfaction.' },
          { title: 'App Development', desc: 'Custom mobile applications for iOS and Android.' },
          { title: 'Logo Design', desc: 'Memorable and timeless logos that define your core identity.' },
          { title: 'Social Media', desc: 'Strategic management to grow your online community.' },
          { title: 'Content Creation', desc: 'Engaging content tailored for multiple digital platforms.' },
          { title: 'Advertising', desc: 'Targeted campaigns that maximize your ROI and reach.' },
          { title: 'Photography', desc: 'High-quality visual assets for your brand.' },
          { title: 'Video Production', desc: 'Compelling storytelling through professional video.' },
          { title: 'Motion Graphics', desc: 'Dynamic animations to bring your ideas to life.' },
          { title: 'Printing', desc: 'Premium quality print materials for offline impact.' },
          { title: 'Digital Marketing', desc: 'Comprehensive strategies to boost your digital presence.' },
        ]
      },
      portfolio: {
        subtitle: "Selected Work",
        title: "Discover our latest ",
        title_span: "projects",
        categories: ['All', 'Brand Identity', 'Social Media', 'Advertising', 'Web Design', 'Video', 'Printing'],
        client: "Client",
        year: "Year",
        servicesLabel: "Services",
        items: [
          { title: 'Aura Skincare', client: 'Aura Cosmetics', desc: 'A complete rebrand and digital presence for a premium skincare line focusing on natural ingredients.' },
          { title: 'Nexus Fintech', client: 'Nexus Group', desc: 'A modern, secure, and user-friendly banking dashboard and landing page for a leading fintech startup.' },
          { title: 'Urban Wear', client: 'Urban Apparel', desc: 'A vibrant summer advertising campaign that increased brand engagement by over 300%.' },
          { title: 'Lumina Tech', client: 'Lumina Inc', desc: 'A highly engaging product launch video combining live-action and premium 3D motion graphics.' },
          { title: 'Eco Foods', client: 'Eco Market', desc: 'Sustainable and eye-catching packaging design printed on recycled materials.' },
          { title: 'Vibe Social', client: 'Vibe App', desc: 'A comprehensive social media strategy and content creation for a gen-z focused app.' },
        ]
      },
      process: {
        subtitle: "How We Work",
        title: "Our proven ",
        title_span: "Process",
        steps: [
          { title: 'Discovery', desc: 'We dive deep into your brand, understanding your goals, audience, and market landscape to find the perfect angle.' },
          { title: 'Strategy', desc: 'Crafting a customized roadmap that aligns with your vision and ensures maximum impact and ROI.' },
          { title: 'Design', desc: 'Our creative team brings ideas to life with stunning visuals and intuitive user experiences.' },
          { title: 'Development', desc: 'Building robust, scalable, and lightning-fast digital solutions using cutting-edge technology.' },
          { title: 'Launch', desc: 'Testing, optimizing, and deploying your project to the world, followed by ongoing support.' }
        ]
      },
      whyChooseUs: {
        stats: [
          { label: 'Projects' },
          { label: 'Clients' },
          { label: 'Client Satisfaction' },
          { label: 'Years Experience' }
        ]
      },
      testimonials: {
        subtitle: "Client Stories",
        title: "Don't just take our ",
        title_span: "word",
        title_end: " for it",
        items: [
          { quote: "Soul Media completely transformed our brand identity. Their attention to detail and creative vision is unmatched. We've seen a 200% increase in user engagement since the launch." },
          { quote: "Working with them was a breeze. They understood our complex requirements and delivered a product that exceeded our expectations. Highly recommended for any serious business." },
          { quote: "The team at Soul Media is brilliant. They managed our entire digital marketing campaign and the results were phenomenal. Our ROI has never been better." },
          { quote: "From the initial discovery phase to the final launch, their process was flawless. The new website they built for us is fast, beautiful, and highly converting." }
        ]
      },
      pricing: {
        subtitle: "Pricing",
        title: "Simple, transparent ",
        title_span: "pricing",
        mostPopular: "Most Popular",
        getStarted: "Get Started",
        custom: "Custom",
        plans: [
          { desc: 'Perfect for small businesses just getting started.', features: ['Brand Identity Basics', 'Social Media Setup', 'Basic Website', 'Monthly Report', 'Email Support'] },
          { desc: 'Ideal for scaling companies that need more power.', features: ['Advanced Brand Identity', 'Social Media Management', 'E-commerce Website', 'SEO Optimization', 'Weekly Reports', 'Priority Support'] },
          { desc: 'For large organizations with complex needs.', features: ['Full Digital Transformation', 'Dedicated Account Manager', 'Custom Web Applications', 'Advanced Marketing Campaigns', '24/7 Phone Support', 'On-site Consultation'] }
        ]
      },
      faq: {
        subtitle: "Got Questions?",
        title: "Frequently Asked ",
        title_span: "Questions",
        desc: "Can't find the answer you're looking for? Reach out to our customer support team.",
        items: [
          { question: "What is your process for new projects?", answer: "Our process starts with a deep discovery phase, followed by strategic planning, design, development, and finally, a launch with ongoing support. We ensure you're involved at every key milestone." },
          { question: "How long does a typical website project take?", answer: "A standard website typically takes 4-8 weeks from start to finish, depending on the complexity, features required, and how quickly we receive feedback and content from your team." },
          { question: "Do you offer ongoing support after launch?", answer: "Yes, we offer various maintenance and support packages. We believe in building long-term relationships and ensuring your digital assets remain secure, up-to-date, and performant." },
          { question: "Can you help with branding as well as web design?", answer: "Absolutely. We are a full-service agency. We can craft your entire brand identity from scratch, including logos, typography, color palettes, and brand guidelines, before we even start on the web design." },
          { question: "What technologies do you use?", answer: "We specialize in modern web technologies including React, Next.js, Node.js, and advanced CSS/animations using Framer Motion and GSAP, ensuring fast and highly interactive experiences." }
        ]
      },
      contact: {
        title: "Let's talk about your project.",
        desc: "We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.",
        emailUs: "Email Us",
        callUs: "Call Us",
        visitUs: "Visit Us",
        formTitle: "Send us a message",
        name: "Name *",
        namePlaceholder: "John Doe",
        email: "Email *",
        emailPlaceholder: "john@example.com",
        company: "Company",
        companyPlaceholder: "Your Company",
        phone: "Phone",
        phonePlaceholder: "+1 (555) 000-0000",
        service: "Service Required *",
        serviceOption: "Select a service",
        serviceBrand: "Brand Identity",
        serviceWeb: "Web Design & Dev",
        serviceMarketing: "Digital Marketing",
        serviceVideo: "Video Production",
        serviceOther: "Other",
        budget: "Project Budget *",
        budgetOption: "Select budget range",
        message: "Message *",
        messagePlaceholder: "Tell us about your project goals...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We will get back to you soon."
      },
      footer: {
        desc: "We craft premium digital experiences that help ambitious brands grow through design, marketing, development, and storytelling.",
        company: "Company",
        legal: "Legal",
        about: "About Us",
        services: "Services",
        portfolio: "Portfolio",
        careers: "Careers",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookie: "Cookie Policy",
        rights: "Soul Media Agency. All rights reserved.",
        designed: "Designed & Developed with ♥"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: "من نحن",
        services: "خدماتنا",
        portfolio: "أعمالنا",
        process: "طريقة العمل",
        pricing: "الأسعار",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا"
      },
      hero: {
        title1: "حلول ",
        title1_span: "إبداعية.",
        title2: "نتائج ",
        title2_span: "حقيقية.",
        desc: "نصنع تجارب رقمية مميزة تساعد العلامات التجارية الطموحة على النمو من خلال التصميم والتسويق والتطوير وسرد القصص.",
        startProject: "ابدأ مشروعك",
        viewPortfolio: "شاهد أعمالنا"
      },
      partners: {
        title: "شركاء النجاح"
      },
      about: {
        subtitle: "عن سول ميديا",
        title1: "نمزج ",
        title1_span: "الإبداع",
        title2: " مع ",
        title2_span: "التكنولوجيا",
        cards: [
          { title: 'من نحن', desc: 'وكالة رقمية متميزة مكرسة للارتقاء بالعلامات التجارية من خلال التصميم المبتكر والتسويق الاستراتيجي.' },
          { title: 'مهمتنا', desc: 'تقديم حلول مبتكرة وفعالة تساعد الشركات الطموحة على الازدهار في المشهد الرقمي.' },
          { title: 'رؤيتنا', desc: 'أن نكون الرائد العالمي في التحول الرقمي، مع وضع معايير جديدة للإبداع والتميز التقني.' },
          { title: 'قيمنا', desc: 'الابتكار والنزاهة والتعاون والالتزام المستمر بالجودة الاستثنائية.' }
        ]
      },
      services: {
        subtitle: "خبراتنا",
        title: "خدمات ",
        title_span: "شاملة",
        cards: [
          { title: 'هوية العلامة التجارية', desc: 'صياغة تجارب متماسكة للعلامة التجارية يتردد صداها مع جمهورك.' },
          { title: 'تصميم الشعار', desc: 'شعارات لا تُنسى وخالدة تحدد هويتك الأساسية.' },
          { title: 'وسائل التواصل الاجتماعي', desc: 'إدارة استراتيجية لتنمية مجتمعك عبر الإنترنت.' },
          { title: 'صناعة المحتوى', desc: 'محتوى جذاب مخصص لمنصات رقمية متعددة.' },
          { title: 'الإعلانات', desc: 'حملات مستهدفة تزيد من عائد الاستثمار والوصول.' },
          { title: 'تطوير المواقع', desc: 'تطبيقات ويب سريعة وسريعة الاستجابة وقابلة للتطوير.' },
          { title: 'تصميم واجهة المستخدم', desc: 'واجهات بديهية تعزز رضا المستخدم.' },
          { title: 'تطوير التطبيقات', desc: 'تطبيقات جوال مخصصة لنظامي iOS وأندرويد.' },
          { title: 'التصوير', desc: 'أصول مرئية عالية الجودة لعلامتك التجارية.' },
          { title: 'إنتاج الفيديو', desc: 'سرد قصصي مقنع من خلال فيديو احترافي.' },
          { title: 'الموشن جرافيك', desc: 'رسوم متحركة ديناميكية لإحياء أفكارك.' },
          { title: 'الطباعة', desc: 'مواد مطبوعة عالية الجودة للتأثير خارج الإنترنت.' },
          { title: 'التسويق الرقمي', desc: 'استراتيجيات شاملة لتعزيز حضورك الرقمي.' },
        ]
      },
      portfolio: {
        subtitle: "أعمال مختارة",
        title: "اكتشف أحدث ",
        title_span: "مشاريعنا",
        categories: ['الكل', 'هوية العلامة التجارية', 'وسائل التواصل الاجتماعي', 'الإعلانات', 'تصميم الويب', 'الفيديو', 'الطباعة'],
        client: "العميل",
        year: "السنة",
        servicesLabel: "الخدمات",
        items: [
          { title: 'أورا سكين كير', client: 'أورا كوزمتيكس', desc: 'تغيير كامل للعلامة التجارية وحضور رقمي لخط العناية بالبشرة الفاخر مع التركيز على المكونات الطبيعية.' },
          { title: 'نيكسوس فينتيك', client: 'مجموعة نيكسوس', desc: 'لوحة معلومات مصرفية حديثة وآمنة وسهلة الاستخدام لشركة تكنولوجيا مالية رائدة.' },
          { title: 'أوربان وير', client: 'أوربان أباريل', desc: 'حملة إعلانية صيفية نابضة بالحياة زادت من تفاعل العلامة التجارية بأكثر من 300٪.' },
          { title: 'لومينا تك', client: 'لومينا إنك', desc: 'فيديو إطلاق منتج جذاب للغاية يجمع بين الحركة الحية ورسومات متحركة ثلاثية الأبعاد ممتازة.' },
          { title: 'إيكو فودز', client: 'إيكو ماركت', desc: 'تصميم تغليف مستدام ولافت للنظر مطبوع على مواد معاد تدويرها.' },
          { title: 'فايب سوشيال', client: 'تطبيق فايب', desc: 'استراتيجية شاملة لوسائل التواصل الاجتماعي وصناعة محتوى لتطبيق يركز على الجيل Z.' },
        ]
      },
      process: {
        subtitle: "طريقة عملنا",
        title: "عمليتنا ",
        title_span: "المجربة",
        steps: [
          { title: 'الاكتشاف', desc: 'نتعمق في علامتك التجارية، ونفهم أهدافك وجمهورك والمشهد السوقي للعثور على الزاوية المثالية.' },
          { title: 'الاستراتيجية', desc: 'صياغة خارطة طريق مخصصة تتماشى مع رؤيتك وتضمن أقصى تأثير وعائد استثمار.' },
          { title: 'التصميم', desc: 'فريقنا الإبداعي يحيي الأفكار بصور مذهلة وتجارب مستخدم بديهية.' },
          { title: 'التطوير', desc: 'بناء حلول رقمية قوية وقابلة للتطوير وسريعة للغاية باستخدام أحدث التقنيات.' },
          { title: 'الإطلاق', desc: 'اختبار وتحسين ونشر مشروعك للعالم، متبوعاً بدعم مستمر.' }
        ]
      },
      whyChooseUs: {
        stats: [
          { label: 'مشاريع' },
          { label: 'عملاء' },
          { label: 'رضا العملاء' },
          { label: 'سنوات خبرة' }
        ]
      },
      testimonials: {
        subtitle: "قصص العملاء",
        title: "لا تأخذ ",
        title_span: "كلمتنا",
        title_end: " فقط",
        items: [
          { quote: "غيرت سول ميديا هوية علامتنا التجارية بالكامل. اهتمامهم بالتفاصيل ورؤيتهم الإبداعية لا مثيل لها. رأينا زيادة بنسبة 200٪ في تفاعل المستخدمين منذ الإطلاق." },
          { quote: "كان العمل معهم في غاية السهولة. فهموا متطلباتنا المعقدة وقدموا منتجًا فاق توقعاتنا. نوصي بهم بشدة لأي عمل جاد." },
          { quote: "فريق سول ميديا رائع. لقد أداروا حملة التسويق الرقمي بالكامل وكانت النتائج استثنائية. لم يكن عائد الاستثمار لدينا أفضل من أي وقت مضى." },
          { quote: "من مرحلة الاكتشاف الأولية إلى الإطلاق النهائي، كانت عمليتهم خالية من العيوب. الموقع الجديد الذي بنوه لنا سريع وجميل وعالي التحويل." }
        ]
      },
      pricing: {
        subtitle: "الأسعار",
        title: "أسعار بسيطة ",
        title_span: "وشفافة",
        mostPopular: "الأكثر شعبية",
        getStarted: "ابدأ الآن",
        custom: "مخصص",
        plans: [
          { desc: 'مثالي للشركات الصغيرة التي بدأت للتو.', features: ['أساسيات هوية العلامة التجارية', 'إعداد وسائل التواصل الاجتماعي', 'موقع ويب أساسي', 'تقرير شهري', 'دعم عبر البريد الإلكتروني'] },
          { desc: 'مثالي للشركات المتنامية التي تحتاج إلى المزيد من القوة.', features: ['هوية علامة تجارية متقدمة', 'إدارة وسائل التواصل الاجتماعي', 'موقع تجارة إلكترونية', 'تحسين محركات البحث', 'تقارير أسبوعية', 'دعم ذو أولوية'] },
          { desc: 'للمؤسسات الكبيرة ذات الاحتياجات المعقدة.', features: ['تحول رقمي كامل', 'مدير حساب مخصص', 'تطبيقات ويب مخصصة', 'حملات تسويقية متقدمة', 'دعم هاتفي 24/7', 'استشارة ميدانية'] }
        ]
      },
      faq: {
        subtitle: "لديك أسئلة؟",
        title: "الأسئلة ",
        title_span: "الشائعة",
        desc: "لا تستطيع العثور على الإجابة التي تبحث عنها؟ تواصل مع فريق دعم العملاء لدينا.",
        items: [
          { question: "ما هي عمليتكم للمشاريع الجديدة؟", answer: "تبدأ عمليتنا بمرحلة اكتشاف عميقة، تليها التخطيط الاستراتيجي، التصميم، التطوير، وأخيراً، الإطلاق مع دعم مستمر. نضمن إشراكك في كل مرحلة رئيسية." },
          { question: "كم من الوقت يستغرق مشروع موقع ويب نموذجي؟", answer: "يستغرق الموقع القياسي عادة من 4 إلى 8 أسابيع من البداية إلى النهاية، اعتماداً على التعقيد والميزات المطلوبة وسرعة تلقي الملاحظات والمحتوى من فريقك." },
          { question: "هل تقدمون دعماً مستمراً بعد الإطلاق؟", answer: "نعم، نقدم باقات صيانة ودعم متنوعة. نحن نؤمن ببناء علاقات طويلة الأمد وضمان بقاء أصولك الرقمية آمنة ومحدثة وعالية الأداء." },
          { question: "هل يمكنكم المساعدة في العلامات التجارية بالإضافة إلى تصميم الويب؟", answer: "بالتأكيد. نحن وكالة خدمات متكاملة. يمكننا صياغة هوية علامتك التجارية بالكامل من الصفر، بما في ذلك الشعارات والطباعة ولوحات الألوان وإرشادات العلامة التجارية، قبل أن نبدأ حتى في تصميم الويب." },
          { question: "ما هي التقنيات التي تستخدمونها؟", answer: "نحن متخصصون في تقنيات الويب الحديثة بما في ذلك React و Next.js و Node.js و CSS/animations المتقدمة باستخدام Framer Motion و GSAP، مما يضمن تجارب سريعة وتفاعلية للغاية." }
        ]
      },
      contact: {
        title: "لنتحدث عن مشروعك.",
        desc: "نود أن نسمع منك. املأ النموذج وسيتواصل فريقنا معك خلال 24 ساعة.",
        emailUs: "راسلنا",
        callUs: "اتصل بنا",
        visitUs: "زورنا",
        formTitle: "أرسل لنا رسالة",
        name: "الاسم *",
        namePlaceholder: "محمد عبدالله",
        email: "البريد الإلكتروني *",
        emailPlaceholder: "mohammed@example.com",
        company: "الشركة",
        companyPlaceholder: "شركتك",
        phone: "الهاتف",
        phonePlaceholder: "+966 50 000 0000",
        service: "الخدمة المطلوبة *",
        serviceOption: "اختر خدمة",
        serviceBrand: "هوية العلامة التجارية",
        serviceWeb: "تصميم وتطوير المواقع",
        serviceMarketing: "التسويق الرقمي",
        serviceVideo: "إنتاج الفيديو",
        serviceOther: "أخرى",
        budget: "ميزانية المشروع *",
        budgetOption: "اختر الميزانية",
        message: "الرسالة *",
        messagePlaceholder: "أخبرنا عن أهداف مشروعك...",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح! سنرد عليك قريباً."
      },
      footer: {
        desc: "نصنع تجارب رقمية مميزة تساعد العلامات التجارية الطموحة على النمو من خلال التصميم والتسويق والتطوير وسرد القصص.",
        company: "الشركة",
        legal: "قانوني",
        about: "من نحن",
        services: "الخدمات",
        portfolio: "الأعمال",
        careers: "الوظائف",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        cookie: "سياسة ملفات تعريف الارتباط",
        rights: "سول ميديا. جميع الحقوق محفوظة.",
        designed: "صُمم وطُور بـ ♥"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

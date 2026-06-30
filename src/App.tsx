import { useEffect } from 'react';
import Lenis from 'lenis';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Partners from './sections/Partners';
import Process from './sections/Process';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import { Toaster } from 'sonner';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>SOUL MEDIA | Premium Marketing Agency</title>
        <meta name="description" content="We craft premium digital experiences that help ambitious brands grow through design, marketing, development, and storytelling." />
      </Helmet>
      
      <Toaster position="bottom-right" />
      <Navbar />
      
      <main className="relative bg-background dark:bg-dark text-foreground dark:text-white overflow-hidden">
        <Hero />
        <Partners />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </HelmetProvider>
  );
}

export default App;

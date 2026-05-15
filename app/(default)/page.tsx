import Hero from '@/components/home/hero';
import Navbar from '@/components/home/navbar';
import Features from '@/components/home/features';
import Pricing from '@/components/home/pricing';
import Footer from '@/components/home/footer';
import Stats from '@/components/home/stats';
import Testimonials from '@/components/home/testimonials';
import FAQ from '@/components/home/faq';
import CTA from '@/components/home/cta';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

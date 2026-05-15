import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import Pricing from '@/components/home/pricing';
import Stats from '@/components/home/stats';
import Testimonials from '@/components/home/testimonials';
import FAQ from '@/components/home/faq';
import CTA from '@/components/home/cta';
import Integrations from '@/components/home/integrations';
import Team from '@/components/home/team';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Integrations />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}

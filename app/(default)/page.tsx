import Hero from '@/components/home/hero';
import Navbar from '@/components/home/navbar';
import Features from '@/components/home/features';
import Pricing from '@/components/home/pricing';
import Footer from '@/components/home/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

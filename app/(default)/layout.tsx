import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  );
}

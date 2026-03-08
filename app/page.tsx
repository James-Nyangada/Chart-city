import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { Benefits } from '@/components/Benefits';
import { FAQ } from '@/components/FAQ';
import { DashboardPreview } from '@/components/DashboardPreview';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Pricing />
      <Benefits />
      <FAQ />
      <DashboardPreview />
      <Community />
      <Footer />
    </main>
  );
}

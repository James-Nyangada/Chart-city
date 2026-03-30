import { Header } from '@/components/Header';
import { EconomyDashboard } from '@/components/EconomyDashboard';
import { Footer } from '@/components/Footer';

export default function EconomyPage() {
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <Header />
      <EconomyDashboard />
      <Footer />
    </main>
  );
}

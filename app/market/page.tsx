import { Header } from '@/components/Header';
import { GlobalExchange } from '@/components/GlobalExchange';
import { Footer } from '@/components/Footer';

export default function MarketPage() {
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <Header />
      <GlobalExchange />
      <Footer />
    </main>
  );
}

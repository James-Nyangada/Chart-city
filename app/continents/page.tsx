import { Header } from '@/components/Header';
import { ContinentsDirectory } from '@/components/ContinentsDirectory';
import { Footer } from '@/components/Footer';

export default function ContinentsPage() {
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <Header />
      <ContinentsDirectory />
      <Footer />
    </main>
  );
}

import { Header } from '@/components/Header';
import { ContinentalHub } from '@/components/ContinentalHub';
import { Footer } from '@/components/Footer';

export default async function SectorPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <Header />
      <ContinentalHub region={region} />
      <Footer />
    </main>
  );
}

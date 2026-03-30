import { Header } from '@/components/Header';
import { AssetDetail } from '@/components/AssetDetail';
import { Footer } from '@/components/Footer';

export default async function AssetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <Header />
      <AssetDetail id={id} />
      <Footer />
    </main>
  );
}

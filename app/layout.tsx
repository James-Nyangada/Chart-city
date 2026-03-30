import type {Metadata} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Chart City Market',
  description: 'A digital ecosystem where creativity is currency and participation is power.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${outfit.variable}`}>
      <body className="font-inter bg-gradient-to-b from-[#04040B] to-[#080812] text-white min-h-screen antialiased selection:bg-purple-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

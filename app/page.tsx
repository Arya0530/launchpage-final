import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Launchpage - Bikin Bisnis Kamu Terbang Lebih Tinggi',
  description: 'Agency Digital Terbaik di Lamongan untuk solusi UI/UX, Web Development, dan SEO.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Team />
      <Footer />
    </main>
  );
}
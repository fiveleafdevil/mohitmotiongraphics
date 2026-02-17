import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Work } from '@/components/Work';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

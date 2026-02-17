import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mohit Portfolio. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
        </div>

        <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-zinc-900 border border-white/5 text-gray-400 hover:text-yellow-500 hover:border-yellow-500/30 transition-all"
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

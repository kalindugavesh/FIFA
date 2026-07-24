import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
          <div className="text-center space-y-3">
            <p className="text-white/40 text-sm">
              Predictions are based on historical data and machine learning models. Results are for educational and entertainment purposes only.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-white/30">
              <span>🏆 2022 Qatar</span>
              <span>🏆 2018 Russia</span>
              <span>🏆 2014 Brazil</span>
              <span>🏆 2010 South Africa</span>
              <span>🏆 2006 Germany</span>
              <span>🏆 2002 Japan/Korea</span>
            </div>
            <div className="pt-3 border-t border-white/[0.05] flex items-center justify-center gap-4 text-xs text-white/30">
              <span className="flex items-center gap-1">Built with <Heart size={12} className="text-red-400" /> React + TypeScript</span>
              <a href="https://github.com/kalindugavesh/FIFA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white/60 transition-colors">
                ⭐ Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

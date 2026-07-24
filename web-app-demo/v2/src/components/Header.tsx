import { Globe } from 'lucide-react';
import type { TabId } from '../types';

interface Props {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; shortLabel: string }[] = [
  { id: 'predict', label: 'Predict Match', shortLabel: 'Predict' },
  { id: 'rankings', label: 'Team Rankings', shortLabel: 'Rankings' },
  { id: 'history', label: 'Match History', shortLabel: 'History' },
  { id: 'model', label: 'Model Info', shortLabel: 'Model' },
];

export function Header({ activeTab, onTabChange }: Props) {
  return (
    <header className="pt-8 pb-6 md:pt-12 md:pb-8">
      {/* Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-[20px] shadow-2xl shadow-orange-500/30 mb-5 animate-float">
          <Globe className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">FIFA World Cup</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-white/90 mt-1">Match Predictor</h2>
        <p className="text-white/50 text-sm md:text-base mt-3 max-w-lg mx-auto">
          ML-powered predictions from <span className="text-amber-400 font-semibold">383 matches</span> across 6 World Cups (2002–2022)
        </p>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-5">
          {[
            { label: 'Random Forest', value: '', dot: true },
            { label: 'AUC', value: '78.3%' },
            { label: 'Teams', value: '41' },
            { label: 'Matches', value: '383' },
          ].map(s => (
            <span key={s.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] border border-white/[0.1] rounded-full text-xs">
              {s.dot && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
              {s.value && <span className="text-amber-400 font-bold">{s.value}</span>}
              <span className="text-white/60">{s.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex justify-center">
        <div className="inline-flex bg-white/[0.06] backdrop-blur-md rounded-2xl p-1 border border-white/[0.1] gap-0.5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 md:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250
                ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.06]'}`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

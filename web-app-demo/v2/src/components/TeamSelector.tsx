import { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import type { Team } from '../types';

interface Props {
  teams: Team[];
  value: string;
  onChange: (name: string) => void;
  exclude?: string;
  label: string;
  color?: string;
}

export function TeamSelector({ teams, value, onChange, exclude, label, color = 'amber' }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() =>
    teams
      .filter(t => t.name !== exclude)
      .filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.code.toLowerCase().includes(search.toLowerCase()) ||
        t.confederation.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.rank - b.rank),
    [teams, exclude, search]
  );

  const selected = teams.find(t => t.name === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const borderColor = color === 'amber' ? 'focus-within:ring-amber-400/60' : 'focus-within:ring-sky-400/60';

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">{label}</label>

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center gap-3 px-4 py-3.5 bg-white/[0.07] border border-white/[0.12] rounded-2xl text-left transition-all ring-2 ring-transparent ${borderColor} hover:bg-white/[0.10]`}
      >
        {selected ? (
          <>
            <span className="text-3xl leading-none">{selected.flagEmoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold truncate">{selected.name}</p>
              <p className="text-white/50 text-xs">Rank #{selected.rank} · {selected.confederation}</p>
            </div>
            <button
              type="button"
              onClick={e => { e.stopPropagation(); onChange(''); }}
              className="p-1 rounded-full hover:bg-white/10 text-white/40 hover:text-white/70"
            >
              <X size={14} />
            </button>
          </>
        ) : (
          <>
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/30">⚽</div>
            <span className="text-white/40 flex-1">Choose team...</span>
          </>
        )}
        <ChevronDown size={16} className={`text-white/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute z-50 w-full mt-2 bg-slate-800/98 backdrop-blur-xl border border-white/[0.15] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-dropdown">
          <div className="p-3 border-b border-white/10">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by name or confederation..."
                className="w-full pl-9 pr-3 py-2.5 bg-white/[0.06] border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
          </div>
          <ul className="max-h-[280px] overflow-y-auto overscroll-contain p-1.5 space-y-0.5">
            {filtered.length === 0 ? (
              <li className="py-6 text-center text-white/40 text-sm">No teams match "{search}"</li>
            ) : (
              filtered.map(t => (
                <li
                  key={t.name}
                  onClick={() => { onChange(t.name); setOpen(false); setSearch(''); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all
                    ${t.name === value ? 'bg-amber-500/20 ring-1 ring-amber-500/30' : 'hover:bg-white/[0.07]'}`}
                >
                  <span className="text-2xl">{t.flagEmoji}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-white font-medium text-sm">{t.name}</span>
                    <span className="text-white/40 text-xs ml-1.5">{t.code}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 text-xs font-bold">#{t.rank}</span>
                    {t.worldCupTitles > 0 && <span className="block text-amber-400 text-[10px]">🏆 ×{t.worldCupTitles}</span>}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

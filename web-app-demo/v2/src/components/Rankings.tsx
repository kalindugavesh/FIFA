import { useState, useMemo } from 'react';
import { ArrowUpDown, Search, Trophy } from 'lucide-react';
import { teams, confederationColors } from '../data/teams';
import { getTeamForm } from '../utils/prediction';

type SortKey = 'rank' | 'starPlayers' | 'goalkeeperRank' | 'worldCupTitles';

export function Rankings() {
  const [sortBy, setSortBy] = useState<SortKey>('rank');
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState('');
  const [confFilter, setConfFilter] = useState<string>('all');

  const sorted = useMemo(() => {
    let list = [...teams];
    if (search) list = list.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.code.toLowerCase().includes(search.toLowerCase()));
    if (confFilter !== 'all') list = list.filter(t => t.confederation === confFilter);
    list.sort((a, b) => {
      const va = a[sortBy]; const vb = b[sortBy];
      return asc ? (va as number) - (vb as number) : (vb as number) - (va as number);
    });
    return list;
  }, [sortBy, asc, search, confFilter]);

  const toggle = (key: SortKey) => {
    if (sortBy === key) setAsc(a => !a);
    else { setSortBy(key); setAsc(key === 'rank' || key === 'goalkeeperRank'); }
  };

  const confs = ['all', 'UEFA', 'CONMEBOL', 'CONCACAF', 'CAF', 'AFC'] as const;

  const Th = ({ k, label }: { k: SortKey; label: string }) => (
    <button onClick={() => toggle(k)} className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors ${sortBy === k ? 'text-amber-400' : 'text-white/40 hover:text-white/70'}`}>
      {label} <ArrowUpDown size={12} />
    </button>
  );

  return (
    <div className="space-y-5">
      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search teams..."
            className="w-full pl-9 pr-3 py-2.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {confs.map(c => (
            <button
              key={c}
              onClick={() => setConfFilter(c)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${confFilter === c ? 'text-white shadow-lg' : 'bg-white/[0.06] text-white/40 hover:bg-white/[0.1] hover:text-white'}`}
              style={confFilter === c ? { backgroundColor: c === 'all' ? '#f59e0b' : confederationColors[c] || '#f59e0b' } : {}}
            >
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-white/40">{sorted.length} teams</p>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/[0.04]">
              <th className="text-left px-4 py-3"><Th k="rank" label="Rank" /></th>
              <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/40">Team</th>
              <th className="text-center px-4 py-3"><Th k="starPlayers" label="Stars" /></th>
              <th className="text-center px-4 py-3"><Th k="goalkeeperRank" label="GK Rank" /></th>
              <th className="text-center px-4 py-3"><Th k="worldCupTitles" label="Titles" /></th>
              <th className="text-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/40">Form</th>
              <th className="text-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/40">Conf.</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((t, i) => (
              <tr key={t.name} className={`border-t border-white/[0.04] hover:bg-white/[0.04] transition-colors ${i < 3 ? '' : ''}`}>
                <td className="px-4 py-3">
                  <span className={`font-black text-lg ${t.rank <= 3 ? 'text-amber-400' : t.rank <= 10 ? 'text-white' : 'text-white/50'}`}>
                    {t.rank}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{t.flagEmoji}</span>
                    <div>
                      <span className="text-white font-semibold">{t.name}</span>
                      <span className="text-white/30 text-xs ml-1.5">{t.code}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="text-white/80">{t.starPlayers > 0 ? '⭐'.repeat(Math.min(t.starPlayers, 5)) : '—'}</span>
                  {t.starPlayers > 5 && <span className="text-amber-400 text-xs ml-1">+{t.starPlayers - 5}</span>}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`font-mono font-bold ${t.goalkeeperRank <= 5 ? 'text-emerald-400' : t.goalkeeperRank <= 15 ? 'text-white/70' : 'text-white/40'}`}>#{t.goalkeeperRank}</span>
                </td>
                <td className="px-4 py-3 text-center">
                  {t.worldCupTitles > 0 ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                      <Trophy size={12} className="text-amber-400" />
                      <span className="text-amber-400 font-bold text-xs">{t.worldCupTitles}</span>
                    </span>
                  ) : <span className="text-white/20">—</span>}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="inline-flex items-center gap-1.5">
                    <div className="w-12 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400" style={{ width: `${(getTeamForm(t.rank, t.starPlayers) / 5) * 100}%` }} />
                    </div>
                    <span className="text-white/60 text-xs font-mono">{getTeamForm(t.rank, t.starPlayers)}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold" style={{ backgroundColor: `${confederationColors[t.confederation]}20`, color: confederationColors[t.confederation] }}>
                    {t.confederation}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

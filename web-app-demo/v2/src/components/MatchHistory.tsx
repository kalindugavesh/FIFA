import { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { matchHistory, getTeam } from '../data/teams';

const YEARS = ['all', '2022', '2018', '2014', '2010', '2006', '2002'] as const;
const STAGES = ['all', 'Final', 'Semi-Final', 'Quarter-Final', 'Round of 16', 'Group Stage'] as const;

export function MatchHistory() {
  const [year, setYear] = useState<string>('all');
  const [stage, setStage] = useState<string>('all');

  const filtered = matchHistory.filter(m =>
    (year === 'all' || m.tournament === year) &&
    (stage === 'all' || m.stage === stage)
  );

  const badge = (r: string) =>
    r === 'Win' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
    r === 'Loss' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
    'bg-amber-500/20 text-amber-400 border-amber-500/30';

  return (
    <div className="space-y-5">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <Filter size={14} className="text-white/40" />
        {YEARS.map(y => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${year === y ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-white/[0.06] text-white/50 hover:bg-white/[0.1] hover:text-white'}`}
          >{y === 'all' ? 'All Years' : y}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <Calendar size={14} className="text-white/40" />
        {STAGES.map(s => (
          <button
            key={s}
            onClick={() => setStage(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${stage === s ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30' : 'bg-white/[0.06] text-white/50 hover:bg-white/[0.1] hover:text-white'}`}
          >{s === 'all' ? 'All Stages' : s}</button>
        ))}
      </div>

      <p className="text-xs text-white/40">{filtered.length} matches</p>

      {/* Match cards */}
      <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1 styled-scrollbar">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-white/30">No matches for this filter.</div>
        ) : (
          filtered.map(m => {
            const t1 = getTeam(m.team1);
            const t2 = getTeam(m.team2);
            return (
              <div key={m.id} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-[10px] font-bold">{m.stage}</span>
                  <span className="text-white/40 text-xs">{m.date} · {m.tournament} WC</span>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-2xl">{t1?.flagEmoji || '🏴'}</span>
                    <span className="text-white font-semibold text-sm truncate">{m.team1}</span>
                    {m.score1 !== undefined && <span className="text-white font-black text-lg ml-auto">{m.score1}</span>}
                  </div>
                  <div className="px-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-black border ${badge(m.result)}`}>
                      {m.result === 'Win' ? 'W' : m.result === 'Loss' ? 'L' : 'D'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                    {m.score2 !== undefined && <span className="text-white font-black text-lg mr-auto">{m.score2}</span>}
                    <span className="text-white font-semibold text-sm truncate">{m.team2}</span>
                    <span className="text-2xl">{t2?.flagEmoji || '🏴'}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

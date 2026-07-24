import { useState } from 'react';
import { Zap } from 'lucide-react';
import type { Team, PredictionInput } from '../types';
import { getTeam, getH2H } from '../data/teams';
import { getTeamForm } from '../utils/prediction';
import { TeamSelector } from './TeamSelector';

interface Props {
  teams: Team[];
  onPredict: (input: PredictionInput) => void;
  isLoading: boolean;
}

export function PredictionForm({ teams, onPredict, isLoading }: Props) {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');

  const a = team1 ? getTeam(team1) : null;
  const b = team2 ? getTeam(team2) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (team1 && team2 && team1 !== team2) onPredict({ team1, team2 });
  };

  const ready = !!(team1 && team2 && team1 !== team2 && !isLoading);

  const StatRow = ({ label, v1, v2, invert }: { label: string; v1: number; v2: number; invert?: boolean }) => {
    const better1 = invert ? v1 < v2 : v1 > v2;
    const better2 = invert ? v2 < v1 : v2 > v1;
    return (
      <div className="flex items-center text-sm">
        <span className={`w-12 text-right font-mono font-bold ${better1 ? 'text-emerald-400' : 'text-white/60'}`}>{v1}</span>
        <div className="flex-1 mx-3">
          <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-sky-500 rounded-full" style={{ width: `${Math.max(5, (v1 / (v1 + v2 + 0.01)) * 100)}%` }} />
            <div className="absolute inset-y-0 right-0 bg-orange-500 rounded-full" style={{ width: `${Math.max(5, (v2 / (v1 + v2 + 0.01)) * 100)}%` }} />
          </div>
          <p className="text-center text-[10px] text-white/40 mt-1">{label}</p>
        </div>
        <span className={`w-12 text-left font-mono font-bold ${better2 ? 'text-emerald-400' : 'text-white/60'}`}>{v2}</span>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <TeamSelector teams={teams} value={team1} onChange={t => { setTeam1(t); if (t === team2) setTeam2(''); }} label="Home Team" color="amber" />
        <TeamSelector teams={teams} value={team2} onChange={setTeam2} exclude={team1} label="Away Team" color="sky" />
      </div>

      {a && b && (
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 space-y-3 animate-fadeUp">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
            <span className="text-sky-400">{a.code}</span>
            <span>Quick Comparison</span>
            <span className="text-orange-400">{b.code}</span>
          </div>
          <StatRow label="FIFA Ranking" v1={a.rank} v2={b.rank} invert />
          <StatRow label="Star Players" v1={a.starPlayers} v2={b.starPlayers} />
          <StatRow label="Form Rating" v1={getTeamForm(a.rank, a.starPlayers)} v2={getTeamForm(b.rank, b.starPlayers)} />
          <StatRow label="GK Rank" v1={a.goalkeeperRank} v2={b.goalkeeperRank} invert />
          <StatRow label="🏆 Titles" v1={a.worldCupTitles} v2={b.worldCupTitles} />
          <div className="pt-2 border-t border-white/10 text-center">
            <span className="text-xs text-white/40">Head-to-Head: </span>
            <span className="text-xs text-emerald-400 font-bold">{a.name} {Math.round(getH2H(team1, team2) * 100)}%</span>
            <span className="text-xs text-white/30 mx-1">—</span>
            <span className="text-xs text-emerald-400 font-bold">{b.name} {Math.round((1 - getH2H(team1, team2)) * 100)}%</span>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={!ready}
        className="group w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300
                   bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500
                   shadow-[0_8px_32px_rgba(245,158,11,0.25)]
                   hover:shadow-[0_12px_48px_rgba(245,158,11,0.35)] hover:scale-[1.02]
                   disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:scale-100
                   text-white"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
            Running ML Model...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Zap size={20} className="group-hover:animate-pulse" />
            Predict Match Outcome
          </span>
        )}
      </button>
    </form>
  );
}

import { Clock, Trash2 } from 'lucide-react';
import type { Prediction } from '../types';
import { getTeam } from '../data/teams';

interface Props { history: Prediction[]; onClear: () => void; }

export function PredictionHistory({ history, onClear }: Props) {
  if (history.length === 0) return null;

  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="flex items-center gap-2 text-white font-bold">
          <Clock size={18} className="text-sky-400" />
          Recent Predictions
          <span className="text-white/40 text-xs font-normal">({history.length})</span>
        </h4>
        <button onClick={onClear} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 text-xs hover:bg-red-500/20 transition-colors">
          <Trash2 size={12} /> Clear
        </button>
      </div>
      <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1 styled-scrollbar">
        {history.map(p => {
          const a = getTeam(p.team1);
          const b = getTeam(p.team2);
          const resultColor = p.predictedResult === 'Win' ? 'text-emerald-400' : p.predictedResult === 'Loss' ? 'text-red-400' : 'text-amber-400';
          const resultLabel = p.predictedResult === 'Win' ? `${p.team1} wins` : p.predictedResult === 'Loss' ? `${p.team2} wins` : 'Draw';
          return (
            <div key={p.id} className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors">
              <span className="text-lg">{a?.flagEmoji}</span>
              <span className="text-white text-xs font-medium flex-1 truncate">{p.team1}</span>
              <div className="text-center flex-shrink-0">
                <span className={`text-xs font-bold ${resultColor}`}>{resultLabel}</span>
                <span className="block text-[10px] text-white/30">{p.confidence}%</span>
              </div>
              <span className="text-white text-xs font-medium flex-1 truncate text-right">{p.team2}</span>
              <span className="text-lg">{b?.flagEmoji}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

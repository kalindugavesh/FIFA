import { Trophy, BarChart3, TrendingUp, TrendingDown, Minus, Lightbulb, RotateCcw } from 'lucide-react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip
} from 'recharts';
import type { Prediction } from '../types';
import { getTeam } from '../data/teams';
import { getTeamRadar } from '../utils/prediction';

interface Props {
  prediction: Prediction;
  onReset: () => void;
}

export function PredictionResult({ prediction, onReset }: Props) {
  const a = getTeam(prediction.team1);
  const b = getTeam(prediction.team2);
  if (!a || !b) return null;

  const radar1 = getTeamRadar(prediction.team1);
  const radar2 = getTeamRadar(prediction.team2);
  const radarData = radar1.map((d, i) => ({ stat: d.stat, [a.code]: d.value, [b.code]: radar2[i].value, fullMark: 100 }));

  const barData = [
    { name: `${a.code} Win`, value: prediction.probabilities.win, color: '#22c55e' },
    { name: 'Draw', value: prediction.probabilities.draw, color: '#eab308' },
    { name: `${b.code} Win`, value: prediction.probabilities.loss, color: '#ef4444' },
  ];

  const resultConfig = {
    Win:  { gradient: 'from-emerald-500 to-green-600', text: `${a.name} Wins!`, emoji: '🏆', icon: TrendingUp },
    Loss: { gradient: 'from-red-500 to-rose-600',      text: `${b.name} Wins!`, emoji: '🏆', icon: TrendingDown },
    Draw: { gradient: 'from-amber-500 to-yellow-600',   text: 'Draw',            emoji: '🤝', icon: Minus },
  }[prediction.predictedResult];

  const Icon = resultConfig.icon;

  return (
    <div className="space-y-5 animate-fadeUp">
      {/* Hero Result */}
      <div className={`relative bg-gradient-to-br ${resultConfig.gradient} rounded-3xl p-6 md:p-8 overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative text-center">
          <span className="text-5xl block mb-3">{resultConfig.emoji}</span>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-1">{resultConfig.text}</h3>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full mt-2">
            <Icon size={16} className="text-white/90" />
            <span className="text-white/90 text-sm font-semibold">{prediction.confidence}% confidence</span>
          </div>
        </div>
        <div className="relative flex justify-between items-end mt-6 px-4">
          <div className="text-center">
            <span className="text-4xl block">{a.flagEmoji}</span>
            <span className="text-white font-bold text-sm mt-1 block">{a.name}</span>
            <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-black ${prediction.predictedResult === 'Win' ? 'bg-white text-emerald-700' : 'bg-white/20 text-white'}`}>
              {prediction.predictedResult === 'Win' ? 'WINNER' : prediction.predictedResult === 'Draw' ? 'DRAW' : ''}
            </span>
          </div>
          <span className="text-white/40 text-4xl font-black pb-4">VS</span>
          <div className="text-center">
            <span className="text-4xl block">{b.flagEmoji}</span>
            <span className="text-white font-bold text-sm mt-1 block">{b.name}</span>
            <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-black ${prediction.predictedResult === 'Loss' ? 'bg-white text-red-700' : 'bg-white/20 text-white'}`}>
              {prediction.predictedResult === 'Loss' ? 'WINNER' : prediction.predictedResult === 'Draw' ? 'DRAW' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Probability Chart */}
      <div className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-5">
        <h4 className="flex items-center gap-2 text-white font-bold mb-4"><BarChart3 size={18} className="text-amber-400" />Outcome Probabilities</h4>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={barData} layout="vertical" margin={{ left: 10, right: 20 }}>
            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#ffffff60', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#ffffffcc', fontSize: 12 }} width={80} axisLine={false} tickLine={false} />
            <Tooltip formatter={(val) => `${val}%`} contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff' }} />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={28}>
              {barData.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart */}
      <div className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-5">
        <h4 className="flex items-center gap-2 text-white font-bold mb-4"><Trophy size={18} className="text-amber-400" />Team Radar</h4>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis dataKey="stat" tick={{ fill: '#ffffffaa', fontSize: 11 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar name={a.code} dataKey={a.code} stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.25} strokeWidth={2} />
            <Radar name={b.code} dataKey={b.code} stroke="#fb923c" fill="#fb923c" fillOpacity={0.25} strokeWidth={2} />
            <Legend wrapperStyle={{ color: '#fff', fontSize: 12 }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Key Factors */}
      <div className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-5">
        <h4 className="flex items-center gap-2 text-white font-bold mb-4"><Lightbulb size={18} className="text-amber-400" />Key Factors</h4>
        <div className="space-y-2.5">
          {prediction.factors.map(f => (
            <div key={f.label} className="flex items-center gap-3 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full ${f.advantage === 'team1' ? 'bg-sky-400' : f.advantage === 'team2' ? 'bg-orange-400' : 'bg-white/30'}`} />
              <span className="text-white/60 w-32 flex-shrink-0">{f.label}</span>
              <span className={`font-mono font-bold ${f.advantage === 'team1' ? 'text-sky-400' : 'text-white/60'}`}>{f.team1Value}</span>
              <div className="flex-1 h-1 bg-white/10 rounded-full mx-1">
                <div className={`h-full rounded-full ${f.advantage === 'team1' ? 'bg-sky-500' : f.advantage === 'team2' ? 'bg-orange-500' : 'bg-white/20'}`} style={{ width: `${f.weight}%` }} />
              </div>
              <span className={`font-mono font-bold ${f.advantage === 'team2' ? 'text-orange-400' : 'text-white/60'}`}>{f.team2Value}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white/70 hover:text-white hover:bg-white/[0.1] transition-all text-sm"
      >
        <RotateCcw size={16} /> New Prediction
      </button>
    </div>
  );
}

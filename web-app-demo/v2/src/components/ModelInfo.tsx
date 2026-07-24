import { Brain, BarChart3, Database, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import type { ModelMetrics } from '../types';

const models: ModelMetrics[] = [
  { name: 'Random Forest', auc: 0.783, accuracy: 0.72, precision: 0.68, recall: 0.71, f1Score: 0.69, color: '#22c55e' },
  { name: 'Logistic Regression', auc: 0.7245, accuracy: 0.65, precision: 0.62, recall: 0.64, f1Score: 0.63, color: '#3b82f6' },
];

const features = [
  { name: 'FIFA Ranking', weight: 25, icon: '🏅' },
  { name: 'Team Form', weight: 20, icon: '📈' },
  { name: 'Star Players', weight: 15, icon: '⭐' },
  { name: 'Head-to-Head', weight: 15, icon: '⚔️' },
  { name: 'GK Quality', weight: 10, icon: '🧤' },
  { name: 'WC Titles', weight: 10, icon: '🏆' },
  { name: 'Home Adv.', weight: 5, icon: '🏟️' },
];

export function ModelInfo() {
  const metricsData = [
    { metric: 'AUC', RF: 78.3, LR: 72.5 },
    { metric: 'Accuracy', RF: 72, LR: 65 },
    { metric: 'Precision', RF: 68, LR: 62 },
    { metric: 'Recall', RF: 71, LR: 64 },
    { metric: 'F1', RF: 69, LR: 63 },
  ];

  return (
    <div className="space-y-6">
      {/* Model Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {models.map((m, i) => (
          <div key={m.name} className={`bg-white/[0.04] border rounded-2xl p-5 ${i === 0 ? 'border-emerald-500/30' : 'border-white/[0.08]'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-emerald-500/20' : 'bg-blue-500/20'}`}>
                <Brain size={20} className={i === 0 ? 'text-emerald-400' : 'text-blue-400'} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold">{m.name}</h3>
                {i === 0 && <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Active Model</span>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(['auc', 'accuracy', 'precision', 'recall', 'f1Score'] as const).map(k => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-white/50 capitalize">{k === 'f1Score' ? 'F1 Score' : k}</span>
                  <span className="text-white font-mono font-bold">{(m[k] * 100).toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Chart */}
      <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
        <h4 className="flex items-center gap-2 text-white font-bold mb-4"><BarChart3 size={18} className="text-amber-400" />Model Comparison (%)</h4>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={metricsData} margin={{ left: -10 }}>
            <XAxis dataKey="metric" tick={{ fill: '#ffffff99', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[50, 85]} tick={{ fill: '#ffffff60', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff' }} />
            <Bar dataKey="RF" name="Random Forest" fill="#22c55e" radius={[6, 6, 0, 0]} barSize={20} />
            <Bar dataKey="LR" name="Logistic Reg." fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Feature Importance */}
      <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
        <h4 className="flex items-center gap-2 text-white font-bold mb-4"><Award size={18} className="text-amber-400" />Feature Importance</h4>
        <div className="space-y-3">
          {features.map(f => (
            <div key={f.name} className="flex items-center gap-3">
              <span className="text-lg w-7 text-center">{f.icon}</span>
              <span className="text-white/80 text-sm w-28 flex-shrink-0">{f.name}</span>
              <div className="flex-1 h-3 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-700" style={{ width: `${f.weight * 4}%` }} />
              </div>
              <span className="text-amber-400 text-sm font-bold w-10 text-right">{f.weight}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dataset Info */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-5 border border-purple-500/20">
        <div className="flex items-start gap-3">
          <Database size={20} className="text-purple-400 mt-0.5" />
          <div>
            <h4 className="text-white font-bold mb-1">Training Dataset</h4>
            <p className="text-white/60 text-sm">383 FIFA World Cup matches from 2002–2022. Feature engineering includes recent form, head-to-head records, FIFA rankings, star player counts, goalkeeper quality, and positional metrics.</p>
            <p className="text-white/40 text-xs mt-2">Hyperparameter tuning via GridSearchCV with stratified 5-fold cross-validation to handle class imbalance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

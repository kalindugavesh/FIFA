import { useState } from 'react';
import type { TabId } from './types';
import { teams } from './data/teams';
import { usePrediction } from './hooks/usePrediction';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PredictionForm } from './components/PredictionForm';
import { PredictionResult } from './components/PredictionResult';
import { PredictionHistory } from './components/PredictionHistory';
import { MatchHistory } from './components/MatchHistory';
import { Rankings } from './components/Rankings';
import { ModelInfo } from './components/ModelInfo';

export default function App() {
  const [tab, setTab] = useState<TabId>('predict');
  const { prediction, isLoading, error, history, predict, clearHistory, clearPrediction } = usePrediction();

  return (
    <div className="min-h-screen bg-[#0a0f1a] relative overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-60 w-[600px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-sky-600/[0.05] rounded-full blur-[120px]" />
        {/* Pitch lines overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="12" stroke="white" strokeWidth="0.4" fill="none" />
          <rect x="0" y="30" width="8" height="40" stroke="white" strokeWidth="0.4" fill="none" />
          <rect x="92" y="30" width="8" height="40" stroke="white" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Header activeTab={tab} onTabChange={setTab} />

        {/* Error bar */}
        {error && (
          <div className="max-w-2xl mx-auto mb-6 flex items-center gap-2 px-5 py-3 bg-red-500/15 border border-red-500/25 rounded-xl text-red-300 text-sm animate-fadeUp">
            <span>⚠️</span> {error}
          </div>
        )}

        {/* Content */}
        <main className="animate-fadeUp">
          {tab === 'predict' && (
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Left: Form + History */}
              <div className="space-y-6">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-5 md:p-6">
                  <PredictionForm teams={teams} onPredict={predict} isLoading={isLoading} />
                </div>
                <PredictionHistory history={history} onClear={clearHistory} />
              </div>

              {/* Right: Result */}
              <div className="lg:sticky lg:top-6">
                {prediction ? (
                  <PredictionResult prediction={prediction} onReset={clearPrediction} />
                ) : (
                  <div className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-3xl flex items-center justify-center border border-white/[0.08]">
                      <span className="text-4xl">⚽</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Ready to Predict</h3>
                    <p className="text-white/40 text-sm max-w-xs mx-auto">
                      Select two national teams and our Random Forest model will analyze 6 key factors to predict the match outcome.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {['Ranking', 'Form', 'Stars', 'Head-to-Head', 'Goalkeeper', 'Titles'].map(f => (
                        <span key={f} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/30 text-xs">{f}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === 'rankings' && (
            <div className="max-w-6xl mx-auto">
              <Rankings />
            </div>
          )}

          {tab === 'history' && (
            <div className="max-w-4xl mx-auto">
              <MatchHistory />
            </div>
          )}

          {tab === 'model' && (
            <div className="max-w-4xl mx-auto">
              <ModelInfo />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

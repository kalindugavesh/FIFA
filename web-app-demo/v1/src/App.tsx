import { useState } from 'react';
import { MatchHistory } from './components/MatchHistory';
import { ModelInfo } from './components/ModelInfo';
import { PredictionForm } from './components/PredictionForm';
import { teams } from './data/teams';

export default function App() {
  const [prediction, setPrediction] = useState<{
    team1: string;
    team2: string;
    probabilities: { win: number; draw: number; loss: number };
    predictedResult: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.94-1.21c.14-.58.21-1.17.21-1.79 0-4.08-3.05-7.44-7-7.93v-1c0-1.1.9-2 2-2h1c3.95.49 7 3.85 7 7.93 0 .62-.08 1.21-.21 1.79L15 15v-1z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">FIFA World Cup Predictor</h1>
          </div>
          <p className="text-center text-green-200 mt-2">Pick two teams and we’ll predict the result</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <PredictionForm onPredict={setPrediction} teams={teams} prediction={prediction} />
            <ModelInfo />
          </div>
          <div className="space-y-6">
            <MatchHistory />
          </div>
        </div>
      </main>

      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-green-300">
            Powered by Machine Learning • Based on 383 matches from 2002-2022 World Cup tournaments
          </p>
        </div>
      </footer>
    </div>
  );
}
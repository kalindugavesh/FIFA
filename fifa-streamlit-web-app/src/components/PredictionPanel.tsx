import { useState } from 'react';
import type { Team } from '../data/teams';
import { headToHead } from '../data/teams';
import { PredictionResult } from './PredictionResult';

interface PredictionPanelProps {
  onPredict: (p: {
    team1: string;
    team2: string;
    probabilities: { win: number; draw: number; loss: number };
    predictedResult: string;
  }) => void;
  teams: Team[];
  prediction: {
    team1: string;
    team2: string;
    probabilities: { win: number; draw: number; loss: number };
    predictedResult: string;
  } | null;
}

export function PredictionPanel({ onPredict, teams, prediction }: PredictionPanelProps) {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [loading, setLoading] = useState(false);

  const teamDefaults = (name: string) => {
    const t = teams.find((x) => x.name === name);
    if (!t) return 3;
    return Math.max(0.5, Math.min(5, Number((5 - t.rank / 15 + t.starPlayers * 0.3).toFixed(1))));
  };

  const predict = () => {
    if (!team1 || !team2 || team1 === team2) return;
    setLoading(true);

    const t1 = teams.find((x) => x.name === team1);
    const t2 = teams.find((x) => x.name === team2);
    if (!t1 || !t2) return;

    const form1 = teamDefaults(team1);
    const form2 = teamDefaults(team2);

    const rankDiff = (t2.rank - t1.rank) / 100;
    const formDiff = (form1 - form2) / 5;
    const starDiff = (t1.starPlayers - t2.starPlayers) / 10;
    const gkDiff = (t2.goalkeeperRank - t1.goalkeeperRank) / 50;
    const h2hKey = `${team1}_${team2}`;
    const h2h = headToHead[h2hKey] ?? 0.5;

    let winScore = 0.35 + formDiff + starDiff - rankDiff - gkDiff + (h2h - 0.5) * 0.1;
    let drawScore = 0.25 - Math.abs(formDiff) * 0.1 - Math.abs(rankDiff) * 0.1;
    let lossScore = 0.4 - formDiff - starDiff + rankDiff + gkDiff + (0.5 - h2h) * 0.1;

    const total = Math.abs(winScore) + Math.abs(drawScore) + Math.abs(lossScore);
    const winProb = Math.max(0.1, Math.min(0.8, winScore / total));
    const drawProb = Math.max(0.1, Math.min(0.4, drawScore / total + 0.25));
    const lossProb = Math.max(0.1, Math.min(0.8, lossScore / total));

    const predictedResult =
      winProb > lossProb ? (winProb > drawProb ? 'Win' : 'Draw') : (lossProb > drawProb ? 'Loss' : 'Draw');

    setTimeout(() => {
      onPredict({
        team1,
        team2,
        probabilities: {
          win: Math.round(winProb * 100),
          draw: Math.round(drawProb * 100),
          loss: Math.round(lossProb * 100),
        },
        predictedResult,
      });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">Predict Match</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-green-200 mb-2">Team 1</label>
          <select
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          >
            <option value="" className="bg-gray-800">Select team</option>
            {teams.map((t) => (
              <option key={t.name} value={t.name} className="bg-gray-800">
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-green-200 mb-2">Team 2</label>
          <select
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          >
            <option value="" className="bg-gray-800">Select team</option>
            {teams.map((t) => (
              <option key={t.name} value={t.name} className="bg-gray-800">
                {t.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {team1 && team2 && team1 !== team2 ? (
        <div className="mt-3 text-sm text-green-200">
          Form: <span className="text-yellow-300">{team1}: {teamDefaults(team1)}</span> |{' '}
          <span className="text-yellow-300">{team2}: {teamDefaults(team2)}</span>
        </div>
      ) : null}

      <button
        type="button"
        onClick={predict}
        disabled={!team1 || !team2 || loading || team1 === team2}
        className="mt-5 w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg disabled:opacity-50"
      >
        {loading ? 'Predicting...' : 'Predict'}
      </button>

      {prediction && prediction.team1 === team1 && prediction.team2 === team2 ? (
        <div className="mt-5">
          <PredictionResult
            team1={prediction.team1}
            team2={prediction.team2}
            probabilities={prediction.probabilities}
            predictedResult={prediction.predictedResult}
          />
        </div>
      ) : null}
    </div>
  );
}
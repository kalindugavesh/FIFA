import { useState } from 'react';
import type { Team } from '../data/teams';
import { headToHead } from '../data/teams';
import { PredictionResult } from './PredictionResult';

type Prediction = {
  team1: string;
  team2: string;
  probabilities: { win: number; draw: number; loss: number };
  predictedResult: string;
};

interface PredictionFormProps {
  teams: Team[];
  prediction: Prediction | null;
  onPredict: (input: { team1: string; team2: string }) => void;
}

export function PredictionForm({ teams, prediction, onPredict }: PredictionFormProps) {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [loading, setLoading] = useState(false);

  const teamDefaults = (name: string) => {
    const team = teams.find((t) => t.name === name);
    if (!team) return 3;
    return Math.max(0.5, Math.min(5, Number((5 - team.rank / 15 + team.starPlayers * 0.3).toFixed(1))));
  };

  const headToHeadFor = (team1: string, team2: string) =>
    headToHead[`${team1}_${team2}`] ?? 0.5;

  const predict = () => {
    if (!team1 || !team2 || team1 === team2) return;
    setLoading(true);

    const a = teams.find((team) => team.name === team1);
    const b = teams.find((team) => team.name === team2);
    if (!a || !b) return;

    const form1 = teamDefaults(team1);
    const form2 = teamDefaults(team2);
    const rankDiff = (b.rank - a.rank) / 100;
    const formDiff = (form1 - form2) / 5;
    const starDiff = (a.starPlayers - b.starPlayers) / 10;
    const gkDiff = (b.goalkeeperRank - a.goalkeeperRank) / 50;
    const h2h = headToHeadFor(team1, team2);

    const winScore = 0.35 + formDiff + starDiff - rankDiff - gkDiff + (h2h - 0.5) * 0.1;
    const drawScore = 0.25 - Math.abs(formDiff) * 0.1 - Math.abs(rankDiff) * 0.1;
    const lossScore = 0.4 - formDiff - starDiff + rankDiff + gkDiff + (0.5 - h2h) * 0.1;

    const total = Math.abs(winScore) + Math.abs(drawScore) + Math.abs(lossScore);
    const winProb = Math.max(0.1, Math.min(0.8, winScore / total));
    const drawProb = Math.max(0.1, Math.min(0.4, drawScore / total + 0.25));
    const lossProb = Math.max(0.1, Math.min(0.8, lossScore / total));

    const predictedResult =
      winProb > lossProb ? (winProb > drawProb ? 'Win' : 'Draw') : (lossProb > drawProb ? 'Loss' : 'Draw');

    const current: Prediction = {
      team1,
      team2,
      probabilities: {
        win: Math.round(winProb * 100),
        draw: Math.round(drawProb * 100),
        loss: Math.round(lossProb * 100),
      },
      predictedResult,
    };

    setTimeout(() => {
      onPredict(current);
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
            onChange={(event) => {
              setTeam1(event.target.value);
              setTeam2('');
            }}
            className="w-full rounded-lg bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select team</option>
            {teams.map((team) => (
              <option className="bg-gray-800" key={team.name} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-green-200 mb-2">Team 2</label>
          <select
            value={team2}
            onChange={(event) => setTeam2(event.target.value)}
            className="w-full rounded-lg bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select team</option>
            {teams
              .filter((team) => team.name !== team1)
              .map((team) => (
                <option className="bg-gray-800" key={team.name} value={team.name}>
                  {team.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      {team1 ? (
        <p className="mt-3 text-sm text-green-200">
          Inferred recent form for <span className="text-yellow-300">{team1}</span>: {teamDefaults(team1)}
        </p>
      ) : null}
      {team2 ? (
        <p className="mt-1 text-sm text-green-200">
          Inferred recent form for <span className="text-yellow-300">{team2}</span>: {teamDefaults(team2)}
        </p>
      ) : null}
      {team1 && team2 ? (
        <p className="mt-1 text-xs text-green-300/80">Head-to-head history for {team1} vs {team2}: {headToHeadFor(team1, team2)}</p>
      ) : null}

      <button
        type="button"
        onClick={predict}
        disabled={!team1 || !team2 || team1 === team2 || loading}
        className="mt-5 w-full rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-bold text-white transition hover:from-yellow-500 hover:to-orange-600 disabled:opacity-50"
      >
        {loading ? 'Predicting...' : 'Predict'}
      </button>

      {prediction && team1 && team2 && team1 !== team2 ? (
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
import type { Prediction, PredictionInput, PredictionFactor, TeamRadarPoint } from '../types';
import { getTeam, getH2H } from '../data/teams';

export const getTeamForm = (rank: number, stars: number): number =>
  Number(Math.max(0.5, Math.min(5, (50 - rank) / 10 + stars * 0.3)).toFixed(1));

export function predictMatch(input: PredictionInput): Prediction {
  const a = getTeam(input.team1);
  const b = getTeam(input.team2);
  if (!a || !b) throw new Error('Team not found');

  const form1 = getTeamForm(a.rank, a.starPlayers);
  const form2 = getTeamForm(b.rank, b.starPlayers);

  const rankDiff = (b.rank - a.rank) / 100;
  const formDiff = (form1 - form2) / 5;
  const starDiff = (a.starPlayers - b.starPlayers) / 10;
  const gkDiff  = (b.goalkeeperRank - a.goalkeeperRank) / 50;
  const h2h     = getH2H(input.team1, input.team2);
  const h2hFact = (h2h - 0.5) * 0.15;

  let w = 0.33 + rankDiff * 0.25 + formDiff * 0.2 + starDiff * 0.15 - gkDiff * 0.1 + h2hFact + 0.05;
  let d = 0.34 - Math.abs(formDiff) * 0.1 - Math.abs(rankDiff) * 0.1;
  let l = 0.33 - rankDiff * 0.25 - formDiff * 0.2 - starDiff * 0.15 + gkDiff * 0.1 - h2hFact - 0.05;

  const tot = Math.abs(w) + Math.abs(d) + Math.abs(l);
  w = Math.max(0.05, Math.min(0.85, w / tot));
  d = Math.max(0.10, Math.min(0.45, d / tot));
  l = Math.max(0.05, Math.min(0.85, l / tot));
  const s = w + d + l;
  w /= s; d /= s; l /= s;

  const predictedResult = w > l && w > d ? 'Win' as const : l > w && l > d ? 'Loss' as const : 'Draw' as const;

  const factors: PredictionFactor[] = [
    { label: 'FIFA Ranking', team1Value: `#${a.rank}`, team2Value: `#${b.rank}`, advantage: a.rank < b.rank ? 'team1' : b.rank < a.rank ? 'team2' : 'neutral', weight: 25 },
    { label: 'Form Rating', team1Value: form1, team2Value: form2, advantage: form1 > form2 ? 'team1' : form2 > form1 ? 'team2' : 'neutral', weight: 20 },
    { label: 'Star Players', team1Value: a.starPlayers, team2Value: b.starPlayers, advantage: a.starPlayers > b.starPlayers ? 'team1' : b.starPlayers > a.starPlayers ? 'team2' : 'neutral', weight: 15 },
    { label: 'Head-to-Head', team1Value: `${Math.round(h2h * 100)}%`, team2Value: `${Math.round((1 - h2h) * 100)}%`, advantage: h2h > 0.55 ? 'team1' : h2h < 0.45 ? 'team2' : 'neutral', weight: 15 },
    { label: 'GK Quality', team1Value: `#${a.goalkeeperRank}`, team2Value: `#${b.goalkeeperRank}`, advantage: a.goalkeeperRank < b.goalkeeperRank ? 'team1' : b.goalkeeperRank < a.goalkeeperRank ? 'team2' : 'neutral', weight: 10 },
    { label: 'World Cup Titles', team1Value: a.worldCupTitles, team2Value: b.worldCupTitles, advantage: a.worldCupTitles > b.worldCupTitles ? 'team1' : b.worldCupTitles > a.worldCupTitles ? 'team2' : 'neutral', weight: 10 },
  ];

  return {
    id: `p-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    team1: input.team1,
    team2: input.team2,
    probabilities: { win: Math.round(w * 100), draw: Math.round(d * 100), loss: Math.round(l * 100) },
    predictedResult,
    confidence: Math.round(Math.max(w, d, l) * 100),
    factors,
    timestamp: Date.now(),
  };
}

export function getTeamRadar(teamName: string): TeamRadarPoint[] {
  const t = getTeam(teamName);
  if (!t) return [];
  return [
    { stat: 'Ranking', value: Math.max(0, 100 - t.rank * 2), fullMark: 100 },
    { stat: 'Stars', value: (t.starPlayers / 7) * 100, fullMark: 100 },
    { stat: 'Top 100', value: (t.top100 / 7) * 100, fullMark: 100 },
    { stat: 'Goalkeeper', value: Math.max(0, 100 - t.goalkeeperRank * 3), fullMark: 100 },
    { stat: 'Titles', value: Math.min(100, t.worldCupTitles * 20), fullMark: 100 },
    { stat: 'Form', value: (getTeamForm(t.rank, t.starPlayers) / 5) * 100, fullMark: 100 },
  ];
}

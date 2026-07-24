export interface Team {
  name: string;
  code: string;
  rank: number;
  starPlayers: number;
  top100: number;
  goalkeeperRank: number;
  confederation: 'UEFA' | 'CONMEBOL' | 'CONCACAF' | 'CAF' | 'AFC' | 'OFC';
  flagEmoji: string;
  worldCupTitles: number;
}

export interface Match {
  id: string;
  tournament: string;
  stage: string;
  team1: string;
  team2: string;
  date: string;
  score1?: number;
  score2?: number;
  result: MatchResult;
}

export type MatchResult = 'Win' | 'Draw' | 'Loss';

export interface Prediction {
  id: string;
  team1: string;
  team2: string;
  probabilities: { win: number; draw: number; loss: number };
  predictedResult: MatchResult;
  confidence: number;
  factors: PredictionFactor[];
  timestamp: number;
}

export interface PredictionFactor {
  label: string;
  team1Value: number | string;
  team2Value: number | string;
  advantage: 'team1' | 'team2' | 'neutral';
  weight: number;
}

export interface PredictionInput {
  team1: string;
  team2: string;
}

export interface ModelMetrics {
  name: string;
  auc: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  color: string;
}

export interface TeamRadarPoint {
  stat: string;
  value: number;
  fullMark: number;
}

export type TabId = 'predict' | 'rankings' | 'history' | 'model';

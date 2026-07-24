import type { Team, Match } from '../types';

export const teams: Team[] = [
  { name: 'Argentina', code: 'ARG', rank: 1, starPlayers: 6, top100: 6, goalkeeperRank: 7, confederation: 'CONMEBOL', flagEmoji: '🇦🇷', worldCupTitles: 3 },
  { name: 'France', code: 'FRA', rank: 2, starPlayers: 6, top100: 6, goalkeeperRank: 3, confederation: 'UEFA', flagEmoji: '🇫🇷', worldCupTitles: 2 },
  { name: 'Brazil', code: 'BRA', rank: 3, starPlayers: 7, top100: 7, goalkeeperRank: 5, confederation: 'CONMEBOL', flagEmoji: '🇧🇷', worldCupTitles: 5 },
  { name: 'England', code: 'ENG', rank: 4, starPlayers: 4, top100: 4, goalkeeperRank: 4, confederation: 'UEFA', flagEmoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', worldCupTitles: 1 },
  { name: 'Belgium', code: 'BEL', rank: 5, starPlayers: 3, top100: 3, goalkeeperRank: 13, confederation: 'UEFA', flagEmoji: '🇧🇪', worldCupTitles: 0 },
  { name: 'Croatia', code: 'CRO', rank: 6, starPlayers: 2, top100: 2, goalkeeperRank: 12, confederation: 'UEFA', flagEmoji: '🇭🇷', worldCupTitles: 0 },
  { name: 'Netherlands', code: 'NED', rank: 7, starPlayers: 5, top100: 5, goalkeeperRank: 10, confederation: 'UEFA', flagEmoji: '🇳🇱', worldCupTitles: 0 },
  { name: 'Portugal', code: 'POR', rank: 8, starPlayers: 4, top100: 4, goalkeeperRank: 8, confederation: 'UEFA', flagEmoji: '🇵🇹', worldCupTitles: 0 },
  { name: 'Italy', code: 'ITA', rank: 9, starPlayers: 5, top100: 5, goalkeeperRank: 2, confederation: 'UEFA', flagEmoji: '🇮🇹', worldCupTitles: 4 },
  { name: 'Spain', code: 'ESP', rank: 10, starPlayers: 4, top100: 4, goalkeeperRank: 6, confederation: 'UEFA', flagEmoji: '🇪🇸', worldCupTitles: 1 },
  { name: 'Germany', code: 'GER', rank: 11, starPlayers: 3, top100: 3, goalkeeperRank: 1, confederation: 'UEFA', flagEmoji: '🇩🇪', worldCupTitles: 4 },
  { name: 'Morocco', code: 'MAR', rank: 12, starPlayers: 3, top100: 3, goalkeeperRank: 16, confederation: 'CAF', flagEmoji: '🇲🇦', worldCupTitles: 0 },
  { name: 'United States', code: 'USA', rank: 13, starPlayers: 2, top100: 2, goalkeeperRank: 15, confederation: 'CONCACAF', flagEmoji: '🇺🇸', worldCupTitles: 0 },
  { name: 'Mexico', code: 'MEX', rank: 14, starPlayers: 2, top100: 2, goalkeeperRank: 18, confederation: 'CONCACAF', flagEmoji: '🇲🇽', worldCupTitles: 0 },
  { name: 'Switzerland', code: 'SUI', rank: 15, starPlayers: 2, top100: 2, goalkeeperRank: 9, confederation: 'UEFA', flagEmoji: '🇨🇭', worldCupTitles: 0 },
  { name: 'Denmark', code: 'DEN', rank: 16, starPlayers: 2, top100: 2, goalkeeperRank: 9, confederation: 'UEFA', flagEmoji: '🇩🇰', worldCupTitles: 0 },
  { name: 'Senegal', code: 'SEN', rank: 17, starPlayers: 2, top100: 2, goalkeeperRank: 19, confederation: 'CAF', flagEmoji: '🇸🇳', worldCupTitles: 0 },
  { name: 'Japan', code: 'JPN', rank: 18, starPlayers: 1, top100: 1, goalkeeperRank: 21, confederation: 'AFC', flagEmoji: '🇯🇵', worldCupTitles: 0 },
  { name: 'Uruguay', code: 'URU', rank: 19, starPlayers: 2, top100: 2, goalkeeperRank: 14, confederation: 'CONMEBOL', flagEmoji: '🇺🇾', worldCupTitles: 2 },
  { name: 'Colombia', code: 'COL', rank: 20, starPlayers: 2, top100: 2, goalkeeperRank: 17, confederation: 'CONMEBOL', flagEmoji: '🇨🇴', worldCupTitles: 0 },
  { name: 'Serbia', code: 'SRB', rank: 21, starPlayers: 1, top100: 1, goalkeeperRank: 29, confederation: 'UEFA', flagEmoji: '🇷🇸', worldCupTitles: 0 },
  { name: 'Poland', code: 'POL', rank: 22, starPlayers: 1, top100: 1, goalkeeperRank: 26, confederation: 'UEFA', flagEmoji: '🇵🇱', worldCupTitles: 0 },
  { name: 'South Korea', code: 'KOR', rank: 23, starPlayers: 1, top100: 1, goalkeeperRank: 20, confederation: 'AFC', flagEmoji: '🇰🇷', worldCupTitles: 0 },
  { name: 'Australia', code: 'AUS', rank: 24, starPlayers: 1, top100: 1, goalkeeperRank: 17, confederation: 'AFC', flagEmoji: '🇦🇺', worldCupTitles: 0 },
  { name: 'Ecuador', code: 'ECU', rank: 25, starPlayers: 1, top100: 1, goalkeeperRank: 29, confederation: 'CONMEBOL', flagEmoji: '🇪🇨', worldCupTitles: 0 },
  { name: 'Iran', code: 'IRN', rank: 26, starPlayers: 0, top100: 0, goalkeeperRank: 25, confederation: 'AFC', flagEmoji: '🇮🇷', worldCupTitles: 0 },
  { name: 'Tunisia', code: 'TUN', rank: 27, starPlayers: 0, top100: 0, goalkeeperRank: 27, confederation: 'CAF', flagEmoji: '🇹🇳', worldCupTitles: 0 },
  { name: 'Ghana', code: 'GHA', rank: 28, starPlayers: 1, top100: 1, goalkeeperRank: 19, confederation: 'CAF', flagEmoji: '🇬🇭', worldCupTitles: 0 },
  { name: 'Cameroon', code: 'CMR', rank: 29, starPlayers: 2, top100: 2, goalkeeperRank: 17, confederation: 'CAF', flagEmoji: '🇨🇲', worldCupTitles: 0 },
  { name: 'Costa Rica', code: 'CRC', rank: 30, starPlayers: 1, top100: 1, goalkeeperRank: 25, confederation: 'CONCACAF', flagEmoji: '🇨🇷', worldCupTitles: 0 },
  { name: 'Saudi Arabia', code: 'KSA', rank: 31, starPlayers: 0, top100: 0, goalkeeperRank: 28, confederation: 'AFC', flagEmoji: '🇸🇦', worldCupTitles: 0 },
  { name: 'Sweden', code: 'SWE', rank: 32, starPlayers: 1, top100: 1, goalkeeperRank: 11, confederation: 'UEFA', flagEmoji: '🇸🇪', worldCupTitles: 0 },
  { name: 'Nigeria', code: 'NGA', rank: 33, starPlayers: 1, top100: 1, goalkeeperRank: 16, confederation: 'CAF', flagEmoji: '🇳🇬', worldCupTitles: 0 },
  { name: 'Turkey', code: 'TUR', rank: 34, starPlayers: 2, top100: 2, goalkeeperRank: 10, confederation: 'UEFA', flagEmoji: '🇹🇷', worldCupTitles: 0 },
  { name: 'Ivory Coast', code: 'CIV', rank: 35, starPlayers: 3, top100: 3, goalkeeperRank: 24, confederation: 'CAF', flagEmoji: '🇨🇮', worldCupTitles: 0 },
  { name: 'Russia', code: 'RUS', rank: 36, starPlayers: 0, top100: 0, goalkeeperRank: 23, confederation: 'UEFA', flagEmoji: '🇷🇺', worldCupTitles: 0 },
  { name: 'Paraguay', code: 'PAR', rank: 37, starPlayers: 0, top100: 0, goalkeeperRank: 24, confederation: 'CONMEBOL', flagEmoji: '🇵🇾', worldCupTitles: 0 },
  { name: 'South Africa', code: 'RSA', rank: 38, starPlayers: 0, top100: 0, goalkeeperRank: 30, confederation: 'CAF', flagEmoji: '🇿🇦', worldCupTitles: 0 },
  { name: 'Slovenia', code: 'SVN', rank: 39, starPlayers: 0, top100: 0, goalkeeperRank: 31, confederation: 'UEFA', flagEmoji: '🇸🇮', worldCupTitles: 0 },
  { name: 'China', code: 'CHN', rank: 40, starPlayers: 0, top100: 0, goalkeeperRank: 32, confederation: 'AFC', flagEmoji: '🇨🇳', worldCupTitles: 0 },
  { name: 'Ireland', code: 'IRL', rank: 41, starPlayers: 0, top100: 0, goalkeeperRank: 22, confederation: 'UEFA', flagEmoji: '🇮🇪', worldCupTitles: 0 },
];

export const matchHistory: Match[] = [
  // 2022 World Cup
  { id: '2022-final', tournament: '2022', stage: 'Final', team1: 'Argentina', team2: 'France', date: '2022-12-18', score1: 3, score2: 3, result: 'Draw' },
  { id: '2022-sf1', tournament: '2022', stage: 'Semi-Final', team1: 'Argentina', team2: 'Croatia', date: '2022-12-13', score1: 3, score2: 0, result: 'Win' },
  { id: '2022-sf2', tournament: '2022', stage: 'Semi-Final', team1: 'France', team2: 'Morocco', date: '2022-12-14', score1: 2, score2: 0, result: 'Win' },
  { id: '2022-qf1', tournament: '2022', stage: 'Quarter-Final', team1: 'Morocco', team2: 'Portugal', date: '2022-12-10', score1: 1, score2: 0, result: 'Win' },
  { id: '2022-qf2', tournament: '2022', stage: 'Quarter-Final', team1: 'England', team2: 'France', date: '2022-12-10', score1: 1, score2: 2, result: 'Loss' },
  { id: '2022-qf3', tournament: '2022', stage: 'Quarter-Final', team1: 'Netherlands', team2: 'Argentina', date: '2022-12-09', score1: 2, score2: 2, result: 'Draw' },
  { id: '2022-qf4', tournament: '2022', stage: 'Quarter-Final', team1: 'Croatia', team2: 'Brazil', date: '2022-12-09', score1: 1, score2: 1, result: 'Draw' },
  { id: '2022-r16-1', tournament: '2022', stage: 'Round of 16', team1: 'Japan', team2: 'Croatia', date: '2022-12-05', score1: 1, score2: 1, result: 'Draw' },
  { id: '2022-r16-2', tournament: '2022', stage: 'Round of 16', team1: 'Brazil', team2: 'South Korea', date: '2022-12-05', score1: 4, score2: 1, result: 'Win' },
  { id: '2022-gs1', tournament: '2022', stage: 'Group Stage', team1: 'Saudi Arabia', team2: 'Argentina', date: '2022-11-22', score1: 2, score2: 1, result: 'Win' },
  { id: '2022-gs2', tournament: '2022', stage: 'Group Stage', team1: 'Japan', team2: 'Germany', date: '2022-11-23', score1: 2, score2: 1, result: 'Win' },
  { id: '2022-gs3', tournament: '2022', stage: 'Group Stage', team1: 'Morocco', team2: 'Belgium', date: '2022-11-27', score1: 2, score2: 0, result: 'Win' },
  // 2018 World Cup
  { id: '2018-final', tournament: '2018', stage: 'Final', team1: 'France', team2: 'Croatia', date: '2018-07-15', score1: 4, score2: 2, result: 'Win' },
  { id: '2018-sf1', tournament: '2018', stage: 'Semi-Final', team1: 'France', team2: 'Belgium', date: '2018-07-10', score1: 1, score2: 0, result: 'Win' },
  { id: '2018-sf2', tournament: '2018', stage: 'Semi-Final', team1: 'Croatia', team2: 'England', date: '2018-07-11', score1: 2, score2: 1, result: 'Win' },
  { id: '2018-qf1', tournament: '2018', stage: 'Quarter-Final', team1: 'France', team2: 'Uruguay', date: '2018-07-06', score1: 2, score2: 0, result: 'Win' },
  { id: '2018-qf2', tournament: '2018', stage: 'Quarter-Final', team1: 'Belgium', team2: 'Brazil', date: '2018-07-06', score1: 2, score2: 1, result: 'Win' },
  { id: '2018-qf3', tournament: '2018', stage: 'Quarter-Final', team1: 'Russia', team2: 'Croatia', date: '2018-07-07', score1: 2, score2: 2, result: 'Draw' },
  { id: '2018-gs1', tournament: '2018', stage: 'Group Stage', team1: 'Germany', team2: 'South Korea', date: '2018-06-27', score1: 0, score2: 2, result: 'Loss' },
  // 2014 World Cup
  { id: '2014-final', tournament: '2014', stage: 'Final', team1: 'Germany', team2: 'Argentina', date: '2014-07-13', score1: 1, score2: 0, result: 'Win' },
  { id: '2014-sf1', tournament: '2014', stage: 'Semi-Final', team1: 'Germany', team2: 'Brazil', date: '2014-07-08', score1: 7, score2: 1, result: 'Win' },
  { id: '2014-sf2', tournament: '2014', stage: 'Semi-Final', team1: 'Argentina', team2: 'Netherlands', date: '2014-07-09', score1: 0, score2: 0, result: 'Draw' },
  { id: '2014-qf1', tournament: '2014', stage: 'Quarter-Final', team1: 'Germany', team2: 'France', date: '2014-07-04', score1: 1, score2: 0, result: 'Win' },
  { id: '2014-qf2', tournament: '2014', stage: 'Quarter-Final', team1: 'Brazil', team2: 'Colombia', date: '2014-07-04', score1: 2, score2: 1, result: 'Win' },
  // 2010 World Cup
  { id: '2010-final', tournament: '2010', stage: 'Final', team1: 'Spain', team2: 'Netherlands', date: '2010-07-11', score1: 1, score2: 0, result: 'Win' },
  { id: '2010-sf1', tournament: '2010', stage: 'Semi-Final', team1: 'Netherlands', team2: 'Uruguay', date: '2010-07-06', score1: 3, score2: 2, result: 'Win' },
  { id: '2010-sf2', tournament: '2010', stage: 'Semi-Final', team1: 'Germany', team2: 'Spain', date: '2010-07-07', score1: 0, score2: 1, result: 'Loss' },
  // 2006 World Cup
  { id: '2006-final', tournament: '2006', stage: 'Final', team1: 'Italy', team2: 'France', date: '2006-07-09', score1: 1, score2: 1, result: 'Draw' },
  { id: '2006-sf1', tournament: '2006', stage: 'Semi-Final', team1: 'Germany', team2: 'Italy', date: '2006-07-04', score1: 0, score2: 2, result: 'Loss' },
  { id: '2006-sf2', tournament: '2006', stage: 'Semi-Final', team1: 'France', team2: 'Portugal', date: '2006-07-05', score1: 1, score2: 0, result: 'Win' },
  { id: '2006-qf1', tournament: '2006', stage: 'Quarter-Final', team1: 'Germany', team2: 'Argentina', date: '2006-06-30', score1: 1, score2: 1, result: 'Draw' },
  { id: '2006-qf2', tournament: '2006', stage: 'Quarter-Final', team1: 'England', team2: 'Portugal', date: '2006-07-01', score1: 0, score2: 0, result: 'Draw' },
  // 2002 World Cup
  { id: '2002-final', tournament: '2002', stage: 'Final', team1: 'Brazil', team2: 'Germany', date: '2002-06-30', score1: 2, score2: 0, result: 'Win' },
  { id: '2002-sf1', tournament: '2002', stage: 'Semi-Final', team1: 'Germany', team2: 'South Korea', date: '2002-06-25', score1: 1, score2: 0, result: 'Win' },
  { id: '2002-sf2', tournament: '2002', stage: 'Semi-Final', team1: 'Brazil', team2: 'Turkey', date: '2002-06-26', score1: 1, score2: 0, result: 'Win' },
  { id: '2002-gs1', tournament: '2002', stage: 'Group Stage', team1: 'France', team2: 'Senegal', date: '2002-05-31', score1: 0, score2: 1, result: 'Loss' },
  { id: '2002-gs2', tournament: '2002', stage: 'Group Stage', team1: 'South Korea', team2: 'Italy', date: '2002-06-18', score1: 2, score2: 1, result: 'Win' },
];

export const headToHead: Record<string, number> = {
  'Argentina_France': 0.625, 'Argentina_Brazil': 0.45, 'Argentina_Croatia': 0.5,
  'Argentina_Netherlands': 0.5, 'Argentina_Germany': 0.35, 'Argentina_England': 0.429,
  'Argentina_Serbia': 0.75, 'Argentina_Ivory Coast': 1.0, 'Argentina_Sweden': 0.75,
  'Argentina_Nigeria': 0.833, 'France_Croatia': 0.667, 'France_Belgium': 0.5,
  'France_Morocco': 0.8, 'France_Portugal': 0.55, 'France_Italy': 0.45,
  'France_Senegal': 0.0, 'France_Uruguay': 0.375, 'France_Denmark': 0.5,
  'Brazil_Germany': 0.55, 'Brazil_Croatia': 0.667, 'Brazil_Turkey': 1.0,
  'Brazil_Colombia': 0.6, 'England_Germany': 0.4, 'England_Portugal': 0.45,
  'England_Croatia': 0.35, 'England_Paraguay': 1.0, 'England_Sweden': 0.526,
  'Spain_Netherlands': 0.55, 'Spain_Germany': 0.45, 'Spain_Slovenia': 1.0,
  'Spain_Paraguay': 0.75, 'Spain_South Korea': 0.667, 'Germany_Italy': 0.35,
  'Germany_Netherlands': 0.55, 'Germany_Costa Rica': 1.0, 'Germany_Poland': 0.867,
  'Germany_South Korea': 1.0, 'Germany_Saudi Arabia': 1.0, 'Germany_Paraguay': 1.0,
  'Germany_Ireland': 0.0, 'Portugal_Morocco': 0.5, 'Portugal_Iran': 1.0,
  'Portugal_Poland': 0.643, 'Netherlands_Uruguay': 0.6, 'Netherlands_Serbia': 0.0,
  'Netherlands_Ivory Coast': 1.0, 'Netherlands_Argentina': 0.688,
  'Morocco_Portugal': 0.5, 'Morocco_France': 0.2, 'Mexico_Iran': 1.0,
  'Mexico_Ecuador': 0.75, 'Mexico_Italy': 0.2, 'Italy_Ecuador': 1.0,
  'Italy_Croatia': 0.4, 'Italy_Ghana': 1.0, 'Russia_Croatia': 0.5,
  'Belgium_Brazil': 0.4,
};

export const getTeam = (name: string): Team | undefined =>
  teams.find(t => t.name === name);

export const getH2H = (t1: string, t2: string): number =>
  headToHead[`${t1}_${t2}`] ?? (1 - (headToHead[`${t2}_${t1}`] ?? 0.5));

export const getTeamMatches = (name: string): Match[] =>
  matchHistory.filter(m => m.team1 === name || m.team2 === name);

export const confederationColors: Record<string, string> = {
  UEFA: '#2563eb',
  CONMEBOL: '#16a34a',
  CONCACAF: '#dc2626',
  CAF: '#ca8a04',
  AFC: '#9333ea',
  OFC: '#0891b2',
};

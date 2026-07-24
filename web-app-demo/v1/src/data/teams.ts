// Team data extracted from the FIFA dataset
// Includes FIFA rankings, star players, and goalkeeper rankings

export interface Team {
  name: string;
  rank: number;
  starPlayers: number;
  top100: number;
  goalkeeperRank: number;
}

export interface Match {
  match: string;
  team1: string;
  team2: string;
  date: string;
  result: string;
}

export const teams: Team[] = [
  { name: 'France', rank: 1, starPlayers: 6, top100: 6, goalkeeperRank: 3 },
  { name: 'Brazil', rank: 2, starPlayers: 7, top100: 7, goalkeeperRank: 5 },
  { name: 'Argentina', rank: 3, starPlayers: 6, top100: 6, goalkeeperRank: 7 },
  { name: 'Netherlands', rank: 3, starPlayers: 5, top100: 5, goalkeeperRank: 10 },
  { name: 'Italy', rank: 6, starPlayers: 5, top100: 5, goalkeeperRank: 2 },
  { name: 'Spain', rank: 8, starPlayers: 4, top100: 4, goalkeeperRank: 6 },
  { name: 'Mexico', rank: 7, starPlayers: 2, top100: 2, goalkeeperRank: 18 },
  { name: 'Germany', rank: 11, starPlayers: 3, top100: 3, goalkeeperRank: 1 },
  { name: 'England', rank: 12, starPlayers: 4, top100: 4, goalkeeperRank: 4 },
  { name: 'Portugal', rank: 5, starPlayers: 3, top100: 3, goalkeeperRank: 8 },
  { name: 'United States', rank: 13, starPlayers: 2, top100: 2, goalkeeperRank: 15 },
  { name: 'Senegal', rank: 42, starPlayers: 2, top100: 2, goalkeeperRank: 19 },
  { name: 'Croatia', rank: 21, starPlayers: 1, top100: 1, goalkeeperRank: 12 },
  { name: 'Morocco', rank: 22, starPlayers: 3, top100: 3, goalkeeperRank: 16 },
  { name: 'Japan', rank: 32, starPlayers: 0, top100: 0, goalkeeperRank: 21 },
  { name: 'South Korea', rank: 40, starPlayers: 0, top100: 0, goalkeeperRank: 20 },
  { name: 'Poland', rank: 38, starPlayers: 0, top100: 0, goalkeeperRank: 26 },
  { name: 'Denmark', rank: 20, starPlayers: 2, top100: 2, goalkeeperRank: 9 },
  { name: 'Uruguay', rank: 24, starPlayers: 1, top100: 1, goalkeeperRank: 14 },
  { name: 'Paraguay', rank: 18, starPlayers: 0, top100: 0, goalkeeperRank: 24 },
  { name: 'Slovenia', rank: 25, starPlayers: 0, top100: 0, goalkeeperRank: 31 },
  { name: 'South Africa', rank: 37, starPlayers: 0, top100: 0, goalkeeperRank: 30 },
  { name: 'China', rank: 50, starPlayers: 0, top100: 0, goalkeeperRank: 32 },
  { name: 'Costa Rica', rank: 29, starPlayers: 2, top100: 2, goalkeeperRank: 25 },
  { name: 'Turkey', rank: 22, starPlayers: 2, top100: 2, goalkeeperRank: 10 },
  { name: 'Ireland', rank: 15, starPlayers: 0, top100: 0, goalkeeperRank: 22 },
  { name: 'Cameroon', rank: 17, starPlayers: 2, top100: 2, goalkeeperRank: 17 },
  { name: 'Saudi Arabia', rank: 34, starPlayers: 0, top100: 0, goalkeeperRank: 28 },
  { name: 'Nigeria', rank: 27, starPlayers: 1, top100: 1, goalkeeperRank: 16 },
  { name: 'Sweden', rank: 19, starPlayers: 1, top100: 1, goalkeeperRank: 11 },
  { name: 'Ecuador', rank: 36, starPlayers: 0, top100: 0, goalkeeperRank: 29 },
  { name: 'Belgium', rank: 23, starPlayers: 1, top100: 1, goalkeeperRank: 13 },
  { name: 'Russia', rank: 28, starPlayers: 0, top100: 0, goalkeeperRank: 23 },
  { name: 'Tunisia', rank: 31, starPlayers: 0, top100: 0, goalkeeperRank: 27 },
  { name: 'Serbia', rank: 44, starPlayers: 1, top100: 1, goalkeeperRank: 29 },
  { name: 'Ivory Coast', rank: 32, starPlayers: 3, top100: 3, goalkeeperRank: 24 },
  { name: 'Australia', rank: 42, starPlayers: 1, top100: 1, goalkeeperRank: 17 },
  { name: 'Iran', rank: 23, starPlayers: 0, top100: 0, goalkeeperRank: 25 },
  { name: 'Angola', rank: 57, starPlayers: 0, top100: 0, goalkeeperRank: 30 },
  { name: 'Ghana', rank: 48, starPlayers: 2, top100: 2, goalkeeperRank: 19 },
  { name: 'Trinidad', rank: 47, starPlayers: 0, top100: 0, goalkeeperRank: 32 },
];

// Match history data from 2002-2022 World Cup
export const matchHistory: Match[] = [
  { match: '2002FrancevsSenagal', team1: 'France', team2: 'Senegal', date: '5/31/2002', result: 'Loss' },
  { match: '2002UruguayvsDenmark', team1: 'Uruguay', team2: 'Denmark', date: '6/1/2002', result: 'Loss' },
  { match: '2002DenmarkvsSenegal', team1: 'Denmark', team2: 'Senegal', date: '6/6/2002', result: 'Draw' },
  { match: '2002FrancevsUruguay', team1: 'France', team2: 'Uruguay', date: '6/6/2002', result: 'Draw' },
  { match: '2002DenmarkvsFrance', team1: 'Denmark', team2: 'France', date: '6/11/2002', result: 'Win' },
  { match: '2002SenegalvsUruguay', team1: 'Senegal', team2: 'Uruguay', date: '6/11/2002', result: 'Draw' },
  { match: '2002BravsTur', team1: 'Brazil', team2: 'Turkey', date: '6/26/2002', result: 'Win' },
  { match: '2006GervsCoRi', team1: 'Germany', team2: 'Costa Rica', date: '6/9/2006', result: 'Win' },
  { match: '2006PolvsRcu', team1: 'Poland', team2: 'Ecuador', date: '6/9/2006', result: 'Loss' },
  { match: '2006GervsPol', team1: 'Germany', team2: 'Poland', date: '6/14/2006', result: 'Win' },
  { match: '2006EcuvsCoRi', team1: 'Ecuador', team2: 'Costa Rica', date: '6/15/2006', result: 'Win' },
  { match: '2006EcuvsGer', team1: 'Ecuador', team2: 'Germany', date: '6/20/2006', result: 'Loss' },
  { match: '2006EngvsPar', team1: 'England', team2: 'Paraguay', date: '6/10/2006', result: 'Win' },
  { match: '2006TruTivsSew', team1: 'Trinidad', team2: 'Sweden', date: '6/10/2006', result: 'Draw' },
  { match: '2006ArgvsLoco', team1: 'Argentina', team2: 'Ivory Coast', date: '6/10/2006', result: 'Win' },
  { match: '2006SeMonvsNet', team1: 'Serbia', team2: 'Netherlands', date: '6/11/2006', result: 'Loss' },
  { match: '2006ArgvsSeMon', team1: 'Argentina', team2: 'Serbia', date: '6/16/2006', result: 'Win' },
  { match: '2006NethvsIvCo', team1: 'Netherlands', team2: 'Ivory Coast', date: '6/16/2006', result: 'Win' },
  { match: '2006NethvsArg', team1: 'Netherlands', team2: 'Argentina', date: '6/21/2006', result: 'Draw' },
  { match: '2006IvoCovsSer', team1: 'Ivory Coast', team2: 'Serbia', date: '6/21/2006', result: 'Win' },
  { match: '2006MexvsIrn', team1: 'Mexico', team2: 'Iran', date: '6/11/2006', result: 'Win' },
  { match: '2006AngvsPor', team1: 'Angola', team2: 'Portugal', date: '6/11/2006', result: 'Loss' },
  { match: '2006PorvsIrn', team1: 'Portugal', team2: 'Iran', date: '6/17/2006', result: 'Win' },
  { match: '2006PorvsMex', team1: 'Portugal', team2: 'Mexico', date: '6/21/2006', result: 'Win' },
  { match: '2006UnvsCze', team1: 'United States', team2: 'Czech', date: '6/12/2006', result: 'Loss' },
  { match: '2006ItavsGha', team1: 'Italy', team2: 'Ghana', date: '6/12/2006', result: 'Win' },
  { match: '2006AusvsJap', team1: 'Australia', team2: 'Japan', date: '6/12/2006', result: 'Win' },
  { match: '2006BravsCro', team1: 'Brazil', team2: 'Croatia', date: '6/13/2006', result: 'Win' },
  { match: '2022MorvsPor', team1: 'Morocco', team2: 'Portugal', date: '12/10/2022', result: 'Win' },
  { match: '2022ArgvsCro', team1: 'Argentina', team2: 'Croatia', date: '12/13/2022', result: 'Win' },
  { match: '2022FravsMor', team1: 'France', team2: 'Morocco', date: '12/14/2022', result: 'Win' },
  { match: '2022_Final_ArgvsFra', team1: 'Argentina', team2: 'France', date: '12/18/2022', result: 'Draw' },
];

// Head-to-head records (simplified)
export const headToHead: Record<string, number> = {
  'France_Senegal': 0.0,
  'France_Uruguay': 0.375,
  'France_Denmark': 0.5,
  'Brazil_Turkey': 1.0,
  'Germany_Costa Rica': 1.0,
  'Germany_Poland': 0.866667,
  'Argentina_Nigeria': 0.833333,
  'Argentina_England': 0.428571,
  'Argentina_Sweden': 0.75,
  'Argentina_Ivory Coast': 1.0,
  'Argentina_Serbia': 0.75,
  'Netherlands_Serbia': 0.0,
  'Netherlands_Ivory Coast': 1.0,
  'Netherlands_Argentina': 0.6875,
  'Spain_Slovenia': 1.0,
  'Spain_Paraguay': 0.75,
  'Spain_South Korea': 0.666667,
  'Mexico_Ecuador': 0.75,
  'Mexico_Italy': 0.2,
  'Portugal_Poland': 0.642857,
  'Portugal_Iran': 1.0,
  'England_Sweden': 0.526316,
  'England_Brazil': 0.333333,
  'England_Paraguay': 1.0,
  'Italy_Ecuador': 1.0,
  'Italy_Croatia': 0.4,
  'Italy_Ghana': 1.0,
  'Germany_Ireland': 0.0,
  'Germany_Saudi Arabia': 1.0,
  'Germany_Paraguay': 1.0,
  'Germany_South Korea': 1.0,
  'Morocco_Portugal': 0.5,
  'Morocco_France': 0.2,
  'Argentina_Croatia': 0.5,
  'Argentina_France': 0.625,
};
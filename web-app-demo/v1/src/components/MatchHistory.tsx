import type { Match } from '../data/teams';

export function MatchHistory() {
  // Sample match history data
  const recentMatches: Match[] = [
    { match: '2022 Final', team1: 'Argentina', team2: 'France', date: '12/18/2022', result: 'Draw' },
    { match: '2022 Semi-Final', team1: 'France', team2: 'Morocco', date: '12/14/2022', result: 'Win' },
    { match: '2022 Semi-Final', team1: 'Argentina', team2: 'Croatia', date: '12/13/2022', result: 'Win' },
    { match: '2022 Quarter-Final', team1: 'Morocco', team2: 'Portugal', date: '12/10/2022', result: 'Win' },
    { match: '2018 Final', team1: 'France', team2: 'Croatia', date: '7/15/2018', result: 'Win' },
    { match: '2014 Final', team1: 'Germany', team2: 'Argentina', date: '7/13/2014', result: 'Win' },
    { match: '2010 Final', team1: 'Spain', team2: 'Netherlands', date: '7/11/2010', result: 'Win' },
    { match: '2006 Final', team1: 'Italy', team2: 'France', date: '7/9/2006', result: 'Win' },
    { match: '2002 Final', team1: 'Brazil', team2: 'Germany', date: '6/30/2002', result: 'Win' },
  ];

  const getResultBadge = (result: string) => {
    const colors = {
      Win: 'bg-green-500/20 text-green-300 border-green-500/30',
      Draw: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      Loss: 'bg-red-500/20 text-red-300 border-red-500/30'
    };
    return colors[result as keyof typeof colors] || 'bg-white/10';
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        Recent World Cup Finals
      </h2>
      
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {recentMatches.map((match) => (
          <div key={match.match} className="bg-white/5 rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-white font-medium text-sm">{match.match}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-blue-300 text-xs">{match.team1}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-red-300 text-xs">{match.team2}</span>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getResultBadge(match.result)}`}>
                  {match.result}
                </span>
                <p className="text-white/50 text-xs mt-1">{match.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
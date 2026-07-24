export function PredictionResult(props: {
  team1: string;
  team2: string;
  probabilities: { win: number; draw: number; loss: number };
  predictedResult: string;
}) {
  const { team1, team2, probabilities, predictedResult } = props;
  return (
    <div className="rounded-xl bg-white/10 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-bold">{team1}</div>
          <div className="text-yellow-300 text-xl">{predictedResult === 'Win' ? 'W' : predictedResult === 'Loss' ? 'L' : 'D'}</div>
        </div>
        <div>
          <div className="text-white font-bold">{team2}</div>
          <div className="text-yellow-300 text-xl">{predictedResult === 'Win' ? 'L' : predictedResult === 'Loss' ? 'W' : 'D'}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-green-200">
        Win: {probabilities.win}% | Draw: {probabilities.draw}% | Loss: {probabilities.loss}%
      </div>
    </div>
  );
}
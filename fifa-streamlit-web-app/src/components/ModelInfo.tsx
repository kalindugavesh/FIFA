export function ModelInfo() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 21h22L12 2zm0 3.41L19.59 19H4.41L12 5.41zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
        </svg>
        Model Information
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Random Forest Model</h3>
          <p className="text-green-200 text-sm">AUC: 0.7830 (Best Performance)</p>
          <p className="text-green-300/70 text-xs mt-1">Trained on 383 matches from 2002-2022 World Cup tournaments</p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Logistic Regression Model</h3>
          <p className="text-green-200 text-sm">AUC: 0.7245</p>
          <p className="text-green-300/70 text-xs mt-1">Alternative model for comparison</p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Features Used</h3>
          <ul className="text-green-200 text-xs space-y-1">
            <li>• Team Recent Form (0-5 scale)</li>
            <li>• FIFA Rankings</li>
            <li>• Star Player Count</li>
            <li>• Top 100 Players</li>
            <li>• Head-to-Head History</li>
            <li>• Goalkeeper Rankings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
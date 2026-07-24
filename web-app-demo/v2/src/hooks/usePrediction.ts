import { useState, useCallback } from 'react';
import type { Prediction, PredictionInput } from '../types';
import { predictMatch } from '../utils/prediction';

export function usePrediction() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<Prediction[]>([]);

  const predict = useCallback(async (input: PredictionInput) => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise(r => setTimeout(r, 900));
      if (!input.team1 || !input.team2) throw new Error('Select both teams');
      if (input.team1 === input.team2) throw new Error('Pick two different teams');
      const result = predictMatch(input);
      setPrediction(result);
      setHistory(prev => [result, ...prev].slice(0, 20));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Prediction failed');
      setPrediction(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearHistory = useCallback(() => { setHistory([]); setPrediction(null); }, []);
  const clearPrediction = useCallback(() => setPrediction(null), []);

  return { prediction, isLoading, error, history, predict, clearHistory, clearPrediction };
}

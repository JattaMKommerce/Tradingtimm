import { useState, useEffect } from 'react';
import marketDataService from '../services/marketDataService';
import { mockTickers } from '../data/mockMarketData';

export function useMarketData(symbol = 'NIFTY50', timeframe = '1D') {
  const [ticker, setTicker] = useState(() => mockTickers.find((t) => t.symbol === symbol) || mockTickers[0]);
  const [candles, setCandles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    async function loadData() {
      const quoteRes = await marketDataService.getQuote(symbol);
      const historyRes = await marketDataService.getHistory(symbol, timeframe);

      if (isMounted) {
        if (quoteRes.data) setTicker(quoteRes.data);
        if (historyRes.candles) setCandles(historyRes.candles);
        setLoading(false);
      }
    }

    loadData();

    // Subscribe to subtle live tick updates for interactive realism
    const unsubscribe = marketDataService.subscribeTickerTicks(symbol, (deltaPercent) => {
      if (!isMounted) return;
      setTicker((prev) => {
        if (!prev) return prev;
        const newPrice = prev.price * (1 + deltaPercent);
        const changeDiff = newPrice - (prev.price - prev.change);
        const changePct = (changeDiff / (prev.price - prev.change)) * 100;
        return {
          ...prev,
          price: parseFloat(newPrice.toFixed(prev.price < 10 ? 4 : 2)),
          change: parseFloat(changeDiff.toFixed(prev.price < 10 ? 4 : 2)),
          changePercent: parseFloat(changePct.toFixed(2)),
        };
      });
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [symbol, timeframe]);

  return { ticker, candles, loading };
}

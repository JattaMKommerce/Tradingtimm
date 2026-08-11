/**
 * Comprehensive Glossary Dataset for TradingTimm.ai
 * Follows the VISUAL -> SIMPLE EXPLANATION -> REAL-WORLD EXAMPLE -> TECHNICAL TERM order
 */

export const glossaryTerms = [
  {
    id: 'trading',
    term: 'Trading',
    category: 'Basics',
    simpleDefinition: 'Buying and selling assets (like stocks or currencies) with the goal of benefiting from price changes over time.',
    visualConcept: '📈 Buying low at ₹100 ➔ Price rises to ₹120 ➔ Selling high to earn ₹20 difference.',
    realWorldAnalogy: 'Like buying a rare comic book today for ₹500 and selling it to another collector next month for ₹700.',
    technicalExplanation: 'The exchange of financial instruments across spot or derivative markets to capture capital gains or hedge underlying exposures.'
  },
  {
    id: 'stocks',
    term: 'Stocks',
    category: 'Basics',
    simpleDefinition: 'Small pieces of ownership in a public company (like Tata Motors, Reliance, or Apple).',
    visualConcept: '🏢 Company total value split into millions of tiny certificates (shares).',
    realWorldAnalogy: 'If you and 3 friends buy a pizza together, owning 1 slice means owning a 25% share of that pizza.',
    technicalExplanation: 'Equity securities representing fractional ownership and residual claims on a company’s assets and earnings.'
  },
  {
    id: 'forex',
    term: 'Forex (Foreign Exchange)',
    category: 'Markets',
    simpleDefinition: 'The global market for exchanging national currencies against each other (e.g. US Dollars for Indian Rupees).',
    visualConcept: '💱 1 US Dollar ($1) = 83.90 Indian Rupees (₹83.90).',
    realWorldAnalogy: 'Exchanging your Indian Rupees for US Dollars at the airport bank counter before travelling abroad.',
    technicalExplanation: 'A global decentralized over-the-counter market for foreign exchange trading across sovereign fiat currencies.'
  },
  {
    id: 'crypto',
    term: 'Crypto (Cryptocurrency)',
    category: 'Markets',
    simpleDefinition: 'Digital assets secured by computer networks (blockchain) without requiring a central bank.',
    visualConcept: '🌐 Digital coins (like Bitcoin or Ethereum) transferred directly across global computer networks.',
    realWorldAnalogy: 'Digital arcade tokens that can be sent anywhere in the world instantly without waiting for a bank branch to open.',
    technicalExplanation: 'Decentralized digital currency protocols utilizing cryptographic verification and distributed ledger technology.'
  },
  {
    id: 'candlestick',
    term: 'Candlestick',
    category: 'Charts',
    simpleDefinition: 'A visual bar showing how high, low, opening, and closing prices moved during a specific timeframe.',
    visualConcept: '🕯️ Green Candle = Price went UP. Red Candle = Price went DOWN. Thin lines (wicks) show extreme highs/lows.',
    realWorldAnalogy: 'Like a weather report showing today’s lowest temperature, highest temperature, starting temp, and ending temp.',
    technicalExplanation: 'A graphical price bar depicting Open, High, Low, and Close (OHLC) values for a defined period.'
  },
  {
    id: 'volume',
    term: 'Volume',
    category: 'Charts',
    simpleDefinition: 'The total number of shares or currency units bought and sold during a period of time.',
    visualConcept: '📊 Tall vertical bars at the bottom of a chart = Lots of market activity.',
    realWorldAnalogy: 'How crowded a vegetable market is: high volume means thousands of buyers and sellers trading frantically.',
    technicalExplanation: 'The cumulative quantity of contracts or shares traded in a financial security during a given timeframe.'
  },
  {
    id: 'trend',
    term: 'Trend',
    category: 'Charts',
    simpleDefinition: 'The overall direction that a market price is moving over time (Upward, Downward, or Sideways).',
    visualConcept: '↗️ Uptrend: Higher highs & higher lows. ↘️ Downtrend: Lower highs & lower lows.',
    realWorldAnalogy: 'Walking up an escalator. Even if you take a small step back, the escalator carries you overall upward.',
    technicalExplanation: 'The directional momentum of asset prices over a specified temporal horizon, classified as bullish, bearish, or range-bound.'
  },
  {
    id: 'rsi',
    term: 'RSI (Relative Strength Index)',
    category: 'Indicators',
    simpleDefinition: 'A scale from 0 to 100 measuring how fast and strong price changes have been recently.',
    visualConcept: 'Gauge: Below 30 = Oversold (Bargain area). Above 70 = Overbought (Stretched high).',
    realWorldAnalogy: 'A car speedometer. Driving at 140 km/h (above 70) means the engine is pushed hard; cruising at 20 km/h (below 30) means it is slow.',
    technicalExplanation: 'A momentum oscillator that calculates the speed and magnitude of recent price changes to evaluate overvalued or undervalued conditions.'
  },
  {
    id: 'ema',
    term: 'EMA (Exponential Moving Average)',
    category: 'Indicators',
    simpleDefinition: 'A smooth line on a chart showing the average price, giving more weight to recent prices.',
    visualConcept: '〰️ A smooth line following price movements, reducing noise.',
    realWorldAnalogy: 'Your recent test scores in school: your last 3 test scores matter more than your score from 6 months ago.',
    technicalExplanation: 'A type of moving average that places a greater weight and significance on the most recent data points.'
  },
  {
    id: 'macd',
    term: 'MACD (Moving Average Convergence Divergence)',
    category: 'Indicators',
    simpleDefinition: 'An indicator that shows when momentum is shifting by comparing two moving averages.',
    visualConcept: '🔀 Two lines crossing: Fast line crossing above slow line indicates bullish momentum building.',
    realWorldAnalogy: 'A sprinter accelerating: when the sprinter steps faster, momentum picks up before total speed peaks.',
    technicalExplanation: 'A trend-following momentum indicator showing the relationship between two exponential moving averages of an asset’s price.'
  },
  {
    id: 'volatility',
    term: 'Volatility',
    category: 'Risk',
    simpleDefinition: 'How wildly and quickly a price moves up and down.',
    visualConcept: '🌊 Calm Market: Smooth gentle waves. High Volatility: Huge stormy ocean waves.',
    realWorldAnalogy: 'A roller coaster vs. a calm train ride. High volatility is full of steep sudden drops and quick ascents.',
    technicalExplanation: 'The statistical measure of the dispersion of returns for a given security or market index over time.'
  },
  {
    id: 'drawdown',
    term: 'Drawdown',
    category: 'Risk',
    simpleDefinition: 'How much money a strategy lost from its highest peak before recovering.',
    visualConcept: '📉 Peak ₹100,000 ➔ Drops to ₹85,000 ➔ Max Drawdown is 15%.',
    realWorldAnalogy: 'Hiking up a mountain: climbing up 1,000 meters, then stepping down 150 meters into a valley before climbing higher.',
    technicalExplanation: 'The peak-to-trough decline during a specific period for an investment record, quoted as a percentage from peak.'
  },
  {
    id: 'stop-loss',
    term: 'Stop Loss',
    category: 'Risk',
    simpleDefinition: 'An automatic instruction to close a trade if the price falls past a predetermined safety level to prevent big losses.',
    visualConcept: '🛡️ Safety barrier: "If price drops 2%, exit trade immediately!"',
    realWorldAnalogy: 'An emergency brake on a train. If the train moves dangerously off track, the brake halts it instantly.',
    technicalExplanation: 'A conditional risk control order placed with a broker or system to limit an investor’s loss on a position.'
  },
  {
    id: 'take-profit',
    term: 'Take Profit',
    category: 'Risk',
    simpleDefinition: 'An automatic instruction to sell and lock in gain once a target profit price is reached.',
    visualConcept: '🎯 Target banner: "If price rises 5%, exit and capture profits!"',
    realWorldAnalogy: 'Ringing the bell when you hit your target score in a game to claim your trophy.',
    technicalExplanation: 'A limit order placed to automatically close a open position once a target price profit threshold is hit.'
  },
  {
    id: 'position-size',
    term: 'Position Size',
    category: 'Risk',
    simpleDefinition: 'The total amount of money you allocate to a single trade out of your overall capital.',
    visualConcept: '💰 Total capital ₹1,00,000 ➔ Trade position size = ₹10,000 (10%).',
    realWorldAnalogy: 'Packing for a trip: deciding how many warm jackets to pack relative to your suitcase size.',
    technicalExplanation: 'The dollar or percentage allocation assigned to a single market position relative to overall portfolio capital.'
  },
  {
    id: 'portfolio',
    term: 'Portfolio',
    category: 'Basics',
    simpleDefinition: 'A collection of all your financial assets, trades, and investments grouped together.',
    visualConcept: '💼 Basket holding stocks, forex pairs, crypto assets, and cash reserves.',
    realWorldAnalogy: 'A sports team consisting of strikers, defenders, and a goalkeeper working together.',
    technicalExplanation: 'A grouping of financial assets such as stocks, bonds, commodities, currencies, and cash equivalents.'
  },
  {
    id: 'backtesting',
    term: 'Backtesting',
    category: 'Strategy',
    simpleDefinition: 'Testing a strategy against old historical market data to see how it would have performed in the past.',
    visualConcept: '⏪ Replaying past match footage to test how your strategy would have worked.',
    realWorldAnalogy: 'A cricket team watching recordings of previous matches to test new fielding strategies before tomorrow’s game.',
    technicalExplanation: 'Evaluating the viability of a trading strategy by discovering how it would play out using historical data.'
  },
  {
    id: 'algorithm',
    term: 'Algorithm',
    category: 'Technology',
    simpleDefinition: 'A step-by-step set of exact rules or instructions for a computer to follow.',
    visualConcept: '📋 1. Check RSI -> 2. If below 30 -> 3. Send Buy Alert -> 4. Else wait.',
    realWorldAnalogy: 'A step-by-step baking recipe: mix flour, add eggs, bake for 20 minutes at 180°C.',
    technicalExplanation: 'A finite sequence of rigorous mathematical or logical instructions used to perform computations and automated tasks.'
  },
  {
    id: 'automation',
    term: 'Automation',
    category: 'Technology',
    simpleDefinition: 'Using software code to monitor market conditions and apply your rules continuously without human emotion.',
    visualConcept: '🤖 Software monitoring market charts 24/7, checking strategy conditions automatically.',
    realWorldAnalogy: 'Setting a smart thermostat in your house to turn on AC automatically whenever room temperature rises above 24°C.',
    technicalExplanation: 'Execution of pre-programmed rules across data pipelines without manual intervention or emotional bias.'
  },
  {
    id: 'leverage',
    term: 'Leverage',
    category: 'Advanced Risk',
    simpleDefinition: 'Borrowing capital from a broker to trade larger position sizes with less initial money.',
    visualConcept: '⚖️ Small capital controls large trade. Warning: Amplifies both potential profits and potential losses!',
    realWorldAnalogy: 'Using a lever to lift a heavy stone: it gives you extra power, but if the lever slips, the stone drops harder.',
    technicalExplanation: 'The use of borrowed funds or financial derivatives to amplify potential returns and potential risks.'
  },
  {
    id: 'margin',
    term: 'Margin',
    category: 'Advanced Risk',
    simpleDefinition: 'The collateral money required in your account to open and maintain a leveraged position.',
    visualConcept: '🔒 Deposit held as security for active open trades.',
    realWorldAnalogy: 'A security deposit you pay when renting an apartment to guarantee you will cover potential damage.',
    technicalExplanation: 'The equity value or collateral required by a venue to cover credit risk during leveraged positions.'
  }
];

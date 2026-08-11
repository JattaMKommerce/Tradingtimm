import React from 'react';
import StrategyBuilder from '../components/StrategyBuilder';
import TimmMascot from '../components/TimmMascot';

export default function Strategies() {
  return (
    <div className="container" style={{ padding: '40px 0 80px 0' }}>
      <TimmMascot
        inline
        message="This no-code strategy builder generates frontend-simulated rule outcomes. No real trade order execution takes place!"
      />

      <div style={{ marginTop: '24px' }}>
        <StrategyBuilder />
      </div>
    </div>
  );
}

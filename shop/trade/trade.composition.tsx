import { MemoryRouter } from 'react-router-dom';
import { Trade } from "./trade.js";
    
export const TradeBasic = () => {
  return (
    <MemoryRouter>
      <Trade />
    </MemoryRouter>
  );
}
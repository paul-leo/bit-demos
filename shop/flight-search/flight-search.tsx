import type { ReactNode } from 'react';

export type FlightSearchProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

import React, { useState } from 'react';
import styles from './index.module.scss';

interface Flight {
  id: string;
  from: string;
  to: string;
  date: string;
  price: number;
  airline: string;
}

export function FlightSearch() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里应该是实际的API调用,现在我们just模拟一些数据
    const mockResults: Flight[] = [
      { id: '1', from, to, date, price: 299, airline: 'MockAir' },
      { id: '2', from, to, date, price: 349, airline: 'FakeJet' },
    ];
    setFlights(mockResults);
  };

  return (
    <div className={styles.flightSearch}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Search Flights</button>
      </form>

      {flights.length > 0 && (
        <div className={styles.results}>
          <h3>Search Results:</h3>
          {flights.map((flight) => (
            <div key={flight.id} className={styles.flightCard}>
              <p>{flight.airline}</p>
              <p>{flight.from} to {flight.to}</p>
              <p>Date: {flight.date}</p>
              <p>Price: ${flight.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

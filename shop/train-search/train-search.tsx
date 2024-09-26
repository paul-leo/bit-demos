import type { ReactNode } from 'react';
import React, { useState } from 'react';
import styles from './index.module.scss';
export type TrainSearchProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

interface Train {
  id: string;
  from: string;
  to: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  trainNumber: string;
}

export function TrainSearch() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [trains, setTrains] = useState<Train[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里应该是实际的API调用,现在我们模拟一些数据
    const mockResults: Train[] = [
      { 
        id: '1', 
        from, 
        to, 
        date, 
        departureTime: '08:00', 
        arrivalTime: '12:00',
        duration: '4h 0m',
        price: 50, 
        trainNumber: 'G101' 
      },
      { 
        id: '2', 
        from, 
        to, 
        date, 
        departureTime: '10:30', 
        arrivalTime: '14:15',
        duration: '3h 45m',
        price: 65, 
        trainNumber: 'D202' 
      },
    ];
    setTrains(mockResults);
  };

  return (
    <div className={styles.trainSearch}>
      <h2>Train Ticket Search</h2>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <div className={styles.inputGroup}>
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
        </div>
        <button type="submit" className={styles.searchButton}>Search Trains</button>
      </form>

      {trains.length > 0 && (
        <div className={styles.results}>
          <h3>Search Results:</h3>
          {trains.map((train) => (
            <div key={train.id} className={styles.trainCard}>
              <div className={styles.trainHeader}>
                <span>{train.trainNumber}</span>
                <span>{train.date}</span>
              </div>
              <div className={styles.trainDetails}>
                <div>
                  <p>{train.departureTime}</p>
                  <p>{train.from}</p>
                </div>
                <div className={styles.duration}>
                  <span>{train.duration}</span>
                  <div className={styles.arrow}></div>
                </div>
                <div>
                  <p>{train.arrivalTime}</p>
                  <p>{train.to}</p>
                </div>
              </div>
              <div className={styles.price}>
                <p>Price: ${train.price}</p>
                <button>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
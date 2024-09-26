import type { ReactNode } from 'react';

export type FlightSearchProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function FlightSearch({ children }: FlightSearchProps) {
  return (
    <div>
      {children}
    </div>
  );
}

import type { ReactNode } from 'react';

export type TrainSearchProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function TrainSearch({ children }: TrainSearchProps) {
  return (
    <div>
      <h1>Train Search</h1>
      {children}
    </div>
  );
}

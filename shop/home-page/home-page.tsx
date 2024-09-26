import type { ReactNode } from 'react';

export type HomePageProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function HomePage({ children }: HomePageProps) {
  return (
    <div>
      {children}
    </div>
  );
}

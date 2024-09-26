import type { ReactNode } from 'react';

export type HomePageProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};
/**
 * 这是一个HomePage组件，Banner，机票搜索组件，火车票搜索组件
 * @param param0 
 * @returns 
 */
export function HomePage({ children }: HomePageProps) {
  return (
    <div>
      {children}
    </div>
  );
}

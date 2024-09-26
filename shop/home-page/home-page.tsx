// import type { ReactNode } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@frontend/shadcn-ui.ui.tabs';
import { FlightSearch } from '@nore-work/shop.flight-search';
import { TrainSearch } from '@nore-work/shop.train-search';
import './index.scss';

export type HomePageProps = {
  /**
   * sets the component children.
   */
  // children?: ReactNode;
};
/**
 * 这是一个HomePage组件，Banner，机票搜索组件，火车票搜索组件
 * @param param0
 * @returns
 */
// 定义一个公共的数据

export function HomePage({}: HomePageProps) {
  return (
    <div className='home-page'>
      <div className='banner'>
      <img className='' alt='xx' src='https://dimg04.c-ctrip.com/images/0zg7212000fdfginlC93D.webp'/> 
      </div>
     
      <div className="flight-tran-card">
        <Tabs defaultValue="flight">
          <TabsList className="search-bus-tab">
            <TabsTrigger value={'flight'}>机票<span className='zhongjian'></span></TabsTrigger>
            <TabsTrigger value={'train'}>火车票<span className='zhongjian'></span></TabsTrigger>
          </TabsList>
          <TabsContent value={'train'}>
            <TrainSearch />
          </TabsContent>
          <TabsContent value={'flight'}>
            <FlightSearch />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

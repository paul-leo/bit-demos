import { Routes, Route } from 'react-router-dom';
import { ProductInfo } from '@nore-work/shop.product-info';

export function Trade() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProductInfo
            image="https://jkcdn.pajk.com.cn/image/T1.bWy3XEv1RCvBVdK?img=/tf,q_70,d_webp"
            name="汤臣倍健 蛋白粉600g组合装 增强免疫力"
            price={299}
          ></ProductInfo>
        }
      />
      {/* <Route path="/" element={<Homepage />} /> */}
      {/* <Route path="/blog/*" element={<CommunityBlog />} /> */}
    </Routes>
  );
}

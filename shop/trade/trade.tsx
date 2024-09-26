import { Routes, Route } from 'react-router-dom';
import { ProductInfo } from '@nore-work/shop.product-info';
import { HomePage } from '@nore-work/shop.home-page';
export function Trade() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<Homepage />} /> */}
      {/* <Route path="/blog/*" element={<CommunityBlog />} /> */}
    </Routes>
  );
}

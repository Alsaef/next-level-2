import FeatureHighlights from '@/components/Feture';
import Hero from '@/components/Hero';
import ProductHighlights from '@/components/ProductHighlights';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeatureHighlights></FeatureHighlights>
      <ProductHighlights></ProductHighlights>
    </div>
  );
};

export default Home;
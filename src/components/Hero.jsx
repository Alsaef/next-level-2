import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
           <div
  className="hero min-h-screen bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  {/* Overlay */}
  <div className="hero-overlay bg-black/50"></div>

  {/* Hero Content */}
  <div className="hero-content text-center text-white px-4">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-extrabold">
        Welcome to Cartify
      </h1>
      <p className="mb-8 text-lg">
        Explore our products and add your own favorites. Simple, fast, and secure way to manage your store online.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/products" className="btn btn-primary btn-lg">
          View Products
        </Link>
        <Link href='/products' className="btn btn-outline btn-lg">
          Shop Now
        </Link>
      </div>
    </div>
  </div>
</div>
 
        </div>
    );
};

export default Hero;
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
             <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    /> */}
    <Image src='/head_phone-removebg-preview.png'
     alt='logo'
     width={800} height={800} />

    <div>
      <h1 className="text-4xl md:text-5xl font-bold">ULTIMATE PERFORMANCE, BEYOND BOUNDARIES.</h1>
      <p className="py-6">
        Discover the future of tech. Explore our new Quantum Series Laptops and Gaming Displays.
      </p>
      <button className="btn btn-primary">SHOP QUANTUM NOW</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
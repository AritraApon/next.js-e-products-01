import Image from "next/image";

// components/DiscountBanner.jsx
const DiscountBanner = () => {
    return (
        <div className="w-11/12 mx-auto my-16 bg-gradient-to-r from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
            <div className="z-10 text-center md:text-left">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                    Limited Time Offer
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 leading-tight">
                    WEEKEND SALE <br /> <span className="text-yellow-400">UP TO 50% OFF</span>
                </h2>
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-2xl">
                    Claim Discount
                </button>
            </div>

            <div className="mt-10 md:mt-0 z-10">
               
                <Image  src='/Laptop_Lenovo_IdeaPad_l340-15api__15_6____3_3200u__4_GB__SSD_256_GB__Vega_3__fdos__Black-removebg-preview.png' alt="laptop" width={400} height={400}/>
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
    );
};

export default DiscountBanner;
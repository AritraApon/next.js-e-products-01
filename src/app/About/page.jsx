

// app/about/page.jsx
import React from 'react';

const AboutPage = () => {
    const stats = [
        { label: 'Products', value: '5000+' },
        { label: 'Customers', value: '10k+' },
        { label: 'Delivery', value: '24/7' },
        { label: 'Warranty', value: '2 Years' },
    ];

    return (
        <div className="w-11/12 mx-auto text-white py-10 min-h-screen">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-4">
                    About <span className="text-blue-500">Next Js Shop</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    We are dedicated to bringing you the latest and most innovative products
                    from around the world. Your ultimate destination for premium tech gadgets.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="bg-slate-800 p-8 rounded-3xl border border-gray-700 shadow-xl">
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        At Next Js Shop, we believe that technology should be accessible to everyone.
                        Our mission is to provide high-quality electronic products at competitive
                        prices while ensuring an exceptional shopping experience.
                        Whether you're a gamer, a professional, or a tech enthusiast, we have something for you.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-slate-900 border border-gray-800 p-6 rounded-2xl text-center hover:border-blue-500 transition-all">
                            <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-10">Why Shop With Us?</h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 bg-slate-800 rounded-xl border border-gray-700">
                        <div className="text-blue-500 text-3xl mb-4">🚚</div>
                        <h4 className="text-xl font-bold mb-2">Fast Shipping</h4>
                        <p className="text-gray-400 text-sm">We deliver your gadgets faster than light. Real-time tracking included.</p>
                    </div>
                    <div className="p-6 bg-slate-800 rounded-xl border border-gray-700">
                        <div className="text-blue-500 text-3xl mb-4">🛡️</div>
                        <h4 className="text-xl font-bold mb-2">Secure Payments</h4>
                        <p className="text-gray-400 text-sm">Your data and transactions are protected with military-grade encryption.</p>
                    </div>
                    <div className="p-6 bg-slate-800 rounded-xl border border-gray-700">
                        <div className="text-blue-500 text-3xl mb-4">🎧</div>
                        <h4 className="text-xl font-bold mb-2">Expert Support</h4>
                        <p className="text-gray-400 text-sm">Our technical team is ready to help you with any queries, anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
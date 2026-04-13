// components/Features.jsx
const Features = () => {
    const featureList = [
        { icon: "🚀", title: "Free Shipping", desc: "On orders over $100" },
        { icon: "💳", title: "Secure Payment", desc: "100% protected checkout" },
        { icon: "🔄", title: "Easy Returns", desc: "30-day money back guarantee" },
        { icon: "🛠️", title: "24/7 Support", desc: "Expert technical assistance" }
    ];

    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
            {featureList.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-slate-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;
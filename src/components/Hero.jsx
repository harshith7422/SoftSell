import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Turn Unused Software Into Cash</h1>
            <p className="text-xl md:text-2xl mb-6">SoftSell helps businesses resell unused software licenses instantly.</p>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">Sell My Licenses</button>
        </section>
    );
};

export default Hero;
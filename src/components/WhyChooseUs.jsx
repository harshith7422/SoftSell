import React from 'react';
import { FaClock, FaShieldAlt, FaUsers, FaHandshake } from 'react-icons/fa';

const features = [
    { icon: <FaClock />, title: 'Fast Payouts', desc: 'Get your money in under 24 hours.' },
    { icon: <FaUsers />, title: 'Trusted by 500+ Businesses', desc: 'A growing client base worldwide.' },
    { icon: <FaShieldAlt />, title: 'Secure & Compliant', desc: 'Your data is safe with us.' },
    { icon: <FaHandshake />, title: 'Dedicated Support', desc: 'We’re here 24/7 for you.' }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                        <div className="text-3xl text-indigo-600 mb-3">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
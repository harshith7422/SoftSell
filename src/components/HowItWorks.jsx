import React from 'react';
import { FaUpload, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const steps = [
    { icon: <FaUpload />, title: 'Upload License', desc: 'Submit your unused license securely.' },
    { icon: <FaDollarSign />, title: 'Get Valuation', desc: 'We evaluate your license instantly.' },
    { icon: <FaCheckCircle />, title: 'Get Paid', desc: 'Receive payment within 24 hours.' }
];

const HowItWorks = () => {
    return (
        <section className="py-16 px-4 text-center bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-10">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                        <div className="text-4xl text-indigo-600 mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
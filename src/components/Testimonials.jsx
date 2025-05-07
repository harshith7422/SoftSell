import React from 'react';

const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'IT Head',
        company: 'TechCorp',
        quote: 'SoftSell helped us liquidate unused licenses effortlessly. Highly recommended!'
    },
    {
        name: 'Maya Patel',
        role: 'CFO',
        company: 'FinSolve',
        quote: 'Professional, quick, and secure service. Saved us a lot of money.'
    },
    {
        name: 'Dhruv Rathe',
        role: 'Developer',
        company: 'Tech Chiland',
        quote: 'Very reliable, so easy to use. Makes life easier.'
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md max-w-md">
                        <p className="mb-4 italic">“{t.quote}”</p>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">{t.role}, {t.company}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
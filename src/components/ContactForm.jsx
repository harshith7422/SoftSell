import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="p-3 rounded" name="name" placeholder="Name" onChange={handleChange} required />
                    <input className="p-3 rounded" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                    <input className="p-3 rounded" name="company" placeholder="Company" onChange={handleChange} />
                    <select className="p-3 rounded" name="license" onChange={handleChange} required>
                        <option value="">License Type</option>
                        <option value="Windows">Windows</option>
                        <option value="Adobe">Adobe</option>
                        <option value="Autodesk">Autodesk</option>
                    </select>
                </div>
                <textarea
                    className="w-full mt-4 p-3 rounded"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    onChange={handleChange}
                ></textarea>
                <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;
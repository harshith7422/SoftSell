// src/components/AIChatWidget.jsx
import React, { useState } from 'react';

const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'ai', text: 'Hi! I’m SoftSell’s AI Assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant for SoftSell users.' },
                        ...newMessages.map(msg => ({
                            role: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.text
                        }))
                    ]
                })
            });

            const data = await res.json();
            const reply = data.choices[0].message.content;
            setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
        } catch (err) {
            setMessages(prev => [...prev, { sender: 'ai', text: 'Something went wrong. Try again!' }]);
        }

        setLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className="w-80 bg-white dark:bg-gray-800 shadow-xl rounded-lg border dark:border-gray-600">
                    <div className="p-3 font-semibold bg-blue-600 text-white rounded-t-lg">
                        SoftSell AI Chat
                        <button className="float-right" onClick={() => setIsOpen(false)}>✕</button>
                    </div>
                    <div className="p-3 h-64 overflow-y-auto text-sm">
                        {messages.map((msg, i) => (
                            <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className={`${msg.sender === 'user' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-700'} px-2 py-1 rounded`}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                        {loading && <div className="text-gray-400 text-xs">Typing...</div>}
                    </div>
                    <div className="p-3 border-t dark:border-gray-700 flex items-center gap-2">
                        <input
                            className="flex-1 px-2 py-1 border rounded text-sm dark:bg-gray-700 dark:border-gray-600"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Ask something..."
                        />
                        <button onClick={sendMessage} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Send</button>
                    </div>
                </div>
            ) : (
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
                    onClick={() => setIsOpen(true)}
                >
                    💬
                </button>
            )}
        </div>
    );
};

export default AIChatWidget;

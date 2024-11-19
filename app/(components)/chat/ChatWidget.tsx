"use client"
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // replace with your Socket.IO server URL

export const ChatWidget = () => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('receive_message', (message: { sender: string; text: string }) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            // Emit the message to the server
            socket.emit('send_message', newMessage);
            setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-widget p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Chat with us!</h2>
            <div className="messages overflow-y-auto h-64 p-2 bg-white rounded border">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message mb-2 p-2 rounded ${
                            message.sender === 'bot' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-black'
                        }`}
                    >
                        <strong>{message.sender === 'bot' ? 'Bot' : 'You'}: </strong>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="mt-4 flex">
                <input
                    type="text"
                    className="border p-2 flex-grow rounded mr-2"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

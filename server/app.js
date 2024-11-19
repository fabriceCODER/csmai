// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // replace with your Next.js app's URL
        methods: ['GET', 'POST'],
    },
});

// Configure OpenAI API
const openaiConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // ensure you have this in your .env file
});
const openai = new OpenAIApi(openaiConfig);

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages from clients
    socket.on('send_message', async (message) => {
        // Broadcast the user's message to all connected clients
        io.emit('receive_message', { sender: 'user', text: message });

        // Generate AI response using OpenAI GPT
        try {
            const response = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo', // Use the model of your choice
                messages: [
                    { role: 'system', content: 'You are a helpful chatbot.' },
                    { role: 'user', content: message },
                ],
            });

            const aiResponse = response.data.choices[0].message.content;
            io.emit('receive_message', { sender: 'bot', text: aiResponse });
        } catch (error) {
            console.error('Error generating AI response:', error);
            io.emit('receive_message', { sender: 'bot', text: 'Sorry, there was an error processing your request.' });
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(4000, () => {
    console.log('Socket.IO server is running on port 4000');
});

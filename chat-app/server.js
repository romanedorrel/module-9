const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    const userName = socket.handshake.query.nickname || "Anonymous"
    io.emit('connection', `${userName} has connected`);

    socket.on('connection', (msg) => {
        io.emit('connection', `${userName}: ${msg}`);
    })
    socket.on('disconnect', () => {
        io.emit('connection', `${userName} has disconnected`);

});
});



server.listen(3000, () => {
    console.log('listening on *:3000');
});
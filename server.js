const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app)
const port = process.env.PORT || 5000;

const io = require("socket.io")(server, {
    cors: {
        origin:["*"], 
    }
} )

io.on('connection', socket => {
    console.log("connected")
    const id = socket.handshake.query.id
    console.log(id)
    socket.join(id)
    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r => r === recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message',{
                recipients:newRecipients,sender:id,text
            })
        })
    })
})

server.listen(port)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('clientside/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'));
    })
}
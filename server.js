const path = require('path');
const express = require('express');
const app = express();
const httpServer = require('http').createServer(app)
const port = process.env.PORT || 5000;
const cors = require('cors');
const { Server } = require("socket.io");


const io = new Server(httpServer, {
    cors: {
        origin:'*'
    }
})
 
 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname+'/clientside/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'));
    })
}
 

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

httpServer.listen(port)

const { createServer } = require("http");
const httpServer = createServer();
const io = require('socket.io') (httpServer,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
}) 
httpServer.listen(3000)

io.on('connection', socket => {
    const id = socket.handshake.query.id
    console.log(id)
    socket.join(id)
    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r => r !== recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message',{
                recipients:newRecipients,sender:id,text
            })
        })
    })
})
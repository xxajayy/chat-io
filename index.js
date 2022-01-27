const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server)

const users={}
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
});
// here
// io.on('connection', (socket)=>{
//   socket.on('new-user-joined',name=>{
//       console.log(`New user joined ${name}`);
//       users[socket.id]=name;
//       io.sockets.emit('user-joined',name);
//   });

//   socket.on('send',message=>{
//       socket.broadcast.emit('receive',{messgae:message, name:users[socket.id]})
//   })
// })
// to here
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(4000,()=>{
    console.log("Server is listening on 4000.")
});

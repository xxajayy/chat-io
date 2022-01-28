const app = require('express')()
const server = require('http').createServer(app);
const { Server } = require('socket.io');
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
    console.log("What is this socket: ", socket);
    console.log("Socket is active!!");
    socket.on('chat message', (payload) => {
      io.emit('chat message', payload);
    });
  });

server.listen(4000,()=>{
    console.log("Server is listening on 4000.")
});

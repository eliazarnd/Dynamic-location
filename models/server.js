const express = require("express");
const http = require('http');
const Socket = require('./sockets');
const { connect } = require('../database/database');
// const io = require('socket.io')(http);
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.http = http.Server(this.app);
        this.port = process.env.PORT || 3000
        this.socket = new Socket(this.http);
        this.middlewares();
        this.runServer();
        this.socketEvents();
        this.connectDB = connect;
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    socketEvents(){
        this.socket.socketEvents();
    }

    runServer(){
        this.http.listen(this.port, async () => {
            await this.connectDB();
            console.log(`Socket.IO server running at http://localhost:${this.port}/`);
          });
    }
}

module.exports = Server;


// const usersOnline = [];
// const rooms = {
//   name: "chatRoom",
//   usersOnline
// }

// app.get('/:user', (req, res) => {
//   usersOnline.push(req.params.user)
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   const currentUser = socket.id;
//   console.log(usersOnline);

//   // io.sockets.emit("new user connected", {
//   //   message: "New user is connected",
//   //   usersOnline: usersOnline
//   // });

//   io.sockets.emit("server:getlayout", binDataLocation);

//    socket.on('client:addLocation', newLocation => {
//     binDataLocation.push(newLocation);
//     io.emit('server:updateLayout', binDataLocation);
//     console.log(newLocation);
//   });

//   // socket.on('chat message', msg => {
//   //   io.emit('chat message', msg);
//   // });

//   // socket.on('user chat typing', msg => {
//   //   console.log(msg);

//   //   if(msg.length > 0){
//   //     socket.broadcast.emit('user chat typing', "The user is typing");
//   //   }else{
//   //     console.log("Entro aqui", msg)
//   //     socket.broadcast.emit('user chat typing', "");
//   //   }
    
//   // });

// });


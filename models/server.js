const express = require("express");
const http  = require('http');
const socket = require('socket.io');
const Sockets = require('./sockets');
const { connect } = require('../database/database');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000
        this.server = http.createServer(this.app);
        this.io = socket(this.server, {});
        this.connectDB = connect;
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    settingSockets(){
        new Sockets(this.io);
    }

    runServer(){

        this.middlewares();
        this.settingSockets();

        this.server.listen(this.port, async () => {
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


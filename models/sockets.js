const socket = require('socket.io');
const BinModel = new require('../service/BinServiceDatabase');
// const io = require('socket.io')(http);

class Sockets {

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection', async (socket) => {
    
        this.io.emit("server:getlayout", await BinModel.getAll());

        socket.on('client:addOrder', async order => {
            console.log(order);
            const updatedBin = await BinModel.addNewOrder(order);
            const allBins = await BinModel.getAll();

            const updatedLayout = {
                layout: allBins,
                updatedBin: updatedBin
            }

            this.io.emit('server:updateLayout', updatedLayout);
        });
    });

}
}

module.exports = Sockets;
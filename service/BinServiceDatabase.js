const Bin  = require('../models/bin.model');

class BinModel {

    constructor(){
        this.MAX_ORDER_QTY = 5;
    }

    async getAll(){
        const allBins = await Bin.find({}).sort({location: 1});
        return allBins;
    }   

    async addBin(bin){
        const { location, isAvailable, qtyOrders, orders } = bin;

        const newBin = new Bin();
        newBin.location = location;
        newBin.isAvailable = isAvailable;
        newBin.qtyOrders = qtyOrders;
        newBin.orders = orders;
      
        await newBin.save();

        return newBin;
    }

    async addNewOrder(order = ""){
        const locations = await Bin.findOne({isAvailable: true, qtyOrders: {$lt: this.MAX_ORDER_QTY}}).sort({location: 1}).exec();
        
        if(locations != undefined){
           locations.orders.push(order);
           locations.qtyOrders += 1;
           await locations.save();
        }

        return locations;
    }
  
    updateBinOrders(locationToUpdate, order){
      const binIndex = this.getAllBins().findIndex(bin => bin.location == locationToUpdate);
     
      this.bins[binIndex].qtyOrders += 1;
      this.bins[binIndex].orders.push(order);
      
      return this.bins[binIndex];
    }

}

module.exports = new BinModel();
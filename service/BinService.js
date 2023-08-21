

const binDataLocation = [
    {
       "location": "A1",
       "isAvailable": false,
       "qtyOrders": 5,
       "orders": []
    },
    {
       "location": "B1",
       "isAvailable": true,
       "qtyOrders": 0,
       "orders": []
    },
    {
       "location": "A2",
       "isAvailable": true,
       "qtyOrders": 0,
       "orders": []
    },
    {
        "location": "B2",
        "isAvailable": true,
        "qtyOrders": 0,
        "orders": []
     },
     {
        "location": "C1",
        "isAvailable": true,
        "qtyOrders": 0,
        "orders": []
     }
     ,
     {
        "location": "C2",
        "isAvailable": true,
        "qtyOrders": 0,
        "orders": []
     },
     {
        "location": "D1",
        "isAvailable": true,
        "qtyOrders": 0,
        "orders": []
     },
     {
        "location": "D2",
        "isAvailable": true,
        "qtyOrders": 0,
        "orders": []
     }

]

class BinModel {

    constructor(){
        this.MAX_ORDER_QTY = 5;
        this.bins = binDataLocation;
    }

    async getAll(){
        return this.bins;
    }   

    addBin(bin){
        this.bins.push(bin);
    }

    addNewOrder(order = ""){
        const locations = this.getAllBins().filter((bin) => bin.isAvailable && bin.qtyOrders < this.MAX_ORDER_QTY)[0];
        
        if(locations != undefined){
           const updatedBin = this.updateBinOrders(locations.location, order);
           return updatedBin
        }
     
    }
  
    updateBinOrders(locationToUpdate, order){
      const binIndex = this.getAllBins().findIndex(bin => bin.location == locationToUpdate);
     
      this.bins[binIndex].qtyOrders += 1;
      this.bins[binIndex].orders.push(order);
      
      return this.bins[binIndex];
    }

}

module.exports = new BinModel();

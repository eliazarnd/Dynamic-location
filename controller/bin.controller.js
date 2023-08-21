const BinModel = new require('../service/BinServiceDatabase');

class BinController{

    async getAll(req, res){
        const allBins = await BinModel.getAll();
        
        res.status(200).send({
            response: allBins,
            status: 200
        });
    }

    async addNewBin(req, res){
        const newBin = await BinModel.addBin(req.body);

        res.status(200).send({
          response: newBin,
          status: 200
        });
    }

}

module.exports = BinController;
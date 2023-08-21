const Server  = require("./models/server");

const ServerObj = new Server();

const BinModel = new require('./service/BinServiceDatabase');

// ServerObj.app.get('/', async (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

ServerObj.app.get('/bins', async (req, res) => {

  const allBins = await BinModel.getAll();
  res.status(200).send({
    response: allBins,
    status: 200
  });
  
});

ServerObj.app.post('/bins', async (req, res) => {
  
  const newBin = await BinModel.addBin(req.body);

  res.status(200).send({
    response: newBin,
    status: 200
  });
  
});


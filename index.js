const Server  = require("./models/server");

const server = new Server();

server.runServer();

const BinController = require('./controller/bin.controller');
const binController = new BinController();

// ServerObj.app.get('/', async (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

server.app.get('/bins', binController.getAll)

server.app.post('/bins', binController.addNewBin);


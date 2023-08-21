const mongoose = require('mongoose');

const uri = "mongodb+srv://bindatauser:B6w5kIrnYMxBilFT@bindata.dqcmdqm.mongodb.net/BinLocationDB?retryWrites=true&w=majority";

async function connect() {
  await mongoose.connect(uri);
  console.log("Connect to database bindata");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = {
    connect
}

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connect (){
   return mongoose.connect('mongodb+srv://LoreA-dev:Lorena0702@lorea-devcluster.xvowy.mongodb.net/todoDatabase');
}

module.exports = {connect};
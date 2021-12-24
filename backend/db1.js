const mongoose = require('mongoose');

const mongoURI='mongodb://localhost:27017/FIRSTDB'

const db1=mongoose.connection;

mongoose.connect(mongoURI);

/*,{ useNEWUrIParser:true, useUnifieldTopolgy:true}, ()=>{
    console.log('DB is working')
})*/

db1.on('error', err=>{
    console.log("error connect mongodb")
});

db1.on('connected', ()=>{
    console.log(" mongodb connected ....")
});
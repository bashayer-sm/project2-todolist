const express = require('express')
const app = express()
const db1=require('./db1')
const todo1=require('./todo1')
console.log(todo1)

//const user =require('./Models/the first table.js')

//Middleware     (read what inside post or whatever)
app.use(express.json())

const db_array=[
    {Fname:'sami', Lname:'saeed'},
    {Fname:'sara', Lname:'ali'},
    {Fname:'mozon', Lname:'saad'},
    // "Fname":"sultan","Lname":"deme"
]





app.get('/',(req, res)=>{
    res.json('server is working ....');
    });



app.listen(5000, ()=>{
    console.log('the server is working')
})
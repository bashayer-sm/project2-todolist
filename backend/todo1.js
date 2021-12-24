const {Schema, model }= require ('mongoose');

const todoSchema= new Schema({
    title:String,
    isCompleted:Boolean
})

const Todo1=model('Todo', todoSchema )
module.exports = Todo1 ;
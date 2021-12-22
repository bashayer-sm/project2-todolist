const {Schema, model }= require ('mongoose');

const todoSchema= new Schema({
    title:String,
    iscompleted:Boolean
})

const Todo1=model('Todo', todoSchema )
module.exports = Todo1 ;
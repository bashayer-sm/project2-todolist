const {Schema, model }= require ('mongoose');

const userSchema= new Schema({
    userName:String,
    email:{type:String,required:true , unique:true},
    passWord:{type:String,required:true},
})

const usrein=model('usrein', userSchema )
module.exports = usrein ;
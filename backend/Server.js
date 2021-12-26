const express = require('express')
const cors = require('cors')
const app = express()
const db1=require('./db1')
const todo1=require('./todo1')
console.log(todo1)

//const user =require('./Models/the first table.js')

//Middleware     (read what inside post or whatever)
app.use(express.json())
app.use(cors())

const db_array=[
    {Fname:'sami', Lname:'saeed'},
    {Fname:'sara', Lname:'ali'},
    {Fname:'mozon', Lname:'saad'},
    // "Fname":"sultan","Lname":"deme"
]





app.get('/',(req, res)=>{
    res.json('server is working ....');
    });



    app.get('/tasks',(req, res)=>{
        todo1.find({}, (err, data)=>{
if (err){
    console.log("arror", err);

}else{

    res.json(data);
}
        });
        });
    
app.post('/tasks',(req, res)=>{
    todo1.create(req.body, (err, newtask)=>{
      //  console.log("25", req.body)
if (err){
console.log("arror", err);

}else{

res.status(201).json(newtask)
}
    });
    });
    //'created new todo list successfully'


//........................قيت للمكتمله فقط .....................
    app.get('/complete', (req, res)=>{
        todo1.find({ isCompleted: true }, (err,data)=>{
if(err){
    console.log("error", err)
}else{
    res.json(data)
}
        })
    })


//.................قيت للغير مكتمله فقط ..............................
app.get('/notcomplete', (req, res)=>{
    todo1.find({ isCompleted: false }, (err,data)=>{
if(err){
console.log("error", err)
}else{
res.json(data)
}
    })
})

//..........get للحالتين حسب المفتاحالمدخل في بوست مان ................................
app.get('/state', (req, res)=>{
    todo1.find({ isCompleted: req.query.isCompleted }, (err,data)=>{
if(err){
console.log("error", err)
}else{
res.json(data)
}
    })
})


//..........حدف المكتمله فقط ................
app.delete('/delete-com',(req, res)=>{
    todo1.deleteMany({isCompleted: false }, (err, deleteobj)=>{
        if(err){
            return handleError(err);
         }else{
            deleteobj.deleteCount === 0
           ? res.status(404).json('there is nothing to delete ' ):
           res.json('success deleted ' )
         }
           // console.log("dataq", newdata)
           //req.params.isCompleted
    });
});
//.........put ........................
app.put('/tasks/:id/:isCompleted',(req, res)=>{
    todo1.updateOne(
        {_id: req.params.id},
        { isCompleted: req.params.isCompleted },
         (err, updateObj )=>{
        if(err){
            //return handleError(err);
            res.status(400).json(err);
         }else {
             // console.log("dataq", newdata)
            updateObj.modifiedCount === 1
             ? res.json('success UPDATED  ' )
             : res.status(404).json("this todo is not found ");
         }
    });
});
//.........................................................

app.listen(5000, ()=>{
    console.log('the server is working')
})
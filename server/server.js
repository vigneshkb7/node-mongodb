var express=require('express');
var bodyParser=require('body-parser');
const _=require('lodash');
var {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var {Task} =require('./model/task.js');
var {Customer} =require('./model/customer');
var app =express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('hai');
});

app.post('/task',(req,res)=>{
    var task=new Task({
        text:req.body.text
    });
    task.save().then((result)=>{
res.send(result);    },(err)=>{
res.send(err);    })
});

app.get('/task',(req,res)=>{
    
    Task.find().then((result)=>{
    res.send({result});},
    (err)=>{res.status(400).send(err);})
});

app.get('/task/:id',(req,res)=>{
var id=req.params.id;

if(!ObjectID.isValid(id))
    {
        return res.status(404).send({});
    }

    Task.findById(id).then((result)=>{
    res.send({result});},
    (err)=>{res.status(400).send(err);})

});
//delete the record
app.delete('/task/:id',(req,res)=>{
var id=req.params.id;

if(!ObjectID.isValid(id))
    {
        return res.status(404).send({});
    }

    Task.findByIdAndRemove(id).then((result)=>{
    res.send({result});},
    (err)=>{res.status(400).send(err);})

});

//updating the document using patch
app.patch('/task/:id',(req,res)=>{
var id=req.params.id;
var body=_.pick(req.body,['text','completed']);
if(!ObjectID.isValid(id))
    {
        return res.status(404).send({});
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt=new Date().getTime();
    }else{
        body.completed=false;
        body.completedAt=null;
    }

    Task.findByIdAndUpdate(id,{$set:body},{new:true}).then((result)=>{
    res.send({result});},
    (err)=>{res.status(400).send(err);})

});


// var Todo =new Task({text:'cook briyani',completed:true,completedAt:10/2/2017});
// Todo.save().then(
//     (result)=>{console.log('inserted'+result);
//      },
//     (err)=>{console.log('error occured'+err);
// });


app.listen(3000,()=>{
console.log('started on port 3000');
});

//const mongo=require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');//this syntax is similar to the above but it is object destructuring


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to db');

    }
    console.log('connected to mongo server');
    //update the doument based on the object id and we are using $set which is an update operators...
    // db.collection('Todos').findOneAndUpdate(
    // {_id:new ObjectID('598f138d4c4ba8aeaa41db80')},
    // {$set:{completed:true}},
    // {returnOriginal:false}).then((result)=>{
    //     console.log(result);
    // });
    //update the name and increment the age of the documets.
    db.collection('Users').findOneAndUpdate(
    {_id:new ObjectID('598f094af339be0c52c714f7')},
    {$set:{name:'karthik'},$inc:{age:-2}},
    {returnOriginal:false}).then((result)=>{
        console.log(result);
    });


   // db.close();
})
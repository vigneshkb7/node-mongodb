//const mongo=require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');//this syntax is similar to the above but it is object destructuring


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to db');

    }
    console.log('connected to mongo server');
    //insert the data to the collection
    // db.collection('Todos').insertOne({
    //     text:'read mongo db',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable'+err);
    //     }
    //     console.log(result);
    // });
    db.collection('Users').insertOne({
        name:'divin vb',
        age:20,
        location:'Chennai'
        
    },(err,result)=>{
        if(err){
            return console.log('unable to insert'+err);
        }
        console.log(result);
    });
    db.close();
})
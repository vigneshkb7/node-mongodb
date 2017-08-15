//const mongo=require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');//this syntax is similar to the above but it is object destructuring


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to db');

    }
    console.log('connected to mongo server');
    //deleteMany
    // db.collection('Todos').deleteMany({text:'read react js'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text:'read mean stack development'}).then((result)=>{
    //     console.log(result);
    // });
    //findOneandDelte
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });
   // db.close();
})
//const mongo=require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');//this syntax is similar to the above but it is object destructuring


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to db');

    }
    console.log('connected to mongo server');
    // the below code wil return array of todos by to array method
    db.collection('Todos').find().toArray().then((result)=>{
        console.log(result);
    },(err)=>{
    console.log('cannot find');
    });
    // the below code query based on the condition
    db.collection('Todos').find({completed:true}).toArray().then((result)=>{
        console.log(result);
    },(err)=>{
    console.log('cannot find');
    });
    //querying data based on object id with objectid constructor 
    db.collection('Todos').find({_id:ObjectID('598efe5f6bc56f1901eadb2b')}).toArray().then((result)=>{
        console.log(result);
    },(err)=>{
    console.log('cannot find');
    });
//counting the number elements in the collection using count function provided by driver api
db.collection('Todos').find().count().then((count)=>{
        console.log(`todo has ${count} of elements`);
    },(err)=>{
    console.log('cannot find count');
    });
    
    
    db.close();
})
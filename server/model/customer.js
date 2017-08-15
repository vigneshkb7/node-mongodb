var mongoose =require('mongoose');
var Customer=mongoose.model('Customer',{
    email:{type:String,required:true,minlength:1,trim:true}
    
});
module.exports={Customer};
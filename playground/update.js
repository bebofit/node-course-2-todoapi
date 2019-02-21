const MongoClient = require('mongodb').MongoClient;
const objct = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err){
   return console.log('Unable to Connect to Mongodb Server');
}
console.log('Connected to Mongodb Server');

// db.collection('Todos').findOneAndUpdate({
//     _id : new objct("5c6ef0f03631a422ac9988b8")
// },{
//     $set:{
//         completed: true
//     }
// },{
//     returnOriginal: false
// }).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(err);
// })

db.collection('Users').findOneAndUpdate({
    _id : new objct("5c6e840615953447c457ad00")
},{
    $inc:{
        age: 1
    }
},{
    returnOriginal: false
}).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})
// db.close();
})
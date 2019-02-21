const MongoClient = require('mongodb').MongoClient;
const objct = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err){
   return console.log('Unable to Connect to Mongodb Server');
}
console.log('Connected to Mongodb Server');

//deleteMany
// db.collection('Todos').deleteMany({text: "eat lunch"}).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(err);
// })

//deleteOne
// db.collection('Todos').deleteOne({text: "eat lunch"}).then((res)=>{
//         console.log(res);
//     },(err)=>{
//         console.log(err);
//     })

//findOneandDelete
db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})
// db.close();
})
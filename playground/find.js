const MongoClient = require('mongodb').MongoClient;
const objct = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err){
   return console.log('Unable to Connect to Mongodb Server');
}
console.log('Connected to Mongodb Server');


// db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('unable to fetch data: ',err);
// })

db.collection('Todos').find().count().then((count)=>{
    console.log('Todos:',count);
},(err)=>{
    console.log('unable to fetch data: ',err);
})
// db.close();
})
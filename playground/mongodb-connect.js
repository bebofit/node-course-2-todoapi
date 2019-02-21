const MongoClient = require('mongodb').MongoClient;
const objct = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err){
   return console.log('Unable to Connect to Mongodb Server');
}
console.log('Connected to Mongodb Server');

db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: true
}, (err, result)=>{
    if(err)
    {
        return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
})

db.collection('Users').insertOne({
    name: 'Cabo',
    age: 21,
    location: 'Giza'
}, (err, result)=>{
    if(err)
    {
        return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
})


db.close();
})
var {mongoose} = require('../server/db/mongoose')
var {Todo} = require('../server/models/Todo');

var id = "5c6f0ee8f75ab8c8500eba78";

Todo.find({
    _id : id
}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({
    _id : id
}).then((todo)=>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo)
    {
        return console.log('Id not found');
    }
    console.log('Todo by id',todo);
}).catch((e)=>{
    console.log(e);
});
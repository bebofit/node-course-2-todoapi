const expect = require('expect');
const request = require('supertest');

const {app} = require('../server');
const {Todo} = require('../models/Todo');

beforeEach((done)=>{
    Todo.remove({}).then(()=>{done()})
})

describe('Post /todos', ()=>{
    it('Should create a new todo'), (done)=>{
        var text = "test todo Text";

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
              return  done(err)
            }

            Todo.find().then((todos)=>{
                expect(todos.length).toBe(3);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((er)=>{done(er)})
        })
    }
})
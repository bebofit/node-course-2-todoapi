const {mongoose} = require('../db/mongoose');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const _= require('lodash')

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim : true,
        unique : true,
        validate: {
            validator:validator.isEmail,
            message: '{value} is not an email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken = function (){
    let user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123')
    user.tokens= user.tokens.concat([{
        access,
        token
    }])
    return user.save().then(()=>{
        return token;
    })
};
var User = mongoose.model('User',UserSchema)
module.exports ={User}
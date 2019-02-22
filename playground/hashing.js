const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

var data = {
    id: 10
}

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc')
console.log('decoded ', decoded);
// var message = " I am user number 3"
// var hash = SHA256(message).toString();
// console.log("MEssage: ", message);
// console.log("hashed: ", hash);

// // var data ={
// //     id : 4
// // };

// // var token = {
// //     data: data,
// //     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// // }

// // // token.data.id = 5;
// // // token.hash = SHA256(JSON.stringify(token.data)).toString();

// // var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// // if(resulthash == token.hash)
// // {
// //     console.log('Data was not changed');
// // }
// // else{
// //     console.log("dont trust");
// // }


const bcrypt = require('bcryptjs')
var password = '123abc!';

bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    })
})

var hashpassword = "$2a$10$WYayjIwT8hwhYuIrgkz2NeJD.S3r74i8DQTVEdYCJA.6hF4TSw6U2";
bcrypt.compare(password,hashpassword, (err,flag)=>{
    console.log(flag);
})
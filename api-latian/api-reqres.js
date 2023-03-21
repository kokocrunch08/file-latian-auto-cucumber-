const httpLib = require('supertest');
const apiServer = httpLib('https://reqres.in/api/')

function getUSer() {
    return apiServer.get('users?page=2').set('username', 1234);
}

function createUser() {
    return apiServer.post('users')
    .send({
        "name": "morpheus",
        "job": "leader"
    })
}

function createUser1(data) {
    return apiServer
    .post('users')
    .send(data)
}
module.exports ={
    getUSer,
    createUser,
    createUser1
}
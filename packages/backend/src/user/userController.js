const { request, response, json } = require('express');
var userService = require('./userService');

var getDataControllerfn = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    var employee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": employee });
} 

var createUserControllerFn = async (req, res) =>
{
   console.log('req::::',req.url)
    console.log('res::::',req.body)

    var status = await userService.createUserDBService(req.body)
   // console.log("req",req)

    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

var updateUserControllerFn = async (req, res) =>
{
   console.log('req::::',req)

    var status = await userService.updateUserDBService(req.params.id,req.body)

    if (status) {
        res.send({ "status": true, "message": "User updated" });
    } else {
        res.send({ "status": false, "message": "User Updated Failed" });
    }
}

var deleteUserControllerFn = async (req, res) =>
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}

module.exports = {getDataControllerfn,createUserControllerFn,updateUserControllerFn,deleteUserControllerFn};
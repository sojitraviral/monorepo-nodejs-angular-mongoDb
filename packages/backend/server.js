var express = require('express');
var server = express();
var routes = require('./routes/routes');
var cors = require('cors');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/est", function checkDB(error){
    if(error){
        console.log("DBError");
    }
    else{
        console.log("DB Connected");
    }
})


server.use(cors())
server.use(express.json())    // <==== parse request body as JSON
server.use(routes);

server.listen(8000);
function check(error) {

    if (error) {
        console.log("erorrr");
    }
    else {
        console.log("startedd");
    }
}
check();


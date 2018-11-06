

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('./'));

// for getting stuff out of the post request
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var server = app.listen(7000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

// takes email from form input and sends it back
app.post('/checkRecord',urlencodedParser, function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send(JSON.stringify(req.body.email));
   
   // here you can use the email to search using sql query and return query answer to client using send
   // ca use send only once so have to send record data together
   
})

// to load the html when client first connected
app.get('/', function (req, res) {
   res.sendFile("/home/raj/Desktop/dbprj/dbproj.html");
   //res.sendFile("/home/raj/Desktop/dbprj/medical2.jpeg");
})



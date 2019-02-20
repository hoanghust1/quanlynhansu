var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
require('dotenv').load();
var app = new express();
var port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes'); //importing route
routes(app);

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");  
    res.status(404).send({url: req.originalUrl + ' không thấy'})
})

app.set('port', process.env.port || port);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var manvv = 1;
app.listen(port);

console.log("Connected");
// app.get('/', function (request, response) {
//     con.connect(function (err) {
//         if (err) throw err;
//         var sql = "SELECT * FROM nhanvien";
//         con.query(sql, function (err, results) {
//             if (err) throw err;
//             console.log(results);
//             response.render("quanlynhanvien", { nhanvien: results });
//         });
//     });
// });
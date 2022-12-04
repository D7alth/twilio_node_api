var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Thisisjava()',
    database:'raul_canal_api'
});
console.log("Connect");

module.exports = con;

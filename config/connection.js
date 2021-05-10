const mysql = require("mysql");
require("dotenv").config()

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log('Successfully connected: ' + connection)
} else {
    connection = mysql.createConnection({
        host: "mysql://be8733f5cfd88e:11f27829@us-cdbr-east-03.cleardb.com/heroku_e6496fad3f50a24?reconnect=true",
        port: '3306',
        user: "	be8733f5cfd88e",
        password: "	11f27829",
        database: "heroku_e6496fad3f50a24"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.message);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection

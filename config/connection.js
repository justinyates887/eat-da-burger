const mysql = require("mysql");
require("dotenv").config()

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log('Successfully connected: ' + connection)
} else {
    connection = mysql.createConnection({
        host: "localhoste",
        port: '3306',
        user: "	root",
        password: "	11f27829",
        database: "borgers"
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

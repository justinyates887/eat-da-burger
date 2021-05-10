const mysql = require("mysql");
require("dotenv").config()

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log('Successfully connected: ' + connection)
} else {
    connection = mysql.createConnection({
        host: "frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: '3306',
        user: "	be8733f5cfd88e",
        password: "	11f27829",
        database: "	heroku_e6496fad3f50a24"
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

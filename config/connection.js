// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  // host: "localhost",
  // port: 3306,
  // user: "root",
  // password: "password",
  // database: "burger_db"
  host     : 'us-cdbr-iron-east-02.cleardb.net',
  user     : 'baed20b7102e26',
  password : '276cca21396c96f',
  database : 'heroku_754c80a796b5eff'


});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

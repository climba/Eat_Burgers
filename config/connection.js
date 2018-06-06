// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "DATABASE_URL",
  port: 3306,
  user: "root",
  password: "",
  database: "postgresql-fluffy-25188"
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

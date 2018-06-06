// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "vk0dwomusju5coz7",
  password: "rtnul2v16euax9qx",
  database: "f0augg0ycswubvc7"
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

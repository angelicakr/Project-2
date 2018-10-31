// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){

  connection = mysql.createConnection(process.env.JAWSDB_URL);
  
//  } else {
//   connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "barkfinder_db"
//   });
// };
 } else {
  connection = mysql.createConnection({
  host: "u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qjurcdcciq0yblgc",
  password: "e0wstehbvnelagvf",
  database: "ypgck54ufpkcdtbf"
  });
};

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

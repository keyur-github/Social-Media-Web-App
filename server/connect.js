import mysql from "mysql";
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "social",
    port: 3306
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});
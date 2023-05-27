const mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_mushymatch"
});

// conn.getConnection((err) => {
//     if (err) throw err
//     console.log('DB Connected')
// });

exports.db = db;
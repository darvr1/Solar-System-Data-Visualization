const mysql = require('mysql');

const connection = mysql.createConnection({
    host:     'localhost',
    user:     'student',
    password: 'student',
    database: 'group_project_db'
})

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;
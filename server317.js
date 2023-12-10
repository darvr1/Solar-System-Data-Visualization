var message = 'CSC-317 startup template\n'
         + 'This template uses nodeJS, express, and express.static\n';

var port = 3000;
var path = require('path');
var express = require('express');
var app = express();
const fs = require('fs');

var StaticDirectory = path.join(__dirname, 'public');

app.use(express.urlencoded({extended: true}));
app.use(express.static(StaticDirectory));
// Set up a route for the home page

// bcrypt
const bcrypt = require('bcrypt');
function hashit(pwd) {
    const hash = bcrypt.hash(pwd, 12);
    return hash;
}

async function compareit(pwd, hash) {
    return await bcrypt.compare(pwd, hash);
}

// MySQL add account
const connection = require('./database');

app.post('/addAccount', (req, res) => {
    let usernametemp = req.body.username;
    const username = usernametemp.trim();
    const password = hashit(req.body.password);

    // Check if input field is empty
    if (!(username == "" || req.body.password == "")) {
        password.then((result) => {
        const query = `INSERT INTO accounts VALUES ('${username}', '${result}')`;
            connection.query(query, (err, res) => {
                if (err) throw err;
            });
        });
        // Redirect to login page
        setTimeout(() => {
            res.redirect('./login.html');
        }, 800);
    } else {
        res.send('Username cannot be empty!');
    }
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

console.log(message);
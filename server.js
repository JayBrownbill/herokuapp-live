const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
var http = require('http');
var https = require('https');
var fs = require('fs');
var utils = require('util');
var mysql = require('mysql');


const app = express();
var host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 5000;    //Run app on whatever port is live have or run my port 5000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.json({ type: 'application/json' }))
app.use(morgan('short'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));


app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.send(path.join(__dirname, 'client', 'build', 'index.html '));
});

// app.get('*', (req, res) => {
//   res.send(path.join(__dirname,'client','build','index.html '));
// });


// var connection = mysql.createConnection({
//   host: 'eu-cdbr-west-02.cleardb.net',
//   user: 'bb8dc375142522',                    ONLINE SQL CONNECTION
//   password: 'bce7f4ff',
//   port: '3306',
//   database: 'heroku_c41b8d908c2461c',

// })

function getConnection() {
  return mysql.createConnection({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'b4b4afbc10b55e',
    password: '83cf1c87',
    port: '3306',
    database: 'heroku_d4f17cbece4a437',

  })
}

const connection = getConnection();

let DBTOKEN = "";
connection.connect(function (err) {
  if (!err) {
    console.log("Successfully Connected.");
    var succsToken = "Vodo SQL Live";
    DBTOKEN = succsToken;

  } else {
    console.log("Failed to connect.");
    var failToken = "SQL Connection failed!!!"
    DBTOKEN = failToken;
  }
});


app.get('/api/responsecheck', (req, res) => {
  res.send({ express: 'SERVER IS ACTIVE!' });
});

app.get('/api/databasecheck', (req, res) => {
  res.send({ express: DBTOKEN });
});

app.get('/api/register', (req, res) => {

  res.json([user1, user2]);

});



app.post('/api/add', (req, res) => {
  console.log('attempting to create a new user....');

  // let bodytest = JSON.parse(JSON.stringify(req.body));

  console.log(req.body.usrname);
  console.log(req.body.email);

  const Query_Insert = "INSERT INTO register_usr (name, email) VALUES(?, ?)"
  getConnection().query(Query_Insert, [req.body.usrname, req.body.email], (err, results, fields) => {
    if (err) {
      console.log('Error inserting new user...' + err);
      res.sendStatus(500);
      return;
    } else {
      console.log('New user has successfully been inserted to DB: ', results.insertedId);
      res.end();
    }
  });
});


app.get("/api/db", (req, res) => {
  const query_ReadAll = "SELECT * FROM register_usr"
  getConnection().query(query_ReadAll, function (err, rows, fields) {
    if (!!err) {
      res.sendStatus(500);
      console.log("error in query");

    } else {
      res.json(rows);
      console.log("successful query... refer back to browser");
    }
  });
})



app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


// https.createServer({}, app).listen({port}, () => {
//   console.log(`Listening on port ${port}`);
// })



process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
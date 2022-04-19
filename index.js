const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries')
const { response } = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//if your app has inputs or url-encoded data (stuff that is passed to the server in the url) you can access that info with the req object
//the res object is what you will use when it's time for your server to send its response

/*app.get('/', function (req, res) { --> using this gets the index.html page loaded on the port
    //res.sendFile('index.html', {root: __dirname});
  })*/
  app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)

  app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });


const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@e-kaly.p3zus.mongodb.net/ekaly?retryWrites=true&w=majority";

app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/', function (req, res) {
    res.send('Hello World')
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('Connected to Database')
  client.close();
});

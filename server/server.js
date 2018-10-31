const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then( (client) => {
  const db = client.db('bucket_list');
  const wishesCollection = db.collection('wishes');
  const wishesRouter = createRouter(wishesCollection);
  app.use('/api/wishes', wishesRouter);
  })
  .catch(console.err);

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
});

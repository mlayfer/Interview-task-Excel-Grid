var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

router.post('/api/Sheet/Save', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  res.sendStatus(200);
  // MongoClient.connect("mongodb+srv://xxxxx:xxxxx@cluster0-tiyuf.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }, function(err, client) {
  //   var dbo = client.db("closer");
  //   var myquery = { _id : ObjectID(req.body._id) };
  //   var newvalues = { $set: { row: req.body.x, col: req.body.y, text: req.body.text } };
  //   dbo.collection("grid").updateOne(myquery, newvalues, function(err, result) {
  //     if (err) throw err;
  //     res.send("Number of documents updated: " + result.modifiedCount);
  //     client.close();
  //   });
  // });
});

module.exports = router;

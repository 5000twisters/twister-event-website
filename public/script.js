const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://5000twisters:<M3ga0rangeatlas>@twister.tpr4klp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
app.post('/submit', (req, res) => {
    const { name, email, options, boxes } = req.body;
    // Validate email and check for duplicates
    // Update counter and send submission data to MongoDB
  });
  
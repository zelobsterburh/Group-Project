const express = require("express");
const app = express();
const router = express.Router();

app.get("/", (req, res) => res.send("Hello world!"));
const port = process.env.PORT || 8082;
//app.listen(port, () => console.log(`Server running port ${port}`));

const { MongoClient, ServerApiVersion } = require('mongodb');
const Items = require("./models/Items");
const uri = "mongodb+srv://bcj33435:kQKlwN1PuWnJIsya@cluster0.fmafctw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
const items = ('/routes/api/items');
app.use('/api/items', Items);
router.get('/', (req, res) => {res.send('testing get / item route')});
router.get('/:id', (req, res) => {res.send('testing get /:id route')});
router.post('/', (req, res) => {res.send('testing post / route')});
router.put('/:id', (req, res) => {res.send('testing put /:id route')});
router.post('/', (req, res) => {
  Item.create(req.body)
  .then((item) => res.json({ msg: 'Item added successfully'}))
  .catch((err) => res.status(400).json({ error: 'unable to add this item'}));
});
const express = require("express");

const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const uri = "mongodb+srv://admin:gOXcNwL2Ma1iUPfm@cluster0.0wtvf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// admin
// gOXcNwL2Ma1iUPfm

let db;
let usersCollection;

async function run() {
      try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");

            // Specify the database and collection
            db = client.db("Users"); // Replace 'myDatabase' with your database name
            usersCollection = db.collection("collection_users"); // This creates the 'users' collection if it doesn't exist
      } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
      }
}
run().catch(console.dir);


app.post("/register", (req, res) => {
      console.log(req.body);
  res.send(req.body.username)
});

if(process.env.NODE_ENV == "production"){
      app.use(express.static("frontend/build"));
}

app.listen(PORT, () => {
      console.log("server is running on port 5000");
});

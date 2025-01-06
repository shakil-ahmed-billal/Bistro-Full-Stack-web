const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
require('dotenv').config()
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


// user verification toke middleware 
const verifyToken = ( req , res , next) =>{
  const userToken = req.headers.authorization;
  if(!userToken){
    return res.status(401).send({message: 'Unauthorize Token user'})
  }
  const token = userToken.split(' ')[1]
  console.log(token)
  if(!token){
    return res.status(401).send({message: 'Unauthorize Token user'})
  }
  jwt.verify(token , process.env.SECRET_KEY , (err , decode)=>{
    if(err){
      return req.status(401).send({message: "forbidden access"})
    }
    req.user = decode ;
    next()
  })
}


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ldsdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const db = client.db('BistroDB')
    const userCollection = db.collection('users')
    const menuCollection = db.collection('menu')
    const cartCollection = db.collection('cart')
    const reviewsCollection = db.collection('reviews')

    // user verification token make api
    app.post('/jwt' , (req , res)=>{
      const user = req.body
      const toke = jwt.sign(user , process.env.SECRET_KEY , {expiresIn: '1h'})
      res.send(toke)
    })
    // all food menu items api make
    app.get('/menu' , async (req , res)=>{
      const result = await menuCollection.find().toArray()
      res.send(result)
    })
    // all review api 
    app.get('/review' , async (req , res)=>{
      const result = await reviewsCollection.find().toArray()
      res.send(result)
    })
    app.get('/cart' , async (req , res)=>{
      const result = await cartCollection.find().toArray()
      res.send(result)
    })
    // all user data load api
    app.get('/users',verifyToken , async(req , res)=>{
      console.log(req.headers)
      const result = await userCollection.find().toArray()
      res.send(result)
    })


    // foods  cart api 
    app.post('/cart' , async(req , res)=>{
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem)
      res.send(result)
    })
    // new user add server api
    app.post('/user' , async(req , res)=>{
      const data = req.body;
      const query = {email: data.email}
      const findEmail = await userCollection.findOne(query)
      if(findEmail){
        return res.send({message: "user already exists" })
      }
      const result =await userCollection.insertOne(data)
      res.send(result)
    })
    // cart food items delete api 
    app.delete('/cart/:id' , async(req , res)=>{
      const id = req.params.id;
      console.log(id)
      const query = {_id: new ObjectId(id)}
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })
    // user delete api
    app.delete('/user/:id' , async (req , res)=>{
      const id = req.params.id ;
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })



    // user admin role set api
    app.patch('/user/admin/:id' , async (req , res)=>{
      const id = req.params.id ;
      const query = {_id: new ObjectId(id)}
      const updateDoc = {
        $set: {
          role: 'admin'
        }
      }
      // const optional = {upsert: true}
      const result = await userCollection.updateOne(query , updateDoc)
      res.send(result)
    })

    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const dbURI = 'mongodb://127.0.0.1:27017/db1'; // Replace with your MongoDB connection URL
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define your API routes here


const Dog = mongoose.model('Dog', {
    weight: {
        imperial: String,
        metric: String,
      },
      height: {
        imperial: String,
        metric: String,
      },
      id: Number,
      name: String,
      breed_group: String,
      life_span: String,
      temperament: String,
      reference_image_id: String,
      img: String,
    
});

app.get('/dogs',  (req, res) => {
  const findDogs = async()=>{
try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    console.error('Error fetching dogs:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  }
  findDogs()
});
app.get('/search',(req,res)=>{
  const findDogs = async()=>{
    try {
      const name = req.query.searchDog;
        const dogs = await Dog.find({ name: { $regex: `${name}`, $options: "i" } });
        res.json(dogs);
      } catch (err) {
        console.error('Error fetching dogs:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      }
      findDogs()
})
app.get('/sort',(req,res)=>{
  const sortDogs = async()=>{
    try{
      const sort = req.query.sort;
      if(sort=='ascending'){
        var dogs = await Dog.find().sort({name:1})
      }else{
        var dogs = await Dog.find().sort({name:-1})
      }
      res.json(dogs);
      
    }catch (err) {
      console.error('Error fetching dogs:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  sortDogs();
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
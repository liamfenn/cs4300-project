const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Add this line to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
const port = process.env.PORT || 3001;

const items = require('./routes/api/items');
app.use('/api/items', items);
const users = require('./routes/api/users');
app.use('/api/users', users);

// Replace your MongoDB connection code with this
const uri = "mongodb+srv://lliamfennell:9h3eASskslPQI3Kk@cluster0.cmngpl0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connected...');
  })
.catch(err => console.log(err));

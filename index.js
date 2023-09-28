const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://abhishekumar11082001:QPE6u9kZq9UoxoNf@myproject.lsvd9td.mongodb.net/MyProject?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

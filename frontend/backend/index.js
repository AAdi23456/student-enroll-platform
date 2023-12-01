const express = require('express');
const mongoose = require('./models/db');
const studentRoutes = require('./routes/student');
const app = express();
const PORT = 8080;
const cors=require("cors")

mongoose.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(cors())
app.use('/', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ruleRoutes = require('./routes/ruleRoutes');

mongoose.connect('mongodb://localhost:27017/rule-engine', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());

app.use('/api', ruleRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

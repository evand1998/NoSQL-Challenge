const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3603;
app.use(express.static('public'));
app.use(require('./routes/api'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URI || 'mongodb:', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
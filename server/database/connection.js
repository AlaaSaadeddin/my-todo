const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('database connection successful'))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;

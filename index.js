const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
const passport = require('passport');
const googleStrat = require('passport-google-oauth20');
require('./models/user');

mongoose.connect(keys.mongoURI);
app.set('view engine', 'ejs');
app.use(passport.initialize());

if (process.env.NODE_ENV==='production') {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

require('./routes/auth.js')(app);

app.get('/api/message', (req,res)=> {
  res.send('HI');
})

app.listen(process.env.PORT || 5000, process.env.IP);

const mongoose = require('mongoose');

const {Schema} = mongoose;

const userschema = new Schema ({
  googleid: String,
  name : String
});

mongoose.model('User', userschema);

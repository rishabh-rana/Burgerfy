const mongoose = require('mongoose');

const {Schema} = mongoose;

const orderschema = new Schema ({
  cart : [
    {
      code : Number,
      quantity : Number
    }
  ],
  customcart : [
    {
      description : String,
      quantity : Number,
      price : Number
    }
  ],
  price : Number
});

mongoose.model('Order', orderschema);

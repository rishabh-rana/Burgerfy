const mongoose = require("mongoose");

const { Schema } = mongoose;

const userschema = new Schema({
  googleid: String,
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});

mongoose.model("User", userschema);

const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
},
email: {
    type: String,
    trim: true,
    required: true,
    // validate: {
    //     validator: (value) => {
    //         const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    //         return value.match(re);
    //     },
    //     message: "please enter correect email",
    // }
},
password: {
    type: String,
    required: true
},
phoneNumber: {
    type: String,
    required: true
},
followers: {
    type: Array,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  following: {
    type: Array,
    required: true,
  },
  blockedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewUsers",
    },
  ],
  blockedByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewUsers",
    },
  ],
  location: {},
  expoPushToken: {
    type: String,
  },
});

const NewUsers = new mongoose.model("NewUsers", dbSchema);

module.exports = NewUsers;

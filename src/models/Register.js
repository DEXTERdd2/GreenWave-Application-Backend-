const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  phoneNumber: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
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

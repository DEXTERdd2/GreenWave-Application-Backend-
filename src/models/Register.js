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
    validate: {
        validator: (value) => {
            const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

            return value.match(re);
        },
        message: "please enter correect email",
    }
},
password: {
    type: String,
    required: true
},
phoneNumber: {
    type: String,
    required: true
}
});

const NewUsers = new mongoose.model("NewUsers", dbSchema);

module.exports = NewUsers;

const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minlength: [3, "First name must be at least 3 characters!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
        minlength: [3, "Last name must be at least 3 characters!"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Must be at least 18 to be a member!"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Member", MemberSchema);
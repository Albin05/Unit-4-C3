const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, minlength: 3, maxlength: 30, required: true},
        lastName: {type: String, minlength: 3, maxlength: 30},
        age: {type: Number, required: true, min: 1, max: 150},
        email: {type: String, required: true, unique:true},
        profileImages: [{type: String, required: true}]
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);
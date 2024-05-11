const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, trim: true, required: true},
    description:{type: String, trim: true, required: true},
    image:{type: String, trim: true, required: true},
    userId:{type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdAt:{type: Date, default: Date.now},
    updated:{type: Date, default: Date.now}
});

module.exports = mongoose.model("post", postSchema);
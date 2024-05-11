const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    userId:{type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    postId: {type: mongoose.Schema.Types.ObjectId, ref: 'post'},
    createdAt:{type: Date, default: Date.now},
    updated:{type: Date, default: Date.now}
});

module.exports = mongoose.model("comment", commentSchema);
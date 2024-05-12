'use strict'
const User = require('./user') //require the model
const Comment = require('./comment');
const Post = require('./post');

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(Post);
Post.hasMany(Comment);

async function init() {
    await User.sync(); // sync the model
    await Post.sync();
    await Comment.sync();
};

init();

module.exports = {
User, Post, Comment// export the model
// also export any extra models here
};
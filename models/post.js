var mongoose = require('mongoose');

// User Schema
var PostSchema = mongoose.Schema({
	title: {
		type: String,
		index:true
	},
	description: {
		type: String
	},
	imagepath: {
		type: String
	},
	date: {
		type: Date
	},
    updated: { type: Date, default: Date.now }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.createPost = function(newPost, callback){
	newPost.save(callback);
}

module.exports.getPostById = function(id, callback){
	Post.findById(id, callback);
}
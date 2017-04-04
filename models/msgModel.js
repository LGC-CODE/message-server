var mongoose = require('mongoose');

var msgSchema = new mongoose.Schema({
	text: String,
	fromUser: String,
	room: String,
	avatar: String
});

mongoose.model('msgModel', msgSchema);
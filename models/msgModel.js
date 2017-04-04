var mongoose = require('mongoose');

var msgSchema = new mongoose.Schema({
	name: String,
	comment: String
});

mongoose.model('msgModel', msgSchema);
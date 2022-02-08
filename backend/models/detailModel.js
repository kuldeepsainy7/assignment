const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetailSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			minlength: 4,
			maxlength: 255,
		},
		userName: {
			type: String,
			required: true,
			minlength: 4,
			maxlength: 255,
		},
		fullName: {
			type: String,
			// required: true,
			// minlength: 4,
			// maxlength: 255,
		},
		
		created_at: {
			type: Date,
			default: Date.now,
			required: true
		},
	}
);

const collectionName = "detail"; // Name of the collection of documents
const Detail = mongoose.model(collectionName, DetailSchema);
module.exports = Detail;


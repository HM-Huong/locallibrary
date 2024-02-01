const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookInstanceSchema = Schema({
	book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
	imprint: { type: String, required: true },
	status: {
		type: String,
		required: true,
		enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
		default: 'Maintenance',
	},
	// note that you must only use Date.now (not Date.now()) because it will be called when the model is created
	dua_back: { type: Date, default: Date.now },
});

// Virtual for book instance's URL
BookInstanceSchema.virtual('url').get(function () {
	// don't use arrow function here because we need this object
	return `/catalog/bookinstance/${this._id}`;
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);

const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const AuthorSchema = mongoose.Schema({
	first_name: { type: String, required: true, maxLength: 100 },
	family_name: { type: String, required: true, maxLength: 100 },
	date_of_birth: { type: Date },
	date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function () {
	// don't use arrow function here because we need this object
	let fullName = '';
	if (this.first_name && this.family_name) {
		fullName = `${this.family_name}, ${this.first_name}`;
	}

	return fullName;
});

// Virtual for author's URL
// don't use arrow function here because we need this object
AuthorSchema.virtual('url').get(function () {
	return `/catalog/author/${this._id}`;
});

// Virtual for author's lifespan
// don't use arrow function here because we need this object
AuthorSchema.virtual('lifespan').get(function () {
	let lifespan = '';
	if (this.date_of_birth) {
		lifespan = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
	} else {
		lifespan = 'Unknown';
	}

	if (this.date_of_death) {
		lifespan += ` - ${DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)}`;
	}

	return lifespan;
});

module.exports = mongoose.model('Author', AuthorSchema);

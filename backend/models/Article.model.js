const moongoose = require('mongoose');


const ArticleSchema = moongoose.Schema({
	title: {
		type: String,
		maxLength: 100,
		required: ['true', 'please provide a title'],
	},
	content: {
		type: String,
		maxLength: 100,
		required: ['true', 'please provide a content'],
	},
	excerpt: {
		type: String,
		maxLength: 500,
		required: ['true', 'please provide an excerpt'],
	},
	score: {
		type: Number,
		required: ['true'],
		min: 0,
		max: 100,
	},
	directors: {
		type: String,
		required: ['true'],
	},
	actors: {
		type: [String],
		required: ['true'],
		validate: {
			validator: (array) => {
				return array.length >= 2;
			},
			message: 'Please provide an actors at least three',
		},
	},
	status: {
		type: String,
		required: true,
		enum: ['draft', 'public'],
		default: 'draft',
		index: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = moongoose.model('Article', ArticleSchema);

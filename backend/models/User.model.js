const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: ['true', 'Please provide email'],
			validate: {
				validator: validator.isEmail,
				message: 'Please provide a valid email',
			},
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: ['true', 'Please provide an password'],
			trim: true,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
		firstName: {
			type: String,
			maxLength: 100,
			trim: true,
		},
		lastName: {
			type: String,
			maxLength: 100,
			trim: true,
		},
		age: {
			type: Number,
		},
		date: {
			type: Date,
			default: Date.now,
		},
		verified: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre('save', async function () {
	if (!this.isModified('password')) return next();

	const salt = await bcrypt.genSalt(12);

	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.generateToken = function () {
	const token = jwt.sign(
		{ id: this._id, email: this.email },
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRES_IN,
		}
	);
	return token;
};

UserSchema.statics.emailExists = async function (email) {
	const user = await this.findOne({email});
	return !!user;
};





const User = mongoose.model('User', UserSchema);

module.exports = User;
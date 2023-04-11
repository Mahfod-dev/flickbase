const User = require('../../models/user.model');
const { findUserByEmail } = require('../users/user.features');
const { BadRequestError, UnauthenticatedError } = require('../../errors');

const checkUser = async (email, password) => {
	console.log(email, password);

	try {
		const isMatch = await User.emailExists(email);

		if (isMatch) {
			throw new BadRequestError('email already exists');
		}

		const user = await User.create({
			email,
			password,
		});
		return user;
	} catch (error) {
		throw error;
	}
};

const generateToken = async (user) => {
	const token = await user.generateToken();
	return token;
};

const signinWithEmailAndPass = async (email, password) => {
	try {
		const user = await findUserByEmail(email);

		if (!user) {
			throw new UnauthenticatedError('user not found');
		}

		const isMatch = await user.comparePassword(password);

		if (!isMatch) {
			throw new UnauthenticatedError('password is incorrect');
		}

		return user;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	checkUser,
	generateToken,
	signinWithEmailAndPass,
};
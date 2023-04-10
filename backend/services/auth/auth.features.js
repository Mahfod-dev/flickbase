const User = require('../../models/user.model');
const { findUserByEmail } = require('../users/user.features');

const checkUser = async (email, password) => {
	console.log(email, password);

	try {
		const isMatch = await User.emailExists(email);

		console.log(isMatch);

		if (isMatch) {
			throw new Error('email already exists');
		}

		const user = await User.create({
			email,
			password,
		});
		return user;
	} catch (error) {
		console.log(error.message);
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
			throw new Error('user not found');
		}

		const isMatch = await user.comparePassword(password);

		if (!isMatch) {
			throw new Error('password is incorrect');
		}

		return user;
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
	checkUser,
	generateToken,
	signinWithEmailAndPass,
};
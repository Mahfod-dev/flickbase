const User = require('../../models/user.model');
const httpStatus = require('http-status');

const findUserByEmail = async (email) => {
	const user = await User.findOne({ email });
	return user;
};

module.exports = {
	findUserByEmail,
};

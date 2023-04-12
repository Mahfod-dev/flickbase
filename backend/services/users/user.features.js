const User = require('../../models/user.model');

const findUserByEmail = async (email) => {
	const user = await User.findOne({ email });
	return user;
};

module.exports = {
	findUserByEmail,
};

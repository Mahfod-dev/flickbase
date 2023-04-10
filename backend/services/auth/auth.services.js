const { checkUser, generateToken } = require('./auth.features');

const register = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await checkUser(email, password);
		const token = await generateToken(user);

		res.status(201).json({ user, token });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	register,
};

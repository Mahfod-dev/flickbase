const {
	checkUser,
	generateToken,
	signinWithEmailAndPass,
} = require('./auth.features');
const httpStatus = require('http-status');

const register = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await checkUser(email, password);
		const token = await generateToken(user);

		res.cookie('x-access-token', token, {
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		})
			.status(httpStatus.CREATED)
			.json({ user, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await signinWithEmailAndPass(email, password);
		const token = await generateToken(user);

		res.cookie('x-access-token', token, {
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		})
			.status(httpStatus.OK)
			.json({ user, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	register,
	login,
};

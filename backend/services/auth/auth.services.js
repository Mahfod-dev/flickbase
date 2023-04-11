const {
	checkUser,
	generateToken,
	signinWithEmailAndPass,
} = require('./auth.features');
const httpStatus = require('http-status');

const register = async (req, res, next) => {
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
		next(error);
	}
};

const login = async (req, res, next) => {
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
		next(error);
	}
};

module.exports = {
	register,
	login,
};

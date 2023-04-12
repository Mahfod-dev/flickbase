const passport = require('passport');
const { UnauthorizedError } = require('../errors');

const auth = async (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (err, user, info) => {
		if (err) {
			next(err);
		}

		if (!user) {
			next(new UnauthorizedError(info.message));
		}
		req.user = {
			id: user._id,
			email: user.email,
			role: user.role,
			firstName: user.firstName,
			lastName: user.lastName,
			age: user.age,
			verified: user.verified,
		};
		next();
	})(req, res, next);
};

module.exports = auth;

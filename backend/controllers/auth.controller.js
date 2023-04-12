const {authService} = require('../services');


const authController = {
	register: authService.register,
	login: authService.login,
	isAuth: authService.isAuth,
};

module.exports = authController;
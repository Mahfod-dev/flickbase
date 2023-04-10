const {authService} = require('../services');


const authController = {
	register: authService.register,
	login: authService.login,
};

module.exports = authController;
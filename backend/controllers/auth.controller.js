const {authService} = require('../services');


const authController = {
    register : authService.register
}

module.exports = authController;
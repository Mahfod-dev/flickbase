const {userService} = require('../services');

const userController = {
    getAllUsers: userService.getAllUsers,
}

module.exports = userController;
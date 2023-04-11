const StatusCodes = require('http-status');
const CustomAPIError = require('./custom-api');

class UnauthorizedError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statusCode = StatusCodes.FORBIDDEN;
	}
}

module.exports = UnauthorizedError;

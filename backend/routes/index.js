const express = require('express');

const router = express.Router();

const authRoute = require('./auth.route');
const userRoute = require('./user.routes');

const RouterIndex = [
	{
		path: '/auth',
		route: authRoute,
	},
	{
		path: '/users',
		route: userRoute,
	},
];

RouterIndex.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');


router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/isauth', auth, authController.isAuth);
// router.post('/testrole', auth('readAny', 'test'), authController.testrole);

module.exports = router;

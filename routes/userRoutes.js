const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/users', userController.getAllUsers);
router.get('/details', authMiddleware, userController.getPersonalDetails);
router.post('/details', authMiddleware, userController.createPersonalDetails);

module.exports = router;
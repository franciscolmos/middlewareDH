// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/userLogs');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/services', mainController.root);
router.get('/services/design', mainController.root);
router.get('/admin',adminMiddleware.verifyAdmin, mainController.welcome);

module.exports = router;

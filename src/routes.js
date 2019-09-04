const express = require('express');
const router = express.Router();

const helloController = require('./controllers/hello');

router.route('/stock').get((req, res, next) => res.status(200).json(require('./controllers/stock')));
router.route('/products').get((req, res, next) => res.status(200).json(require('./controllers/product')));
router.route('/hello').get(helloController.get);

module.exports = router;
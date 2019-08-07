const express = require('express');
const router = express.Router();

router.route('/stock').get((req, res, next) => res.status(200).json(require('./controllers/stock')));
router.route('/products').get((req, res, next) => res.status(200).json(require('./controllers/product')));

module.exports = router;
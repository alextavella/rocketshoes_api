const express = require('express');
const router = express.Router();

router.route('/stock').get((req, res, next) => res.status(200).json(require('./controllers/stock')));
router.route('/products').get((req, res, next) => res.status(200).json(require('./controllers/product')));
router.route('/hello').get((req, res, next) => res.status(200).json({ message: 'Hello World!' }));

module.exports = router;
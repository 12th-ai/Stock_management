const express = require('express');
const router = express.Router();
const stockController = require('../Controllers/Stock_inControl');
const db = require('../Config/db');

router.post('/stock_in', stockController.addStock);
// router.get('/stock_in', stockController.getAllStocks);
router.delete('/stock_in/:stock_id', stockController.deleteStock);
// router.put('/stock_in/:stock_id', stockController.updateStock);
router.put('/stock_in/:stock_id', stockController.updateStock);


router.get('/stock_in/count', stockController.getAllStockCount);

router.get('/stock_in', stockController.getAllStockData);
router.get('/stock_in/search', stockController.getFilteredStockDataByDate);
router.get('/stock_in/search/term', stockController.getFilteredStockDataByTerm);




module.exports = router;
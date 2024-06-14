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

// 
// routes/stockRoutes.js


// Route to fetch all stock data
// router.get('/stock_in', async (req, res) => {
//   const { page = 1, limit = 5 } = req.query;
//   const offset = (page - 1) * limit;

//   try {
//     const [rows] = await db.query('SELECT * FROM stock_in LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)]);
//     const [[{ count }]] = await db.query('SELECT COUNT(*) AS stock_id FROM stock_in');
//     res.json({ data: rows, count });
//   } catch (error) {
//     console.error('Error fetching stock data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to fetch filtered stock data by date range
// router.get('/stock_in/search', async (req, res) => {
//   const { page = 1, limit = 5, from, to } = req.query;
//   const offset = (page - 1) * limit;

//   let query = 'SELECT * FROM stock_in WHERE 1=1';
//   let countQuery = 'SELECT COUNT(*) AS stock_id FROM stock_in WHERE 1=1';
//   const params = [];

//   if (from) {
//     query += ' AND date >= ?';
//     countQuery += ' AND date >= ?';
//     params.push(from);
//   }
//   if (to) {
//     query += ' AND date <= ?';
//     countQuery += ' AND date <= ?';
//     params.push(to);
//   }

//   query += ' LIMIT ? OFFSET ?';
//   params.push(parseInt(limit), parseInt(offset));

//   try {
//     const [rows] = await db.query(query, params);
//     const [[{ count }]] = await db.query(countQuery, params);
//     res.json({ data: rows, count });
//   } catch (error) {
//     console.error('Error fetching filtered stock data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to fetch filtered stock data by search term
// router.get('/stock_in/search/term', async (req, res) => {
//   const { page = 1, limit = 5, term } = req.query;
//   const offset = (page - 1) * limit;

//   let query = 'SELECT * FROM stock_in WHERE product_code LIKE ?';
//   const params = [`%${term}%`];

//   query += ' LIMIT ? OFFSET ?';
//   params.push(parseInt(limit), parseInt(offset));

//   try {
//     const [rows] = await db.query(query, params);
//     const [[{ count }]] = await db.query('SELECT COUNT(*) AS count FROM stock_in WHERE product_code LIKE ?', [`%${term}%`]);
//     res.json({ data: rows, count });
//   } catch (error) {
//     console.error('Error fetching stock data by term:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


module.exports = router;



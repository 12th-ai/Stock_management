// const db = require('../Config/db');

// const addStock = async (stockData) => {
//     const { product_code, product_name, unit_price, date, amount, owner,suppliers } = stockData;

//     // Calculate total_price
//     const total_price = unit_price * amount;

//     const [existingProduct] = await db.query('SELECT * FROM stock_in WHERE product_code = ? OR product_name = ?', [product_code, product_name]);

//     if (existingProduct.length > 0) {
//         throw new Error('Product already exists');
//     }

//     const values = [product_code, product_name, unit_price, date, amount, total_price, owner,suppliers];
//     const [result] = await db.query('INSERT INTO stock_in (product_code, product_name, unit_price, date, amount, total_price, owner,suppliers) VALUES (?)', [values]);

//     return result;
// };




// const updateStock = async ( stockData, stockId) => {
//     const { product_code, product_name, unit_price, date, amount, owner,suppliers } = stockData;
//         const total_price = unit_price * amount;
//     const [result] = await db.query('UPDATE stock_in SET product_code = ?, product_name = ?, unit_price = ?, date = ?, amount = ?, total_price = ?, owner = ? WHERE stock_id = ?', [product_code, product_name, unit_price, date, amount, total_price, owner,suppliers, stockId]);
//     return result;
// };


// const getstock_in_Count = async () => {
//     const query = 'SELECT COUNT(*) AS stock_id FROM stock_in';
//     try {
//         const [rows] = await db.query(query);
//         return rows[0].stock_id;
//     } catch (err) {
//         throw new Error('Database query failed: ' + err.message);
//     }
//   };
   

//   const getAllStocks = async ({ page, limit }) => {
//     const offset = (page - 1) * limit;
//     const [result] = await db.query('SELECT * FROM stock_in LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)]);
//     const [count] = await db.query('SELECT COUNT(*) AS stock_id FROM stock_in');
//     return { data: result, count: count[0].stock_id };
// };



// const deleteStock = async (stockId) => {
//     try {
//         const [result] = await db.query('DELETE FROM stock_in WHERE stock_id = ?',[stockId]);
//         console.log(`Query executed, affected rows: ${result.affectedRows}`);
//         return result;
//     } catch (error) {
//         console.error('Error executing query:', error);
//         throw error;
//     }
// };



// const searchStock = async ({ from, to, q }) => {
//     let query = 'SELECT * FROM stock_in WHERE 1=1';
//     const params = [];
//     if (from) {
//         query += ' AND date >= ?';
//         params.push(from);
//     }
//     if (to) {
//         query += ' AND date <= ?';
//         params.push(to);
//     }
//     if (q) {
//         query += ' AND (product_code LIKE ? OR product_name LIKE ?)';
//         params.push(`%${q}%`, `%${q}%`);
//     }
//     const [result] = await db.query(query, params);
//     return result;
// };

// const getStockById = async (stockId) => {
//     try {
//         const [rows] = await db.query('SELECT * FROM stock_in WHERE stock_id = ?', [stockId]);
//         return rows;
//     } catch (error) {
//         console.error('Error executing query:', error);
//         throw error;
//     }
// };


// module.exports = {
//     addStock,
//     getAllStocks,
//     deleteStock,
//     updateStock,
//     getstock_in_Count,
//     searchStock,
//     getStockById
// };

// services/stockService.js
const db = require('../config/db');

const addStock = async (stockData) => {
    const query = `
        INSERT INTO stock_in (product_code, product_name, unit_price, date, amount, total_price, owner, suppliers)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const { product_code, product_name, unit_price, date, amount, owner, suppliers } = stockData;
    const total_price = unit_price * amount;

    const [result] = await db.query(query, [product_code, product_name, unit_price, date, amount, total_price, owner, suppliers]);
    return result;
};

const updateStock = async (stockId, stockData) => {
    const query = `
        UPDATE stock_in
        SET product_code = ?, product_name = ?, unit_price = ?, date = ?, amount = ?, total_price = ?, owner = ?, suppliers = ?
        WHERE stock_id = ?
    `;
    const { product_code, product_name, unit_price, date, amount, owner, suppliers } = stockData;
    const total_price = unit_price * amount;

    const [result] = await db.query(query, [product_code, product_name, unit_price, date, amount, total_price, owner, suppliers, stockId]);
    return result;
};

const getAllStocks = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
    const query = `
        SELECT * FROM stock_in
        LIMIT ?, ?
    `;
    const [rows] = await db.query(query, [offset, limit]);
    return rows;
};

const getStockById = async (stockId) => {
    const query = `
        SELECT * FROM stock_in
        WHERE stock_id = ?
    `;
    const [rows] = await db.query(query, [stockId]);
    return rows[0];
};

const deleteStock = async (stockId) => {
    const query = `
        DELETE FROM stock_in
        WHERE stock_id = ?
    `;
    const [result] = await db.query(query, [stockId]);
    return result;
};

const getStockCount = async () => {
    const query = `
        SELECT COUNT(*) AS count
        FROM stock_in
    `;
    const [rows] = await db.query(query);
    return rows[0].count;
};

const searchStock = async ({ from, to, q }) => {
    const query = `
        SELECT * FROM stock_in
        WHERE date BETWEEN ? AND ? AND (product_code LIKE ? OR product_name LIKE ?)
    `;
    const [rows] = await db.query(query, [from, to, `%${q}%`, `%${q}%`]);
    return rows;
};

module.exports = {
    addStock,
    updateStock,
    getAllStocks,
    getStockById,
    deleteStock,
    getStockCount,
    searchStock
};

const stockService = require('../Services/StockinService');

const addStock = async (req, res) => {
    try {
        const result = await stockService.addStock(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const updateStock = async (req, res) => {
    const stockId = req.params.stock_id;
    const stockData = req.body;

    // Log the request data
    console.log('Received stock data for update:', stockData);

    try {
        const result = await stockService.updateStock(stockId, stockData);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stock not found' });
        }

        res.json({ message: 'Stock updated successfully' });
    } catch (error) {
        console.error('Error updating stock:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};





const getStockByIdController = async (req, res) => {
    const stockId = parseInt(req.params.stock_id, 10);

    try {
    
    
      // const stockId = parseInt(req.params.stock_id, 10);
      console.log(`Received ID for deletion: ${stockId}`);
    
   const stockData = await stockService.getStockById(stockId);
      res.status(200).json({stockData});
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stock data', error: error.message });
    }
};


const deleteStock= async (req, res) => {
    const stockId = parseInt(req.params.stock_id, 10);

   
    try {
        // const stockId = parseInt(req.params.stock_id, 10);
        console.log(`Received ID for deletion: ${stockId}`);
    
        await stockService.deleteStock(stockId);
        res.status(200).json({ message: 'Stock deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting stock', error});
    }
};








const getAllStockCount = async (req, res) => {
    try {
        const count = await stockService.getstock_in_Count();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user count', error });
    }
  };

  
//   const searchStock = async (req, res) => {
//     try {
//         const { from, to, q } = req.query;
//         const stockData = await stockService.searchStock({ from, to, q });
//         res.status(200).json(stockData);
//     } catch (error) {
//         console.error('Error searching stock data:', error);
//         res.status(500).json({ message: 'Error searching stock', error });
//     }
// };

// controllers/stockController.js



const getAllStockData = async (req, res) => {
  
  try {
    const { page = 1, limit = 5 } = req.query;
    const data = await stockService.fetchAllStockData({page, limit});
    // res.json(data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const getAllStocks = async (req, res) => {
//     try {
//         const { page = 1, limit = 5 } = req.query;

//         const stockData = await stockService.getAllStocks({ page, limit });
//         res.status(200).json(stockData);
//     } catch (error) {
//         console.error('Error fetching stock data:', error);
//         res.status(500).json({ message: 'Error retrieving stock data', error: error.message });
//     }
// };

const getFilteredStockDataByDate = async (req, res) => {

  try {
    const { page = 1, limit = 5, from, to } = req.query;
    const data = await stockService.fetchFilteredStockDataByDate({page, limit, from, to});
    res.json(data);
  } catch (error) {
    console.error('Error fetching filtered stock data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFilteredStockDataByTerm = async (req, res) => {
 
  try {
    const { page = 1, limit = 5, term } = req.query;
  
    const data = await stockService.fetchFilteredStockDataByTerm({page, limit, term});
    res.json(data);
  } catch (error) {
    console.error('Error fetching stock data by term:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





module.exports = {
    addStock,
    // getAllStocks,
    deleteStock,
    updateStock,
    getAllStockCount,
 
    getStockByIdController ,
    getFilteredStockDataByDate,
    getFilteredStockDataByTerm,
    getAllStockData
};

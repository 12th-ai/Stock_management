import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReadStockIn = () => {
    const [stocks, setStocks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [dateRange, setDateRange] = useState({ from: '', to: '' });

    useEffect(() => {
        fetchAllStockData();
    }, [page]);

    const fetchAllStockData = async () => {
        // console.log('Fetching all stock data...');
        try {
            const params = {
                page,
                limit: 5
            };
            const { data } = await axios.get('http://localhost:3000/api/stock_in', { params });
            setStocks(data.data || []);
            setTotalPages(Math.ceil(data.count / 5));
        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    };

    const fetchFilteredStockData = async () => {
     
        try {
            const params = {
                page: 1, // Reset to first page for new search
                limit: 5,
                from: dateRange.from || undefined, 
                to: dateRange.to || undefined  
            };
            const { data } = await axios.get('http://localhost:3000/api/stock_in/search', { params });
            setStocks(data.data || []);
            setTotalPages(Math.ceil(data.count / 5));
            console.log(data.data);
        } catch (error) {
            console.error('Error fetching filtered stock data:', error);
        }
    };

    // const fetchSearchStockData = async () => {
    //     console.log('Fetching searched stock data...');
    //     try {
    //         const params = {
    //             page: 1, // Reset to first page for new search
    //             limit: 5,
    //             q: search || undefined
    //         };
    //         const { data } = await axios.get('http://localhost:3000/api/stock_in/search', { params });
    //         setStocks(data.data || []);
    //         setTotalPages(Math.ceil(data.count / 5));
    //     } catch (error) {
    //         console.error('Error fetching searched stock data:', error);
    //     }
    // };


    const handleDelete = async (stock_id) => {
        console.log(`Attempting to delete stock with ID: ${stock_id}`); // Debug log
    
        try {
            const response = await axios.delete(`http://localhost:3000/api/stock_in/${stock_id}`);
            console.log(response.data.message);
             fetchAllStockData(); // Refresh data after deletion if needed
        } catch (error) {
            console.error('Error deleting stock:', error);
        }
    };
    

    const handleSearchChange = (e) => { 
        setSearch(e.target.value);
    };

    const handleDateChange = (e) => {
        setDateRange({ ...dateRange, [e.target.name]: e.target.value });
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        fetchFilteredStockData();
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchSearchStockData();
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="router">
            <div className="router-page">
                <div className="innerPage">
                    <div className="data_div">
                        <h1 className="title">Filter / Search</h1>
                        <div className="filter">
                            <div className="date_search">
                                <form onSubmit={handleFilterSubmit}>
                                    <div className="data_each">
                                        <p>FROM</p>
                                        <input type="date" name="from" value={dateRange.from} onChange={handleDateChange} />
                                    </div>
                                    <span>-</span>
                                    <div className="data_each">
                                        <p>TO</p>
                                        <input type="date" name="to" value={dateRange.to} onChange={handleDateChange} />
                                    </div>
                                    <button type="submit" className="myBtns">Filter</button>
                                </form>
                            </div>
                            <div className="reg_search">
                                <form onSubmit={handleSearchSubmit}>
                                    <input type="search" name="q" value={search} onChange={handleSearchChange} placeholder="Search Here" />
                                    <button type="submit" className="myBtns">Search</button>
                                </form>
                            </div>
                        </div>
                        <br />
                        <Link className="myBtns" to='addstockin'>Add In Stock</Link>
                        <div className="data-table">
                            <table cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Product Code</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Supplier</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                        <th>Register</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stocks && stocks.map((stock, index) => (
                                        <tr key={stock.stock_id}>
                                            <td>{index + 1 + (page - 1) * 5}</td>
                                            <td>{stock.product_code}</td>
                                            <td>{stock.product_name}</td>
                                            <td>{stock.unit_price}</td>
                                            <td>{stock.owner}</td>
                                            <td>{stock.amount}</td>
                                            <td>{stock.total_price}</td>
                                            <td>{stock.owner}</td>
                                            <td>{formatDate(stock.date)}</td>
                                            <td>
                                                <Link to={`updatestockin/${stock.stock_id}`}>Update</Link>
                                                <button onClick={() => handleDelete(stock.stock_id)} style={{ backgroundColor: "#d0342c", color: "white", marginLeft: "20px" }}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="data_more">
                                <p>Viewing Page {page} Out Of {totalPages}</p>
                                <div className="actions">
                                    <a href="./user_report.php" className="myBtns">Print Report</a>
                                    <div className="pagination">
                                        <button onClick={() => setPage(page => Math.max(page - 1, 1))} disabled={page === 1} className="goTo">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                <path d="M33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375L13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062L32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938L17.828125 24L35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" />
                                            </svg> */}
                                        </button>
                                        <span>{page}</span>
                                        <button onClick={() => setPage(page => Math.min(page + 1, totalPages))} disabled={page === totalPages} className="goTo">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                <path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z" />
                                            </svg> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadStockIn;

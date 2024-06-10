import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateStockIn() {

//   const { stock_id } = useParams();
//   const [values, setValues] = useState({
//     product_code: '',
//     product_name: '',
//     unit_price: '',
//     date: '',
//     amount: '',
//     suppliers:''
//   });

//   useEffect(() => {
//     fetchAllStockData();
//   }, []);

//   const fetchAllStockData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/stock_in/${stock_id}`);
//       const data = response.data;

//       // Log the received data for debugging
//       console.log('Fetched data:', data);

//       if (data && data.stockData && data.stockData.length > 0) {
//         const stock = data.stockData[0];
//         setValues(prevValues => ({
//           ...prevValues,
//           product_code: stock.product_code,
//           product_name: stock.product_name,
//           unit_price: stock.unit_price,
//           date: stock.date,
//           amount: stock.amount,
//           suppliers: stock.suppliers,
//         }));
//       } else {
//         console.error('No data found for the given stock ID');
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   };
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// };
const { stock_id } = useParams();


const [values, setFormData] = useState({
  product_code: '',
  product_name: '',
  unit_price: '',
  date: '',
  amount: '',
  suppliers:''
});

  useEffect(() => {
    fetchAllStockData();
  }, []);

  const fetchAllStockData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/stock_in/${stock_id}`);
      const data = response.data;

      // Log the received data for debugging
      console.log('Fetched data:', data);

      if (data && data.stockData && data.stockData.length > 0) {
        const stock = data.stockData[0];
        setFormData(prevValues => ({
          ...prevValues,  
          product_code: stock.product_code,
          product_name: stock.product_name,
          unit_price: stock.unit_price,
          date: formatDate(stock.date),
          amount: stock.amount,
          suppliers: stock.suppliers,
        }));
      } else {
        console.error('No data found for the given stock ID');
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
  setFormData(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

     
        // Ensure numeric values are parsed correctly
        const stockData = {
            ...values,
            unit_price: parseFloat(values.unit_price),
            amount: parseInt(values.amount),
       
        };
        console.log('Sending stock data:', stockData);
        const response = await axios.put(`http://localhost:3000/api/stock_in/${stock_id}`, stockData);
        alert('Stock added successfully');
    } catch (error) {
        console.error('Error adding stock:', error);
        // alert('Error adding stock: ' + (error.response?.data?.message || error.message));
    }
};



  


  return (
    <div className="router">
      <div className="router-page">
     
        <div className="innerPage hasIn">
          <div className="form-page hasForm">
            <h1>Update Stock in </h1>
            <div className="form" id='form'>
           
         
              <form action="" method="POST" onSubmit={handleSubmit}className='forms'>
              <div className="parts-img">
         
            
            </div>
            <div className="parts">
              <div className="crd">
                <label>Product Code </label>
                <div className="crd-input">
                  <input type="number" placeholder="product code" required name="product_code" value={values.product_code}   onChange={handleInputChange} />
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" /></svg>
                  </div>
                </div>
              </div>
              <div className="crd">
                <label>Product Name</label>
                <div className="crd-input">
                  <input type="text" placeholder="PRODUCT NAME" required name="product_name" value={values.product_name}   onChange={handleInputChange} />
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="parts">
              <div className="crd">
                <label>Supplier</label>
                <div className="crd-input">
                  <input type="text" placeholder="supplier" required name="suppliers" value={values.suppliers}     onChange={handleInputChange}/>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C19.599415 4 16 7.599415 16 12L16 16L12.5 16C10.032499 16 8 18.032499 8 20.5L8 39.5C8 41.967501 10.032499 44 12.5 44L35.5 44C37.967501 44 40 41.967501 40 39.5L40 20.5C40 18.032499 37.967501 16 35.5 16L32 16L32 12C32 7.599415 28.400585 4 24 4 z M 24 7C26.779415 7 29 9.220585 29 12L29 16L19 16L19 12C19 9.220585 21.220585 7 24 7 z M 12.5 19L35.5 19C36.346499 19 37 19.653501 37 20.5L37 39.5C37 40.346499 36.346499 41 35.5 41L12.5 41C11.653501 41 11 40.346499 11 39.5L11 20.5C11 19.653501 11.653501 19 12.5 19 z M 17 28 A 2 2 0 0 0 17 32 A 2 2 0 0 0 17 28 z M 24 28 A 2 2 0 0 0 24 32 A 2 2 0 0 0 24 28 z M 31 28 A 2 2 0 0 0 31 32 A 2 2 0 0 0 31 28 z" /></svg>
                  </div>
                </div>
              </div>
              <div className="crd">
                <label>Price</label>
                <div className="crd-input">
             
                <input type="number" placeholder="price" required name="unit_price" value={values.unit_price}   onChange={handleInputChange} />
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C19.599415 4 16 7.599415 16 12L16 16L12.5 16C10.032499 16 8 18.032499 8 20.5L8 39.5C8 41.967501 10.032499 44 12.5 44L35.5 44C37.967501 44 40 41.967501 40 39.5L40 20.5C40 18.032499 37.967501 16 35.5 16L32 16L32 12C32 7.599415 28.400585 4 24 4 z M 24 7C26.779415 7 29 9.220585 29 12L29 16L19 16L19 12C19 9.220585 21.220585 7 24 7 z M 12.5 19L35.5 19C36.346499 19 37 19.653501 37 20.5L37 39.5C37 40.346499 36.346499 41 35.5 41L12.5 41C11.653501 41 11 40.346499 11 39.5L11 20.5C11 19.653501 11.653501 19 12.5 19 z M 17 28 A 2 2 0 0 0 17 32 A 2 2 0 0 0 17 28 z M 24 28 A 2 2 0 0 0 24 32 A 2 2 0 0 0 24 28 z M 31 28 A 2 2 0 0 0 31 32 A 2 2 0 0 0 31 28 z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="parts">
              <div className="crd">
                <label>Amount</label>
                <div className="crd-input">
                  <input type="number" placeholder="Quantity" required name="amount" value={values.amount}   onChange={handleInputChange} />
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C19.599415 4 16 7.599415 16 12L16 16L12.5 16C10.032499 16 8 18.032499 8 20.5L8 39.5C8 41.967501 10.032499 44 12.5 44L35.5 44C37.967501 44 40 41.967501 40 39.5L40 20.5C40 18.032499 37.967501 16 35.5 16L32 16L32 12C32 7.599415 28.400585 4 24 4 z M 24 7C26.779415 7 29 9.220585 29 12L29 16L19 16L19 12C19 9.220585 21.220585 7 24 7 z M 12.5 19L35.5 19C36.346499 19 37 19.653501 37 20.5L37 39.5C37 40.346499 36.346499 41 35.5 41L12.5 41C11.653501 41 11 40.346499 11 39.5L11 20.5C11 19.653501 11.653501 19 12.5 19 z M 17 28 A 2 2 0 0 0 17 32 A 2 2 0 0 0 17 28 z M 24 28 A 2 2 0 0 0 24 32 A 2 2 0 0 0 24 28 z M 31 28 A 2 2 0 0 0 31 32 A 2 2 0 0 0 31 28 z" /></svg>
                  </div>
                </div>
              </div>
              <div className="crd">
                <label> Date </label>
                <div className="crd-input">
                  <input type="date" placeholder="Age" required name="date" value={formatDate(values.date)}    onChange={handleInputChange} />
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C19.599415 4 16 7.599415 16 12L16 16L12.5 16C10.032499 16 8 18.032499 8 20.5L8 39.5C8 41.967501 10.032499 44 12.5 44L35.5 44C37.967501 44 40 41.967501 40 39.5L40 20.5C40 18.032499 37.967501 16 35.5 16L32 16L32 12C32 7.599415 28.400585 4 24 4 z M 24 7C26.779415 7 29 9.220585 29 12L29 16L19 16L19 12C19 9.220585 21.220585 7 24 7 z M 12.5 19L35.5 19C36.346499 19 37 19.653501 37 20.5L37 39.5C37 40.346499 36.346499 41 35.5 41L12.5 41C11.653501 41 11 40.346499 11 39.5L11 20.5C11 19.653501 11.653501 19 12.5 19 z M 17 28 A 2 2 0 0 0 17 32 A 2 2 0 0 0 17 28 z M 24 28 A 2 2 0 0 0 24 32 A 2 2 0 0 0 24 28 z M 31 28 A 2 2 0 0 0 31 32 A 2 2 0 0 0 31 28 z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">Update IN Stock </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UpdateStockIn
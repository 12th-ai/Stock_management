import React from 'react'
import { Link } from 'react-router-dom'

function ReadStockout() {
  return (
    
    <div className="router" >
    
      <div className="router-page">
    
        <div className="innerPage" >

        <div className="data_div">
            <h1 className="title">Filter / Search</h1>
            <div className="filter">
               <div className="date_search">
                  <form method="POST">
                     <div className="data_each">
                        <p>FROM</p>
                        <input  type="date" name="from" />
                     </div>
                     <span>-</span>
                     <div className="data_each">
                        <p >TO</p>
                        <input type="date" name="to"  />
                     </div>
                     <button className="myBtns" name="filter">Filter</button>
                  </form>
               </div>
            
               <div className="reg_search" >
                  <form method="GET">
                     <input type="search" name="q"  id="" placeholder="Search Here" />
                     <button className="myBtns">Search</button>
                  </form>
               </div>
            </div>
            <br />
        
         <Link  className="myBtns" to='addstockout' >  Export In Stock</Link>

         
            
              <div className="data-table">
           
              <table cellspacing="0">
                <thead>
                    <tr>
            

                    <><th>No</th>        
                    <th>Product Name</th>
                <th>Client Name</th>
           
                <th>Quantity</th>
              
                <th>Price</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Register</th>
                <th>Date</th></>
                  <th>Actions</th>
                  </tr>      
                </thead>

                  <tbody>
                   <tr> 
                        <td>1</td>
                        <td>mihigo</td>
                        <td>mihigo</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>mihigo</td>
                       
                      <td>mihigo</td>
                      <td>jan 12 2022</td>
                       
                       
                        
                        <td>
                  <Link to='updatestockout'> update</Link>
                       
                      <button  style={{ backgroundColor: "#d0342c", color: "white" ,marginLeft:"20px"}}>Delete</button>
                    </td>
                    </tr>
                 
                
                </tbody>
              </table>
              <><div className="data_more">
                     <p>Viewing Page  1 Out Of 2</p>
                     <div className="actions">
                     <a href="./user_report.php" className="myBtns">Print Report</a>
                        <div className="pagination">
                           <a className="goTo">
                              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375L13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062L32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938L17.828125 24L35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" /></svg>
                           </a>
                           <span>{ /*?php echo $page?*/ }</span>
                           <a className="goTo">
                              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z"  /></svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </>
               </div>
           
            
            
            
         </div>
      </div>
          </div>
        </div> 
     
  
  )
}

export default ReadStockout
import React from 'react'
import { useState,useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios'
// import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
function Register() {


  // const [prev, setPreview] = useState("")
  const [values, setvalues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    privilege: '',
    dob: '',
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const inpt = document.querySelector('#profile');
    const img = document.querySelector('#imagePrev');
    
    const handleChange = (ev) => {
      const url = URL.createObjectURL(ev.target.files[0]);
      setPreview(url);
      const label = document.querySelector('#profilepreview');
      label.classList.remove('first-prev');
      img.src = url;
    };

    inpt.addEventListener('input', handleChange);

    return () => {
      inpt.removeEventListener('input', handleChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render


    const [file, setfile] = useState();
    const navigate = useNavigate(); // Initialize useNavigate

    
    const handleFileChange = (e)=>{
        setfile(e.target.files[0]);
    }

    
    const handlesubmit = (e) =>{

      e.preventDefault();
      // console.log(formdata)
    const formdata = new FormData();
    formdata.append('image',file);
    formdata.append('name', values.name);
    formdata.append('email', values.email);
    formdata.append('password', values.password);
    formdata.append('privilege', values.privilege);
    formdata.append('dob', values.dob);
    formdata.append('username', values.username);
    
    axios.post('http://localhost:3000/api/auth/', formdata)
            .then(res => {
                toast.success(res.data.message, {
                    autoClose: 2500 // Notification will be displayed for 2 seconds
                });
                setTimeout(() => {
                    navigate('/login'); // Redirect to login page after 2 seconds
                }, 3200);
            })
            .catch(err => {
                toast.error(err.response ? err.response.data.message : err.message, {
                    autoClose: 2500 // Notification will be displayed for 2 seconds
                });
            });
  };

  return (
    <div className="form-page">
    <h1>Create Account to <span>Monarch</span> Dashboard</h1>
    <div className="form" id='form'>

              <form className='forms' onSubmit={handlesubmit}>
              <div className="parts-img" style={{ marginTop: 10, marginBottom: 20 }}>
                  <div className="crd-image">
                    <label className="first-prev" id="profilepreview" htmlFor="profile">
                      <img src="" alt="" id="imagePrev" />
                      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M11.5 6C8.4802259 6 6 8.4802259 6 11.5L6 36.5C6 39.519774 8.4802259 42 11.5 42L36.5 42C39.519774 42 42 39.519774 42 36.5L42 11.5C42 8.4802259 39.519774 6 36.5 6L11.5 6 z M 11.5 9L36.5 9C37.898226 9 39 10.101774 39 11.5L39 31.955078L32.988281 26.138672 A 1.50015 1.50015 0 0 0 32.986328 26.136719C32.208234 25.385403 31.18685 25 30.173828 25C29.16122 25 28.13988 25.385387 27.361328 26.138672L25.3125 28.121094L19.132812 22.142578C18.35636 21.389748 17.336076 21 16.318359 21C15.299078 21 14.280986 21.392173 13.505859 22.140625 A 1.50015 1.50015 0 0 0 13.503906 22.142578L9 26.5L9 11.5C9 10.101774 10.101774 9 11.5 9 z M 30.5 13C29.125 13 27.903815 13.569633 27.128906 14.441406C26.353997 15.313179 26 16.416667 26 17.5C26 18.583333 26.353997 19.686821 27.128906 20.558594C27.903815 21.430367 29.125 22 30.5 22C31.875 22 33.096185 21.430367 33.871094 20.558594C34.646003 19.686821 35 18.583333 35 17.5C35 16.416667 34.646003 15.313179 33.871094 14.441406C33.096185 13.569633 31.875 13 30.5 13 z M 30.5 16C31.124999 16 31.403816 16.180367 31.628906 16.433594C31.853997 16.686821 32 17.083333 32 17.5C32 17.916667 31.853997 18.313179 31.628906 18.566406C31.403816 18.819633 31.124999 19 30.5 19C29.875001 19 29.596184 18.819633 29.371094 18.566406C29.146003 18.313179 29 17.916667 29 17.5C29 17.083333 29.146003 16.686821 29.371094 16.433594C29.596184 16.180367 29.875001 16 30.5 16 z M 16.318359 24C16.578643 24 16.835328 24.09366 17.044922 24.296875 A 1.50015 1.50015 0 0 0 17.046875 24.298828L23.154297 30.207031L14.064453 39L11.5 39C10.101774 39 9 37.898226 9 36.5L9 30.673828L15.589844 24.298828C15.802764 24.093234 16.059641 24 16.318359 24 z M 30.173828 28C30.438806 28 30.692485 28.09229 30.902344 28.294922L39 36.128906L39 36.5C39 37.898226 37.898226 39 36.5 39L18.380859 39L29.447266 28.294922C29.654714 28.094207 29.910436 28 30.173828 28 z" /></svg>
                    </label>
                    <input type="file" name="image" id="profile" accept="image/*" onChange={handleFileChange} />
                  </div>
                 </div>
              
                <div className="parts">
                  <div className="crd">
                    <label>Name</label>
                    <div className="crd-input">
                      <input type="text" placeholder="Name" required name="name" onChange={e=>setvalues({...values,name:e.target.value})} />
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="crd">
                    <label>Username</label>
                    <div className="crd-input">
                      <input type="text" placeholder="Username" required name="username" onChange={e=>setvalues({...values,username:e.target.value})} />
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="parts">
                  <div className="crd">
                    <label>Password</label>
                    <div className="crd-input">
                      <input type="password" placeholder="Password" required name="password" onChange={e=>setvalues({...values,password:e.target.value})} />
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 4C19.599415 4 16 7.599415 16 12L16 16L12.5 16C10.032499 16 8 18.032499 8 20.5L8 39.5C8 41.967501 10.032499 44 12.5 44L35.5 44C37.967501 44 40 41.967501 40 39.5L40 20.5C40 18.032499 37.967501 16 35.5 16L32 16L32 12C32 7.599415 28.400585 4 24 4 z M 24 7C26.779415 7 29 9.220585 29 12L29 16L19 16L19 12C19 9.220585 21.220585 7 24 7 z M 12.5 19L35.5 19C36.346499 19 37 19.653501 37 20.5L37 39.5C37 40.346499 36.346499 41 35.5 41L12.5 41C11.653501 41 11 40.346499 11 39.5L11 20.5C11 19.653501 11.653501 19 12.5 19 z M 17 28 A 2 2 0 0 0 17 32 A 2 2 0 0 0 17 28 z M 24 28 A 2 2 0 0 0 24 32 A 2 2 0 0 0 24 28 z M 31 28 A 2 2 0 0 0 31 32 A 2 2 0 0 0 31 28 z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="crd">
                    <label>Privillage</label>
                    <div className="crd-input">
                      <select name="privilege" id="" onChange={e=>setvalues({...values,privilege:e.target.value})}>
                        <option value={true} hidden>Choose Privillage</option>
                        <option value="0">ADMIN</option>
                        <option value="1">RECEPTIONIST</option>
                        <option value="2">Account payable'officer</option>
                      </select>
                      <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{ /*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/ }<path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg></div>
                    </div>
                  </div>
                </div>
                <div className="parts">
                  <div className="crd">
                    <label>Email</label>
                    <div className="crd-input">
                      <input type="email" placeholder="Password" required name="email" onChange={e=>setvalues({...values,email:e.target.value})} />
                      <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{ /*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/ }<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>  </div>
                    </div>
                  </div>
                  <div className="crd">
                    <label>Date of Birth</label>
                    <div className="crd-input">
                      <input type="date" placeholder="Age" required name="dob" onChange={e=>setvalues({...values,dob:e.target.value})}  />
                      <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{ /*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/ }<path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg></div>
                    </div>
                  </div>
                </div>
                <div className="parts-img">
                
                </div>
  
                <span className="redirect">
         
          <Link to='/login'>login Here</Link>
        </span>
                <button type="submit" >CREATE ACCOUNT</button>
                
              </form>
              </div>
              </div>
  )
}

export default Register;


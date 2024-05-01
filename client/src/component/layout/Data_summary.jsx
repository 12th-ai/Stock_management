import React from 'react'

function Data_summary() {
  return (
    <div>
        <div className="main-data">
        <div className="data-summary">
          <h1 className="title">
            Summary
          </h1>
          <div className="data-cards">
       
            <div className="data-card">
              <h1> 20</h1>
              <p>USERS</p>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M13 21c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6S16.309 21 13 21zM24 31c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6S27.309 31 24 31zM24 13c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5S26.757 13 24 13zM35 21c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6S38.309 21 35 21zM24 45c-5.047 0-9-2.636-9-6v-2.5c0-1.93 1.57-3.5 3.5-3.5h11c1.93 0 3.5 1.57 3.5 3.5V39C33 42.364 29.047 45 24 45zM13.21 35c.001 0 .002.001.003.001C13.868 32.696 15.988 31 18.5 31h.229C17.061 29.533 16 27.391 16 25c0-.692.097-1.359.263-2H7.5C5.57 23 4 24.57 4 26.5V29c0 3.36 3.95 6 9 6H13.21zM34.79 35c-.001 0-.002.001-.003.001C34.132 32.696 32.012 31 29.5 31h-.229C30.939 29.533 32 27.391 32 25c0-.692-.097-1.359-.263-2H40.5c1.93 0 3.5 1.57 3.5 3.5V29c0 3.36-3.95 6-9 6H34.79z" /></svg>
              </div>
            </div>
            { /*?php } ?*/ }
            <div className="data-card">
              <h1>
                30
              </h1>
              <p>STOCK IN</p>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M24 24c-5.514 0-10-4.486-10-10S18.486 4 24 4s10 4.486 10 10S29.514 24 24 24zM24 43V29c0-.343.035-.677.101-1H12.5C10.019 28 8 30.019 8 32.5V34c0 5.607 7.028 10 16 10 .034 0 .067-.003.1-.003C24.035 43.675 24 43.341 24 43zM43 26H29c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3V29C46 27.343 44.657 26 43 26zM38.5 35h-5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h5c.828 0 1.5.672 1.5 1.5S39.328 35 38.5 35z" /></svg>
              </div>
            </div>
            <div className="data-card">
              <h1>
              27
              </h1>
              <p>STOCK OUT</p>
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M6.5 8C4.57 8 3 9.57 3 11.5L3 34L16.960938 34C19.340938 34 21.51 35.059063 23 36.789062L23 12C22.02 9.66 19.7 8 17 8L6.5 8 z M 31 8C28.3 8 25.98 9.66 25 12L25 36.789062C26.49 35.059063 28.659062 34 31.039062 34L45 34L45 11.5C45 9.57 43.43 8 41.5 8L31 8 z M 8.5 12L15.5 12C16.328 12 17 12.672 17 13.5C17 14.328 16.328 15 15.5 15L8.5 15C7.672 15 7 14.328 7 13.5C7 12.672 7.672 12 8.5 12 z M 35 12C35.83 12 36.5 12.67 36.5 13.5L36.5 14.109375C37.72 14.369375 38.689062 15.090703 39.289062 16.220703C39.639063 16.880703 39.510156 17.749453 38.910156 18.189453C38.140156 18.769453 37.070156 18.499922 36.660156 17.669922C36.490156 17.319922 36.220938 17 35.460938 17L34.619141 17C33.899141 17 33.269531 17.58 33.269531 18.25C33.269531 18.94 33.829531 19.5 34.519531 19.5L35.550781 19.5C37.740781 19.5 39.710703 21.070234 39.970703 23.240234C40.240703 25.550234 38.65 27.539922 36.5 27.919922L36.5 28.5C36.5 29.33 35.83 30 35 30C34.17 30 33.5 29.33 33.5 28.5L33.5 27.960938C31.86 27.770937 30.750937 26.759531 30.210938 25.769531C29.860937 25.119531 29.980078 24.260547 30.580078 23.810547C31.360078 23.230547 32.429844 23.500078 32.839844 24.330078C32.899844 24.440078 33.219062 25 34.039062 25L35.75 25C36.44 25 37 24.44 37 23.75C37 23.06 36.44 22.5 35.75 22.5L34.759766 22.5C32.859766 22.5 31.080469 21.349062 30.480469 19.539062C29.680469 17.109063 31.27 14.769922 33.5 14.169922L33.5 13.5C33.5 12.67 34.17 12 35 12 z M 8.5 19L15.5 19C16.328 19 17 19.672 17 20.5C17 21.328 16.328 22 15.5 22L8.5 22C7.672 22 7 21.328 7 20.5C7 19.672 7.672 19 8.5 19 z M 8.5 26L11.5 26C12.328 26 13 26.672 13 27.5C13 28.328 12.328 29 11.5 29L8.5 29C7.672 29 7 28.328 7 27.5C7 26.672 7.672 26 8.5 26 z M 3 36L3 36.5C3 38.43 4.57 40 6.5 40L22.609375 40C21.769375 37.6 19.500937 36 16.960938 36L3 36 z M 31.039062 36C28.499062 36 26.230625 37.6 25.390625 40L41.5 40C43.43 40 45 38.43 45 36.5L45 36L31.039062 36 z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <br />
    </div>
    </div>
  )
}

export default Data_summary
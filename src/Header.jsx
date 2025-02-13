import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

const Header = () => {
  return (
    <>  

    <header>
      <div className="col-sm-12 col-md-12 p-4 bg-primary">
          <h1 className='fs-2 fw-light text-light'>TickTacToe</h1>
          <p  className='lead text-light'>React TicTacToe</p>
        </div>
    </header>
    

  </>
  
)}

export default Header;
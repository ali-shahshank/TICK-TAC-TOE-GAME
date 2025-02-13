import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";


const Footer = () => {

  const today = new Date();


  return (
<>
<footer>
  <div className="col-sm-12 col-md-12 p-5 text-light bg-primary">
    
<div className="container">
  <ul className='list-unstyled d-flex justify-content-between align-items-center' >
    <li className='lead fw-medium'>TickTacToe Game</li>
    <li>All Rights Reserved &copy;{today.getFullYear()}</li>
  </ul>
</div>
    </div>  
</footer>
</>
  )
}

export default Footer
import React, { useContext } from 'react'

function Navbar() {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark  border border-dark m-2 rounded-4" style={{height:80}}>
  <div className="container-fluid">
    <a className="navbar-brand fs-1 text-white ms-5" href="#">News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>

</nav>
    </div>
  )
}

export default Navbar
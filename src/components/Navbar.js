import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Storino
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <button>
              <a href="/" className="btn btn-dark">
                Login
              </a>
            </button>
            
            <button>
              <a href="/" className="btn btn-outline-dark">
                Register
              </a>
            </button>
            <button>
              <a href="/" className="btn btn-outline-dark">
                Cart(0)
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
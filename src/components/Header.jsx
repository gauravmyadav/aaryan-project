import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Header() {

  const count = useSelector((state) => state.cart.length);

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mt-3 text-left">
            <h1>Laptop Solution's</h1>
          </div>
          <div className="col-lg-2 mt-4 text-end">
            <Link to={"/cart"} className="nav-item">
              <button style={{ backgroundColor:"#88c8bc"}} className="nav-link btn  position-relative border-0 cart-btn" >
                <i style={{fontSize:"18px"}}  className="fa-solid fa-cart-shopping text-dark"></i>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                  {count}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mt-3">
                  <Link to={"/"} className="nav-item active">
                    <a className="nav-link ps-0">Home <span className="sr-only">(current)</span></a>
                  </Link>
                  <Link to={"/men"} className="nav-item">
                    <a className="nav-link">Laptop</a>
                  </Link>
                  <Link to={"/allproducts"} className="nav-item">
                    <a className="nav-link">All Products</a>
                  </Link>
                  <Link to={"/about"} className="nav-item">
                    <a className="nav-link">About</a>
                  </Link>
                  <Link to={"/contact"} className="nav-item">
                    <a className="nav-link">Contact</a>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-3 mt-4 d-flex align-items-center justify-content-end">
            <div className="search-wrapper">
              <input type="text" className="form-control search-input" placeholder="Search..." />
              <div className="search-icon-wrapper">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='offer text-center p-2 mt-3'>
        <div className="container">
          <marquee>
            <h2>
              <a href="#">Our biggest sale yet 50% off all summer shoes</a>
              <span className='space'>______________</span>
              <a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a>
            </h2>
          </marquee>
        </div>
      </div>
    </div>
  );
}

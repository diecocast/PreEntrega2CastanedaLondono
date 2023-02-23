import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link to="/" className="navbar-brand">CastEcommerce</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Products</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul className="list-unstyled">
                  <li><Link to="/category/skincare" className="dropdown-item">Skincare</Link></li>
                  <li><div className="dropdown-divider"></div></li>
                  <li><Link to="/category/fragrances" className="dropdown-item">Fragrances</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default NavBar;

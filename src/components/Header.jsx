import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        Free Islandwide Delivery | New Collection Available
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">

          <Link className="navbar-brand logo" to="/">
            LAVENDER
            <span>FASHION</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#new">
                  New In
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#categories">
                  Categories
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Shop
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

            </ul>

            <div className="header-icons">
              <form
                className={`search-box ${isSearchOpen ? "search-box-open" : ""}`}
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="search"
                  placeholder="Search products"
                  aria-label="Search products"
                />
              </form>
              <button
                className="icon-button"
                type="button"
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                title={isSearchOpen ? "Close search" : "Search"}
                onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
              >
                {isSearchOpen ? "×" : "🔍"}
              </button>
              <span>♡</span>
              <span>🛒</span>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
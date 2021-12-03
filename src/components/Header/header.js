import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ACCESS_TOKEN_NAME } from "../../constants/constant";

function Header({ title, location, history, count }) {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const showFullHeader = () => {
    return ["home", "cart", "product-detail","checkout"].find(
      (name) => location.pathname.indexOf(name) > -1
    );
  };

  let pageTitle = capitalize(
    location.pathname.substring(1, location.pathname.length)
  );

  if (location.pathname === "/login" || location.pathname === "/") {
    title = "Welcome";
  }
  if (location.pathname.indexOf('product-detail') > -1) {
    title = "Product-Details";
  }

  function renderLogout() {
    if (showFullHeader()) {
      return localStorage.getItem(ACCESS_TOKEN_NAME) !== null ? (
        <div className="text-end">
          <button
            className="btn btn-outline-light me-2"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button className="btn btn-danger" onClick={() => handleLogout()}>
            Login
          </button>
        </div>
      );
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    history.push("/login");
  };

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container text-center d-flex justify-content-between">
        <a
          href="/"
          className="d-flex  mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg>
          <span className="h3">{title || pageTitle}</span>
        </a>
        <div className="d-flex justify-content-between">
          {showFullHeader() && (
            <ul className="nav me-lg-auto mb-2 mb-md-0">
              <li>
                <Link className="d-flex nav-link px-2 text-white" to="/cart">
                  <i className="bi bi-cart-fill"></i>
                  {count > 0 && (
                    <span className="badge badge-light">{count}</span>
                  )}
                </Link>
              </li>
            </ul>
          )}
          {renderLogout()}
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.cartItemCount,
  };
};

export default connect(mapStateToProps)(withRouter(Header));

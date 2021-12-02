import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ACCESS_TOKEN_NAME } from "../../constants/constant";

function Header({title, location, history, count}) {

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  let pageTitle = capitalize(
    location.pathname.substring(1, location.pathname.length)
  );
  if (location.pathname === "/login") {
    title = "Welcome";
  }
  function renderLogout() {
    if (location.pathname === "/home") {
      return localStorage.getItem(ACCESS_TOKEN_NAME) !== null ?  (
        <div>
          <button className="btn btn-danger" onClick={() => handleLogout()}>
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
  }

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
          <span className="h3">{title || pageTitle}</span>
          <div className="row col-8 d-flex  text-white justify-content-end">
          {(location.pathname.indexOf('home') > -1) && ( <ul className="right">
            <li>
              <Link className="d-flex" to="/cart">
                <i class="bi bi-cart-fill"></i>
                { count > 0 && (
                 <span class="badge badge-light">{count}</span>
                )}
              </Link>
            </li>
          </ul>)}
          {renderLogout()}
        </div>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
    return {
      count: state.cartItemCount
    };
};

export default connect(mapStateToProps)(withRouter(Header)) ;

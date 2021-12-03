import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import "./home.css";

function Home({ addToCart, items }) {
  const [productList, setProductList] = useState(items);

  const handleClick = (id) => {
    addToCart(id);
  };

  const filterItem = (type) => {
    const filterList =
      type === "all"
        ? items
        : items.filter((item) => {
            return (
              item.type === type && (
                <div className="card card-item" key={item.id}>
                  <div className="card-image">
                    <img src={item.img} alt={item.title} />
                    <span className="card-title">{item.title}</span>
                    <span
                      to="/"
                      className="btn-floating halfway-fab waves-effect waves-light red"
                      onClick={() => {
                        handleClick(item.id);
                      }}
                    >
                      <i className="bi bi-plus">add</i>
                    </span>
                  </div>

                  <div className="card-content">
                    <p>{item.desc}</p>
                    <p>
                      <b>Price: {item.price}$</b>
                    </p>
                  </div>
                </div>
              )
            );
          });
    setProductList(filterList);
  };

  const getItems = () => {
    return productList.map((item) => {
      return (
        // <div className="card card-item" key={item.id}>
        //   <div className="card-image">
        //     <img src={item.img} alt={item.title} />
        //     <span className="card-title">{item.title}</span>
        //     <span
        //       to="/"
        //       className="btn-floating halfway-fab waves-effect waves-light red"
        //       onClick={() => {
        //         handleClick(item.id);
        //       }}
        //     >
        //       <i className="bi bi-plus">add</i>
        //     </span>
        //   </div>
        //   <div className="card-content">
        //     <p>{item.desc}</p>
        //     <p>
        //       <b>Price: {item.price}$</b>
        //     </p>
        //     <p>  <Link to={`/product-detail/${item.id}`}>More Details</Link></p>
        //   </div>
        // </div>
        <div className="col-sm-6 mb-2" key={item.id}>
          <div className="card shadow-sm">
            <img src={item.img} alt={item.title} />
            <label className="card-title">{item.title}</label>
            <div className="card-body">
              <p className="card-text">{item.desc}</p>
              <p className="card-text">Price: {item.price}$</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button className="btn" onClick={() => {
                      handleClick(item.id);
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="red"
                      class="bi bi-plus-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                  </button>
                  
                </div>
                <p>
                    {" "}
                    <Link to={`/product-detail/${item.id}`}>More Details</Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Our items</h3>
      <div className="card-wrapper d-flex justify-content-between">
        <div className="card category">
          <div
            className="card-header"
            onClick={() => {
              filterItem("all");
            }}
          >
            All
          </div>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              onClick={() => {
                filterItem("shoes");
              }}
            >
              Shoes
            </li>
            <li
              className="list-group-item"
              onClick={() => {
                filterItem("electronics");
              }}
            >
              Electronics
            </li>
            <li
              className="list-group-item"
              onClick={() => {
                filterItem("clothes");
              }}
            >
              Clothes
            </li>
          </ul>
        </div>
        <div className="box products-container">{getItems()}</div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

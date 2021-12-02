import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import "./home.css"

function Home({ addToCart, items }) {
  
  const [productList, setProductList] = useState(items)  
    
  const handleClick = (id) => {
    addToCart(id);
  };

  const filterItem = (type) => {
    const filterList = type === 'all' ? items : items.filter((item) => {
      return item.type === type && (
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
        );
      });
     setProductList(filterList) 
  }

  const getItems = () => {
    return productList.map((item) => {
      return (
      
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
            <p>  <Link to={`/product-detail/${item.id}`}>More Details</Link></p>
          </div>
        </div>
       
      );
    });
  };

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="card-wrapper d-flex justify-content-between">
        <div className="card category">
            <div className="card-header"  onClick={() => {filterItem('all')}}>All</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" onClick={() => {filterItem('shoes')}}>Shoes</li>
                    <li className="list-group-item" onClick={() => {filterItem('electronics')}}>Electronics</li>
                    <li className="list-group-item" onClick={() => {filterItem('clothes')}}>Clothes</li>
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

import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link, useParams } from "react-router-dom";

function ProductDetail({ history, items }) {
  let { id } = useParams();
  let currentItem = items.find((item) => item.id === parseInt(id));
  return (
    <div className="container">
      <section className="mb-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="mdb-lightbox">
              <div className="row product-gallery mx-1">
                <div className="col-12 mb-0">
                  {currentItem.images.map((element, index) => {
                    return (
                      
                        <figure
                          className={
                            index
                              ? "view overlay rounded z-depth-1"
                              : "view overlay rounded z-depth-1 main-img "
                          }
                        >
                          <a
                            href={element.url}
                            data-size="710x823"
                            style={{ display: index ? "none" : "block" }}
                          >
                            <img
                              src={element.url}
                              className="img-fluid z-depth-1"
                            />
                          </a>
                        </figure>
                      
                    );
                  })}
                </div>
                {currentItem.images.length && (
                  <div className="col-12">
                    <div className="row">
                      {currentItem.images.map((element, index) => {
                        return (
                          
                            <div className="col-3">
                              <div className="view overlay rounded z-depth-1 gallery-item">
                                <img
                                  src={element.url}
                                  className="img-fluid"
                                />
                                <div className="mask rgba-white-slight"></div>
                              </div>
                            </div>
                          
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>{currentItem.title}</h5>
            <p className="mb-2 text-muted text-uppercase small">
              {currentItem.type}
            </p>
            <ul className="rating">
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-primary"></i>
              </li>
            </ul>
            <p>
              <span className="mr-1">
                <strong>{`$${currentItem.price}`}</strong>
              </span>
            </p>
            <p className="pt-1">{currentItem.desc}</p>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Model</strong>
                    </th>
                    <td>Shirt 5407X</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Color</strong>
                    </th>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Delivery</strong>
                    </th>
                    <td>USA, Europe</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="table-responsive mb-2">
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td className="pl-0 pb-0 w-25">Quantity</td>
                    <td className="pb-0">Select size</td>
                  </tr>
                  <tr>
                    <td className="pl-0">
                      <div className="def-number-input number-input safari_only mb-0">
                        <button className="minus btn"><i className="bi bi-patch-minus-fill"></i></button>
                        <input
                          className="quantity"
                          min="0"
                          name="quantity"
                          value="1"
                          type="number"
                        />
                        <button className="btn "><i className="bi bi-patch-plus-fill"></i></button>
                      </div>
                    </td>
                    <td>
                      <div className="mt-1">
                        <div className="form-check form-check-inline pl-0">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="small"
                            name="materialExampleRadios"
                            checked
                          />
                          <label
                            className="form-check-label small text-uppercase card-link-secondary"
                            for="small"
                          >
                            Small
                          </label>
                        </div>
                        <div className="form-check form-check-inline pl-0">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="medium"
                            name="materialExampleRadios"
                          />
                          <label
                            className="form-check-label small text-uppercase card-link-secondary"
                            for="medium"
                          >
                            Medium
                          </label>
                        </div>
                        <div className="form-check form-check-inline pl-0">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="large"
                            name="materialExampleRadios"
                          />
                          <label
                            className="form-check-label small text-uppercase card-link-secondary"
                            for="large"
                          >
                            Large
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2">
              <i className="fas fa-shopping-cart pr-2"></i>Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(withRouter(ProductDetail));

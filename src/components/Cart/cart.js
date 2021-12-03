import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../actions/cartActions";


function Cart({removeItem, addQuantity, subtractQuantity, items, total, count}) {
  //to remove the item completely
  const handleRemove = (id) => {
    removeItem(id);
  };

  //to add the quantity
  const handleAddQuantity = (id) => {
    addQuantity(id);
  };

  //to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    subtractQuantity(id);
  };

  let addedItems = items.length ? (
    items.map((item) => {
      return (
        <>
          <div className="row mb-4" key={item.id}>
            <div className="col-md-5 col-lg-3 col-xl-3">
              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <img
                  className="img-fluid w-100"
                  src={item.img}
                  alt={item.img}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{item.title}</h5>
                    <p className="mb-3 text-muted text-uppercase small">
                      Shirt - blue
                    </p>
                    <p className="mb-2 text-muted text-uppercase small">
                      Color: blue
                    </p>
                    <p className="mb-3 text-muted text-uppercase small">
                      Size: M
                    </p>
                  </div>
                  <div>
                    <div className="def-number-input number-input safari_only mb-0 w-100">
                      <button class="btn" onClick={() => handleAddQuantity(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="black"
                          class="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                        </svg>
                      </button>
                      <input
                        className="quantity"
                        name="quantity"
                        value={item.quantity}
                        type="text"
                      />
                      <button class="btn"  onClick={() => handleSubtractQuantity(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-dash-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a
                      href="#!"
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="card-link-secondary small text-uppercase mr-3"
                    >
                      <i className="fas fa-trash-alt mr-1" /> Remove item{" "}
                    </a>
                  </div>
                  <p className="mb-0">
                    <span>
                      <strong id="summary">{item.price} X {item.quantity} = {item.price * item.quantity}$</strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-4" />
        </>
      );
    })
  ) : (
    <p>Nothing.</p>
  );
  return (

    <section>
      {/*Grid row*/}
      <div className="row">
        {/*Grid column*/}
        <div className="col-lg-8">
          {/* Card */}
          <div className="mb-3">
            <div className="pt-4 wish-list">
              <h5 className="mb-4">
                Cart (<span>{count}</span> items)
              </h5>
              {addedItems}
              <p className="text-primary mb-0">
                <i className="fas fa-info-circle mr-1" /> Do not delay the
                purchase, adding items to your cart does not mean booking them.
              </p>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="mb-3">
            <div className="pt-4">
              <h5 className="mb-4">Expected shipping delivery</h5>
              <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="mb-3">
            <div className="pt-4">
              <h5 className="mb-4">We accept</h5>
              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"
              />
              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
              <img
                className="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"
              />
            </div>
          </div>
          {/* Card */}
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-4">
          {/* Card */}
          <div className="mb-3">
            <div className="pt-4">
              <h5 className="mb-3">The total amount of</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Temporary amount
                  <span>${total}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>The total amount of</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>${total}</strong>
                  </span>
                </li>
              </ul>
              <Link to="/checkout">
               <button className="btn btn-primary">Placed your Order</button>
              </Link>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          {/* Card */}
        </div>
        {/*Grid column*/}
      </div>
      {/* Grid row */}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    count: state.cartItemCount,
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

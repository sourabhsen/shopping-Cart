import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { resetToCart } from '../actions/cartActions'

function Checkout({items, total, resetCart, history}) {
  const handleHomeRedirection = () => {
    resetCart();
    history.push('/home')
  }

  let addedItems = items.length ? (
    items.map((item) => {
      return (
            <tr>
                <td width="20%"> <img alt={item.title} src={item.img} width="90"/> </td>
                <td width="60%"> <span className="font-weight-bold">{item.title}</span>
                    <div className="product-qty"> <span className="d-block">Quantity:{item.quantity}</span> <span>Color:{item.color}</span> </div>
                </td>
                <td width="20%">
                    <div className="text-right"> <span className="font-weight-bold">{item.price * item.quantity}</span> </div>
                </td>
            </tr>
      );
    })
  ) : (
    <p>Nothing.</p>
  );

  return (
    <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-8">
            <div className="card">
               <div className="invoice p-5">
                    <h5>Your order Confirmed!</h5> <span className="font-weight-bold d-block mt-4">Hello</span> <span>You order has been confirmed and will be shipped in next two days!</span>
                    <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Order Date</span> <span>12 Jan,2018</span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Order No</span> <span>MT12332345</span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Payment</span> <span><img alt="card" src="https://img.icons8.com/color/48/000000/mastercard.png" width="20" /></span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Shiping Address</span> <span>414 Advert Avenue, NY,USA</span> </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="product border-bottom table-responsive">
                            <table className="table table-borderless">
                                <tbody>
                                    {addedItems}
                                </tbody>
                            </table>
                        </div>
                        <div className="row d-flex justify-content-end">
                            <div className="col-md-5">
                                <table className="table table-borderless">
                                    <tbody className="totals">
                                        <tr>
                                            <td>
                                                <div className="text-left"> <span className="text-muted">Subtotal</span> </div>
                                            </td>
                                            <td>
                                                <div className="text-right"> <span>{total}</span> </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left"> <span className="text-muted">Shipping Fee</span> </div>
                                            </td>
                                            <td>
                                                <div className="text-right"> <span>$22</span> </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left"> <span className="text-muted">Tax Fee</span> </div>
                                            </td>
                                            <td>
                                                <div className="text-right"> <span>$7.65</span> </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left"> <span className="text-muted">Discount</span> </div>
                                            </td>
                                            <td>
                                                <div className="text-right"> <span className="text-success">$168.50</span> </div>
                                            </td>
                                        </tr>
                                        <tr className="border-top border-bottom">
                                            <td>
                                                <div className="text-left"> <span className="font-weight-bold">Subtotal</span> </div>
                                            </td>
                                            <td>
                                                <div className="text-right"> <span className="font-weight-bold">{total + 22 +7.65 - 168.5}$</span> </div>
                                            </td> 
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                    <p className="font-weight-bold mb-0">Thanks for shopping with us!</p> <span>Team</span>
                </div>
                <button onClick={() => handleHomeRedirection()} className=" text-center btn btn-primary col-sm-4 mb-2" style={{margin:'0 auto'}}>More Shopping</button>
            </div>
        </div>
    </div>
</div>
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
      resetCart: (id) => {
        dispatch(resetToCart(id));
      },
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));

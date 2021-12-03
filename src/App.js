import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Cart from "./components/Cart/cart";
import LoginForm from "./components/LoginForm/loginForm";
import ProductDeatil from './components/Product/productDetails'
import AlertComponent from "./components/AlertComponent/alertComponent";
import Header from "./components/Header/header";
import PrivateRoute from "../src/utils/privateRoute";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Checkout  from "./components/Checkout/checkout";

const store = createStore(cartReducer);

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState([]);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header title={title} />
          <div className="container-fluid d-flex align-items-center flex-column py-5">
            <AlertComponent
              errorMessage={errorMessage}
              hideError={updateErrorMessage}
            />
            <Switch>
              <Route path="/" exact={true}>
                <LoginForm
                  showError={updateErrorMessage}
                  updateTitle={updateTitle}
                />
              </Route>

              <Route path="/" exact={true}>
                back
              </Route>
              <Route path="/login">
                <LoginForm
                  showError={updateErrorMessage}
                  updateTitle={updateTitle}
                />
              </Route>
              <Route path="/product-detail/:id">
                <ProductDeatil
                  title={title}
                  showError={updateErrorMessage}
                  updateTitle={updateTitle}
                />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/cart">
                <Cart />
              </PrivateRoute>
              <PrivateRoute path="/checkout">
                <Checkout />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/home";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm/loginForm";
import ProductDeatil from './components/Product/productDetails'
import AlertComponent from "./components/AlertComponent/alertComponent";
import Header from "./components/Header/header";
import PrivateRoute from "../src/utils/privateRoute";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(cartReducer);

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState([]);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header title={title} />
          <div className="container d-flex align-items-center flex-column">
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
              <Route path="/login">
                <LoginForm
                  showError={updateErrorMessage}
                  updateTitle={updateTitle}
                />
              </Route>
              <Route path="/product-detail/:id">
                <ProductDeatil
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
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MainPage from "./components/MainPage";
import ProductIndex from "./components/ProductIndexPage";
import ProductShow from "./components/ProductShowPage";
import CategoryBar from "./components/Category";
import CartPage from "./components/CartPage";
import "./reset.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <CategoryBar />
          <MainPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/cart">
          <Navigation />
          <CategoryBar/>
          <CartPage />
        </Route>
        <Route exact path="/products">
          <Navigation />
          <CategoryBar />
          <ProductIndex />
        </Route>
        <Route path="/products/:productId">
          <Navigation />
          <CategoryBar />
          <ProductShow />
        </Route>
        <Route exact path="/:category">
          <Navigation />
          <CategoryBar />
          <ProductIndex />
        </Route>
      </Switch>
    </>
  );
}

export default App;

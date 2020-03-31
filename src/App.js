import React, { Fragment } from "react";
import HomePage from "./components/layout/HomePage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Notfound from "./components/layout/Notfound";
import Products from "./components/layout/Products";
import ProductDetail from "./components/layout/ProductDetail";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Switch>
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/products' component={Products} />
          <Route exact path={['/products/:masp&:tensp','/products/:masp']} component={ProductDetail}  />
          <Route component={Notfound} />
        </Switch>
      </div>
      
    </Fragment>
  );
};

export default App;

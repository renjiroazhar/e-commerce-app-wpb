/* eslint-disable */

import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader } from "semantic-ui-react";

const Home = lazy(() => import("./views/Home"));
const Products = lazy(() => import("./views/Products"));
const Categories = lazy(() => import("./views/Categories"));
const Product = lazy(() => import("./views/Product"));
const Cart = lazy(() => import("./views/Cart"));
const Search = lazy(() => import("./views/Search"));
const Checkout = lazy(() => import("./views/Checkout"));

export default function Routes() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/category/:categId" component={Products} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/search/:search" component={Search} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Suspense>
  );
}

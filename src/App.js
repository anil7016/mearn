import React from 'react';
import './App.css';
import {Counter} from './features/counter/Counter'
//import { ProductList } from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Cart } from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "Login",
    element: <LoginPage ></LoginPage>,
  },
  {
    path: "Signup",
    element: <SignupPage ></SignupPage>,
  },
  {
    path: "Cart",
    element: <CartPage ></CartPage>,
  },
  {
    path: "checkout",
    element: <Checkout ></Checkout>,
  },
]);

function App() {
  return (
    <div className="App">
        {/* <Home /> */}
        {/* <SignupPage /> */}

      <RouterProvider router={router} />

    </div>
  );
}

export default App;

import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {

  const [cartItem, setCartItem] = useState([]);
  
  const addToCart = (product) => {
    const exist = cartItem.find((x) => {
      return x.id === product.id;
    })

    if (exist) {
      alert("This item ia aldedy added!!")
    }
    else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
      alert("Item added to cart:", product.Title);
    }

  };
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Product addToCart={addToCart} />}></Route>
          <Route path="/cart" element={<Cart addToCart={addToCart} cartItem={cartItem} setCartItem={setCartItem} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

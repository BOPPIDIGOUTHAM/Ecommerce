import React from 'react';
import Cart from '../component/Cart';

const CartPage = ({ cartItems, removeFromCart }) => {
  return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
};

export default CartPage;

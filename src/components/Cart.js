import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title} - {item.price.toFixed(2)}</li>
        ))}
      </ul>
      <h3>Total: {total.toFixed(2)}</h3>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;

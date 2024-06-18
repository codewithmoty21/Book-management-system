import React from 'react';
import '../styles/Payment.css';

const Payment = ({ cartItems, onConfirmPayment }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="payment">
      <h2>Payment Page</h2>
      <h3>Total Amount: {total.toFixed(2)}</h3>
      <button onClick={onConfirmPayment}>Confirm Payment</button>
    </div>
  );
};

export default Payment;

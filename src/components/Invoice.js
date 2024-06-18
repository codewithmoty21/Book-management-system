import React from 'react';
import '../styles/Invoice.css';

const Invoice = ({ order }) => {
  if (!order) return null;

  return (
    <div className="invoice">
      <h2>Invoice</h2>
      <h3>Order #{order.id}</h3>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>{item.title} - {item.price.toFixed(2)}</li>
        ))}
      </ul>
      <h3>Total: {order.total.toFixed(2)}</h3>
      <p>Thank you for your purchase!</p>
    </div>
  );
};

export default Invoice;

import React from 'react';
import '../styles/Order.css';

const Order = ({ orders }) => (
  <div className="order">
    <h2>Orders</h2>
    <ul>
      {orders.map((order) => (
        <li key={order.id}>
          <h3>Order #{order.id}</h3>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>{item.title} - {item.price.toFixed(2)}</li>
            ))}
          </ul>
          <h3>Total: {order.total.toFixed(2)}</h3>
        </li>
      ))}
    </ul>
  </div>
);

export default Order;

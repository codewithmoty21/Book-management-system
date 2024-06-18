import React from 'react';
import '../styles/Book.css';

const Book = ({ book, onDelete, onAddToCart }) => (
  <div className="book">
    <div className="book-details">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Price: {book.price.toFixed(2)}</p>
    </div>
    <div className="book-actions">
      <button onClick={() => onAddToCart(book)}>Add to Cart</button>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  </div>
);

export default Book;

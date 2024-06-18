import React from 'react';
import Book from './Book';
import '../styles/BookList.css';

const BookList = ({ books, onDelete, onAddToCart }) => (
  <div className="book-list">
    {books.map((book) => (
      <Book key={book.id} book={book} onDelete={onDelete} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default BookList;

import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Filters from './components/Filters';
import Order from './components/Order';
import Invoice from './components/Invoice';
import './styles/App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({ category: 'All', title: '', author: '' });
  const [isCheckout, setIsCheckout] = useState(false);
  const [isInvoice, setIsInvoice] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleCheckout = () => {
    const newOrder = { id: Date.now(), items: cart, total: cart.reduce((acc, item) => acc + item.price, 0) };
    setOrders([...orders, newOrder]);
    setCurrentOrder(newOrder);
    setIsCheckout(false);
    setIsInvoice(true);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filteredBooks = books.filter((book) => {
    return (
      (filters.category === 'All' || book.category === filters.category) &&
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase())
    );
  });

  return (
    <div className="app">
      <h1>Book Management System</h1>
      {!isCheckout && !isInvoice ? (
        <>
          <Filters filters={filters} onFilterChange={handleFilterChange} />
          <BookForm onAddBook={addBook} />
          <BookList books={filteredBooks} onDelete={deleteBook} onAddToCart={addToCart} />
          <Cart cartItems={cart} onCheckout={() => setIsCheckout(true)} />
          <Order orders={orders} />
        </>
      ) : isInvoice ? (
        <Invoice order={currentOrder} />
      ) : (
        <Payment cartItems={cart} onConfirmPayment={handleCheckout} />
      )}
    </div>
  );
};

export default App;

import React from 'react';
import './CartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping, onHomeClick, onPlantsClick }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculates the total cost of ALL items currently in the cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * parseFloat(item.cost.substring(1)), 0)
      .toFixed(2);
  };

  // Calculates the subtotal cost for a single plant type (quantity * unit price)
  const calculateTotalCost = (item) => {
    return (item.quantity * parseFloat(item.cost.substring(1))).toFixed(2);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left" onClick={onHomeClick}>
          <div className="logo-circle">🌱</div>
          <div className="navbar-title">
            <h3>Paradise Nursery</h3>
            <p>Where Green Meets Serenity</p>
          </div>
        </div>
        <h2 className="navbar-page-title">Plants</h2>
        <div className="navbar-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-count">{totalQuantity}</span>
        </div>
      </nav>

      <div className="cart-container">
        <h2 className="total-cart-amount">Total Cart Amount: ${calculateTotalAmount()}</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-cost">{item.cost}</p>
                  <div className="cart-item-quantity">
                    <button className="quantity-button" onClick={() => handleDecrement(item)}>
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button className="quantity-button" onClick={() => handleIncrement(item)}>
                      +
                    </button>
                  </div>
                  <p className="cart-item-total">Total: ${calculateTotalCost(item)}</p>
                  <button className="delete-button" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-button" onClick={handleCheckoutShopping}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

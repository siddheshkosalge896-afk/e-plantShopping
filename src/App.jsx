import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  // Tracks which "page" is currently shown: 'landing' | 'products' | 'cart'
  const [currentPage, setCurrentPage] = useState('landing');

  const handleGetStartedClick = () => {
    setCurrentPage('products');
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setCurrentPage('cart');
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setCurrentPage('landing');
  };

  const handlePlantsClick = (e) => {
    if (e) e.preventDefault();
    setCurrentPage('products');
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setCurrentPage('products');
  };

  return (
    <div>
      {currentPage === 'landing' && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <AboutUs />
          </div>
        </div>
      )}

      {currentPage === 'products' && (
        <ProductList onHomeClick={handleHomeClick} onCartClick={handleCartClick} />
      )}

      {currentPage === 'cart' && (
        <CartItem
          onContinueShopping={handleContinueShopping}
          onHomeClick={handleHomeClick}
          onPlantsClick={handlePlantsClick}
        />
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

import A1 from './assets/snakeplant.avif';
import A2 from './assets/SpiderPlant.webp';
import A3 from './assets/PeaceLily.avif';
import A4 from './assets/ArecaPalm.webp';
import A5 from './assets/BostonFern.avif';
import A6 from './assets/RubberPlant.avif';
import A7 from './assets/EnglishIvy.avif';
import A8 from './assets/BambooPalm.avif';
import GeraniumImg from './assets/Geranium.avif';
import LavenderImg from './assets/Lavender.avif';
import JasmineImg  from './assets/Jasmine.avif';
import RosemaryImg from './assets/Rosemary.avif';
import LemonBalmImg from './assets/LemonBalm.avif';
import EucalyptusImg from './assets/Eucalyptus.avif';
import SweetBasilImg from './assets/SweetBasil.avif';
import GardeniaImg from './assets/Gardenia.avif';
import AloeVeraImg from './assets/AloeVera.avif';
import TulsiImg from './assets/Tulsi.avif';
import MintImg from './assets/Mint.avif';
import EchinaceaImg from './assets/Echinacea.avif';
import ChamomileImg from './assets/Chamomile.avif';
import LemongrassImg from './assets/Lemongrass.avif';
import AshwagandhaImg from './assets/Ashwagandha.avif';
import CalendulaImg from './assets/Calendula.avif';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: A1,
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: A2,
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: A3,
        description: 'Removes mold spores and purifies the air.',
        cost: '$18',
      },
      {
        name: 'Areca Palm',
        image: A4,
        description: 'A natural humidifier that filters indoor toxins.',
        cost: '$22',
      },
      {
        name: 'Boston Fern',
        image: A5,
        description: 'Adds moisture to the air and removes pollutants.',
        cost: '$17',
      },
      {
        name: 'Rubber Plant',
        image: A6,
        description: 'Hardy plant known for clearing airborne toxins.',
        cost: '$19',
      },
      {
        name: 'English Ivy',
        image: A7,
        description: 'Reduces airborne mold and improves air quality.',
        cost: '$13',
      },
      {
        name: 'Bamboo Palm',
        image: A8,
        description: 'Filters benzene and trichloroethylene from the air.',
        cost: '$21',
      },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      {
        name: 'Lavender',
        image: LavenderImg,
        description: 'Calming fragrance that helps with relaxation.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: JasmineImg,
        description: 'Sweet-scented flowers, great for indoor spaces.',
        cost: '$16',
      },
      {
        name: 'Rosemary',
        image: RosemaryImg,
        description: 'Fragrant herb that also works well in cooking.',
        cost: '$10',
      },
      {
        name: 'Lemon Balm',
        image: LemonBalmImg,
        description: 'Citrusy scent known to ease stress and tension.',
        cost: '$11',
      },
      {
        name: 'Eucalyptus',
        image: EucalyptusImg,
        description: 'Refreshing aroma that clears the senses.',
        cost: '$18',
      },
      {
        name: 'Gardenia',
        image: GardeniaImg,
        description: 'Rich, sweet fragrance with glossy green leaves.',
        cost: '$24',
      },
      {
        name: 'Sweet Basil',
        image: SweetBasilImg,
        description: 'Aromatic herb that doubles as a kitchen staple.',
        cost: '$9',
      },
      {
        name: 'Geranium',
        image: GeraniumImg,
        description: 'Rose-like scent often used in aromatherapy.',
        cost: '$14',
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      {
        name: 'Aloe Vera',
        image: AloeVeraImg,
        description: 'Soothing gel used for skin care and burns.',
        cost: '$14',
      },
      {
        name: 'Tulsi (Holy Basil)',
        image: TulsiImg,
        description: 'Known for its medicinal and immunity-boosting properties.',
        cost: '$11',
      },
      {
        name: 'Mint',
        image: MintImg,
        description: 'Aids digestion and freshens the air naturally.',
        cost: '$9',
      },
      {
        name: 'Echinacea',
        image: EchinaceaImg,
        description: 'Traditionally used to support the immune system.',
        cost: '$15',
      },
      {
        name: 'Chamomile',
        image: ChamomileImg,
        description: 'Gentle flowers often brewed for calming tea.',
        cost: '$12',
      },
      {
        name: 'Lemongrass',
        image: LemongrassImg,
        description: 'Used in teas and remedies to ease digestion.',
        cost: '$10',
      },
      {
        name: 'Ashwagandha',
        image: AshwagandhaImg,
        description: 'An adaptogenic herb valued in traditional medicine.',
        cost: '$19',
      },
      {
        name: 'Calendula',
        image: CalendulaImg,
        description: 'Bright flowers used in skin-soothing remedies.',
        cost: '$13',
      },
    ],
  },
];

function ProductList({ onHomeClick, onCartClick }) {
  const dispatch = useDispatch();

  // Tracks which products have been added to cart, to disable their buttons
  const [addedToCart, setAddedToCart] = useState({});

  // Read total quantity of items in cart from the Redux store, for the cart icon
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
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
        <div className="navbar-right" onClick={onCartClick}>
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

      <div className="product-list-container">
        {plantsArray.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="product-grid">
              {categoryGroup.plants.map((plant) => (
                <div key={plant.name} className="product-card">
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <h3 className="product-name">{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-cost">{plant.cost}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={addedToCart[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
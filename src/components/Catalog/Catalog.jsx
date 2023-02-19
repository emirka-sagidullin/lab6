import React from 'react';
import { useEffect } from 'react';
import './Catalog.css';

const Catalog = ({ data, user, cart, setCart }) => {
  useEffect(() => {
    document.title = user.name;
  });
  console.log(data);
  const addToCart = (id) => {
    data.map((pet) => {
      if (id === pet.id) {
        setCart([...cart, { id: pet.id, name: pet.name, status: pet.status }]);
      }
    });
  };
  console.log(data);
  const result = data.map((pet) => {
    return (
      <div key={pet.id}>
        <h2 className="pet__name">{pet.name}</h2>
        <p className="pet__status">Status: {pet.status}</p>
        <p className="pet__id">Id: {pet.id}</p>
        <button
          className="pet__button"
          onClick={() => {
            addToCart(pet.id);
          }}>
          Add to cart
        </button>
      </div>
    );
  });

  return <div className="container">{result}</div>;
};

export default Catalog;

import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ data, cart, count, setCount, setCart, orders, setOrders }) => {
  const navigate = useNavigate();
  const addToOrder = (id) => {
    cart.map((pet) => {
      if (pet.id === id) {
        setOrders([...orders, pet]);
        setCart(cart.filter((pet) => pet.id !== id));
        navigate('/orders');
      }
    });
  };
  const deleteOutOfCart = (id) => {
    cart.map((pet) => {
      if (pet.id === id) {
        setCart(cart.filter((pet) => pet.id !== id));
      }
    });
  };
  const result = cart.map((pet) => {
    return (
      <div key={pet.name}>
        <h2 className="pet__name">Название: {pet.name}</h2>
        <p className="pet__status">Статус: {pet.status}</p>
        <p className="pet__id">Айди: {pet.id}</p>
        <div className="col">
          <button
            className="minus"
            onClick={() => {
              setCount(count - 1);
            }}>
            -
          </button>
          <p>Количество: {count}</p>
          <button
            className="plus"
            onClick={() => {
              setCount(count + 1);
            }}>
            +
          </button>
        </div>
        <button
          className="pet__button"
          onClick={() => {
            addToOrder(pet.id);
          }}>
          Заказать
        </button>
        <button
          className="pet__delete pet__button"
          onClick={() => {
            deleteOutOfCart(pet.id);
          }}>
          Удалить
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <h2>Ваша корзина:</h2>
      {result}
    </div>
  );
};

export default Cart;

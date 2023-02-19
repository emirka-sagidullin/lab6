import React from 'react';

const Orders = ({ orders }) => {
  const result = orders.map((order) => {
    return (
      <div>
        <h2 className="order__name">{order.name}</h2>
        <p className="order__status">Status: {order.status}</p>
        <p className="order__id">Id: {order.id}</p>
      </div>
    );
  });
  return (
    <div className="container">
      <h2>Ваши заказы:</h2>
      {result}
    </div>
  );
};

export default Orders;

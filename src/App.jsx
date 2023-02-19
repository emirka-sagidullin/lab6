import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import Exit from './components/Exit/Exit';
import Catalog from './components/Catalog/Catalog';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const navigate = useNavigate();
  const initUsers = [];
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [users, setUsers] = useState(initUsers);
  const [user, setUser] = useState({});
  const [data, setData] = useState();
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let cartCount = [];

  async function fetchPets() {
    setTimeout(async () => {
      const data_fetch = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=sold');
      const newData = await data_fetch.json();
      setData(newData);
      setIsLoading(false);
    }, 1000);
  }
  useEffect(() => {
    fetchPets();
  }, []);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <div className="preloader">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <Header isAuthorized={isAuthorized} />
          <Routes>
            <Route
              path="/authorization"
              element={
                <Authorization
                  users={users}
                  setUser={setUser}
                  isAuthorized={isAuthorized}
                  setIsAuthorized={setIsAuthorized}
                />
              }
            />
            <Route
              path="/registration"
              element={<Registration setUsers={setUsers} users={users} />}
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  count={count}
                  setCount={setCount}
                  user={user}
                  cart={cart}
                  setCart={setCart}
                  data={data}
                  isAuthorized={isAuthorized}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/exit"
              element={<Exit setUser={setUser} setIsAuthorized={setIsAuthorized} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  data={data}
                  cart={cart}
                  count={count}
                  setCount={setCount}
                  setCart={setCart}
                  orders={orders}
                  setOrders={setOrders}
                />
              }
            />
            <Route path="/orders" element={<Orders setOrders={setOrders} orders={orders} />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;

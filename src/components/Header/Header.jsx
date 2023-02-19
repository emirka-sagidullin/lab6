import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuthorized }) => {
  return (
    <div>
      {isAuthorized ? (
        <header className="header">
          <nav className="header__nav">
            <ul className="header__ul">
              <div className="header__navigation">
                <li className="header__li">
                  <Link className="header__link" to="/catalog">
                    Каталог
                  </Link>
                </li>
                <li className="header__li">
                  <Link className="header__link" to="/cart">
                    Корзина
                  </Link>
                </li>
                <li className="header__li">
                  <Link className="header__link" to="/orders">
                    Заказы
                  </Link>
                </li>
              </div>
              <div className="header__leave">
                <li className="header__li">
                  <Link className="header__link" to="/exit">
                    Выход
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
      ) : (
        <header>
          <nav className="header__nav">
            <ul className="header__ul">
              <li className="header__li">
                <Link className="header__link" to="/authorization">
                  Войти
                </Link>
              </li>
              <li className="header__li">
                <Link className="header__link" to="/registration">
                  Регистрация
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </div>
  );
};

export default Header;

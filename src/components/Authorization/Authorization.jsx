import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authorization.css';

const Autorization = ({ users, setUser, isAuthorized, setIsAuthorized }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginIsValid, setLoginIsValid] = useState(validateLogin(login));
  const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));

  function validateLogin(login) {
    return login.length > 2 && login.length < 17;
  }
  function validatePassword(password) {
    return password.length > 5 && password.length < 17;
  }

  function onLoginChange(e) {
    let val = e.target.value;
    let valid = validateLogin(val);
    setLogin(val);
    setLoginIsValid(valid);
  }
  function onPasswordChange(e) {
    let val = e.target.value;
    let valid = validatePassword(val);
    setPassword(val);
    setPasswordIsValid(valid);
  }

  let loginColor = loginIsValid === true ? '#34C924' : '#F8173E';
  let passwordColor = passwordIsValid === true ? '#34C924' : '#F8173E';
  let errorColor = loginIsValid === true && passwordIsValid ? 'white' : '#F8173E';

  function isButtonDisabled() {
    if (loginIsValid === true && passwordIsValid === true) {
      return false;
    } else {
      return true;
    }
  }
  const navigate = useNavigate();
  const autorization = (event) => {
    event.preventDefault();
    users.map((user) => {
      if (user.login === login) {
        if (user.password === password) {
          setIsAuthorized(true);
          setUser({ login: user.login, name: user.name, password: user.password });
          navigate('/catalog');
          localStorage.setItem('login', user.login);
          localStorage.setItem('password', user.password);
        } else {
          alert('Неправильно введен пароль.');
        }
      } else {
        alert('Неправильно введен логин.');
      }
    });
  };
  return (
    <div className="container">
      <h2 className="auth__title">Авторизация</h2>
      <form className="auth__form" onSubmit={autorization}>
        <div className="auth__login">
          <input
            type="text"
            placeholder="login"
            onChange={onLoginChange}
            style={{ borderColor: loginColor }}
          />
        </div>
        <div className="auth__password">
          <input
            type="text"
            placeholder="password"
            onChange={onPasswordChange}
            style={{ borderColor: passwordColor }}
          />
        </div>
        <span className="auth__error" style={{ color: errorColor }}>
          {' '}
          Неправильный формат данных
        </span>
        <div className="auth__enter">
          <button className="auth__button" disabled={isButtonDisabled()} type="submit">
            Вход
          </button>
        </div>
      </form>
    </div>
  );
};

export default Autorization;

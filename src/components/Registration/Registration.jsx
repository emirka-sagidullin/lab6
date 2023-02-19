import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import './Registration.css';

const Registration = ({ users, setUsers }) => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginIsValid, setLoginIsValid] = useState(validateLogin(login));
  const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));
  const [nameIsValid, setNameIsValid] = useState(validateName(name));

  function validateLogin(login) {
    return login.length > 2 && login.length < 17;
  }
  function validatePassword(password) {
    return password.length > 5 && password.length < 17;
  }
  function validateName(name) {
    return name.length > 2 && name.length < 17;
  }

  function onLoginChange(e) {
    let val = e.target.value;
    let valid = validateLogin(val);
    setLogin(val);
    setLoginIsValid(valid);
  }
  function onNameChange(e) {
    let val = e.target.value;
    let valid = validateName(val);
    setName(val);
    setNameIsValid(valid);
  }
  function onPasswordChange(e) {
    let val = e.target.value;
    let valid = validatePassword(val);
    setPassword(val);
    setPasswordIsValid(valid);
  }

  let loginColor = loginIsValid === true ? '#34C924' : '#F8173E';
  let nameColor = nameIsValid === true ? '#34C924' : '#F8173E';
  let passwordColor = passwordIsValid === true ? '#34C924' : '#F8173E';

  function isButtonDisabled() {
    if (loginIsValid === true && nameIsValid === true && passwordIsValid === true) {
      return false;
    } else {
      return true;
    }
  }
  const navigate = useNavigate();
  const id = () => {
    return uuid();
  };
  const registration = () => {
    setUsers([...users, { id: id(), login: login, name: name, password: password }]);
    navigate('/authorization');
  };
  return (
    <div className="container">
      <h2 className="reg__title">Регистрация</h2>
      <div className="reg__login">
        <input
          type="text"
          placeholder="Login"
          onChange={onLoginChange}
          style={{ borderColor: loginColor }}
        />
      </div>
      <div className="reg__name">
        <input
          type="text"
          placeholder="Name"
          onChange={onNameChange}
          style={{ borderColor: nameColor }}
        />
      </div>
      <div className="reg__password">
        <input
          type="text"
          placeholder="Password"
          onChange={onPasswordChange}
          style={{ borderColor: passwordColor }}
        />
      </div>
      <div className="reg__enter">
        <button
          className="reg__button"
          disabled={isButtonDisabled()}
          onClick={() => {
            registration();
          }}>
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default Registration;

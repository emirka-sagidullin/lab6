import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Exit = ({ setUser, setIsAuthorized }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setUser({});
    setIsAuthorized(false);
    navigate('/authorization');
  });
  return <div></div>;
};

export default Exit;

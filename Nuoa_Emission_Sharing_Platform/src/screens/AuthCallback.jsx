// src/screens/AuthCallback.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { parse } from 'query-string';

const AuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = () => {
      const { id_token, access_token, refresh_token } = parse(location.hash);

      if (id_token) {
        // Store tokens in localStorage or a secure storage solution
        localStorage.setItem('id_token', id_token);
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        // Redirect to the main application page after authentication
        navigate('/app');
      }
    };

    handleAuthCallback();
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;

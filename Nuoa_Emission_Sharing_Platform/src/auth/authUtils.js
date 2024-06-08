import { authConfig } from './authConfig';

export const isAuthenticated = () => {
  return localStorage.getItem('id_token') !== null;
};

export const redirectToCognito = () => {
  const { domain, clientId, redirectUri } = authConfig;
  const loginUrl = `https://${domain}/login?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}`;
  window.location.href = loginUrl;
};

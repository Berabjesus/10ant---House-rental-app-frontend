export const setCredentials = (username, token) => {
  localStorage.setItem('10ant_auth_token', JSON.stringify(token));
  localStorage.setItem('10ant_username', JSON.stringify(username));
};

export const getToken = () => JSON.parse(localStorage.getItem('10ant_auth_token'));
export const getUsername = () => JSON.parse(localStorage.getItem('10ant_username'));
export const removeUser = () => {
  localStorage.removeItem('10ant_auth_token');
  localStorage.removeItem('10ant_username');
};

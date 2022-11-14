const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserToken = state => state.auth.token;

const authSelectors = {
  getUsername,
  getUserEmail,
  getIsLoggedIn,
  getUserToken,
};
export default authSelectors;

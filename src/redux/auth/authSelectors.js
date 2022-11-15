const getUsername = state => state.auth.user.name;

const getUser = state => state.auth.user;

const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserToken = state => state.auth.token;

const authSelectors = {
  getUsername,
  getUserEmail,
  getIsLoggedIn,
  getUserToken,
  getUser,
};
export default authSelectors;

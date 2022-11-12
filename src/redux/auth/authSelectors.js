const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
  getUsername,
  getUserEmail,
  getIsLoggedIn,
};
export default authSelectors;

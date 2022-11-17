const getUsername = state => state.auth.user.name;

const getUser = state => state.auth.user;

const getUserAnimal = state => state.auth.user.myAnimal;

const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserToken = state => state.auth.token;

const authSelectors = {
  getUsername,
  getUserEmail,
  getIsLoggedIn,
  getUserToken,
  getUser,
  getUserAnimal,
};
export default authSelectors;

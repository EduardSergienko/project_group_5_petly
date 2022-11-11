import axios from 'axios';

// axios.defaults.baseURL = '';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = ` ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

async function logOut() {
  try {
    await axios.post('/users/logout');
    // token.unset();
  } catch (error) {
    console.log(error);
  }
}

export { logOut };

import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import { userOperations } from '../user';

const initialState = {
  user: { name: null, email: null, myAnimal: [], myFavorite: [] },
  token: null,
  isLoggedIn: false,
  error: null,
  createAnimalLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state, _) {
      state.isLoggedIn = false;
    },
    [authOperations.register.fulfilled](state, action) {
      state.token = action.payload.result.token;
      state.error = null;
      state.isLoggedIn = true;
      const {
        _id,
        name,
        phone,
        email,
        dateOfBirth,
        location,
        avatarURL,
        myFavorite,
        myAnimal,
      } = action.payload.result;

      state.user = {
        id: _id,
        name,
        phone,
        email,
        dateOfBirth,
        location,
        avatarURL,
        myFavorite,
        myAnimal,
      };
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.token = action.payload.result.token;
      state.error = null;
      state.isLoggedIn = true;
      const {
        _id,
        name,
        phone,
        email,
        dateOfBirth,
        location,
        avatarURL,
        myFavorite,
        myAnimal,
      } = action.payload.result;

      state.user = {
        id: _id,
        name,
        phone,
        email,
        dateOfBirth,
        location,
        avatarURL,
        myFavorite,
        myAnimal,
      };
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOutUser.fulfilled](state, action) {
      state.error = null;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [userOperations.createUserPost.fulfilled](state, { payload }) {
      state.user.myAnimal = [payload, ...state.user.myAnimal];
      state.createAnimalLoading = false;
    },
    [userOperations.createUserPost.pending](state, { payload }) {
      state.createAnimalLoading = true;
    },
    [userOperations.deleteUserPost.fulfilled]: (state, { payload }) => {
      state.user.myAnimal = state.user.myAnimal.filter(
        ({ _id }) => _id !== payload
      );
    },
    [userOperations.updateUserInformation.fulfilled]: (state, { payload }) => {
      state.user = {
        ...state.user,
        ...payload.data,
      };
    },
    [authOperations.getCurrentUser.fulfilled]: (state, { payload }) => {
      const {
        _id,
        name,
        phone,
        email,
        dateOfBirth,
        location,
        avatarURL,
        myFavorite,
        myAnimal,
      } = payload.result[0];

      state.user = {
        id: _id,
        name,
        phone,
        email,
        dateOfBirth,
        location,
        avatarURL,
        myFavorite,
        myAnimal,
      };
      state.error = null;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;

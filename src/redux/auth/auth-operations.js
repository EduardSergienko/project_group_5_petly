import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../axiosAPI/authAPI';

const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logOut();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { logOutUser };

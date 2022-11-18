import { createSlice } from '@reduxjs/toolkit';
import { noticesOperations } from '.';
// import { showError } from 'components/Notification/Notification';

const initialState = {
  items: [
    // {
    //   _id: "6376c4e7ca40af50b2d51fca",
    //   title: "dog1",
    //   petName: "asdasdasd",
    //   birthDate: "02.02.2020",
    //   breed: "asdsadasda",
    //   sex: "female",
    //   location: "asdas",
    //   price: 158,
    //   petImageUrl: "https://pixabay.com/get/g0edc491558bf6492eab33cbf0a9f90bbd4c2e2239cfa03696f50b5cfa4f9256377e8f22bca0cb7e2816745c12355a1d50d7bd66e793cc17b542e0dfeb5c5d2e5_640.jpg",
    //   comments: "asdsadasdas",
    //   category: "sell",
    //   owner: "63768c348065793a1e853a3f"  
    // },
    // {
    //   _id: "6376c4e7ca40af50b2d51fcb",
    //   title: "dog2",
    //   petName: "jfkfjg",
    //   birthDate: "02.02.2020",
    //   breed: "asdshdasda",
    //   sex: "female",
    //   location: "asdas",
    //   price: 158,
    //   petImageUrl: "https://pixabay.com/get/g3d91fb11bef3ec628ba08e65a0598c7325765d87e1c8a5bb94f2b98fdf431a97d4ffd5cc7844d12e35a44735ed6004f938f0255f0946ebcc85a897ec2cc05bc4_640.jpg",
    //   comments: "asdsadasdas",
    //   category: "for-free",
    //   owner: "63768c348065793a1e853a3f"  
    // },
    // {
    //   _id: "6376c4e7ca40af50b2d51fc",
    //   title: "dog3",
    //   petName: "asdasdasd",
    //   birthDate: "02.02.2020",
    //   breed: "asdsadasda",
    //   sex: "female",
    //   location: "asdas",
    //   price: 158,
    //   petImageUrl: "https://pixabay.com/get/g36632df451276af2e778d5df4e79994c8ae242ef766929f5d81126f5327cf52e9fe4d24b7a6aa1e23d5acc7e94da286566d474adca83c28ea9c14012c3c60bf3_640.jpg",
    //   comments: "asdsadasdas",
    //   category: "sell",
    //   owner: "63768c348065793a1e853a3f"  
    // },
    // {
    //   _id: "6376c4e7ca40af50b2d51fcv",
    //   title: "dog4",
    //   petName: "asdasdasd",
    //   birthDate: "02.02.2020",
    //   breed: "asdsadasda",
    //   sex: "female",
    //   location: "asdas",
    //   price: 158,
    //   petImageUrl: "https://pixabay.com/get/ge140840fa78519b2f2bec021e559d2c5d28e0b69ac0ecb8e473f18de98088b84f4a204fdb4d9f44d05ca7d6b6719c4a5bf3a78b8bdc9627f98c62c90c50cfb58_640.jpg",
    //   comments: "asdsadasdas",
    //   category: "for-free",
    //   owner: "63768c348065793a1e853a3f"  
    // }
  ]
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {

  },
  extraReducers: {
    [noticesOperations.getNotices.fulfilled](state, action) {
      state.items = action.payload.data;
      // state.isLoading = false;
    },
  }
});

export const {} = noticesSlice.actions

export default noticesSlice.reducer;


// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { toast } from 'react-toastify';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://olga-nails-zp.onrender.com/api';

// const token = {
//   set(token: string) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token} `;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const registration = createAsyncThunk(
//   'auth/registration',
//   async (credentials: { email: string; password: string}, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/register', credentials);
//       // toast('Сongratulations, you are registered!');
//       token.set(response.data.token);
//       return response.data;
//     } catch (e: any) {
//       // toast.error(' User already registered!');
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/login', credentials);
//       toast('Loggined!');
//       token.set(response.data.token);
//       return response.data;
//     } catch (e) {
//       toast.error('Wrong username or password entered!');
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/fetchCurrent',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const tokenSaved = state.auth.token;
//     if (tokenSaved === null) {
//       return thunkAPI.rejectWithValue();
//     }
//     token.set(tokenSaved);
//     try {
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
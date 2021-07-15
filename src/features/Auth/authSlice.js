import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminApi from 'api/adminApi';

export const login = createAsyncThunk('admin/login', async (payload) => {
  const data = await adminApi.login(payload);

  localStorage.setItem('access-token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  return data.user;
});

const authSlice = createSlice({
  name: 'admin',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = authSlice;
export default reducer;

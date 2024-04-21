import { createSlice } from "@reduxjs/toolkit";
import Purchases from './../pages/Purchases';
import Firms from "../pages/Firms";
import Products from './../pages/Products';

const stockSlice = createSlice({
  name: "auth",

  initialState: {
    
    loading: false,
    error: false,
    sales:[],
    purchases:[],
    firms:[],
    categories:[],
    brands:[],
    Products:[],
    
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getFirmSuccess: (state,{payload})=>{
        state.firms=payload
    }
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getFirmSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;






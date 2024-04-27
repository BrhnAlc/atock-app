import { createSlice } from "@reduxjs/toolkit";
import Purchases from './../pages/Purchases';
import Firms from "../pages/Firms";
import Products from './../pages/Products';

// Redux Toolkit'ten createSlice fonksiyonunu alarak bir slice oluşturuyorsunuz.
const stockSlice = createSlice({
  // Slice'in adını belirtiyorsunuz.
  name: "stock",

  // Slice'in başlangıç durumunu tanımlıyorsunuz.
  initialState: {
    loading: false, // Yükleme durumunu tutan bir boolean değer.
    error: false, // Hata durumunu tutan bir boolean değer.
    sales: [], // Satışları tutan bir dizi.
    purchases: [], // Alımları tutan bir dizi.
    firms: [], // Firmaları tutan bir dizi.
    categories: [], // Kategorileri tutan bir dizi.
    brands: [], // Markaları tutan bir dizi.
    products: [], // Ürünleri tutan bir dizi.
  },

  // Slice'in reducer'larını tanımlıyorsunuz.
  reducers: {
    // fetchStart reducer'ı, yüklemeyi başlatmak için kullanılıyor.
    fetchStart: (state) => {
      state.loading = true; // Yükleme durumunu true yapıyoruz.
      state.error = false; // Hata durumunu false yapıyoruz.
    },

    // getFirmsSuccess reducer'ı, firmaları başarıyla aldığınızda kullanılıyor.
    getFirmsSuccess: (state, { payload }) => {
      state.loading = false; // Yükleme durumunu false yapıyoruz.
      state.firms = payload; // Gelen firmaları state içindeki firms dizisine atıyoruz.
    },

    // getBrandsSuccess reducer'ı, markaları başarıyla aldığınızda kullanılıyor.
    getBrandsSuccess: (state, { payload }) => {
      state.loading = false; // Yükleme durumunu false yapıyoruz.
      state.brands = payload; // Gelen markaları state içindeki brands dizisine atıyoruz.
    },

    // fetchFail reducer'ı, bir hata durumunda kullanılıyor.
    fetchFail: (state) => {
      state.loading = false; // Yükleme durumunu false yapıyoruz.
      state.error = true; // Hata durumunu true yapıyoruz.
    },
  },
});

// Slice'tan action'ları ve reducer'ları dışa aktarıyoruz.
export const {
  fetchStart,
  getFirmsSuccess,
  fetchFail,
  getBrandsSuccess
} = stockSlice.actions

// Oluşturduğumuz reducer'ı dışa aktarıyoruz.
export default stockSlice.reducer;





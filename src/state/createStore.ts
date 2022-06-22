import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../components/categories/categoriesSlice';

export default configureStore({
  reducer: {
    counter: categoriesReducer
  }
})
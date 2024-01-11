import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleReducer";

const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});

export default store;

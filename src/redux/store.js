import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";

const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === "development",
});

export { store };

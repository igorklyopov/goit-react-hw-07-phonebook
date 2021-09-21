import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  postContactRequest,
  postContactSuccess,
  postContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contactsActions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [postContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [postContactRequest]: () => true,
  [postContactSuccess]: () => false,
  [postContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,

  [postContactRequest]: (_, { payload }) => payload,
  [postContactError]: () => null,

  [deleteContactRequest]: (_, { payload }) => payload,
  [deleteContactError]: () => null,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});

import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("contacts/changeFilter");

//=================
//fetch
const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");
//post
const postContactRequest = createAction("contacts/postContactRequest");
const postContactSuccess = createAction("contacts/postContactSuccess");
const postContactError = createAction("contacts/postContactError");
//delete
const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");
//=================

export {
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
};

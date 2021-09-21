import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  postContactRequest,
  postContactSuccess,
  postContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

import {
  fetchContactsData,
  postContactData,
  deleteContactData,
} from "../../services/contactsAPI";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const contacts = await fetchContactsData();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContact = (name, number) => async (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(postContactRequest());

  try {
    await postContactData(contact);
    dispatch(postContactSuccess(contact));
  } catch (error) {
    dispatch(postContactError(error.message));
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await deleteContactData(contactId);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

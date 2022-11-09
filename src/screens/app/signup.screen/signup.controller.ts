/**
 * The controller for Signup screen
 *
 * [It's not utilized so far]
 */

import {createSelector} from 'reselect';

// State
export const signupState = {
  firstName: '',
  lastName: '',
  emailId: '',
  countryCode: {
    name: 'United States',
    dial_code: '+1',
    Length: 10,
  },
  number: '',
  numberModalUi: false,
};

export const signupReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_F_NAME':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'UPDATE_L_NAME':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'UPDATE_EMAIL':
      return {
        ...state,
        emailId: action.payload,
      };
    case 'UPDATE_C_CODE':
      return {
        ...state,
        countryCode: action.payload,
      };
    case 'UPDATE_NUMBER':
      return {
        ...state,
        number: action.payload,
      };
    case 'UPDATE_NUMBER_MODAL':
      console.log('aa');

      return {
        ...state,
        numberModalUi: action.payload,
      };
    default:
      return state;
  }
};

// actions
export const updateFirstName = (payload: string) => ({
  type: 'UPDATE_F_NAME',
  payload,
});

export const updateLastName = (payload: string) => ({
  type: 'UPDATE_L_NAME',
  payload,
});

export const updateEmail = (payload: string) => ({
  type: 'UPDATE_EMAIL',
  payload,
});

export const updateCountryCode = (payload: string) => ({
  type: 'UPDATE_EMAIL',
  payload,
});
export const updateNumber = (payload: string) => ({
  type: 'UPDATE_EMAIL',
  payload,
});

export const updateNumberModal = () => {
  // console.log(signupState.numberModalUi);
  return {
    type: 'UPDATE_NUMBER_MODAL',
    payload: true,
  };
};

// Selectors
const FNameState = (state: any) => state.firstName;
const LNameState = (state: any) => state.lastName;
const EmailState = (state: any) => state.emailId;
const CCodeState = (state: any) => state.countryCode;
const NumberState = (state: any) => state.number;
const NumbersModalState = (state: any) => state.numberModalUi;

export const inputsSelector = createSelector(
  [FNameState, LNameState, EmailState, CCodeState, NumberState],
  (fName, lName, email, Ccode, number) => {
    return {
      fName,
      lName,
      email,
      Ccode,
      number,
    };
  },
);

export const uiSelector = createSelector([NumbersModalState], numberModal => {
  return {
    numberModal,
  };
});

import { createReducer, on } from '@ngrx/store';
import { openPopup } from './common.action';

export const initialState = {
  // your initial state here
};

export const commonReducer = createReducer(
  initialState,
  on(openPopup, (state) => {
    return {
      ...state,
      associateobj: {
        id: 0,
        name: "",
        email: "",
        phone: "",
        type: "CUSTOMER",
        address: "",
        associategroup: "level1",
        status: true
      }
    };
  })
);

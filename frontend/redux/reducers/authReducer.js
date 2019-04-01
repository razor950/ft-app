import { AUTHENTICATE, DEAUTHENTICATE, REGISTERED } from '../types';

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
  case REGISTERED: 
    return { token: action.payload };
  case AUTHENTICATE:
    return { token: action.payload };
  case DEAUTHENTICATE:
    return { token: null };
  default:
    return state;
  }
};
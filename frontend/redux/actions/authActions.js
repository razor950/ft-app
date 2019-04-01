import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE, REGISTERED } from '../types';
import { API_BASE_URL } from '../../src/utils/constants';
import { setCookie, removeCookie } from '../../src/utils/cookie';

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ usernameOrEmail, password }, type) => {
  if (type !== 'login') {
    throw new Error('Wrong API call!');
  }
  return (dispatch) => {
    axios.post(`${API_BASE_URL}/auth/${type}`, { usernameOrEmail, password })
      .then((response) => {
        console.log(response);
        setCookie('token', response.data.accessToken);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' +  response.data.accessToken;
        Router.push('/profile');
        dispatch({type: AUTHENTICATE, payload: response.data.accessToken});
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};

const reauthenticate = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
    dispatch({type: AUTHENTICATE, payload: token});
  };
};

const registered = ({ name, username, email, password }, type) => {
  if (type !== 'register' ) {
    throw new Error('Wrong API call!')
  }
  return (dispatch) => {
    axios.post(`${API_BASE_URL}/auth/${type}`, { name, username, email, password })
      .then((response) => {
        setCookie('token', response.data.accessToken);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' +  response.data.accessToken;
        Router.push('/profile');
        dispatch({type: REGISTERED, payload: response.data.accessToken});
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
}

// removing the token
const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token');
    Router.push('/');
    dispatch({type: DEAUTHENTICATE});
  };
};


export default {
  registered,
  authenticate,
  reauthenticate,
  deauthenticate,
};
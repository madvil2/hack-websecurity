import { AUTH_CHECK, AUTH_LOGOUT, AUTH_SET_DATA } from './actions';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('userSO')) || {
    firstName: '',
    lastName: '',
  },
  permissions: JSON.parse(localStorage.getItem('permissions')) || [],
};

const blankInitialState = {
  isLoggedIn: false,
  token: null,
  user: {
    firstName: '',
    lastName: '',
  },
  permissions: [],
};

// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = initialState, action) => {
  if (action.type === AUTH_SET_DATA) {
    return { ...state, ...action.payload };
  }
  if (action.type === AUTH_LOGOUT) {
    return { ...blankInitialState };
  }
  if (action.type === AUTH_CHECK) {
    return { ...initialState };
  }
  return state;
};

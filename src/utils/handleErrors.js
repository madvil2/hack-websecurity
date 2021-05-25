import paths from '../pages/skeleton/paths';

const handleErrors = (error) => {
  // eslint-disable-next-line no-console
  console.error('[API]', error);
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('apiUrl');
    localStorage.removeItem('userSO');
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    window.location.pathname = paths.login;
  }
  throw error;
};

export default handleErrors;

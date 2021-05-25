import service from './service';


const toAPI = {
  getUserInfo: async (fingerprint) => {
    try {
      const { data } = await service.get(`http://127.0.0.1:8000/api/v1/auth/profile`, {
        headers: {
          'Fingerprint': fingerprint,
        }
      });
      if (data && data.status === 200) {
        return data.data;
      }
    }
    catch (err) {
      if (err && err.response && err.response.status === 403) {
        return 403;
      }
    }
    return {};
  },
  sendCode: async (code) => {
    try {
      const { data } = await service.post(`http://127.0.0.1:8000/api/v1/auth/activate`, {
        code,
        token: localStorage.getItem('token'),
        fingerprint: window.PX.settings.fingerprint,
      });
      if (data) {
        localStorage.setItem('token', data.data.token.token);
        return data.data;
      }
    } catch (err) {
      console.log(err);
    }
    return false;
  }
};

export default toAPI;

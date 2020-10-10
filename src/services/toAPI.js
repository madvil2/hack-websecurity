import service from './service';

const toAPI = {
  getUserInfo: async () => {
    try {
      const { data } = await service.get(`http://79.174.13.148/api/v1/auth/profile`);
      if (data && data.status === 200) {
        return data.data;
      }
    }
    catch (err) {
      console.log('[API]', err);
    }
    return {};
  }
};

export default toAPI;

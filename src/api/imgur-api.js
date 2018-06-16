import qs from 'qs';

const CLIENT_ID = '13968f4b6de2b1e';
const ROOT_URL = 'https://api.imgur.com';

const imgurApi = {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
};

export default imgurApi;

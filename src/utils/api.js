import axios from 'axios';
import qs from 'qs';

const api = async ({ ...params }) => {
  const {
    data,
    headers = {},
    fncResolve = (r) => {
      return r;
    },
    ...config
  } = params;

  const response = await axios({
    baseURL: 'http://localhost:8080',
    headers: Object.assign(
      { 'content-type': 'application/x-www-form-urlencoded' },
      headers
    ),
    data: !headers['content-type'] ? qs.stringify(data) : data,
    ...config,
  })
    .then(fncResolve)
    .catch((err) => {
      // const { config, response: { status = 0 } = {} } = err;
      // const originalRequest = config;
      // if (
      //   !['/v1/na/auth/login', '/v1/na/auth/refresh'].includes(
      //     originalRequest.url
      //   ) &&
      //   status === 401
      // ) {
      //   if (!isTokenRefreshing) {
      //     isTokenRefreshing = true;
      //     const refresh = getRefresh();
      //     api({
      //       url: '/v1/na/auth/refresh',
      //       method: 'post',
      //       headers: Object.assign(
      //         { 'content-type': 'application/x-www-form-urlencoded' },
      //         session && { authorization: 'Bearer ' + session },
      //         refresh && { 'authorization-refresh': 'Bearer ' + refresh }
      //       ),
      //       crossDomain: true,
      //       withCredentials: true,
      //     })
      //       .then(response => {
      //         const { headers: _headers, data: _data } = response;
      //         const {
      //           authorization: _session,
      //           'authorization-refresh': _refresh,
      //         } = _headers;
      //         if (!!_session && !!_refresh) {
      //           _session && localStorage.setItem('session', _session);
      //           _refresh && localStorage.setItem('refresh', _refresh);
      //         }
      //         isTokenRefreshing = false;
      //         axiosApiQue.map(callback => {
      //           callback(_session);
      //         });
      //       })
      //       .catch(err => {
      //         localStorage.removeItem('session');
      //         localStorage.removeItem('refresh');
      //         if (window.location.pathname != '/login') {
      //           window.location.href = '/login';
      //         }
      //       });
      //   }
      //   return new Promise(resolve => {
      //     if (!axiosApiUrlQue.includes(originalRequest.url)) {
      //       axiosApiUrlQue.push(originalRequest.url);
      //       axiosApiQue.push(session => {
      //         params.headers.authorization = 'Bearer ' + session;
      //         resolve(api(params));
      //       });
      //     }
      //  });
      // }
      return Promise.reject(err);
    });
  return response;
};

export default api;

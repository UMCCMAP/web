import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://localhost:8080/',
});

baseAxios.interceptors.request.use(
  (config) => {
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = localStorage.getItem('token');
    }
    return config;
  },
  async (error) => {
    console.log(error);
    return await Promise.reject(error);
  },
);

// baseAxios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     console.log(error);

//     if (error.response?.status === 401) {
//       const refreshToken = localStorage.getItem('refreshToken');
//       if (refreshToken != null) {
//         const refreshedAccessToken = await updateAccessToken(refreshToken);
//         if (refreshedAccessToken !== null && refreshedAccessToken !== undefined) {
//           originalRequest.headers['Authorization'] = refreshedAccessToken;
//           localStorage.setItem('token', refreshedAccessToken);
//           return await baseAxios(originalRequest);
//         }
//       }
//     }
//     localStorage.clear();
//     alert('로그인 정보 만료');
//     window.location.href = '/';
//     return await Promise.reject(error);
//   },
// );

// export const updateAccessToken = async (refreshToken) => {
//   const response = await baseAxios.post('');
//   return response.data.access;
// };

export default baseAxios;

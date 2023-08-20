import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://localhost:8080/',
});

baseAxios.interceptors.request.use(
  (config) => {
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = 'localStorage에 있는 토큰 값 넣으면 됨';
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
//       const refreshToken =
//         'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJidWRsYWxzd2wxMTI5QGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjkyMzQxNTQ2LCJleHAiOjE2OTQ5Njk1NDZ9.pg0Y2a5XrD1Zmcy-_gydrwiqDQ-lwi0lXUBViYD_KsvsHhSRdYUcWT3U-mxxItLr';
//       if (refreshToken != null) {
//         const refreshedAccessToken = await updateAccessToken(refreshToken);

//         if (refreshedAccessToken !== null && refreshedAccessToken !== undefined) {
//           originalRequest.headers.access = `Bearer ${refreshedAccessToken}`;

//           // localStorage.setItem('accessToken', refreshedAccessToken);
//           return await baseAxios(originalRequest);
//         }
//       }
//     }
//     // sessionStorage.clear();
//     alert('로그인 정보 만료');
//     window.location.href = '/';
//     return await Promise.reject(error);
//   },
// );

// export const updateAccessToken = async (refreshToken) => {
//   const response = await baseAxios.post("")
//   return response.data.access
// }

export default baseAxios;

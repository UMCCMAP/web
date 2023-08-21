import './App.css';
import 'react-quill/dist/quill.snow.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intropage from './pages/IntroPage/Intropage';
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Login/Loginpage';
import Registerpage from './pages/Login/RegisterPage';
// import MyprofilePage from './pages/Myprofile/Myprofile';
// import EditprofilePage from './pages/Myprofile/EditProfile';
// import ReviewCheckPage from './pages/Review/ReviewCheck';
import SearchPage from './pages/SearchPage';
import RecommendCafePage from './pages/RecommendCafe/RecommendCafePage';
import BoardList from './pages/Board/BoardList';
import BoardModify from './pages/Board/BoardModify';
import BoardView from './pages/Board/BoardView';
import BoardWrite from './pages/Board/BoardWrite';
import Root from './Root';
import ErrorPage from './pages/ErrorPage';
import CmapPage from './pages/CmapPage';
import LoginCallbackPage from './pages/Login/LoginCallbackPage';
import PublicPages from './components/access/PublicPages';
import PrivatePages from './components/access/PrivatePages';
import isLogin from './components/access/isLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <PublicPages Component={isLogin() ? Homepage : Intropage} restricted={undefined} />
        ),
      },
      { path: '/home', element: <PrivatePages Component={Homepage} /> },
      { path: '/login', element: <PublicPages Component={Loginpage} restricted /> },
      { path: '/oauth2/redirect', element: <LoginCallbackPage /> },
      { path: '/register', element: <PrivatePages Component={Registerpage} /> },
      // { path: '/profile', element: <MyprofilePage /> },
      // { path: '/profile/edit', element: <EditprofilePage /> },
      // { path: '/review', element: <ReviewCheckPage /> },
      { path: '/search', element: <PrivatePages Component={SearchPage} /> },
      { path: '/recommend', element: <PrivatePages Component={RecommendCafePage} /> },
      { path: '/cmap', element: <PrivatePages Component={CmapPage} /> },
      { path: '/board', element: <BoardList /> },
      { path: '/board/modify/:idx', element: <BoardModify /> },
      { path: '/board/:idx', element: <BoardView /> },
      { path: '/board/write', element: <BoardWrite /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intropage from './pages/Intropage';
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Login/Loginpage';
import Registerpage from './pages/Login/RegisterPage';
import MyprofilePage from './pages/Myprofile/Myprofile';
import EditprofilePage from './pages/Myprofile/EditProfile';
import ReviewCheckPage from './pages/Review/ReviewCheck';
import SearchPage from './pages/SearchPage';
import RecommendCafePage from './pages/RecommendCafe/RecommendCafePage';
import BoardList from './pages/Board/BoardList';
import BoardModify from './pages/Board/BoardModify';
import BoardView from './pages/Board/BoardView';
import BoardWrite from './pages/Board/BoardWrite';
// import Root from './Root';
// import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Intropage /> },
      { path: '/home', element: <Homepage /> },
      { path: '/login', element: <Loginpage /> },
      { path: '/register', element: <Registerpage /> },
      { path: '/profile', element: <MyprofilePage /> },
      { path: '/profile/edit', element: <EditprofilePage /> },
      { path: '/review', element: <ReviewCheckPage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/recommend', element: <RecommendCafePage /> },
      { path: '/board', element: <BoardList /> },
      { path: '/board/modify', element: <BoardModify /> },
      { path: '/board/view', element: <BoardView /> },
      { path: '/board/write', element: <BoardWrite /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

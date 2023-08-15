import './App.css';
import 'react-quill/dist/quill.snow.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intropage from './pages/Intropage';
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Loginpage';
import SearchPage from './pages/SearchPage';
import RecommendCafePage from './pages/RecommendCafe/RecommendCafePage';
import BoardList from './pages/Board/BoardList';
import BoardModify from './pages/Board/BoardModify';
import BoardView from './pages/Board/BoardView';
import BoardWrite from './pages/Board/BoardWrite';
import Root from './Root';
import ErrorPage from './pages/ErrorPage';
import CmapPage from './pages/CmapPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Intropage /> },
      { path: '/home', element: <Homepage /> },
      { path: '/login', element: <Loginpage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/recommend', element: <RecommendCafePage /> },
      { path: '/cmap', element: <CmapPage /> },
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

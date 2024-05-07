
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayOut from './layouts/MainLayOut';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayOut/>}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);

const App = () => {


  return <RouterProvider router={router} />;
}

export default App
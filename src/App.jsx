
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
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';



const App = () => {
  // add a new job
  const addJob = async ( newJob ) => {
    const res = await fetch( '/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( newJob )
    } );
    return;
  };
  // delete job 
  const deleteJob = async ( id )=> {
  const res = await fetch( `/api/jobs/${id}`, {
    method: 'DELETE',
  } );
    return;
  } 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayOut/>}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />

      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} /
>} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);

  return <RouterProvider router={router} />;
}

export default App
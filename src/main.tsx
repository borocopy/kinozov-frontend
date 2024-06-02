import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/index.css'
import Root from '@/layouts/root';
import Home from '@/pages/home';
import SignIn from '@/pages/signin/signin';
import SignUp from '@/pages/signup/signup';
import Movie from '@/pages/movie/movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root><Home /></Root>
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/movie/:movieId",
    element: <Root><Movie /></Root>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

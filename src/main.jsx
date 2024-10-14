import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, Link  } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './screens/home/index.tsx';
import GAS from './pages/index.jsx';
import Index from './pages/index.jsx';
import HomePage from './pages/HomePage.jsx';
import ResearchChat from './pages/ResearchChat.jsx';
import ResearchCal from './pages/ResearchCal.jsx';
import ResearchSong from './pages/ResearchSong.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element: <HomePage/>
  },

  {
    path: '/Calculator',
    element: <Home/>
  },

  {
    path: '/GAS',
    element: <Index/>
  },
  {
    path: '/Chat',
    element: <App/>
  },
  {
    path: '/Research1',
    element: <ResearchChat/>
  },
  {
    path: '/Research2',
    element: <ResearchCal/>
  },
  {
    path: '/Research3',
    element: <ResearchSong/>
  },



])

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <RouterProvider router={router}/>
  </MantineProvider>
)

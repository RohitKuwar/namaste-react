import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: 'restaurant/:restaurantId',
    element:<RestaurantMenu />
  },
  {
    path: 'grocery',
    element:<Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)
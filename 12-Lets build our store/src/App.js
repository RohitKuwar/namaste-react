import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import RestaurantMenu from './components/RestaurantMenu'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import store from './store';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <UserContext.Provider value={'John Doe'}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)
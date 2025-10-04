
import React from 'react'
import Header from './Header'
import Body from './Body'
import About from './About'
import Contact from'./Contact'
import Error from './Error'
import Footer from './Footer'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'
import Cart from './Cart';
import { Provider } from 'react-redux'
import store from './utils/appStore'

function AppLayout() {
  return (
    <Provider store = {store}>
    <div className='app'>
      <Header/> 
      <Outlet/>
      <Footer/>
    </div>
    </Provider>            
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<AppLayout/>,
    children:[
       {
         path:'/',
         element:<Body/>
        },

        {
          path:"/about",
          element:<About/>
        },

        {
          path:"/contact",
          element:<Contact/>
        },

        {
          path:'/restaurants/:id',
          element:<RestaurantMenu/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }

    ],
    errorElement:<Error/>,
  },

 
])

export default appRouter

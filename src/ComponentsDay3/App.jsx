

import Header from './Header'
import Body from './Body'
import About from './About'
import Contact from'./Contact'
import Error from './Error'
import Footer from './Footer'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'

function AppLayout() {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>            
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
        }

    ],
    errorElement:<Error/>,
  },

 
])

export default appRouter

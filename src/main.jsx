import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import appRouter from './ComponentsDay2/App'
// import App from './ComponentsDay2/App'
import App from './ComponentsDay1/App'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
    // <RouterProvider router={appRouter}/>
    <App/>

  
)

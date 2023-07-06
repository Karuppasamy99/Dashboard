
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import TableContent from './components/TableContent'
import Login from './components/Login'
import MainContainer from './components/MainContainer'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'dashboard',
    element: <MainContainer />,
    children: [
      {
        path: '/dashboard/',
        element: <Dashboard />,
      },
      {
        path: 'tickets',
        element: <TableContent />,
      }
    ]
  }
])

function App() {
  

  return (
    <> 
     <RouterProvider router={appRouter} />
    </>
  )
}

export default App

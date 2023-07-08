
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import TableContent from './components/TableContent'
import Login from './components/Login'
import MainContainer from './components/MainContainer'
import UserContext from './utils/UserContext'
import { useState } from 'react'


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
  
  const [userInfo, setUserInfo] = useState( {
    userName: 'kannan',
    email: 'kannan@gmail.com',
  })

  return (
    <UserContext.Provider value={{userInfo, setUserInfo }}>
    <> 
     <RouterProvider router={appRouter} />
    </>
    </UserContext.Provider>
  )
}

export default App

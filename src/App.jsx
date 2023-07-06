
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import TableContent from './components/TableContent'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
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
     <Header />
     <RouterProvider router={appRouter} />
    </>
  )
}

export default App

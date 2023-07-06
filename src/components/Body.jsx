import { Outlet } from 'react-router-dom'
import NavBar from './NavBar' 
const Body = () => {
  return (
    <div className='flex flex-row'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Body
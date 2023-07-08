import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="w-[168px] h-screen mt-5 shadow-lg">
      <nav>
        <ul>
          <Link to={'/dashboard'}><li className="my-2 py-2 px-2  text-cyan-800 hover:bg-cyan-200  active:bg-cyan-200 border-l-cyan-800 focus:bg-cyan-200 ">IT DashBoard</li></Link>
          <Link to={'/dashboard/tickets'}><li className="my-2 py-2 px-2 text-cyan-800 hover:bg-cyan-200  active:bg-cyan-200 border-l-cyan-800 focus:bg-cyan-200 ">IT Ticket</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
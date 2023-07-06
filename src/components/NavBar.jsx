import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="w-[168px] mx-2 mt-5 h-96 shadow-lg">
      <nav>
        <ul>
          <Link to={'/'}><li className="my-2 py-2 px-2 text-cyan-800 hover:bg-cyan-200 border-l-cyan-800 active:bg-cyan-200 ">IT DashBoard</li></Link>
          <Link to={'/tickets'}><li className="my-2 py-2 px-2 text-cyan-800 hover:bg-cyan-200 border-l-cyan-800 active:bg-cyan-200 ">IT Ticket</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
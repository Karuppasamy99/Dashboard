import { useContext } from "react"
import UserContext from "../utils/UserContext"


const Header = () => {
  const { userInfo } = useContext(UserContext)
  return (
    <div className="grid grid-flow-col m-2 p-2">
      <img className="h-8 col-span-1" alt="Company's logo" src="https://www.forliving.org/wp-content/uploads/2021/08/sol_logo_small-v2.jpg" />
      <h1 className="text-4xl m-2 p-2 text-cyan-300 border-l-gray-300 font-bold col-span-10">DashBoard</h1>
      <div className="col-span-1 flex">
      <img className="h-8 mt-2" alt="User logo" src="https://i2.wp.com/buddymantra.com/wp-content/uploads/2018/04/user-icon-png-pnglogocom.png?fit=500%2C466&ssl=1" />
      <div>
      <span className="ml-1 text-xs text-cyan-800">{userInfo.userName}</span>
      <br/>
      <p className="ml-1 text-xs text-cyan-800 underline">{userInfo.email}</p>
      </div>
      
      </div>
    </div>
  )
}

export default Header
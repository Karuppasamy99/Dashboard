import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
  const {userInfo, setUserInfo} = useContext(UserContext)
  console.log(userInfo)
    return (
      <div className="flex flex-row h-screen inset-0">
        <div className="w-1/2 my-0 mx-auto bg-slate-100">
          {/* Photo */}
          <img className="" src="https://i.insider.com/555ca1e0eab8ea3d74798017?width=889" alt="Photo" />
        </div>
        <div className="w-1/2 bg-slate-500 align-middle ">
            <div className="flex h-full justify-center items-center">
            <div className="bg-cyan-100 w-2/4 h-2/4 rounded-2xl">
          {/* Logo and Name */}
          <div className="flex flex-col h-full justify-center items-center">
            <div className="p-4">
            <img className="h-20" src="https://www.forliving.org/wp-content/uploads/2021/08/sol_logo_small-v2.jpg" alt="Peoplesol Logo" />
            </div>
          
          {/* Login Form */}
          <div className="m-4">
            <h2 className="font-bold text-xl p-2">Login</h2>
            
              <input className="block m-2 p-2 rounded-lg" value={userInfo.userName} type="text" onChange={(e)=>setUserInfo({...userInfo, userName: e.target.value})} placeholder="Username" />
              <input className="block m-2 p-2 rounded-lg" value={userInfo.email} type="password" onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})} placeholder="Email" />
              <Link to={'/dashboard'}><input className="block m-2 p-2 rounded-lg bg-cyan-300 cursor-pointer text-center" value="Submit" readOnly/></Link>
           
          </div>
          {/* Footer */}
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
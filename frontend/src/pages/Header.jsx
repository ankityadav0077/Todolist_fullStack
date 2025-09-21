import Login from "../features/auth/Login"
import Register from "../features/auth/Register"
import Logout from "../features/auth/Logout"
import { useSelector } from "react-redux"
export default function Header(){
    const isUserPresent=useSelector((state)=>state.auth.isUserPresent)
    const userName=useSelector((state)=>state.auth.userName)
    return (
        <>
        <div className="flex justify-around items-center bg-gradient-to-r from-blue-600 to-indigo-200 text-white p-4 shadow-md">
            <div className="text-2xl font-bold tracking-tight text-gray-900 m-2">Logo</div>
            <div className="text-xl text-center font-extrabold text-white">Stay productive, stay organized ✨</div>
            <div className="">
                {!isUserPresent?<div className="sm:flex sm:gap-2"><Login/><Register/></div>:<div className="sm:flex sm:gap-2"><div className="text-2xl  flex justify-center items-center text-black shadow-2xl font-bold">{userName}</div> <Logout/></div>}
            </div>
        </div>
        </>
    )
}
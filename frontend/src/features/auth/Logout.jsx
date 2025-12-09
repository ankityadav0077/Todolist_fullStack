import { useDispatch } from "react-redux"
import { logout } from "./authSlice"

export default function Logout() {
    const dispatch = useDispatch()

    const handelLogout = () => {
        dispatch(logout())
    }

    return (
        <button
            onClick={handelLogout}
            className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
        >
            Logout
        </button>
    )
}
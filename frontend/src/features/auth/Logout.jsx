import { useDispatch } from "react-redux"
import ButtonX from "../../components/ButtonX"
import { logout } from "./authSlice"
export default function Logout(){
    const dispatch=useDispatch()
    const handelLogout=()=>{
        dispatch(logout())
    }
    return (
        <>
        <ButtonX  buttonText={'Logout'} onclick={handelLogout}/>
        </>
    )
}
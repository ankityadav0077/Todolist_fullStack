import { useDispatch, useSelector } from "react-redux";
import ButtonX from "../../components/ButtonX"
import sideImg from "../../assets/5484597.jpg"
import { useState } from "react";
import AuthComponent from "./AuthComponet";
import useRegister from "../../hooks/Reagister";
import {register} from "./authSlice"
export default function Register(){
    const [isClicked, setIsClicked] = useState(false);
    const dispatch=useDispatch()
    const [errorX,setErrorX]=useState(null)
    const {result,loading,error,setError,hookRegister}=useRegister()
    const inputs = [
        { type: "text", placeholder: "Enter your name" },
        { type: "email", placeholder: "Enter your email" },
        { type: "password", placeholder: "Enter your password" },
    ];
  const handleRegiteration = async(data) => {
    console.log("signup data:", data);
    console.log("signup data:", typeof(hookRegister));
    const abc=await hookRegister({userName:data.text,userEmail:data.email,userPassword:data.password})
    console.log("signup data from server:", abc,error);
    if (!error && abc){
      console.log("signup successfull")
      setIsClicked(false); // close modal after login
      dispatch(register({isUserPresent:true, userName:abc.name, userEmail:abc.email, userToken:abc.token}))
    }else if(error){
      console.log("signup failed", error)
      setErrorX(error)
      setError(null) 
    }
  };

  return (
    <>
      {isClicked ? (
        <AuthComponent
          onClose={() => setIsClicked(false)}
          sideImg={sideImg}
          name="SignUp"
          inputs={inputs}
          onSubmit={handleRegiteration}
          error={errorX}
        />
      ) : (
        <ButtonX buttonText="SignUp" onclick={() => setIsClicked(true)} />
      )}
    </>
  );
}

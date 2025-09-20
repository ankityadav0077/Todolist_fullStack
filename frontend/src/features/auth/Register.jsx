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
    const {result,loading,error,hookRegister}=useRegister()
    const inputs = [
        { type: "text", placeholder: "Enter your name" },
        { type: "email", placeholder: "Enter your email" },
        { type: "password", placeholder: "Enter your password" },
    ];
  const handleRegiteration = async(data) => {
    console.log("signup data:", data);
    console.log("signup data:", typeof(hookRegister));
    const abc=await hookRegister({userName:data.text,userEmail:data.email,userPassword:data.password})
    if (!error && abc){
      register({isUserPresent:true, userName:abc.name, userEmail:abc.email, userToken:abc.token})
      setIsClicked(false); // close modal after login
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
          error={error}
        />
      ) : (
        <ButtonX buttonText="SignUp" onclick={() => setIsClicked(true)} />
      )}
    </>
  );
}

import { useState } from "react";
import ButtonX from "../../components/ButtonX";
import loginImg from "../../assets/image.png";
import AuthComponent from "./AuthComponet";
import useLogin from "../../hooks/Login";
import { login } from "./authSlice";
import { useDispatch } from "react-redux";
export default function Login() {
  const [isClicked, setIsClicked] = useState(false);
  const [errorx,setErrorx]=useState('')
  const { result, loading, error, loginHook } = useLogin();
  const dispatch=useDispatch()
  const inputs = [
    { type: "email", placeholder: "Enter your email" },
    { type: "password", placeholder: "Enter your password" },
  ];

  const handleLogin = async(data) => {
    const abc=await loginHook({userEmail:data.email,userPassword:data.password})
    if (!error && abc){
        dispatch(login({isUserPresent:true, userName:abc.name, userEmail:data.email, userToken:abc.token}))
        // console.log(abc.message)
        setIsClicked(false); // close modal after login
    }
  };

  return (
    <>
      {isClicked ? (
        <>
        <AuthComponent
          onClose={() => setIsClicked(false)}
          sideImg={loginImg}
          name="Login"
          inputs={inputs}
          onSubmit={handleLogin}
          error={error}
        />
        </>
      ) : (
        <ButtonX buttonText="LogIn" onclick={() => setIsClicked(true)} />
      )}
    </>
  );
}

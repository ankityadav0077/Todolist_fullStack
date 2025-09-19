import { useState } from "react";
import ButtonX from "../../components/ButtonX";
import loginImg from "../../assets/image.png";
import AuthComponent from "./AuthComponet";

export default function Login() {
  const [isClicked, setIsClicked] = useState(false);

  const inputs = [
    { type: "email", placeholder: "Enter your email" },
    { type: "password", placeholder: "Enter your password" },
  ];

  const handleLogin = (data) => {
    console.log("Login data:", data);
    setIsClicked(false); // close modal after login
  };

  return (
    <>
      {isClicked ? (
        <AuthComponent
          onClose={() => setIsClicked(false)}
          sideImg={loginImg}
          name="Login"
          inputs={inputs}
          onSubmit={handleLogin}
        />
      ) : (
        <ButtonX buttonText="LogIn" onclick={() => setIsClicked(true)} />
      )}
    </>
  );
}

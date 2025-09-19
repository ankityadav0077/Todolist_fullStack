import { useSelector } from "react-redux";
import ButtonX from "../../components/ButtonX"
import sideImg from "../../assets/5484597.jpg"
import { useState } from "react";
import AuthComponent from "./AuthComponet";
export default function Register(){
    const [isClicked, setIsClicked] = useState(false);
    const inputs = [
        { type: "name", placeholder: "Enter your name" },
        { type: "email", placeholder: "Enter your email" },
        { type: "password", placeholder: "Enter your password" },
    ];
  const handleRegiteration = (data) => {
    console.log("signup data:", data);
    setIsClicked(false); // close modal after login
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
        />
      ) : (
        <ButtonX buttonText="SignUp" onclick={() => setIsClicked(true)} />
      )}
    </>
  );
}

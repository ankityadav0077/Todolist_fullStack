
import { useState } from "react";
function useRegister(){
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    const hookRegister=async({userName,userEmail,userPassword})=>{
        try {
        const response = await fetch("http://10.18.41.189:4000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name:userName,email: userEmail, password: userPassword })
      })
        const data=await response.json()
        if (!response.Created) {
        // ❌ server returned an error (like 400, 401, 500)
        throw new Error(data.message || "Something went wrong");
      } 
      setResult(data);  // ✅ store server response
      setLoading(false);
      return data;

        } catch (err) {
            setError(err.message || "Unexpected error");
            setLoading(false);
            return null
        }
    }
    return {result,loading,error,hookRegister}
}
export default useRegister
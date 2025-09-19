import { useState } from "react";

function useLogin() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginHook = async ({ userEmail, userPassword }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password: userPassword })
      });

      const data = await response.json();

      if (!response.ok) {
        // ❌ server returned an error (like 400, 401, 500)
        throw new Error(data.message || "Something went wrong");
      }

      setResult(data);  // ✅ store server response
      setLoading(false);
      return data;      // return fresh data immediately
    } catch (err) {
      setError(err.message || "Unexpected error");
      setLoading(false);
      return null;      // so caller knows it failed
    }
  };

  return { result, loading, error, loginHook };
}

export default useLogin;

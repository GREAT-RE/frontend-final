import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [interest, setInterest] = useState();

  const navigate = useNavigate();
  const token = localStorage.getItem("user_token_greater");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    api
      .get("/auth/verify-token", config)
      .then((response) => {
        // console.log(response)
        if (response.data) {
          setUser(response.data);
          setAuth(true);
          api
            .get(`/interest/${response.data.id}`)
            .then((response) => setInterest(response.data))
            .catch((error) => {
              console.error(error);
            });
        }
        // navigate(-1)
      })
      .catch((error) => {
        console.error(error.message);
        setAuth(false);
        localStorage.removeItem("user_token_greater");
        // navigate("/register/login")
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        interest,
        setInterest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

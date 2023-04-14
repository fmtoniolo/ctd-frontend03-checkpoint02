import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import LoginContext from "../context/loginContext";
import BaseTemplate from "../templates/BaseTemplate/BaseTemplate";

const Login = () => {
  const navigate = useNavigate();
  const {token} = useContext(LoginContext);

  useEffect(() => {
    if (token) navigate("/home")
  }, [])

  return (
    <>
      <BaseTemplate>
        <h1>Login</h1>
        <LoginForm />
      </BaseTemplate>
    </>
  );
};

export default Login;

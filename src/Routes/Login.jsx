import LoginForm from "../Components/LoginForm";
import BaseTemplate from "../templates/BaseTemplate/BaseTemplate";

const Login = () => {
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

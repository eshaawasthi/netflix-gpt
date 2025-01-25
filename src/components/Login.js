import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="login-wrapper">
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;

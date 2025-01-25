import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="container">
        <Header />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

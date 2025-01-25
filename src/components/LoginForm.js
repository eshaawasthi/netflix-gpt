import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="loginForm-wrapper row m-3">
      <div className="col-lg-5 col-md-5 col-sm-12 p-5 text-white">
        <Form className="form-wrapper m-2">
          <h2 className="mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email or phone number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button className="mt-4" variant="danger" type="submit">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </Button>
          </div>
          <p className="pt-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netlix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

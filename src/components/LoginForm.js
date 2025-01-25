import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  return (
    <div className="loginForm-wrapper row m-3">
      <div className="col-lg-4 col-md-4 col-sm-12 p-5 text-white">
        <Form className="form-wrapper m-2">
          <h2 className="mb-4">Sign In</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email or phone number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button className="mt-4" variant="danger" type="submit">
              Sign In
            </Button>
          </div>
          <p className="sign-up pt-4">New to Netlix? Sign Up Now</p>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

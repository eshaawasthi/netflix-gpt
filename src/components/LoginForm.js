import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  return (
    <div className="loginForm-wrapper row m-3">
      <div className="col-lg-4 col-md-4 col-sm-12 p-4 m-5 text-white">
        <Form>
          <h3 className="mb-4">Sign In</h3>
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
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

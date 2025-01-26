import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser, removeUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validate";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null);

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    const fields = [name, password, email];

    fields.forEach((item) => {
      if (item?.current?.value) {
        item.current.value = "";
      }
    });

    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const authStateChanged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // User is signed in
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  };
  const handleLoginFormData = (e) => {
    e.preventDefault();
    const errMessage = isSignInForm
      ? checkValidData(email?.current.value, password?.current.value)
      : checkValidData(
          email?.current.value,
          password?.current.value,
          name.current.value
        );
    setErrorMessage(errMessage);
    if (errMessage) return;
    if (!isSignInForm) {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email?.current.value,
        password?.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              authStateChanged();
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current.value,
        password?.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          authStateChanged();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="loginForm-wrapper row m-3">
      <div className="col-lg-5 col-md-5 col-sm-12 p-5 text-white">
        <Form className="form-wrapper m-2">
          <h2 className="mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                ref={name}
                type="name"
                placeholder="Full Name"
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={email}
              type="email"
              placeholder="Email or phone number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={password}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <p className="text-danger font-weight-bold">{errorMessage}</p>

          <div className="d-grid gap-2">
            <Button
              className="mt-4"
              variant="danger"
              type="submit"
              onClick={(e) => handleLoginFormData(e)}
            >
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import { HeadingDiv } from "../style/HeadingCSS.js";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Heading = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <HeadingDiv>
      <Navbar bg="bg-red" expand="lg" variant="dark">
        <Container className="nav-style">
          <Link to="/">
            <Logo />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end">
            {user.accessToken ? (
              <>
                <Navbar.Text>
                  <Link className="link-style" to="/upload">
                    Upload
                  </Link>
                </Navbar.Text>
                <br />
                <Navbar.Text>
                  <Link className="link-style" to="/mypage">
                    MyPage
                  </Link>
                </Navbar.Text>
                <br />
                <Navbar.Text
                  className="link-style"
                  onClick={() => LogoutHandler()}
                >
                  Logout
                </Navbar.Text>
              </>
            ) : (
              <>
                <Navbar.Text>
                  <Link className="link-style" to="/login">
                    Login
                  </Link>
                </Navbar.Text>
                <br />
                <Navbar.Text>
                  <Link className="link-style" to="/login">
                    SignUp
                  </Link>
                </Navbar.Text>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeadingDiv>
  );
};

export default Heading;

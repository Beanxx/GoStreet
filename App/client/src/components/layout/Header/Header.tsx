import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Navbar } from "react-bootstrap";
import firebase from "../../../firebase";
import Toast from "../../UI/Toast/Toast";
import { RootState } from "../../../reducer/store";
import { HeaderDiv } from "./HeaderCSS";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const LogoutHandler = () => {
    firebase.auth().signOut();
    Toast.fire({
      icon: "success",
      text: "로그아웃이 되었습니다.",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <HeaderDiv>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container className="nav-style">
          <Link className="link-style" to="/">
            <div className="logo-style">
              Go!Street
              <Logo />
            </div>
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
                  <Link className="link-style" to="/register">
                    SignUp
                  </Link>
                </Navbar.Text>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderDiv>
  );
};

export default Header;

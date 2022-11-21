import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "./UserCSS";
import firebase from "../../firebase";
import Toast from "../UI/Toast/Toast";
import { LoginBtn } from "../UI/Button";

interface ErrorType {
  code: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const SignInFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (!(email && pw)) {
      return Toast.fire({
        icon: "warning",
        text: "모든 칸을 채워주세요.",
      });
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, pw);
      Toast.fire({
        icon: "success",
        text: "Go!Street에 오신 것을 환영합니다 :>",
      }).then(() => {
        navigate("/");
      });
    } catch (error: unknown) {
      const err = error as ErrorType;
      if (err.code === "auth/user-not-found") {
        setErrorMsg("존재하지 않는 이메일입니다.");
      } else if (err.code === "auth/wrong-password") {
        setErrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setErrorMsg("로그인에 실패하였습니다.");
      }
    }
  };

  // 4초 후 에러메세지 자동적으로 사라지도록
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 4000);
  }, [errorMsg]);

  return (
    <LoginDiv>
      <form>
        <label>이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        {errorMsg !== "" && <p>{errorMsg}</p>}
        <LoginBtn onClick={(e) => SignInFunc(e)}>로그인</LoginBtn>
        <LoginBtn
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </LoginBtn>
      </form>
    </LoginDiv>
  );
};

export default Login;

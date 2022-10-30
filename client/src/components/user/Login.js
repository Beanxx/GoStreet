import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "../../style/UserCss.js";

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

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
        <button>로그인</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
};

export default Login;

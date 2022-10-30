import React, { useState } from "react";
import LoginDiv from "../../style/UserCSS.js";
import firebase from "../../firebase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [flag, setFlag] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState("");

  const RegisterFunc = async (e) => {
    setFlag(true); // 회원가입 버튼 한번 클릭하면 flag를 true로 변경하여 버튼이 disabled 상태가 되도록 설정
    e.preventDefault();

    if (!(name && email && pw && pwConfirm)) {
      return alert("모든 값을 채워주세요!");
    }

    if (pw !== pwConfirm) {
      return alert("비밀번호와 비빌번호 확인 값은 같아야 합니다.");
    }

    if (!nameCheck) {
      return alert("닉네임 중복검사를 진행해주세요.");
    }

    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw);

    await createdUser.user.updateProfile({
      displayName: name,
    });

    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };

    axios.post("/api/user/register", body).then((response) => {
      setFlag(false); // 회원가입이 완료되면 다시 버튼 활성화해주기
      if (response.data.success) {
        navigate("/login");
      } else {
        return alert("회원가입에 실패하였습니다.");
      }
    });
  };

  const NameCheckFunc = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("닉네임을 입력해주세요.");
    }

    let body = { displayName: name };

    axios.post("/api/user/namecheck", body).then((response) => {
      if (response.data.success) {
        if (response.data.check) {
          setNameCheck(true);
          setNameInfo("사용가능한 닉네임입니다.");
        } else {
          setNameInfo("사용불가능한 닉네임입니다.");
        }
      }
    });
  };

  return (
    <LoginDiv>
      <form>
        <label>닉네임</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          disabled={nameCheck}
        />
        {nameInfo}
        <button onClick={(e) => NameCheckFunc(e)}>닉네임 중복검사</button>

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
          minLength={8}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        <label>비밀번호 확인</label>
        <input
          type="password"
          value={pwConfirm}
          minLength={8}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        />
        <button disabled={flag} onClick={(e) => RegisterFunc(e)}>
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
};

export default Register;

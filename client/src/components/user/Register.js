import React, { useState } from "react";
import LoginDiv from "../../style/UserCss.js";
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

  const RegisterFunc = async (e) => {
    setFlag(true); // 회원가입 버튼 한번 클릭하면 flag를 true로 변경하여 버튼이 disabled 상태가 되도록 설정
    e.preventDefault();

    if (!(name && email && pw && pwConfirm)) {
      return alert("모든 값을 채워주세요!");
    }

    if (pw !== pwConfirm) {
      return alert("비밀번호와 비빌번호 확인 값은 같아야 합니다.");
    }

    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw);

    await createdUser.user.updateProfile({
      displayName: name,
    });

    console.log(createdUser.user);

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

  return (
    <LoginDiv>
      <form>
        <label>이름</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

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

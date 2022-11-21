import React, { useState } from "react";
import LoginDiv from "./UserCSS";
import firebase from "../../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "../UI/Toast/Toast.js";
import { LoginBtn, NicknameBtn } from "../UI/Button.js";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [flag, setFlag] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState("");

  const RegisterFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setFlag(true); // 회원가입 버튼 한번 클릭하면 flag를 true로 변경하여 버튼이 disabled 상태가 되도록 설정
    e.preventDefault();

    if (!(name && email && pw && pwConfirm)) {
      return Toast.fire({
        icon: "warning",
        text: "모든 칸을 채워주세요.",
      });
    }

    if (pw !== pwConfirm) {
      return Toast.fire({
        icon: "warning",
        text: "비밀번호와 비빌번호 확인 값은 같아야 합니다.",
      });
    }

    if (!nameCheck) {
      return Toast.fire({
        icon: "warning",
        text: "닉네임 중복검사를 진행해주세요.",
      });
    }

    const createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw);

    await createdUser?.user?.updateProfile({
      displayName: name,
      photoURL:
        "https://kr.object.ncloudstorage.com/community-bucket/post/profile.png",
    });

    const body = {
      email: createdUser?.user?.multiFactor.user.email,
      displayName: createdUser?.user?.multiFactor.user.displayName,
      uid: createdUser?.user?.multiFactor.user.uid,
      photoURL:
        "https://kr.object.ncloudstorage.com/community-bucket/post/profile.png",
    };

    axios.post("/api/user/register", body).then((response) => {
      setFlag(false); // 회원가입이 완료되면 다시 버튼 활성화해주기
      if (response.data.success) {
        Toast.fire({
          icon: "success",
          text: "Go!Street 회원가입을 축하드립니다 :>",
        }).then(() => {
          navigate("/");
        });
      } else {
        return Toast.fire({
          icon: "error",
          text: "회원가입에 실패하였습니다.",
        });
      }
    });
  };

  const NameCheckFunc = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!name) {
      return Toast.fire({
        icon: "warning",
        text: "닉네임을 입력해주세요.",
      });
    }

    const body = { displayName: name };

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
          className="nickname-input"
          type="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          disabled={nameCheck}
        />
        {nameInfo}
        <NicknameBtn onClick={(e) => NameCheckFunc(e)}>
          닉네임 중복검사
        </NicknameBtn>

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
        <LoginBtn disabled={flag} onClick={(e) => RegisterFunc(e)}>
          회원가입
        </LoginBtn>
      </form>
    </LoginDiv>
  );
};

export default Register;

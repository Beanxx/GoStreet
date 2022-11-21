import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from "./reducer/userSlice";
import firebase from "./firebase";
import Spinner from "./components/layout/Spinner";

const Header = lazy(() => import("./components/layout/Header/Header"));
const MainPage = lazy(() => import("./components/main/MainPage"));
const Upload = lazy(() => import("./components/post/Upload/Upload"));
const PostArea = lazy(() => import("./components/post/PostArea"));
const Edit = lazy(() => import("./components/post/Edit/Edit"));
const Login = lazy(() => import("./components/user/Login"));
const Register = lazy(() => import("./components/user/Register"));
const MyPage = lazy(() => import("./components/user/MyPage/MyPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/post/:postNum" element={<PostArea />} />
          <Route path="/edit/:postNum" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

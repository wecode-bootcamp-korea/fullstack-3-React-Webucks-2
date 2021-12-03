import React from "react";
import "../../styles/reset.scss";
import "./Login.scss";


function Login() {
  return (
    <div className="Login-setup">
      <div className="container">
        <h1 className="title">WeBucks</h1>
        <form>
          <div className="user-id">
            <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          </div>
          <div className="user-pwd">
            <input type="text" placeholder= "비밀번호" />
          </div>
          <button className="login-btn">로그인</button>
        </form>
        <p className="find-pwd">
          <a href="#" className="link">비밀번호를 잊으셨나요?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

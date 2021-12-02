import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate('/list');
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="background">
          <p className="title">WeBucks</p>
          <section>
            <form>
              <input type="input" id="account" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input type="password" id="password" placeholder="비밀번호" />
              <button id="checkButton" type="button" onClick={goToList}>
                로그인
              </button>
            </form>
          </section>
          <a className="findPw" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

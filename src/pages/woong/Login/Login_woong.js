import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const condition = id.includes('@') && pw.length >= 5;

  const goToList = () => {
    condition === true && navigate('/woong/list');
  };

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="background">
          <p className="title">WeBucks</p>
          <section>
            <form>
              <input
                type="input"
                id="account"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
                style={{ borderColor: id.includes('@') && 'green' }}
              />
              <input
                type="password"
                id="password"
                placeholder="비밀번호"
                onChange={handlePwInput}
                style={{ borderColor: pw.length >= 5 && 'green' }}
              />
              <button
                className="btnUnable"
                type="button"
                onClick={goToList}
                style={{ opacity: condition === true ? 1 : 0.5 }}
              >
                로그인
              </button>
            </form>
          </section>
          <Link to="/">
            <div className="findPw">비밀번호를 잊으셨나요?</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

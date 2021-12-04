import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [button, setButton] = useState(false);

  const goToList = () => {
    id.includes('@') && pw.length >= 5 && navigate('/woong/list');
  };

  const buttonChange = () => {
    id.includes('@') && pw.length >= 5 ? setButton(true) : setButton(false);
  };

  const handleIdInput = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const handlePwInput = (e) => {
    console.log(e.target.value);
    setPw(e.target.value);
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="background">
          <p className="title">WeBucks</p>
          <section>
            <form>
              <input type="input" id="account" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleIdInput} />
              <input type="password" id="password" placeholder="비밀번호" onChange={handlePwInput} />
              <button className={() => (buttonChange(false) ? 'btnUnable' : 'btnAble')} type="button" onClick={goToList}>
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

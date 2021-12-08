import React, { useState } from "react";
import "./Login.scss"
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate("/mino/list");
  // }


const [id, setId] = useState('');

const handleIdInput = (e) => {
  setId(e.target.value);
}

const [pw, setPw] = useState('');

const handlePwInput = (e) => {
  setPw(e.target.value);
}


const valid = id.includes('@') && pw.length > 7;

const goToMain = () => {
  if(id.includes('@')===false){
    alert ("이메일 주소가 아닙니다.")
  } else if (pw.length < 8) {
    alert("8자리 이상 작성해주세요.")
  } else {
    navigate('/mino/List');
  }
}



  return (
    <div className="Login-setup">
      <div className="container">
        <h1 className="title">WeBucks</h1>
        <form>
          <div className="user-id">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
              style={{ borderColor: id.includes('@') ? 'chartreuse' : 'red'}}
            />
          </div>
          <div className="user-pwd">
            <input
              type="password"
              placeholder= "비밀번호"
              onChange={handlePwInput}
              style={{ borderColor: pw.length > 7 ? 'chartreuse' : 'red' }}
            />
          </div>
          <button
            className="login-btn"
            onClick={goToMain}
            style={{ backgroundColor: valid ? '#60aded' : '#d4e6f8' }}>
          로그인</button>
        </form>
        <p className="find-pwd">
          <a href="#" className="link">비밀번호를 잊으셨나요?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

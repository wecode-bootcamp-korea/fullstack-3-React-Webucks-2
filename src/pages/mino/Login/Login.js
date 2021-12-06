import React, { useState } from "react";
import "../../../styles/reset.scss";
import "./Login.scss"
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/mino/list");
  }


const [id, setId] = useState('');

const handleIdInput = (e) => {
  setId(e.target.value);
}

const [pw, setPw] = useState('');

const handlePwInput = (e) => {
  setPw(e.target.value);
}


    // 실제 활용 예시
  // const goToMain = () => {
  //   if(response.message === "valid user"){
  //     navigate('/main');
  //   } else {
  //     alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.")
  //     navigate('/signup');
  //   }
  // }



  return (
    <div className="Login-setup">
      <div className="container">
        <h1 className="title">WeBucks</h1>
        <form>
          <div className="user-id">
            <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleIdInput} />
          </div>
          <div className="user-pwd">
            <input type="text" placeholder= "비밀번호" onChange={handlePwInput} />
          </div>
          <button className="login-btn" onClick={goToMain}>로그인</button>
        </form>
        <p className="find-pwd">
          <a href="#" className="link">비밀번호를 잊으셨나요?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

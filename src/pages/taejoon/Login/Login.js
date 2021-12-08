import { React, useState } from "react";
import { useNavigate } from "react-router";
import "./Login.scss";

function Login() {
  // ID, PW 입력 값을 상태로 관리하기
  // 참고: [상태 변수, 상태 업데이트 함수] = 상태 변경 hook(상태 변수에 할당할 기본값);
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  
  // useNavigation 변수할당
  const navigate = useNavigate();

  const getBackgroundColor = (id, pw) => {
    if (!id.includes("@")) return "#aed4ea";

    if (pw.length < 6) return "#aed4ea";

    return "blue";
  };

  // Login 버튼 활성화
  const loginBTNStyle = {
    backgroundColor: getBackgroundColor(inputId, inputPw),
  };

  // onChange Id 이벤트 발생 시 호출할 함수
  const handleIdInput = (e) => {
    // 이벤트 발생 시 state로 지정한 inputID 업데이트
    setInputId(e.target.value);
  };
  // onChange Pw 이벤트 발생 시 호출할 함수
  const handlePwInput = (e) => {
    setInputPw(e.target.value);
  };

  //List 파일로 이동
  const goToList = () => {
      if (!inputId.includes("@")) return alert("ID & PW 를  확인주세요");
      
      if (inputPw.length < 6) return alert("ID & PW 를  확인주세요");

      return navigate("/taejoon/List")
    
  };

  return (
    <>
      <div className="container-Login">
        <section className="logo">
          <h1 className="we_logo">WeBucks</h1>
        </section>
        <div className="login">
          <form className="loginForm" action="" method="get">
            {/* onChange 이벤트 발생 시 handleIdInput 호출하기 */}
            <input
              className="login_input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
            <p className="alert"></p>
            <input
              className="login_input"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <p className="alert"></p>
          </form>
        </div>
        <div className="loginBtn">
          <button
            className="login_btn"
            style={loginBTNStyle}
            type="button"
            onClick={goToList}
          >
            로그인
          </button>
        </div>
        <footer className="lostPw">
          <a className="lost_pw" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    </>
  );
}

export default Login;

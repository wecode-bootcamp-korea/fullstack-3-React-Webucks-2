import { useNavigate } from "react-router-dom";

function LoginButton(props) {
    const navigate = useNavigate(); // 함수를 반환하는 함수
    const isValid = props.loginIsValid; 
    const isDisabled = props.btnIsDisabled; 
    const BgColor = props.btnBg; 

    const GoToListPage = () => {
      if (isValid) {
          navigate('/hyosang/list');
      }
      else {
        alert("ID 또는 Password가 유효하지 않습니다");
      }
    }
    return (
        <>
          {isDisabled ? <button className = "buttonBox" id = "loginButton" onClick={ GoToListPage } disabled={ true }>로그인</button> 
          : <button className = "buttonBox" id = "loginButton" onClick={ GoToListPage }  style={{backgroundColor: BgColor}} >로그인</button>}
        </>
    ); 
}

export default LoginButton; 
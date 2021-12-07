import { useState } from 'react';
import LoginButton from '../components/LoginButton';

function LoginForm() {
  const [IDData, setIDData] = useState(''); 
  const [PWData, setPWData] = useState(''); 
  let isValid = false, isDisabled = false, BgColor;
  
  const handleIDInput = (e) => {
   setIDData(e.target.value);
  } 
 
  const handlePWInput = (e) => {
   setPWData(e.target.value);
  } 

  isValid = validate(IDData, PWData);
  isDisabled = btnDisabled(isValid); 
  BgColor = btnBgColor(isValid);
  
  return (
        <form className = "form-div">  
            <input className = "inputBox" id = "inputId" type = "text" placeholder = "전화번호, 사용자 이름 또는 이메일" onChange={ handleIDInput }/> 
            <input className = "inputBox" id = "inputPw" type = "password" placeholder = "비밀번호" onChange={ handlePWInput }/>
            <LoginButton loginIsValid={ isValid } btnIsDisabled={ isDisabled } btnBg={ BgColor }></LoginButton>
        </form> 
  );
}

/* 아이디에 @가 들어가는지, 비밀번호가 5자리 이상인지 유효성을 체크하는 함수 */
function validate(id, pw) {
    let isEmail = id.includes('@');
    let isFiveDegit = (pw.length >= 5) ? true : false;
    return isEmail && isFiveDegit;
}

function btnDisabled(valid) {
    return valid ? false : true;
}

function btnBgColor(valid) {
    return valid ? "#68b8db" : "#aed3ea"
}

export default LoginForm;
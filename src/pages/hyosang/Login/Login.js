import './Login.scss';
import React from "react";
import LoginForm from '../components/LoginForm';

function Login() {  
  return (  
      <section className = "Login"> 
        <div className = "wrapper"> 
          <img className = "logo" src = "/images/WeBucksBig.png" alt = "WeBucks"/>
        </div> 
        <div className = "wrapper">
          <LoginForm></LoginForm>
        </div>  
        <div className = "wrapper"> 
          <a href = "#" className = "forgotPw">비밀번호를 잊으셨나요?</a>  
        </div> 
      </section> 
  );
} 


export default Login; 




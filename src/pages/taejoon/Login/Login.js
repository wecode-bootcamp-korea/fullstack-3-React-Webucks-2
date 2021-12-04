import React from "react";
import './Login.css';

function Login() {
    return (
        <>
            <div className="container-Login">
                <section className="logo">
                    <h1 className="we_logo" >WeBucks</h1>
                </section>
                <div className="login">
                    <form className="loginForm" action="" method="get">
                        <input className="login_input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <p className="alert"></p>
                        <input className="login_input" type="password" placeholder="비밀번호" />
                        <p className="alert"></p>
                    </form>
                </div>
                <div className="loginBtn">
                    <button className="login_btn" type="button">로그인</button>
                </div>
                <footer className="lostPw">
                    <a className="lost_pw" href="#">비밀번호를 잊으셨나요?</a>
                </footer>
            </div>
        </>
    );
}

export default Login;
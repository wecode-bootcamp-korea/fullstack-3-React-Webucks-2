import React, { useState, Link } from 'react';
import { useNavigate } from 'react-router';
import './Login.scss';

function Login(){

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    // id
    const handleIdInput = e => {
        setId(e.target.value);
    }
    
    // pw
    const handlePwInput = e => {
        setPw(e.target.value);
    }
    
    // 로그인버튼활성화
    const colorChange = (id.includes('@') && pw.length >= 8);

    //세션에 id 담기
    const navigate = useNavigate();

    const goToList = () => {
        if(colorChange){
            navigate("/zzang/list");
            sessionStorage.setItem("id", id)
        }
    }

    return(
        <div className="Login">
            <div className="login_wrap">
                <section className="logo">
                    <h1>WeBucks</h1>
                    <form>
                        {/* id input */}
                        <input 
                            id="login-id" 
                            type="text" 
                            placeholder="전화번호, 사용자 이름 또는 이메일" 
                            onChange={handleIdInput}
                            style={{borderColor: id.includes('@') ? "green" : "gray"}}
                        />

                        {/* pw input */}
                        <input 
                            id="login-pw" 
                            type="password" 
                            placeholder="비밀번호" 
                            
                            onChange={handlePwInput}
                            style={{borderColor: pw.length >= 8 ? "green" : "gray"}}
                        />
                        
                        {/* 온클릭 추가 */}
                        <button 
                            className="login-button" 
                            id="login-button" 
                            // disabled='true'
                            style={{backgroundColor: colorChange ? "#0095F6" : "#AED3EA"  }}
                            onClick={goToList}
                            >로그인
                        </button>

                    </form>
                    {/* 비밀번호 찾는 페이지 만들어서 추가하기 */}
                    <a href="#">비밀번호를 잊으셨나요?</a>
                </section>
            </div>
        </div>
    )
}


export default Login;
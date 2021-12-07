import React from 'react';
import './Footer.scss';

function Footer(){
    return(
    <div className="container">
        <div className="footer">
            <div className="footer_wrap">
                <ul>
                    <h3>COMPANY</h3>
                    <li>
                        <a href="#">한눈에 보기</a>
                    </li>
                    <li>
                        <a href="#">스타벅스 사명</a>
                    </li>
                    <li>
                        <a href="#">스타벅스 소개</a>
                    </li>
                    <li>
                        <a href="#">국내 뉴스룸</a>
                    </li>
                    <li>
                        <a href="#">세계의 스타벅스</a>
                    </li>
                    <li>
                         <a href="#">글로벌 뉴스룸</a>
                    </li>
                </ul>
                <ul>
                    <h3>CORPORATE SALES</h3>
                    <li>
                        <a href="#">단체 및 기업 구매 안내</a>
                    </li>
                </ul>
                <ul>
                     <h3>PARTNERSHIP</h3>
                     <li>
                        <a href="#">신규 입점 제의</a>
                    </li>
                    <li>
                        <a href="#">협력 고객사 등록 신청</a>
                    </li>
                </ul>
                <ul>
                    <h3>ONLINE COMMUNITY</h3>
                    <li>
                         <a href="#">페이스북</a>
                    </li>
                    <li>
                        <a href="#">트위터</a>
                     </li>
                    <li>
                        <a href="#">유튜브</a>
                    </li>
                    <li>
                        <a href="#">인스타그램</a>
                    </li>
                </ul>
                <ul>
                    <h3>RECRUIT</h3>
                    <li>
                        <a href="#">채용 소개</a>
                    </li>
                    <li>
                        <a href="#">채용 지원하기</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer;
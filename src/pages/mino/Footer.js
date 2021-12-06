import React from "react";
import "../../styles/reset.scss";
import "./Footer.scss";

function Footer() {
  return (
    <>
    <footer>
      <div className="footer-container">
        <h3 className="footer-title">COMPANY</h3>
        <p className="footer-nav">한눈에 보기</p>
        <p className="footer-nav">스타벅스 사명</p>
        <p className="footer-nav">스타벅스 소개</p>
        <p className="footer-nav">국내 뉴스룸</p>
        <p className="footer-nav">세계의 스타벅스</p>
        <p className="footer-nav">글로벌 뉴스룸</p>
      </div>

      <div className="footer-container">
        <h3 className="footer-title">CORPORATE SALES</h3>
        <p className="footer-nav">단체 및 기업 구매 안내</p>
      </div>

      <div className="footer-container">
        <h3 className="footer-title">PARTNERSHIP</h3>
        <p className="footer-nav">신규 입점 제의</p>
        <p className="footer-nav">협력 고객사 등록 신청</p>
      </div>

      <div className="footer-container">
        <h3 className="footer-title">ONLINE COMMUNITY</h3>
        <p className="footer-nav">페이스북</p>
        <p className="footer-nav">트위터</p>
        <p className="footer-nav">유튜브</p>
        <p className="footer-nav">블로그</p>
        <p className="footer-nav">인스타그램</p>
      </div>

      <div className="footer-container">
        <h3 className="footer-title">RECRUIT</h3>
        <p className="footer-nav">채용 소개</p>
        <p className="footer-nav">채용 지원하기</p>
      </div>

      <div className="footer-container">
        <h3 className="footer-title">WEEBUCKS</h3>
      </div>
    </footer>
    </>
  )
}

export default Footer
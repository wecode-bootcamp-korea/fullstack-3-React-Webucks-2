import './Detail.scss';
import { FiHeart } from 'react-icons/fi';

function Detail() {
    return (
      <div className = "Detail">
        <header className = "main-header"> 
          <div className = "logo-wrapper">
            <span className = "main-logo">WeBucks</span> 
          </div> 
          <div className = "category-wrapper">
            <nav className = "category"> 
              <ul className = "category-list">
                <li><a href = "#">COFFEE</a></li>
                <li><a href = "#">MENU</a></li>
                <li><a href = "#">STORE</a></li>
                <li><a href = "#">WHAT'S NEW</a></li> 
              </ul> 
            </nav>
          </div>  
        </header> 
        <section className = "main-container"> 
          <header className = "sub-title">    
              <h2>콜드 브루</h2> 
              <ul className = "product-directory">
                <li><a href = "#">홈</a></li> 
                <li className = "arrow">></li>
                <li><a href = "#">MENU</a></li> 
                <li className = "arrow">></li>
                <li><a href = "#">음료</a></li> 
                <li className = "arrow">></li>
                <li><a href = "#">에스프레소</a></li> 
                <li className = "arrow">></li>
                <li><a href = "#">화이트 초콜릿 모카</a></li> 
              </ul> 
          </header>
          <aside className = "product-wrapper"> 
            <img className = "product-image" src = "/images/coldbrew.jpeg" alt = "tasty coffee"/>
          </aside> 
          <article className = "product-desc">
            <header className = "product-header">
              <div>  
                <h2>화이트 초콜릿 모카</h2>
                <h5>White Chocolate Mocha</h5> 
              </div>
              <div className = "icon-wrapper"> 
                <a href = "#"><FiHeart /></a>
              </div> 
            </header>
            <section className = "product-section">
              <p className = "text-info">
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무
                리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피 
              </p> 
              <div className = "product-investigate">
                  <div className = "product-type">
                    <h3 className = "type01">제품 영양 정보</h3>
                    <h3 className = "type02">Tall(톨) / 355ml (12 fl oz)</h3>
                  </div>
                  <div className = "product-spec01">
                    <ul>  
                      <li className = "spec-list">
                        <div className = "spec-div1">1회 제공량 (kcal)</div>
                        <div className = "spec-div2">345</div>
                      </li>
                      <li className = "spec-list">  
                        <div className = "spec-div1">포화지방 (g)</div>
                        <div className = "spec-div2">11</div> 
                      </li> 
                      <li className = "spec-list"> 
                        <div className = "spec-div1">단백질 (g)</div> 
                        <div className = "spec-div2">11</div> 
                      </li>   
                    </ul> 
                  </div>   
                  <div className = "product-spec02">
                    <ul>      
                      <li className = "spec-list">   
                        <div className = "spec-div1">나트륨 (mg)</div>
                        <div className = "spec-div2">150</div>
                      </li>
                      <li className = "spec-list">
                        <div className = "spec-div1">당류 (g)</div>
                        <div className = "spec-div2">35</div> 
                      </li>
                      <li className = "spec-list">
                        <div className = "spec-div1">카페인 (mg)</div> 
                        <div className = "spec-div2">75</div> 
                      </li>
                    </ul>
                  </div> 
              </div> 
              <div className = "product-warning">
                <span>알레르기 유발 요인: 우유</span>
              </div>
            </section> 
            <footer className = "review">
              <h3 className = "review-header">리뷰</h3> 
              <p className = "review-all">
                 <ul className = "review-list"></ul>
              </p>
              <input className = "review-input" placeholder = "리뷰를 입력해주세요." />
            </footer> 
          </article> 
        </section>
        <footer className = "main-footer">
          <div className = "footer-contents">
            <ul className = "footer-list ">
              <li className = "footer-menu"><a href = "#">COMPANY</a></li>
              <li><a href = "#">한눈에 보기</a></li>
              <li><a href = "#">스타벅스 사명</a></li>
              <li><a href = "#">스타벅스 소개</a></li>
              <li><a href = "#">국내 뉴스룸</a></li>
              <li><a href = "#">세계의 스타벅스</a></li>
              <li><a href = "#">글로벌 뉴스룸</a></li>
            </ul>
            <ul className = "footer-list ">
              <li className = "footer-menu"><a href = "#">CORPORATE SALES</a></li>
              <li><a href = "#">단체 및 기업 구매 안내</a></li> 
            </ul>
            <ul className = "footer-list ">
              <li className = "footer-menu"><a href = "#">PARTNERSHIP</a></li>
              <li><a href = "#">신규 입점 제의</a></li> 
              <li><a href = "#">협력 고객사 등록 신청</a></li>
            </ul>
            <ul className = "footer-list ">
              <li className = "footer-menu"><a href = "#">ONLINE COMMUNITY</a></li>
              <li><a href = "#">페이스북</a></li> 
              <li><a href = "#">트위터</a></li>
              <li><a href = "#">유튜브</a></li> 
              <li><a href = "#">블로그</a></li>
              <li><a href = "#">인스타그램</a></li> 
            </ul>
            <ul className = "footer-list ">
                <li className = "footer-menu"><a href = "#">RECRUIT</a></li>
                <li><a href = "#">채용 소개</a></li>
                <li><a href = "#">채용 지원하기</a></li> 
            </ul>
            <ul className = "footer-list ">
              <li className = "footer-menu"><a href = "#">WEBUCKS</a></li>     
            </ul>
          </div> 
        </footer> 
      </div>
    );
}


export default Detail;
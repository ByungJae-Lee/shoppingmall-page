import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  // 🔴 추가: 메뉴의 열림/닫힘 상태를 관리하는 변수
  const [isMenuOpen, setIsMenuOpen] = useState(false);
// 로그인/로그아웃 상태관리 버튼
  const handleLogin = () => {
    if (authenticate === true) {
      setAuthenticate(false);
    } else {
      navigate('/login');
    }
  };

  const goToHomepage = () => {
    navigate('/');
  };

  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  // 검색기능 함수
  const search = (event) => {
    // 엔터키 인식
    if (event.key === 'Enter') {
      // input 내 값을 읽어와서
      let keyword = event.target.value;
      // url을 바꿔줌
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login-nav">
        {/* 🔴 추가: 모바일에서만 보일 햄버거 버튼 */}
        <div
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div onClick={handleLogin}>
            {authenticate === true ? '로그아웃' : '로그인'}
          </div>
        </div>
      </div>

      <div className="nav-section">
        <img
          onClick={goToHomepage}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
        />
      </div>

      {/* 🔴 변경: 상태(isMenuOpen)에 따라 'active' 클래스가 붙음 */}
      <div className={'menu-area'}>
        {/* 🔴 추가: 사이드바 내부의 닫기(X) 버튼 */}

        <div className="empty-space"></div>

        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        {/* 검색창 */}
        <div className="serch-area">
          <FontAwesomeIcon
            className="search-icon"
            icon={faMagnifyingGlass}
          />
          {/* 엔터키 인식 */}
          <input
            type="text"
            onKeyPress={(event) => search(event)}
            placeholder="검색"
          />
        </div>
      </div>
      {/* 4. 모바일 전용 사이드바 (추가된 부분) */}
      <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
        <div
          className="close-button"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className="side-menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

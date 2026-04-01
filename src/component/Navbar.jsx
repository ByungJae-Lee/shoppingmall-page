import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

/*
1. 중앙부분이 같이 움직임 각자 별도로 관리하고싶다

*/ 

const Navbar = () => {
  const navigate = useNavigate();


  const goToLoginPage = () => {
    navigate('/login');
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
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div onClick={goToLoginPage}>로그인</div>
        </div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
        />
      </div>

      <div className="menu-area">
        <div className="empty-space"></div>

        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="serch-area">
          <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;


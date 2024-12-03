import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(prevState => !prevState);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <a href="https://www.manutd.com/ko" target="_blank" rel="noreferrer">
          <img src="images/manunited.png" alt="맨체스터 유나이티드 로고 왼쪽" className="header-logo" />
        </a>
        <h1 className="header-text">맨체스터 유나이티드 선수단</h1>
      </div>

      <div className="header-right" onClick={toggleSearch}>
        <FaSearch className="search-icon" />
        <p>검색</p>
      </div>

      {/* 검색창 오버레이 및 토글 */}
      {isSearchOpen && (
        <>
          {/* 배경 오버레이 */}
          <div className="search-overlay" onClick={toggleSearch}></div>

          {/* 검색창 */}
          <div className="search-container">
            <input type="text" placeholder="검색어를 입력하세요" className="search-input" />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;

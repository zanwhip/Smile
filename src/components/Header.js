import React, { useState } from 'react';
import iconAImage from '../Assets/image/message.png';
import iconBImage from '../Assets/image/notification.png';
import logo from '../Assets/image/logo.png';
import '../css/Header.css' // Import a CSS file to apply styles

function Header() {
  const [language, setLanguage] = useState('Vie');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguageDropdown(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/donate">Quyên góp</a></li>
          <li><a href="/shop">Mua bán</a></li>
          <li><a href="/news">Bản tin</a></li>
        </ul>
        <div className="language-search-icons-container">
          <div className="language-selector" onClick={toggleLanguageDropdown}>
            <span>{language}</span>
            {showLanguageDropdown && (
              <div className="language-dropdown">
                <ul>
                  <li onClick={() => selectLanguage('Vie')}>Vie</li>
                  <li onClick={() => selectLanguage('Japan')}>Japan</li>
                  <li onClick={() => selectLanguage('Tiếng Pháp')}>Tiếng Pháp</li>
                </ul>
              </div>
            )}
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <i className="search-icon fa fa-search" />
          </div>
          <div className="icons">
            <img src={iconAImage} alt="Icon A" className="icon" />
            <img src={iconBImage} alt="Icon B" className="icon" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

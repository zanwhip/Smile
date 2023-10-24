import React, { useState } from 'react';
import iconAImage from '../Assets/image/messicon.png';
import iconBImage from '../Assets/image/notification.png';
import iconSearch from '../Assets/image/searchicon.png';
import icondown from '../Assets/image/dropdown.png';
import logo from '../Assets/image/logo.png';
import "../css/components/Header.css" // Import a CSS file to apply styles


function Header() {
  const [language, setLanguage] = useState('Vie');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
 

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguageDropdown(false);
  };

  return (
    <header className="header-container">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav-container">
      <ul className="nav-list">
        <li><a href="/" style={{ fontSize: '20px', fontWeight: 'bold', }}>Trang chủ</a></li>
        <li><a href="/donate" style={{ fontSize: '20px', fontWeight: 'bold',color : 'white' }}>Quyên góp</a></li>
        <li><a href="/shop" style={{ fontSize: '20px', fontWeight: 'bold', color : 'white' }}>Mua bán</a></li>
        <li><a href="/news" style={{ fontSize: '20px', fontWeight: 'bold',color : 'white' }}>Bản tin</a></li>
      </ul>
      </nav>
      <div className="language-search-icons-container">
        <div className="language-selector" onClick={toggleLanguageDropdown}>
          <span>{language}</span>
          {showLanguageDropdown && language === 'Vie' && (
            <div className="language-dropdown" >
              <ul>
                <li onClick={() => selectLanguage('Vie')}>Vie</li>
                <li onClick={() => selectLanguage('Japan')}>Japan</li>
                <li onClick={() => selectLanguage('French')}>French</li>
              </ul>
            </div>
          )}
        </div>
        <img src={icondown} alt="IconDown"  style={{ width : 15, height : 15 }}/>
        
        </div>
        <div class="language-search-icons-container">
  <div class="search-box">
    <div class="search-content">Liên hệ</div>
  </div>
  <div class="icon-container">
    <img src={iconSearch} alt="search" class="searchIcon" />
  </div>
</div>
      <div className="icons">
          <img src={iconAImage} alt="Icon A" className="icon" />
          <img src={iconBImage} alt="Icon B" className="icon" />
        </div>
        
    </header>
  );
}

export default Header;

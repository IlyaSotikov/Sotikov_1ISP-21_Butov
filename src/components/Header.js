import React from "react";
import "./Header.css"; // Если у вас есть стили для Header

const Header = () => {
  return (
    <header>
      <div className="logo">Логотип</div>
      <nav>
        <ul>
          <li>
            <a href="#services">Услуги</a>
          </li>
          <li>
            <a href="#reviews">Отзывы</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
      <button>Записаться</button>
    </header>
  );
};

export default Header;

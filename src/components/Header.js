import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {}
      <Link to="/">
        <img src="logo.png" alt="Логотип" className="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/reviews">Отзывы</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <button>Записаться</button>
    </header>
  );
};

export default Header;

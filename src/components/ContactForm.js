import React from "react";
import "./ContactForm.css"; // Если у вас есть стили для ContactForm

const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Имя" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Сообщение"></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;

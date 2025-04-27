import React from "react";
import ServiceCard from "./ServiceCard";
import ReviewCard from "./ReviewCard";
import ContactForm from "./ContactForm";

const Main = () => {
  return (
    <main>
      <section id="services">
        <h2>Наши услуги</h2>
        <ServiceCard
          title="Ремонт компьютеров"
          description="Быстрый и качественный ремонт вашего устройства."
          image="path/to/image.jpg"
        />
      </section>
      <section id="reviews">
        <h2>Отзывы клиентов</h2>
        <ReviewCard
          name="Иван Иванов"
          rating="⭐⭐⭐⭐⭐"
          comment="Отличный сервис, рекомендую!"
        />
      </section>
      <section id="contacts">
        <h2>Контакты</h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default Main;

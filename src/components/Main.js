import React from "react";
import ServiceCard from "./Services";
import ReviewCard from "./Reviews";
import ContactForm from "./Contacts";

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

import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section>
      <h2>Наши услуги</h2>
      <ServiceCard
        title="Ремонт компьютеров"
        description="Быстрый и качественный ремонт вашего устройства."
        image="service1.jpg"
      />
      <ServiceCard
        title="Ремонт компьютеров"
        description="Быстрый и качественный ремонт вашего устройства."
        image="service2.jpg"
      />
      <ServiceCard
        title="Ремонт компьютеров"
        description="Быстрый и качественный ремонт вашего устройства."
        image="service3.jpg"
      />
    </section>
  );
};

export default Services;

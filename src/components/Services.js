// Services.js
import React from "react";
import ServiceCard from "./Services";

const Services = () => {
  return (
    <section>
      <h2>Наши услуги</h2>
      <ServiceCard
        title="Ремонт компьютеров"
        description="Быстрый и качественный ремонт вашего устройства."
        image="path/to/image.jpg"
      />
    </section>
  );
};

export default Services;

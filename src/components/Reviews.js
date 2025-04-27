import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <section>
      <h2>Отзывы клиентов</h2>
      <ReviewCard
        name="Иван Иванов"
        rating="⭐⭐⭐⭐⭐"
        comment="Отличный сервис, рекомендую!"
      />
    </section>
  );
};

export default Reviews;

"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          showDots={false}
        >
          {/* Burger Card */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b1.png"
            reviews="6"
            price="10.68"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b2.png"
            reviews="6"
            price="10.68"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b3.png"
            reviews="6"
            price="10.68"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b4.png"
            reviews="6"
            price="10.68"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b5.png"
            reviews="6"
            price="10.68"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b6.png"
            reviews="6"
            price="10.68"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;

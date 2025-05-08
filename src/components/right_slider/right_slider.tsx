"use client";
import React from "react";
import SlickSlider from "react-slick";
import Image from "next/image";
import styles from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderLeft from "/public/assets/img/slider_left.svg";
import sliderRight from "/public/assets/img/slider_right.svg";
import {
    OverpassRegular,
    OverpassMedium,
    OverpassSemiBold,
  } from "../../fonts/overpass";

type SlideItem = {
  img: string;
  date: string;
  title: string;
  categoryIcon: string;
  category: string;
};

const CustomPrevArrow = (props: any) => (
  <button {...props} className="slick-prev" aria-label="Previous">
    <Image src={sliderLeft} alt="slider left" />
  </button>
);

const CustomNextArrow = (props: any) => (
  <button {...props} className="slick-next" aria-label="Next">
    <Image src={sliderRight} alt="slider left" />
  </button>
);
const Right_slider = ({ data = [] }: { data: SlideItem[] }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={` ${styles.right_panel_slider}`}>
      <SlickSlider {...settings}>
        {data.map((item, idx) => (
          <div className={styles.item} key={idx}>
            <a href="#">
              <div className={`${styles.featured_block} clearfix`}>
                <Image
                  src={item.img}
                  alt="manshet"
                  width={600}
                  height={400}
                  onError={(e) => {
                    console.error("Resim yüklenemedi:", item.img);
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={styles.linear}></div>
              </div>
              <div className={styles.featured_text}>
                <span className={`${styles.date_block} ${OverpassRegular.className}`}>
                  {item.date || "Tarih Yok"}
                </span>
                <div className={`${styles.featured_head} ${OverpassSemiBold.className}`}>
                  {item.title || "Başlık Yok"}
                </div>
              </div>
              <div
                className={`${styles.featured_category} ${
                  item.category.toLowerCase() === "video"
                    ? styles.video_category
                    : styles.foto_category
                } ${OverpassSemiBold.className}`}
              >
                <Image
                  src={item.categoryIcon}
                  alt="kategori"
                  width={20}
                  height={20}
                  onError={(e) => {
                    console.error("Icon yüklenemedi:", item.categoryIcon);
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {item.category.toUpperCase() || "Kategori Yok"}
              </div>
            </a>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Right_slider;

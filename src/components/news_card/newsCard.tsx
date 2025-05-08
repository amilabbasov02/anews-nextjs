import React from "react";
import Image from "next/image";
import styles from "./newsCard.module.css";
import cardImage from "/public/assets/img/media_news_card.png";
import {
  OverpassRegular,
  OverpassMedium,
  OverpassSemiBold,
} from "../../fonts/overpass";

type NewsCardProps = {
  data: {
    img: string;
    date: string;
    title: string;
  };
  variant?: "compact" | "default";
  isFirst?: boolean;
};

const NewsCard = ({ data, variant = "default",isFirst = false }: NewsCardProps) => {
  return (
    <div
      className={`global_news_card clearfix ${
        variant === "compact" ? "compact" : ""
      }`}
    >
      <a href="./detail.html">
        <div className={`${styles.media_news_img} global_card_img clearfix`}>
          <Image
            src={data.img || cardImage}
            alt="card image"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        {isFirst && <div className={styles.linear}></div>}
        <div className={`${styles.media_news_text} global_card_text`}>
          <span
            className={`${styles.card_date} ${OverpassRegular.className} global_card_date`}
          >
            {data.date}
          </span>
          <h2
            className={`${styles.media_news_head} ${
              isFirst ? OverpassSemiBold.className : OverpassMedium.className
            } global_card_title`}
          >
            {data.title}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;

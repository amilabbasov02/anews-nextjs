"use client";
import React from "react";
import styles from "./right.module.css";
import Image from "next/image";
import ytProfile from "/public/assets/img/yt.png";
import right_arr from "/public/assets/img/right_arr.png";
import {
  OverpassRegular,
  OverpassMedium,
  OverpassSemiBold,
} from "../../fonts/overpass";
import Right_slider from "../right_slider/right_slider";

type SlideItem = {
  img: string;
  date: string;
  title: string;
  categoryIcon: string;
  category: string;
};

const data1: SlideItem[] = [
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    categoryIcon: "/assets/img/video_cat.svg",
    category: "VİDEO",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    categoryIcon: "/assets/img/foto_cat.svg",
    category: "FOTO",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    categoryIcon: "/assets/img/foto_cat.svg",
    category: "FOTO",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    categoryIcon: "/assets/img/foto_cat.svg",
    category: "FOTO",
  },
];

const data2: SlideItem[] = [
  {
    img: "/assets/img/manshet.png",
    date: "Dün 11:00",
    title: "Yeni Marvel filmi duyuruldu",
    categoryIcon: "/assets/img/foto_cat.svg",
    category: "FOTO",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Dün 11:00",
    title: "Yeni Marvel filmi duyuruldu",
    categoryIcon: "/assets/img/foto_cat.svg",
    category: "FOTO",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Dün 11:00",
    title: "Yeni Marvel filmi duyuruldu",
    categoryIcon: "/assets/img/foto_cat.svg",
    category: "FOTO",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Dün 11:00",
    title: "Yeni Marvel filmi duyuruldu",
    categoryIcon: "/assets/img/foto_cat.svg",
    category: "FOTO",
  },
];

export default function right_panel() {
  return (
    <section className={`${styles.rightPanel}`}>
      {/* <div class="featured right_panel_slider web-none">
        <div class="manshet owl-carousel owl-theme">
            <div class="item">
                <a href="#">
                    <div class="featured_block clearfix">
                        <img src="./assets/img/manshet.png" alt="">
                        <div class="linear"></div>
                    </div>
                    <div class="featured_text">
                        <span class="date_block">
                            Bu gün 14:56
                        </span>
                        <h2 class="featured_head">"Mission: Impossible 8" filminin ilk treyleri yayımlandı
                        </h2>
                    </div>
                    <a href="#" class="featured_categoty">
                        MƏDƏNİYYƏT
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <div class="featured_block clearfix">
                        <img src="./assets/img/manshet.png" alt="">
                        <div class="linear"></div>
                    </div>
                    <div class="featured_text">
                        <span class="date_block">
                            Bu gün 14:56
                        </span>
                        <h2 class="featured_head">"Mission: Impossible 8" filminin ilk treyleri yayımlandı
                        </h2>
                    </div>
                    <a href="#" class="featured_categoty foto_category">
                        <img src="./assets/img/foto_cat.svg" alt="">
                        FOTO
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <div class="featured_block clearfix">
                        <img src="./assets/img/manshet.png" alt="">
                        <div class="linear"></div>
                    </div>
                    <div class="featured_text">
                        <span class="date_block">
                            Bu gün 14:56
                        </span>
                        <h2 class="featured_head">"Mission: Impossible 8" filminin ilk treyleri yayımlandı
                        </h2>
                    </div>
                    <a href="#" class="featured_categoty foto_category">
                        <img src="./assets/img/foto_cat.svg" alt="">
                        FOTO
                    </a>
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <div class="featured_block clearfix">
                        <img src="./assets/img/manshet.png" alt="">
                        <div class="linear"></div>
                    </div>
                    <div class="featured_text">
                        <span class="date_block">
                            Bu gün 14:56
                        </span>
                        <h2 class="featured_head">"Mission: Impossible 8" filminin ilk treyleri yayımlandı
                        </h2>
                    </div>
                    <a href="#" class="featured_categoty foto_category">
                        <img src="./assets/img/foto_cat.svg" alt="">
                        FOTO
                    </a>
                </a>
            </div>
        </div>
    </div> */}
      {/* <div class="header_banners web-none">
        <div class="banners_block">
            <div class="banner_card">
                <a href="#">
                    <div class="banner_img">
                        <img src="./assets/img/banner1.png" alt="" />
                    </div>
                    <p class="banner_text">
                        ABŞ-də prezident seçkisi: Sonuncu ştat üzrə yekun nəticələr
                        açıqlandı
                    </p>
                </a>
            </div>
            <div class="banner_card">
                <a href="#">
                    <div class="banner_img">
                        <img src="./assets/img/banner2.png" alt="" />
                    </div>
                    <p class="banner_text">
                        Nyu-Yorkda Şopenin əvvəllər məlum olmayan əsəri tapılıb
                    </p>
                </a>
            </div>
            <div class="banner_card">
                <a href="#">
                    <div class="banner_img">
                        <img src="./assets/img/banner3.png" alt="" />
                    </div>
                    <p class="banner_text">
                        Qvardiola "Mançester Siti"nin uğursuzluğunu şərh etdi
                    </p>
                </a>
            </div>
            <div class="banner_card">
                <a href="#">
                    <div class="banner_img">
                        <img src="./assets/img/banner4.png" alt="" />
                    </div>
                    <p class="banner_text">
                        Tusk Ukraynada atəşkəs planının hazırlandığını açıqladı
                    </p>
                </a>
            </div>
        </div>
    </div> */}
      {/* <div class="live_head web-none">
        <a href="./live_detail.html">
            <div class="live_head_cart_part">
                <img src="./assets/img/live_icon.png" alt="">
                <div class="live_body">
                    <div class="lhead">
                        Canlı
                    </div>
                    <p class="lbody">
                        “COP29” ilə bağlı ən son xəbərlər və videolar
                    </p>
                </div>
            </div>
            <div class="live_img clearfix">
                <img src="./assets/img/live_img.png" alt="">
            </div>
            <div class="live_news_head">
                Rəsmilər COP29-da iştirak etmək üçün Bakıya gəlirlər
            </div>
        </a>
    </div> */}
      <div className={styles.yt_channel}>
        <Image src={ytProfile} alt="yt Profile" />
        <div className={styles.yt_profile}>
          <div className={`${styles.yt_name} ${OverpassSemiBold.className}`}>
            Anews Tv
          </div>
          <p className={`${styles.yt_text} ${OverpassRegular.className}`}>
            Rəsmi Youtube TV kanalı
          </p>
        </div>
        <a
          href="#"
          target="_blank"
          className={`${styles.yt_link} ${OverpassMedium.className}`}
        >
          Kanala keçid
        </a>
      </div>
      <div className={styles.yt_iframe}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pMf9oT5b5Dg?si=t9NqKLGoro4xAqbc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={`${styles.last_news} web-none ${styles.category_page}`}>
        <div className={styles.category_head_block}>
          <h2
            className={`${styles.head_text} ${styles.category_block_head} ${OverpassSemiBold.className}`}
          >
            SON XƏBƏRLƏR
          </h2>
        </div>
        <div className={styles.visual_content_cards}>
          <div
            className={`${styles.media_news_card} ${styles.visual_content_card} clearfix `}
          >
            <a href="#">
              <div className={`${styles.media_news_img} clearfix `}>
                {/* <img src="./assets/img/media_news_card.png" alt=""> */}
              </div>
              <div className={styles.media_news_text}>
                <div className={styles.card_top}>
                  <a href="#" className={styles.card_category}>
                    Mədəniyyət
                  </a>
                  <span className={styles.card_date}>Bu gün 17:45</span>
                </div>
                <h2 className={styles.media_news_head}>
                  İkinci Qarabağ müharibəsini sonlandıran Üçtərəfli Bəyanatın
                  imzalanmasından dörd il <span>ötür</span>
                </h2>
              </div>
            </a>
          </div>
          <div
            className={`${styles.media_news_card} ${styles.visual_content_card} clearfix `}
          >
            <a href="#">
              <div className={`${styles.media_news_img} clearfix `}>
                {/* <img src="./assets/img/media_news_card.png" alt=""> */}
              </div>
              <div className={styles.media_news_text}>
                <div className={styles.card_top}>
                  <a href="#" className={styles.card_category}>
                    Mədəniyyət
                  </a>
                  <span className={styles.card_date}>Bu gün 17:45</span>
                </div>
                <h2 className={styles.media_news_head}>
                  İkinci Qarabağ müharibəsini sonlandıran Üçtərəfli Bəyanatın
                  imzalanmasından dörd il <span>ötür</span>
                </h2>
              </div>
            </a>
          </div>
          <div
            className={`${styles.media_news_card} ${styles.visual_content_card} clearfix `}
          >
            <a href="#">
              <div className={`${styles.media_news_img} clearfix `}>
                {/* <img src="./assets/img/media_news_card.png" alt=""> */}
              </div>
              <div className={styles.media_news_text}>
                <div className={styles.card_top}>
                  <a href="#" className={styles.card_category}>
                    Mədəniyyət
                  </a>
                  <span className={styles.card_date}>Bu gün 17:45</span>
                </div>
                <h2 className={styles.media_news_head}>
                  İkinci Qarabağ müharibəsini sonlandıran Üçtərəfli Bəyanatın
                  imzalanmasından dörd il <span>ötür</span>
                </h2>
              </div>
            </a>
          </div>
          <div className={styles.button_div}>
            <a href="#" className={styles.more_btn}>
              Daha çox
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.last_news} mobile-none ${OverpassRegular.className}`}
      >
        <h2 className={`${styles.head_text} ${OverpassSemiBold.className}`}>
          SON XƏBƏRLƏR
          <Image src={right_arr} alt="right arrow" />
        </h2>
        <div className={`${styles.text_news_card} `}>
          <div className={styles.card_top}>
            <a href="./detail.html" className={styles.card_category}>
              Mədəniyyət
            </a>
            <span className={styles.card_date}>Bu gün 17:45</span>
          </div>
          <div className={styles.card_body}>
            <a href="#">
              Azarkeşlərə kənar əşya atan iki futbolçu cəzalandırıldı
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={styles.card_top}>
            <a href="./detail.html" className={styles.card_category}>
              Mədəniyyət
            </a>
            <span className={styles.card_date}>Bu gün 17:45</span>
          </div>
          <div className={styles.card_body}>
            <a href="#">
              Azarkeşlərə kənar əşya atan iki futbolçu cəzalandırıldı
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={styles.card_top}>
            <a href="./detail.html" className={styles.card_category}>
              Mədəniyyət
            </a>
            <span className={styles.card_date}>Bu gün 17:45</span>
          </div>
          <div className={styles.card_body}>
            <a href="#">
              Azarkeşlərə kənar əşya atan iki futbolçu cəzalandırıldı
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={styles.card_top}>
            <a href="./detail.html" className={styles.card_category}>
              Mədəniyyət
            </a>
            <span className={styles.card_date}>Bu gün 17:45</span>
          </div>
          <div className={styles.card_body}>
            <a href="#">
              Azarkeşlərə kənar əşya atan iki futbolçu cəzalandırıldı
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={styles.card_top}>
            <a href="./detail.html" className={styles.card_category}>
              Mədəniyyət
            </a>
            <span className={styles.card_date}>Bu gün 17:45</span>
          </div>
          <div className={styles.card_body}>
            <a href="#">
              Azarkeşlərə kənar əşya atan iki futbolçu cəzalandırıldı
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={styles.card_top}>
            <a href="./detail.html" className={styles.card_category}>
              Mədəniyyət
            </a>
            <span className={styles.card_date}>Bu gün 17:45</span>
          </div>
          <div className={styles.card_body}>
            <a href="#">
              Azarkeşlərə kənar əşya atan iki futbolçu cəzalandırıldı
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={styles.card_top}>
            <a href="./detail.html" className={styles.card_category}>
              Mədəniyyət
            </a>
            <span className={styles.card_date}>Bu gün 17:45</span>
          </div>
          <div className={styles.card_body}>
            <a href="#">
              Azarkeşlərə kənar əşya atan iki futbolçu cəzalandırıldı
            </a>
          </div>
        </div>
        <a
          href="#"
          target="_blank"
          className={`${styles.more_btn} ${OverpassSemiBold.className}`}
        >
          DAHA ÇOX XƏBƏR
          <Image src={right_arr} alt="right arrow" />
        </a>
      </div>
      <Right_slider data={data1} />
      <Right_slider data={data2} />
    </section>
  );
}

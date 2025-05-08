'use client'
import React, {useState} from 'react'
import styles from './header.module.css'
import { OverpassRegular, OverpassMedium, OverpassSemiBold } from '../../fonts/overpass';
import Image from 'next/image'
import logo from '/public/assets/img/anews_logo.png'
import banner1 from '/public/assets/img/banner1.png'
import banner2 from '/public/assets/img/banner2.png'
import banner3 from '/public/assets/img/banner3.png'
import banner4 from '/public/assets/img/banner4.png'
import search_icon from '/public/assets/img/search_icon.png'
import close_icon from '/public/assets/img/close.png'
import menu from '/public/assets/img/menu-icon.svg'

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const handleSearchClick = () => {
      setSearchOpen(true);
    };
  
    const handleCloseClick = () => {
      setSearchOpen(false);
    };
  return (
    <header className={styles.header}>
        <div className={`${styles.banner_head} ${OverpassMedium.className}`}>
            <div className="container">
                <div className={styles.header_banners}>
                    <div className={styles.banner_card}>
                        <a href="#">
                            <div className={styles.banner_img}>
                                <Image
                                    src={banner1}
                                    alt='banner image'
                                />
                            </div>
                            <p className={styles.banner_text}>
                                ABŞ-də prezident seçkisi: Sonuncu ştat üzrə yekun nəticələr
                                açıqlandı
                            </p>
                        </a>
                    </div>
                    <div className={styles.banner_card}>
                        <a href="#">
                            <div className={styles.banner_img}>
                                <Image
                                    src={banner2}
                                    alt='banner image'
                                />
                            </div>
                            <p className={styles.banner_text}>
                                ABŞ-də prezident seçkisi: Sonuncu ştat üzrə yekun nəticələr
                                açıqlandı
                            </p>
                        </a>
                    </div>
                    <div className={styles.banner_card}>
                        <a href="#">
                            <div className={styles.banner_img}>
                                <Image
                                    src={banner3}
                                    alt='banner image'
                                />
                            </div>
                            <p className={styles.banner_text}>
                                ABŞ-də prezident seçkisi: Sonuncu ştat üzrə yekun nəticələr
                                açıqlandı
                            </p>
                        </a>
                    </div>
                    <div className={styles.banner_card}>
                        <a href="#">
                            <div className={styles.banner_img}>
                                <Image
                                    src={banner4}
                                    alt='banner image'
                                />
                            </div>
                            <p className={styles.banner_text}>
                                ABŞ-də prezident seçkisi: Sonuncu ştat üzrə yekun nəticələr
                                açıqlandı
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.header_main}>
            <div className="container flex align-center">
                <a href="/">
                    <div className={styles.logo_img}>
                        <Image
                        src={logo}
                        alt='anews logo'
                        />
                    </div>
                </a>
                <ul className={`${styles.currency} ${OverpassRegular.className}`}>
                    <li className={styles.currency_item}>
                        $ 1.7
                        <span className={styles.currency_border}></span>
                    </li>
                    <li className={styles.currency_item}>
                        € 1.8342
                        <span className={styles.currency_border}></span>
                    </li>
                    <li className={styles.currency_item}>
                        ₽ 1.8342
                        <span className={styles.currency_border}></span>
                    </li>
                    <li className={styles.currency_item}>
                        ₺ 0.0495
                        <span className={styles.currency_border}></span>
                    </li>
                    <li className={styles.currency_item}>
                        £ 2.1973
                        <span className={styles.currency_border}></span>
                    </li>
                </ul>
                <div className={`${styles.search_lang} ${OverpassMedium.className}`}>
                    <div className={`${styles.search_div} ${searchOpen ? styles.visible : ''}`} onClick={handleSearchClick}>
                        <Image 
                            src={search_icon}
                            alt='search icon'
                            className={styles.search}
                        />
                    </div>
                    <ul className={styles.lang}>
                        <li className={`${styles.lang_item} ${styles.active}`}>
                            <a href="#">
                                AZ
                            </a>
                        </li>
                        <li className={styles.lang_item}>
                            <a href="#">
                                EN
                            </a>
                        </li>
                        <li className={styles.lang_item}>
                            <a href="#">
                                RU
                            </a>
                        </li>
                    </ul>
                    <div className='web-none'>
                        <Image
                            src={menu}
                            alt='menu icon'
                        />
                    </div>
                </div>
            </div>
            <div className={`${styles.search_head} ${searchOpen ? styles.active : ''}`}>
                <div className='container'>
                    <form action="" className={styles.search_form}>
                        <input type="text" placeholder="Axtar..." />
                        <button type="submit">
                            <Image
                            src={search_icon}
                            alt='search icon'
                            />
                        </button>
                        <Image
                            src={close_icon}
                            alt='close icon'
                            onClick={handleCloseClick}
                            className={`${styles.close_icon} `}
                        />
                    </form>
                </div>
            </div>
        </div>
        <div className={`${styles.header_categories} ${OverpassMedium.className}`}>
            <div className="container">
                <div className='web-none'>
                    <div>
                        <ul className={styles.lang}>
                            <li className={styles.lang_item}>
                                <a href="#">
                                    AZ
                                </a>
                            </li>
                            <li className={styles.lang_item}>
                                <a href="#">
                                    EN
                                </a>
                            </li>
                            <li className={styles.lang_item}>
                                <a href="#">
                                    RU
                                </a>
                            </li>
                        </ul>
                        <div>
                            {/* <img src="./assets/img/menu-close.svg" alt="ss"> */}
                        </div>
                    </div>
                    {/* <ul class="foot_social">
                        <li class="foot_social_item">
                            <a href="#" target="_blank">
                                <img src="./assets/img/f_fb.svg" alt="">
                            </a>
                        </li>
                        <li class="foot_social_item">
                            <a href="#" target="_blank">
                                <img src="./assets/img/f_ig.svg" alt="">
                            </a>
                        </li>
                        <li class="foot_social_item">
                            <a href="#" target="_blank">
                                <img src="./assets/img/f_tg.svg" alt="">
                            </a>
                        </li>
                        <li class="foot_social_item">
                            <a href="#" target="_blank">
                                <img src="./assets/img/f_x.svg" alt="">
                            </a>
                        </li>
                        <li class="foot_social_item">
                            <a href="#" target="_blank">
                                <img src="./assets/img/f_yt.svg" alt="">
                            </a>
                        </li>
                    </ul> */}
                </div>
                <div className={styles.categories}>
                    <a href="./category.html" className={`${styles.category} ${styles.active}`}>
                        BÜTÜN XƏBƏRLƏR
                    </a>
                    <a href="./category.html" className={styles.category}>
                        SİYASƏT
                    </a>
                    <a href="./category.html" className={styles.category}>
                        CƏMİYYƏT
                    </a>
                    <a href="./category.html" className={styles.category}>
                        MƏDƏNİYYƏT
                    </a>
                    <a href="./category.html" className={styles.category}>
                        İQTİSADİYYAT
                    </a>
                    <a href="./category.html" className={styles.category}>
                        İDMAN
                    </a>
                    <a href="./category.html" className={styles.category}>
                        DÜNYA
                    </a>
                    <a href="./category.html" className={styles.category}>
                        FOTO
                    </a>
                    <a href="./category.html" className={styles.category}>
                        VİDEO
                    </a>
                    <a href="./category.html" className={styles.category}>
                        COP29
                    </a>
                    <ul className={`${styles.static_pages} web-none`}>
                        <li className={`${styles.foot_item} ${styles.foot_static_page}`}>
                            <a href="./static.html">
                                HAQQIMIZDA
                            </a>
                        </li>
                        <li className={`${styles.foot_item} ${styles.foot_static_page}`}>
                            <a href="./static.html">
                                ƏLAQƏ
                            </a>
                        </li>
                        <li className={`${styles.foot_item} ${styles.foot_static_page}`}>
                            <a href="./error.html">
                                PEŞƏ ETİKASI
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header

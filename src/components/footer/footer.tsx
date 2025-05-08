import React from 'react'
import styles from './footer.module.css'
import { OverpassRegular, OverpassMedium, OverpassSemiBold } from '../../fonts/overpass';
import Image from 'next/image';
import footLogo from '/public/assets/img/foot_logo.png'
import creator from '/public/assets/img/creator.png'
import f_fb from '/public/assets/img/f_fb.svg'
import f_ig from '/public/assets/img/f_ig.svg'
import f_tg from '/public/assets/img/f_tg.svg'
import f_x from '/public/assets/img/f_x.svg'
import f_yt from '/public/assets/img/f_yt.svg'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`${styles.footer_top} container flex `}>
            <ul className={`${styles.footer_list} ${OverpassMedium.className}`}>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        BÜTÜN XƏBƏRLƏR
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        SİYASƏT
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        CƏMİYYƏT
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        MƏDƏNİYYƏT
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        İQTİSADİYYAT
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        İDMAN
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        DÜNYA
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        FOTO
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        VİDEO
                    </a>
                </li>
                <li className={styles.foot_item}>
                    <a href="./category.html">
                        COP29
                    </a>
                </li>
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
            <div className={`${styles.foot_right} ${OverpassRegular.className}`}>
                <a href="/" className={styles.foot_logo}>
                    <Image 
                        src={footLogo}
                        alt='footer logo'
                    />
                </a>
                <ul className={styles.foot_social}>
                    <li className={styles.foot_social_item}>
                        <a href="#" target="_blank">
                            <Image 
                                src={f_fb}
                                alt='footer fb'
                            />
                        </a>
                    </li>
                    <li className={styles.foot_social_item}>
                        <a href="#" target="_blank">
                            <Image 
                                src={f_ig}
                                alt='footer ig'
                            />
                        </a>
                    </li>
                    <li className={styles.foot_social_item}>
                        <a href="#" target="_blank">
                            <Image 
                                src={f_tg}
                                alt='footer tg'
                            />
                        </a>
                    </li>
                    <li className={styles.foot_social_item}>
                        <a href="#" target="_blank">
                            <Image 
                                src={f_x}
                                alt='footer x'
                            />
                        </a>
                    </li>
                    <li className={styles.foot_social_item}>
                        <a href="#" target="_blank">
                            <Image 
                                src={f_yt}
                                alt='footer yt'
                            />
                        </a>
                    </li>
                </ul>
                <div className={styles.foot_text_block}>
                    <p className={styles.foot_text}>
                        Materiallardan hər hansı istifadəyə yalnız təkrar çap qaydalarına əməl olunarsa və
                        ANEWS.az-ya hiperlink olduqda icazə verilir.
                    </p>
                    <p className={styles.foot_text}>
                        Bu saytda təqdim olunan xəbərlər, analitiklər, proqnozlar və digər materiallar hər hansı
                        aktivlərin alınması və ya satışı ilə bağlı təklif və ya tövsiyə təşkil etmir.
                    </p>
                </div>
            </div>
        </div>
        <div className={`container flex ${styles.footer_bottom} ${OverpassRegular.className}`}>
            <p className={styles.copyright}>
                Copyright©2024 “Anews.az” . Bütün hüquqlar qorunur.
            </p>
            <div className={styles.created}>
                <span className={styles.creator}>
                    Created by:
                </span>
                <a href="#" className={styles.creator_name}>
                    <Image 
                        src={creator}
                        alt='creator'
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer

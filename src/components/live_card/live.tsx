import React from 'react'
import styles from './live.module.css'
import Image from 'next/image'
import liveImg from '/public/assets/img/live_img.png'
import liveIcon from '/public/assets/img/live_icon.png'
import {
    OverpassRegular,
    OverpassMedium,
    OverpassSemiBold,
  } from "../../fonts/overpass";

const LiveCard = () => {
    return (
        <div className={styles.live_head}>
            <a href="./live_detail.html">
                <div className={styles.live_head_cart_part}>
                    <Image src={liveIcon} alt='live icon' />
                        <div className={`${styles.live_body} `}>
                            <div className={`${styles.lhead} ${OverpassSemiBold.className}`}>
                                Canlı
                            </div>
                            <p className={`${styles.lbody} ${OverpassRegular.className}`}>
                                “COP29” ilə bağlı ən son xəbərlər və videolar
                            </p>
                        </div>
                </div>
                <div className={`${styles.live_img} clearfix`}>
                    <Image src={liveImg} alt='live img'/>
                </div>
                <h2 className={`${styles.live_news_head} ${OverpassMedium.className}`}>
                    Rəsmilər COP29-da iştirak etmək üçün Bakıya gəlirlər
                </h2>
            </a>
        </div>
    )
}

export default LiveCard

import React from "react";
import Editor from "../editor/editor";
import LiveCard from "../live_card/live";
import NewsCard from "../news_card/newsCard";
import rightArrow from '/public/assets/img/right_arr.png'
import Image from "next/image";
import {
    OverpassRegular,
    OverpassMedium,
    OverpassSemiBold,
  } from "../../fonts/overpass";  

const BlockOne = () => {
    const newsData = [
        {
            img: "/assets/img/media_news_card.png",
            date: "Bugün 17:45",
            title: "İkinci Qarabağ müharibəsini sonlandıran Bəyanat",
        },
        {
            img: "/assets/img/media_news_card.png",
            date: "Dünən 12:00",
            title: "Azərbaycan-Ermənistan sülh prosesində son vəziyyət",
        },
        {
            img: "/assets/img/media_news_card.png",
            date: "Bu gün 09:30",
            title: "Prezident yeni layihələri açıqladı",
        },
        {
            img: "/assets/img/media_news_card.png",
            date: "Dünən 21:00",
            title: "Neft qiymətləri yenidən yüksəldi",
        },
        {
            img: "/assets/img/media_news_card.png",
            date: "Dünən 21:00",
            title: "Neft qiymətləri yenidən yüksəldi",
        },
    ];

    const visibleCardCount = 4;

    return (
        <div className="block flex">
            <div className="live_editor">
                <LiveCard />
                <Editor />
            </div>

            <div className="category">
                <div className={`head_text category_block_head ${OverpassSemiBold.className}`}>
                    Sİyasət                        
                    <Image src={rightArrow} alt="right arrow" />
                </div>
                <div className="first_category">
                {newsData.slice(0, visibleCardCount).map((item, idx) => (
                    <NewsCard
                        key={idx}
                        data={item}
                        isFirst={idx === 0}
                        variant={visibleCardCount === 4 ? "compact" : "default"}
                    />
                ))}
                </div>
            </div>
        </div>
    );
};

export default BlockOne;

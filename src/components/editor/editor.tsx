import React from "react";
import styles from "./editor.module.css";
import {
  OverpassRegular,
  OverpassMedium,
  OverpassSemiBold,
} from "../../fonts/overpass";

const Editor = () => {
  return (
    <div className={styles.editor_block}>
      <h2 className={`head_text ${OverpassSemiBold.className}`}>Redaktordan</h2>
      <div className={styles.editor_news}>
        <div className={styles.text_news_card}>
          <div className={`${styles.card_top} ${OverpassRegular.className}`}>
            <a
              href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/"
              className={`${styles.card_category}`}
            >
              Cəmiyyət
            </a>
            <span className={styles.card_date}>06.05.2025 </span>
          </div>
          <div className={`${styles.card_body} ${OverpassMedium.className}`}>
            <a href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/">
              Tehran-Bakı reysləri açılıb
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={`${styles.card_top} ${OverpassRegular.className}`}>
            <a
              href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/"
              className={`${styles.card_category}`}
            >
              Cəmiyyət
            </a>
            <span className={styles.card_date}>06.05.2025 </span>
          </div>
          <div className={`${styles.card_body} ${OverpassMedium.className}`}>
            <a href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/">
              Tehran-Bakı reysləri açılıb
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={`${styles.card_top} ${OverpassRegular.className}`}>
            <a
              href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/"
              className={`${styles.card_category}`}
            >
              Cəmiyyət
            </a>
            <span className={styles.card_date}>06.05.2025 </span>
          </div>
          <div className={`${styles.card_body} ${OverpassMedium.className}`}>
            <a href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/">
              Tehran-Bakı reysləri açılıb
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={`${styles.card_top} ${OverpassRegular.className}`}>
            <a
              href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/"
              className={`${styles.card_category}`}
            >
              Cəmiyyət
            </a>
            <span className={styles.card_date}>06.05.2025 </span>
          </div>
          <div className={`${styles.card_body} ${OverpassMedium.className}`}>
            <a href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/">
              Tehran-Bakı reysləri açılıb
            </a>
          </div>
        </div>
        <div className={styles.text_news_card}>
          <div className={`${styles.card_top} ${OverpassRegular.className}`}>
            <a
              href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/"
              className={`${styles.card_category}`}
            >
              Cəmiyyət
            </a>
            <span className={styles.card_date}>06.05.2025 </span>
          </div>
          <div className={`${styles.card_body} ${OverpassMedium.className}`}>
            <a href="https://anews.az/az/cemiyyet/477057/tehran-baki-reysleri-acilib/">
              Tehran-Bakı reysləri açılıb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;

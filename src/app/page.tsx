import Image from "next/image";
import styles from "./page.module.css";
import Manshet_slider from "@/components/manshet_slider/manshet_slider";
import BlockOne from "@/components/blockTypeOne/blockOne";
type SlideItem = {
  img: string;
  date: string;
  title: string;
  category: string;
};

const data1: SlideItem[] = [
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    category: "cəmiyyət",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    category: "cəmiyyət",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    category: "cəmiyyət",
  },
  {
    img: "/assets/img/manshet.png",
    date: "Bugün 14:56",
    title: "Mission: Impossible 8 treyleri yayımlandı",
    category: "cəmiyyət",
  },
];

export default function Home() {
  return (
    <div>
      <Manshet_slider data={data1}/>
      <BlockOne />
      <div className="block">

      </div>
    </div>
  );
}

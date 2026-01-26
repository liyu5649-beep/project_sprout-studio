import "./Banner.css";
import { useEffect, useState } from "react";
import { banner, banner2, arrow } from "../assets/Image";
import MoreBtn from "./MoreBtn";


function Banner() {

    // banner 圖片
    const banners = [banner, banner2]

    const [current, setCurrent] = useState(0);
    // 自動輪播
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => clearInterval(interval)
    }, [banners.length]);


    return <section className="banner-form" style={{backgroundImage: `url(${banners[current]})`}}>
        <div className="banner-content">
            <div className="banner-head">打造專屬你的視覺識別</div>
            <p className="banner-text">我們專注於品牌設計、網頁設計與視覺策略，讓每一個創意都有價值</p>
            <MoreBtn />
        </div>
        <div className="carousel">
            {banners.map((_, index) => (
                <span key={index}
                className={index === current ? "dot active" : "dot"}
                onClick={() => setCurrent(index)}>
                </span>
            ))}
        </div>
    </section>
}

export default Banner; 
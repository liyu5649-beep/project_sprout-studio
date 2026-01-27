import "./Footer.css";
import { arrow, footer } from "../assets/Image";

function Footer() {
    return <section className="footer">
        <header className="footer-head">
            <div className="service-text">關於我們</div>
            <div className="service-text2">
            我們是用設計說故事的人
            </div>
        </header>
        <img src={footer} className="footer-img" alt="頁尾圖" loading="lazy"/>
        <p className="epilog">我們替品牌找到模樣，讓設計說出情感與故事，留下被記住的溫度與風景。</p>
        <button className="more-light">
        <img src={arrow}/>
        了解更多
      </button>
    </section>
}

export default Footer;
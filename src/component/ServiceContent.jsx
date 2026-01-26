import "./ServiceContent.css";
import { serviceContent1, serviceContent2, serviceContent3 } from "../assets/Image";

function ServiceContent() {
  const serviceData = [
    {img: serviceContent1, title: "新創品牌｜建立品牌認知", content: ["建立品牌識別系統（ 色彩 / 字體 / 延伸應用）", "明確品牌核心與溝通語調"]},
    {img: serviceContent2, title: "電商設計｜提升轉換率", content: ["視覺一致性的品牌調性設計", "強化消費動機與信任感，提升轉單率"]},
    {img: serviceContent3, title: "在地服務｜強化品牌印象", content: ["建立記憶度高的品牌形象", "強化「地點 X 品牌」的專屬記憶點"]}
  ]

  return (
    <section className="service-content">
      <header className="content-head">
        <div className="service-text">量身打造的設計策略</div>
        <div className="service-text2">
          根據產業與客戶目標，提供最適合的設計提案
        </div>
      </header>
      {serviceData.map((item, index) => {
        const isReverse = index % 2 === 1;

        return <article className={isReverse ? "content-item-reverse" : "content-item"} key={index}>
        <img src={item.img} />
        <div className="content-item-text">
          <div className="content-item-head">{item.title}</div>
          <ul className="content-item-content">
            <li>{item.content}</li>
          </ul>
        </div>
      </article>
      })}
    </section>
  );
}

export default ServiceContent;

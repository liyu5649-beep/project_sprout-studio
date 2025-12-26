import { serviceContent1, serviceContent2, serviceContent3 } from "../assets/Image";

function ServiceContent() {
  return (
    <section className="service-content">
      <header className="content-head">
        <div className="service-text">量身打造的設計策略</div>
        <div className="service-text2">
          根據產業與客戶目標，提供最適合的設計提案
        </div>
      </header>
      <article className="content-item">
        <img src={serviceContent1} />
        <div className="content-item-text">
          <div className="content-item-head">新創品牌｜建立品牌認知</div>
          <ul className="content-item-content">
            <li>建立品牌識別系統（ 色彩 / 字體 / 延伸應用）</li>
            <li>明確品牌核心與溝通語調</li>
          </ul>
        </div>
      </article>
      <article className="content-item-reverse">
        <img src={serviceContent2} />
        <div className="content-item-text">
          <div className="content-item-head">電商設計｜提升轉換率</div>
          <ul className="content-item-content">
            <li>視覺一致性的品牌調性設計</li>
            <li>強化消費動機與信任感，提升轉單率</li>
          </ul>
        </div>
      </article>
      <article className="content-item">
        <img src={serviceContent3} />
        <div className="content-item-text">
          <div className="content-item-head">在地服務｜強化品牌印象</div>
          <ul className="content-item-content">
            <li>建立記憶度高的品牌形象</li>
            <li>強化「地點 X 品牌」的專屬記憶點</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default ServiceContent;

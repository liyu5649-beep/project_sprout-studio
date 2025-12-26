import { serviceFeature1, serviceFeature2, serviceFeature3 } from "../assets/Image";

function ServiceFeature() {
    return <section className="service-feature">
        <header className="feature-head">
            <div className="service-text">我們的設計，不只是漂亮，更有策略</div>
            <div className="service-text2">提供全方位的設計解決方案，從品牌建立到數位體驗</div>
        </header>
        <div className="feature-list">
            <article className="feature-item">
                <img src={serviceFeature1} />
                <div className="feature-item-head">客製合作模式</div>
                <p className="feature-item-content">沒有制式模板，依照你的品牌階段與目標，量身打造設計方案。</p>
            </article>
            <article className="feature-item">
                <img src={serviceFeature2} />
                <div className="feature-item-head">跨領域整合</div>
                <p className="feature-item-content">結合品牌、網頁、社群視覺等多元設計服務，讓風格與體驗一致性發展。</p>
            </article>
            <article className="feature-item">
                <img src={serviceFeature3} />
                <div className="feature-item-head">高效溝通</div>
                <p className="feature-item-content">使用專業專案管理工具，確保每一階段雙方都能清楚掌握與即時調整。</p>
            </article>
        </div>
    </section>
}

export default ServiceFeature;
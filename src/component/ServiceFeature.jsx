import "./ServiceFeature.css";
import { serviceFeature1, serviceFeature2, serviceFeature3 } from "../assets/Image";
import { useEffect } from "react";

function ServiceFeature() {
    const ServiceData = [
        {img: serviceFeature1, title: "客製合作模式", content: "沒有制式模板，依照你的品牌階段與目標，量身打造設計方案。"},
        {img: serviceFeature2, title: "跨領域整合", content: "結合品牌、網頁、社群視覺等多元設計服務，讓風格與體驗一致性發展。"},
        {img: serviceFeature3, title: "高效溝通", content: "使用專業專案管理工具，確保每一階段雙方都能清楚掌握與即時調整。"}
    ];

    useEffect(() => {
        const items = document.querySelectorAll(".feature-item");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },{
            threshold: 0.5
        });
        items.forEach(item => observer.observe(item));
        return () => items.forEach(item => observer.unobserve(item));
    }, []);

    return <section className="service-feature">
        <header className="feature-head">
            <div className="service-text">我們的設計，不只是漂亮，更有策略</div>
            <div className="service-text2">提供全方位的設計解決方案，從品牌建立到數位體驗</div>
        </header>
        <div className="feature-list">
            {ServiceData.map((item, index) => {
                return <article className="feature-item" key={index}>
                    <img src={item.img} />
                    <div className="feature-item-head">{item.title}</div>
                    <p className="feature-item-content">{item.content}</p>
                </article>
            })}
        </div>
    </section>
}

export default ServiceFeature;
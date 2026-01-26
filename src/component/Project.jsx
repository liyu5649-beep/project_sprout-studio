import "./Project.css";
import {projectCover1, projectCover2, projectCover3 } from "../assets/Image";
import MoreBtn from "./MoreBtn";

function Project() {
  const projectData = [
    {img: projectCover1, name: "《Slow 慢日子》｜生活選物品牌識別設計"},
    {img: projectCover2, name: "《《果日市集》｜電商品牌網站設計"},
    {img: projectCover3, name: "《島嶼呼吸 Island》｜瑜伽品牌形象設計"}
  ]

  return (
    <section className="project">
      <header className="project-head">
        <div className="service-text">我們的作品</div>
        <div className="service-text2">
          每一個專案，都是一次視覺與策略的結晶
        </div>
      </header>
      <div className="project-list">
        {projectData.map((item, index) => {
          return <article className="project-cover" key={index}>
          <img src={item.img} />
          <div className="project-name">{item.name}</div>
        </article>
        })}
      </div>
      <MoreBtn />
    </section>
  );
}

export default Project;

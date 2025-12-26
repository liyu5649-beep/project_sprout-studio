import { arrow, projectCover1, projectCover2, projectCover3 } from "../assets/Image";

function Project() {
  return (
    <section className="project">
      <header className="project-head">
        <div className="service-text">我們的作品</div>
        <div className="service-text2">
          每一個專案，都是一次視覺與策略的結晶
        </div>
      </header>
      <div className="project-list">
        <article className="project-cover">
          <img src={projectCover1} />
          <div className="project-name">
            《Slow 慢日子》｜生活選物品牌識別設計
          </div>
        </article>
        <article className="project-cover">
          <img src={projectCover2} />
          <div className="project-name">
            《果日市集》｜電商品牌網站設計
          </div>
        </article>
        <article className="project-cover">
          <img src={projectCover3} />
          <div className="project-name">
            《島嶼呼吸 Island》｜瑜伽品牌形象設計
          </div>
        </article>
      </div>
      <button className="more">
        <img src={arrow}/>
        了解更多
      </button>
    </section>
  );
}

export default Project;

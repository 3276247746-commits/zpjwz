"use client";

import { useRef } from "react";

const projectGroups = [
  { id: "01", title: "AIGC 设计", en: "AIGC DESIGN", intro: "从 AI 漫剧到真人短剧与商业视频，探索生成式影像的叙事和表达。", projects: [
    ["01", "AI 漫剧《别惹我，我防御拉满》", "角色 / 道具 / 场景设计", "/project-defense.png", "violet"],
    ["02", "《星河》", "AIGC 视觉叙事 / 动态影像", "/project-starlight.png", "pink"],
    ["03", "AI 海外真人短剧", "AI 影像生成 / 后期包装", "/project-hidden-heiress.png", "blue"],
    ["04", "《影眼》", "概念设计 / AI 视觉实验", "/project-shadow-eye.png", "blue"],
    ["05", "AI 视频制作（跨境电商产品）", "产品视觉 / 脚本 / 剪辑", "/project-cross-border-video.png", "violet"],
    ["06", "AI 美术资产设计", "角色资产 / 场景资产 / 视觉设定", "/project-ai-art-assets.png", "pink"],
  ] },
  { id: "02", title: "传统动画设计", en: "TRADITIONAL ANIMATION", intro: "在角色表演、动作节奏与镜头语言中，打磨动画本身的生命力。", projects: [
    ["01", "《嗨萌马之神骏兄弟第二季》", "动画绑定 / 动作设计 / 创意策划", "/project-himengma.png", "blue"],
  ] },
  { id: "03", title: "美术类设计", en: "ART DESIGN", intro: "以角色、平面和三维语言，建立作品的视觉基调与想象空间。", projects: [
    ["01", "角色设计", "人物设定 / 造型探索 / 表情设计", "/hero.jpg", "pink"],
    ["02", "海报设计", "视觉传达 / 版式设计 / 品牌表达", "/neural.jpg", "violet"],
    ["03", "三维建模", "Blender 建模 / 材质 / 渲染", "/weave.jpg", "blue"],
  ] },
];

const strengths = [
  ["01", "AIGC 创意落地", "熟练运用 ChatGPT、Gemini、可灵、即梦等工具，将概念高效转化为图像、视频与动态内容。"],
  ["02", "动画视觉表达", "覆盖二维动画、MG 动画、角色与场景设计，兼顾节奏、情绪与视觉叙事。"],
  ["03", "从创意到成片", "完成脚本、分镜、生成、剪辑、调色与动效包装，让每一个想法形成完整作品。"],
  ["04", "协作与成长", "具备团队组织与沟通能力，持续学习新工具，在变化中保持高效与创造力。"],
];

function MagicTitle({ first, second }: { first: string; second: string }) {
  return <h2 className="magic-title"><span>{Array.from(first).map((letter, index) => <b key={`${letter}-${index}`} style={{ animationDelay: `${index * .08}s` }}>{letter}</b>)}</span>{second && <><br /><em>{Array.from(second).map((letter, index) => <b key={`${letter}-${index}`} style={{ animationDelay: `${(index + first.length) * .08}s` }}>{letter}</b>)}</em></>}<i>✦</i><i>✧</i></h2>;
}

export default function Home() {
  const rails = useRef<Array<HTMLDivElement | null>>([]);
  const scrollRail = (index: number, direction: number) => rails.current[index]?.scrollBy({ left: direction * 390, behavior: "smooth" });

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-dots hero-dots-a" /><div className="hero-dots hero-dots-b" />
        <div className="hero-spark hero-spark-a">+</div><div className="hero-spark hero-spark-b">+</div><div className="hero-spark hero-spark-c">✦</div>
        <header className="nav-wrap">
          <a className="wordmark" href="#home"><i>H</i><span>HUANG<br />DANQI</span></a>
          <nav aria-label="主导航"><a className="nav-active" href="#home">首页</a><a href="#about">个人介绍</a><a href="#reel">作品混剪</a><a href="#work">精选项目</a><a href="#strength">个人优势</a></nav>
          <a className="nav-contact" href="#contact">联系我 <b>+</b></a>
        </header>
        <div className="hero-inner frame">
          <div className="hero-copy">
            <p className="hero-kicker">PORTFOLIO / 2026 &nbsp; · &nbsp; SHENZHEN</p>
            <h1 className="hero-title"><span>{["黄", "丹", "琦"].map((letter, index) => <b key={letter} style={{ animationDelay: `${index * 0.14}s` }}>{letter}</b>)}</span><br /><em>{["个", "人", "作", "品", "集"].map((letter, index) => <b key={letter} style={{ animationDelay: `${(index + 3) * 0.14}s` }}>{letter}</b>)}</em><i className="title-spark title-spark-a">✦</i><i className="title-spark title-spark-b">✧</i><i className="title-spark title-spark-c">✦</i></h1>
            <p className="hero-intro">黄丹琦 / AI 设计师 · 动画设计师<br />以 AIGC、动画与视觉叙事，回应每一个新鲜的想法。</p>
            <div className="hero-actions"><a className="primary-btn" href="#work">浏览作品 <span>↓</span></a><a className="round-play" href="#about" aria-label="认识黄丹琦">↘</a></div>
          </div>
          <div className="hero-character"><div className="character-arch"><img src="/hero-character.png" alt="粉色花卉主题角色视觉" /></div><div className="orbit orbit-a" /><div className="orbit orbit-b" /></div>
        </div>
        <aside className="hero-card profile-mini"><small>CREATIVE PROFILE</small><strong>AI × MOTION</strong><p>为想法注入节奏<br />与明亮的想象力。</p><span>2026</span></aside>
        <aside className="hero-card playlist-card"><small>MY FOCUS</small><div className="mini-art"><img src="/neural.jpg" alt="AIGC 项目缩略图" /></div><strong>AI visual<br />storytelling</strong><a href="#work">查看项目　→</a></aside>
        <div className="hero-rail"><span>01.</span><em>MY PROFILE</em><i>●</i></div>
        <div className="hero-side">AI DESIGNER<br />MOTION DESIGNER</div>
        <div className="hero-meta"><span>SCROLL TO DISCOVER</span><span>01 — 05</span></div>
      </section>

      <section className="about section frame" id="about">
        <div className="section-number">01 <span>— ABOUT ME</span></div>
        <div className="about-grid">
          <div className="portrait-block portrait-block--doodle">
            <span className="doodle doodle-star">✦</span><span className="doodle doodle-heart">♡</span><span className="doodle doodle-arrow">↗</span><span className="doodle doodle-flower">✿</span><span className="doodle doodle-wave">〰</span>
            <img className="portrait-cutout portrait-white-bg" src="/huang-danqi-birthday.jpg" alt="黄丹琦" />
            <div className="portrait-stamp">HDQ<br /><small>CREATIVE<br />PROFILE</small></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">你好，我是黄丹琦</p>
            <MagicTitle first="个人介绍" second="" />
            <p className="lead">动画设计专业背景，现专注于 AI 设计与动画视觉制作。擅长从创意概念、分镜脚本到成片剪辑的完整创作流程，让技术服务于更鲜活的表达。</p>
            <div className="contact-list"><a href="tel:13226835811">132 2683 5811</a><a href="mailto:3276247746@qq.com">3276247746@qq.com</a><span>深圳 · 可接受合作邀约</span></div>
          </div>
          <aside className="quick-facts"><span>EDUCATION</span><strong>深圳职业技术大学</strong><small>动画设计 · 2023.09—2026.07</small><hr /><span>CERTIFICATE</span><strong>ACAA 动画设计师</strong><small>普通话二级乙等</small></aside>
        </div>
        <div className="about-tools"><div><p className="section-number">TOOLS <span>— SKILLS</span></p><h3>熟练使用工具</h3></div><div className="skill-tags"><span>Photoshop</span><span>Illustrator</span><span>Blender</span><span>After Effects</span><span>Adobe Animate</span><span>Clip Studio Paint</span><span>ChatGPT</span><span>Gemini</span><span>可灵</span><span>即梦</span><span>Excel / Word</span></div></div>
      </section>

      <section className="reel section" id="reel">
        <div className="frame"><div className="section-number">02 <span>— SHOWREEL</span></div><div className="reel-heading"><MagicTitle first="作品集混剪视频" second="" /><p>AI 设计、动画与美术创作的作品集混剪。</p></div><div className="reel-player"><img src="/hero.jpg" alt="作品集混剪视频封面" /><div className="reel-shade" /><div className="reel-center"><span>PORTFOLIO SHOWREEL</span><button className="glass-float" type="button" aria-label="播放作品集混剪视频">▶</button><strong>作品集混剪视频</strong><small>VIDEO WILL BE AVAILABLE SOON</small></div><div className="reel-footer"><span>HUANG DANQI / 2026</span><span>AI · MOTION · ART</span></div></div></div>
      </section>

      <section className="work section frame" id="work">
        <div className="section-number">03 <span>— SELECTED PROJECTS</span></div>
        <div className="work-heading"><MagicTitle first="作品集" second="" /><p>从 AIGC 设计、传统动画到美术设计，以不同媒介回应同一个视觉想法。</p></div>
        <div className="project-groups">{projectGroups.map((group, groupIndex) => { const hasControls = group.id === "01"; return <section className="project-group" key={group.id}><div className="project-group-heading"><span>{group.id} / {group.en}</span><h3>{group.title}</h3><p>{group.intro}</p><small>{hasControls ? "点击按钮浏览项目" : "横向滑动浏览　→"}</small>{hasControls && <div className="aigc-controls"><button type="button" onClick={() => scrollRail(groupIndex, -1)} aria-label={`查看${group.title}上一个项目`}>←</button><button type="button" onClick={() => scrollRail(groupIndex, 1)} aria-label={`查看${group.title}下一个项目`}>→</button></div>}</div><div className="project-rail-wrap"><div className="project-rail" ref={(element) => { rails.current[groupIndex] = element; }}>{group.projects.map(([id, title, note, image, tone]) => <article className={`project-card ${tone}`} key={`${group.id}-${id}`}><div className="project-image"><img src={image} alt={title} /></div><div className="project-detail"><span>{group.id}.{id} / {group.en}</span><h3>{title}</h3><a href="#contact">查看项目 <b>↗</b></a></div></article>)}</div></div></section>; })}</div>
      </section>

      <section className="strength section" id="strength"><div className="frame"><div className="section-number">04 <span>— MY STRENGTHS</span></div><MagicTitle first="我的优势，" second="不止于熟练。" /><div className="strength-grid">{strengths.map(([number, title, body]) => <article key={number}><span>{number}</span><i>✦</i><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <footer className="contact-footer" id="contact"><div className="footer-glow" /><div className="frame footer-content"><p className="eyebrow">LET&apos;S CREATE SOMETHING NEW</p><MagicTitle first="让下一个想法，" second="从这里开始。" /><div className="footer-links"><a href="mailto:3276247746@qq.com">3276247746@qq.com <span>↗</span></a><a href="tel:13226835811">132 2683 5811 <span>↗</span></a></div><div className="footer-bottom"><span>HUANG DANQI / AI & MOTION DESIGNER</span><a href="#home">BACK TO TOP ↑</a><span>© 2026</span></div></div></footer>
    </main>
  );
}

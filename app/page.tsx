const projects = [
  {
    number: "01",
    title: "Neural Architect",
    subtitle: "生成式视觉系统 / Motion Identity",
    image: "/neural.jpg",
    tags: ["AI GENERATIVE", "MOTION DESIGN"],
    className: "project project--wide",
  },
  {
    number: "02",
    title: "Synthetic Weave",
    subtitle: "品牌影像 / Procedural CG",
    image: "/weave.jpg",
    tags: ["ART DIRECTION", "VFX"],
    className: "project",
  },
  {
    number: "03",
    title: "Fluid Futures",
    subtitle: "沉浸式视觉 / Experimental Film",
    image: "/hero.jpg",
    tags: ["VISUAL DESIGN", "3D MOTION"],
    className: "project",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首页">
          <span className="brand-mark">✦</span>
          <span>VISUAL DIARY</span>
        </a>
        <nav aria-label="主导航">
          <a className="active" href="#top">首页</a>
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="header-action" href="mailto:hello@visualdiary.design" aria-label="发送合作邮件">
          <span>LET&apos;S TALK</span><b>↗</b>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="spark spark-a">+</div>
        <div className="spark spark-b">✦</div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR CREATIVE PROJECTS</div>
          <h1>I MAKE IDEAS<br /><em>MOVE &amp; GLOW.</em></h1>
          <p>你好，我是一名专注于新叙事与新工具的<br />AI 设计师、动画设计师、视觉设计师。</p>
          <div className="hero-actions">
            <a className="button button--pink" href="#work">查看精选作品 <span>↘</span></a>
            <a className="text-link" href="#about">认识我 <span>→</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="抽象动态视觉作品">
          <div className="image-arch"><img src="/hero.jpg" alt="流动的抽象三维视觉作品" /></div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="floating-note">
            <span>CREATIVE FOCUS</span>
            <strong>AI × MOTION</strong>
            <small>Making technology feel human.</small>
          </div>
        </div>

        <aside className="profile-card">
          <div className="profile-top">
            <img src="/portrait.jpg" alt="设计师肖像" />
            <div><small>HELLO, I&apos;M</small><strong>YOUR NAME</strong></div>
            <span className="profile-heart">♥</span>
          </div>
          <p>把复杂技术变成有温度、有节奏、有记忆点的视觉体验。</p>
          <div className="profile-tags"><span>AI</span><span>MOTION</span><span>VISUAL</span></div>
        </aside>

        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><span className="kicker">SELECTED WORK / 2023—2026</span><h2>作品不是结果，<br /><em>是一次漂亮的冒险。</em></h2></div>
          <p>从生成式视觉到品牌动画，我用设计建立一个完整世界，让每个概念都拥有自己的情绪、节奏与触感。</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={project.className} key={project.number}>
              <div className="project-image"><img src={project.image} alt={`${project.title} 项目视觉`} /><span>{project.number}</span></div>
              <div className="project-info">
                <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <button aria-label={`查看 ${project.title} 案例`}>↗</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-card about-intro">
          <span className="card-index">01 / ABOUT</span>
          <h2>在理性技术与<br /><em>感性表达之间。</em></h2>
          <p>我的工作横跨概念策略、AI 创意、动态设计与视觉系统。喜欢从一句模糊的想法出发，把它推演成清晰、迷人、可持续生长的体验。</p>
          <a href="#contact">更多关于我 <span>→</span></a>
        </div>
        <div className="about-card services-card">
          <span className="card-index">02 / WHAT I DO</span>
          <div className="service-row"><span className="service-icon">✦</span><div><strong>AI Creative Design</strong><small>概念探索・生成式视觉・创意工作流</small></div><b>01</b></div>
          <div className="service-row"><span className="service-icon">◌</span><div><strong>Motion Design</strong><small>品牌动画・动态系统・影像包装</small></div><b>02</b></div>
          <div className="service-row"><span className="service-icon">✺</span><div><strong>Visual Direction</strong><small>视觉识别・艺术指导・数字体验</small></div><b>03</b></div>
        </div>
        <div className="about-card mini-card">
          <span className="mini-star">✦</span>
          <strong>3 disciplines.<br />1 visual language.</strong>
          <p>跨越工具与媒介，始终保持同一种清晰而鲜活的表达。</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <span className="kicker">HAVE A PROJECT IN MIND?</span>
          <h2>LET&apos;S MAKE<br /><em>SOMETHING LOVELY.</em></h2>
        </div>
        <a className="contact-bubble" href="mailto:hello@visualdiary.design">
          <span>START A PROJECT</span><b>↗</b><small>hello@visualdiary.design</small>
        </a>
        <div className="footer-line"><span>AI × MOTION × VISUAL DESIGN</span><span>© 2026 VISUAL DIARY</span><a href="#top">BACK TO TOP ↑</a></div>
      </section>
    </main>
  );
}

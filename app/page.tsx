const projects = [
  { id: "01", type: "AIGC DESIGN", title: "别惹我，我防御拉满", note: "AI动画短片 · 角色 / 道具 / 场景设计", image: "/neural.jpg", tone: "violet" },
  { id: "02", type: "MOTION DESIGN", title: "萌萌马之神缘兄弟", note: "第二季动画 · 绑定 / 动作设计 / 创意策划", image: "/weave.jpg", tone: "blue" },
  { id: "03", type: "ART DESIGN", title: "视觉叙事实验", note: "海报设计 · 分镜脚本 · AIGC短视频", image: "/hero.jpg", tone: "pink" },
];

const strengths = [
  ["01", "AIGC 创意落地", "熟练运用 ChatGPT、Gemini、可灵、即梦等工具，将概念高效转化为图像、视频与动态内容。"],
  ["02", "动画视觉表达", "覆盖二维动画、MG 动画、角色与场景设计，兼顾节奏、情绪与视觉叙事。"],
  ["03", "从创意到成片", "完成脚本、分镜、生成、剪辑、调色与动效包装，让每一个想法形成完整作品。"],
  ["04", "协作与成长", "具备团队组织与沟通能力，持续学习新工具，在变化中保持高效与创造力。"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-dots hero-dots-a" /><div className="hero-dots hero-dots-b" />
        <div className="hero-spark hero-spark-a">+</div><div className="hero-spark hero-spark-b">+</div><div className="hero-spark hero-spark-c">✦</div>
        <header className="nav-wrap">
          <a className="wordmark" href="#home"><i>H</i><span>HUANG<br />DANQI</span></a>
          <nav aria-label="主导航"><a className="nav-active" href="#home">首页</a><a href="#about">个人经历</a><a href="#work">精选项目</a><a href="#strength">个人优势</a></nav>
          <a className="nav-contact" href="#contact">联系我 <b>+</b></a>
        </header>
        <div className="hero-inner frame">
          <div className="hero-copy">
            <p className="hero-kicker">PORTFOLIO / 2026 &nbsp; · &nbsp; SHENZHEN</p>
            <h1>让想象成为<br /><em>会呼吸的画面。</em></h1>
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
            <h2>用新工具，<br /><em>做有温度的视觉。</em></h2>
            <p className="lead">动画设计专业背景，现专注于 AI 设计与动画视觉制作。擅长从创意概念、分镜脚本到成片剪辑的完整创作流程，让技术服务于更鲜活的表达。</p>
            <div className="contact-list"><a href="tel:13226835811">132 2683 5811</a><a href="mailto:3276247746@qq.com">3276247746@qq.com</a><span>深圳 · 可接受合作邀约</span></div>
          </div>
          <aside className="quick-facts"><span>EDUCATION</span><strong>深圳职业技术大学</strong><small>动画设计 · 2023.09—2026.07</small><hr /><span>CERTIFICATE</span><strong>ACAA 动画设计师</strong><small>普通话二级乙等</small></aside>
        </div>
      </section>

      <section className="experience section frame">
        <div className="section-number">02 <span>— EXPERIENCE</span></div>
        <div className="experience-heading"><h2>经历是我构建<br /><em>审美与方法的素材库。</em></h2><p>从校园设计竞赛到 AI 视频制作，我不断在真实项目中探索动画、技术与叙事的交点。</p></div>
        <div className="timeline">
          <article><div className="time">2026.06 — 2026.08</div><div><p className="role">AI 视频制作剪辑 <span>深圳优明环球科技有限公司</span></p><h3>把品牌想法转译成可传播的动态内容</h3><p className="experience-summary">使用 AI 生成工具完成文生图、图生图、文生视频与动态效果优化；结合品牌调性撰写脚本、设计分镜，并通过 After Effects、剪映完成剪辑、调色与音效合成。</p><ul className="experience-points"><li>AI 视频全流程制作：运用 AI 生成工具（如 ChatGPT、Gemini、可灵等）完成从概念到成片的视频生产，涵盖文生图、图生图、文生视频、图生视频及动态效果优化。</li><li>脚本与分镜设计：结合品牌调性与传播目标，撰写创意脚本，设计视觉分镜，确保 AI 生成内容与叙事逻辑高度契合；后期剪辑与精修：使用 After Effects 和剪映进行视频剪辑、调色、音效合成及动态图形设计，提升成片质感与传播力。</li></ul></div></article>
          <article><div className="time">2025.12 — 2026.06</div><div><p className="role">动画设计师 / AI 漫剧制作 <span>深圳市凯乐新联文化科技有限公司</span></p><h3>以角色、场景和动作，搭起一个动画世界</h3><p className="experience-summary">参与《萌萌马之神缘兄弟》第二季动画绑定与动作设计，负责角色、道具、场景设计及 AI 动画视频制作，独立完成美术设计到成片输出的流程。</p><ul className="experience-points"><li>负责《萌萌马之神缘兄弟》第二季动画剧集的动画绑定与动作设计，确保角色生动形象、动作流畅；参与项目创意策划，提出创新性的角色与场景设计方案，为作品注入新鲜元素。</li><li>负责 AI 漫剧《别惹我，我防御拉满》的角色、道具、场景设计以及 AI 动画视频制作，独立完成从美术设计到成片输出全流程，保障内容质量与产出效率。</li></ul></div></article>
          <article><div className="time">2024 — 2026</div><div><p className="role">校园经历 <span>设计与美术 / 团队合作与领导</span></p><h3>在竞赛与社团中扩展表达的边界</h3><p>获得蓝桥杯视觉艺术设计赛省赛二等奖、大广赛二等奖等；担任 Jazz 舞队队长，负责成员排训、社团活动与团队协作。</p></div></article>
        </div>
      </section>

      <section className="skills section"><div className="frame"><div className="section-number">03 <span>— TOOLS & SKILLS</span></div><div className="skill-layout"><h2>工具只是延伸，<br /><em>想法才是核心。</em></h2><div className="skill-tags"><span>Photoshop</span><span>Illustrator</span><span>Blender</span><span>After Effects</span><span>Clip Studio Paint</span><span>ChatGPT</span><span>Gemini</span><span>可灵</span><span>即梦</span><span>Excel / Word</span></div></div></div></section>

      <section className="work section frame" id="work">
        <div className="section-number">04 <span>— SELECTED PROJECTS</span></div>
        <div className="work-heading"><h2>三种方向，<br /><em>同一种创作热情。</em></h2><p>以下是对应 AIGC 设计、动画设计与美术设计的精选项目入口。</p></div>
        <div className="project-stack">{projects.map((p) => <article className={`project-card ${p.tone}`} key={p.id}><div className="project-image"><img src={p.image} alt={p.title} /></div><div className="project-detail"><span>{p.id} / {p.type}</span><h3>{p.title}</h3><p>{p.note}</p><a href="#contact">查看项目 <b>↗</b></a></div></article>)}</div>
      </section>

      <section className="strength section" id="strength"><div className="frame"><div className="section-number">05 <span>— MY STRENGTHS</span></div><h2>我的优势，<em>不止于熟练。</em></h2><div className="strength-grid">{strengths.map(([number, title, body]) => <article key={number}><span>{number}</span><i>✦</i><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <footer className="contact-footer" id="contact"><div className="footer-glow" /><div className="frame footer-content"><p className="eyebrow">LET&apos;S CREATE SOMETHING NEW</p><h2>让下一个想法，<br /><em>从这里开始。</em></h2><div className="footer-links"><a href="mailto:3276247746@qq.com">3276247746@qq.com <span>↗</span></a><a href="tel:13226835811">132 2683 5811 <span>↗</span></a></div><div className="footer-bottom"><span>HUANG DANQI / AI & MOTION DESIGNER</span><a href="#home">BACK TO TOP ↑</a><span>© 2026</span></div></div></footer>
    </main>
  );
}

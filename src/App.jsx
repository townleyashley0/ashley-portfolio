import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const work = [
  {
    title: 'Samsung London 2012 Olympics',
    eyebrow: 'Samsung Global · Galaxy S III · London 2012',
    image: '/assets/samsung-olympics.png',
    href: 'https://www.samsungmobilepress.com/articles/the-samsung-galaxy-s-iii-boosts-olympic-games-spirit-across-the-globe',
    description:
      "Samsung's Olympic presence was more than sponsorship. It was a signal that smartphones were becoming part of everyday life, global connection, and cultural participation.",
    facts: ['Partner', 'London 2012', 'Category', 'Mobile Technology'],
  },
  {
    title: 'Samsung × Vogue / Elle',
    eyebrow: 'Samsung Global · Fashion-Tech Partnership',
    image: '/assets/samsung-fashion.png',
    href: 'https://news.samsung.com/global/samsung-x-vogue-collaboration-for-galaxy-s5-and-gear-devices-isnt-surprising',
    description:
      'Smartphones and wearables were becoming personal, expressive, and visible. This work put Samsung into the fashion conversation at exactly the moment technology started becoming style.',
    facts: ['Partner', 'Vogue / Elle', 'Category', 'Fashion-Tech'],
  },
  {
    title: 'Samsung Fashion Week Notes',
    eyebrow: 'Samsung · Who What Wear · Paris Fashion Week',
    image: '/assets/samsung-fashion-week.png',
    href: 'https://www.youtube.com/watch?v=Q2bhZQ1GtF4',
    description:
      'A branded content series connecting Samsung Galaxy Note with fashion media, creativity, and behind-the-scenes access during Paris Fashion Week.',
    facts: ['Partner', 'Who What Wear', 'Category', 'Fashion Content'],
  },
  {
    title: "Samsung Valentine's Day Love Notes",
    eyebrow: "Samsung · Galaxy Note 4 · Valentine's Day",
    image: '/assets/samsung-love-note.png',
    href: 'https://www.youtube.com/watch?v=YZMqiC_q1Ug',
    description:
      "Samsung invited followers to submit Valentine's messages, then transformed selected notes into custom illustrations created on Galaxy Note devices using touchscreen technology and the S Pen.",
    facts: ['Platform', 'Social', 'Product', 'Galaxy Note 4'],
  },
  {
    title: 'Canon × BuzzFeed',
    eyebrow: 'Canon PIXMA · Paid Content · Creator Culture',
    image: '/assets/canon-buzzfeed.png',
    href: 'https://www.buzzfeed.com/canon/we-made-grade-school-projects-as-adults-and-this-i',
    description:
      "A playful branded content program that brought Canon PIXMA into the DIY and creator conversation, using BuzzFeed's editorial style to make printing feel social, nostalgic, and fun.",
    facts: ['Partner', 'BuzzFeed', 'Product', 'Canon PIXMA'],
  },
  {
    title: 'Canon Project Imagination',
    eyebrow: 'Canon · Ron Howard · Entertainment Partnership',
    image: '/assets/canon-trailer.png',
    href: 'https://www.canonwatch.com/canon-and-ron-howard-release-short-film-the-rusted-for-project-imagination-the-trailer/',
    description:
      "Canon's Project Imagination platform connected cameras, Hollywood talent, audience participation, and digital storytelling in a way that made creativity feel collaborative.",
    facts: ['Partner', 'Ron Howard', 'Category', 'Entertainment'],
  },
]

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="nav">
        <Link to="/" className="brand">Ashley Townley</Link>
        <nav>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/eras">Eras</NavLink>
          <NavLink to="/systems">Systems</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      {children}
    </div>
  )
}

function Home() {
  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Charlotte, NC · Global Media · Brand Strategy · Operations</p>
            <h1>Ashley<br /><em>Townley.</em></h1>
            <p className="hero-line">I work on things that become part of culture.</p>
            <p className="hero-body">
              Strategist. Operator. Builder. I have spent a decade working across global media,
              Fortune 500 brands, and independent practice — figuring out what is broken and building something better.
            </p>
            <div className="hero-actions">
              <Link to="/work">See the Work</Link>
              <Link to="/contact">Say Hello</Link>
            </div>
          </div>
          <div className="hero-art">
            <img src="/assets/samsung-fashion.png" alt="Samsung fashion technology campaign" />
            <img src="/assets/canon-buzzfeed.png" alt="Canon BuzzFeed paid post" />
          </div>
        </section>

        <section className="metrics">
          <div><strong>10+</strong><span>Years of Experience</span></div>
          <div><strong>$80M+</strong><span>Global Budget Managed</span></div>
          <div><strong>$6M+</strong><span>Annual Media Investment</span></div>
          <div><strong>F500</strong><span>Brand Experience</span></div>
        </section>

        <section className="home-preview">
          <p className="section-kicker">01 — Selected Work</p>
          <h2>The work.</h2>
          <div className="preview-grid">
            {work.slice(0, 3).map((item) => (
              <Link key={item.title} to="/work" className="preview-card">
                <img src={item.image} alt="" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

function Work() {
  return (
    <Layout>
      <main className="page">
        <section className="page-hero">
          <p className="section-kicker">01 — Work</p>
          <h1>The proof.</h1>
          <p>
            Campaigns, partnerships, launches, and content programs that put brands into the cultural conversation.
          </p>
        </section>

        <section className="work-list">
          {work.map((item, index) => (
            <article className="work-detail" key={item.title}>
              <a href={item.href} target="_blank" rel="noopener" className="work-image">
                <img src={item.image} alt={item.title} />
              </a>
              <div className="work-content">
                <p className="kicker">{String(index + 1).padStart(2, '0')} · {item.eyebrow}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="facts">
                  <div><span>{item.facts[0]}</span><strong>{item.facts[1]}</strong></div>
                  <div><span>{item.facts[2]}</span><strong>{item.facts[3]}</strong></div>
                </div>
                <a className="text-link" href={item.href} target="_blank" rel="noopener">
                  View work <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}

          <article className="work-detail text-only">
            <div></div>
            <div className="work-content">
              <p className="kicker">07 · Alcon Air Optix Colors · Nina Dobrev</p>
              <h2>A beauty launch built for visibility.</h2>
              <p>
                A celebrity-led brand launch that placed Air Optix Colors inside beauty, style,
                and entertainment media conversation.
              </p>
              <a className="text-link" href="https://www.justjared.com/photo-gallery/3122355/nina-dobrev-air-optix-color-brand-launch-01/" target="_blank" rel="noopener">
                View work <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  )
}

function Eras() {
  const eras = [
    {
      title: 'The Smartphone Era',
      body: 'Samsung, London 2012, Galaxy devices, fashion partnerships, and the years when the phone became the center of modern life.',
      images: ['/assets/samsung-olympics.png', '/assets/samsung-fashion.png', '/assets/samsung-fashion-week.png'],
    },
    {
      title: 'The Content Era',
      body: 'Canon, BuzzFeed, Project Imagination, and the moment brands stopped only advertising and started publishing, partnering, and entertaining.',
      images: ['/assets/canon-buzzfeed.png', '/assets/canon-trailer.png'],
    },
    {
      title: 'The Regulated Era',
      body: 'Novartis and pharmaceutical media, where the work had to be precise, compliant, fast-moving, and carefully aligned.',
      images: [],
    },
    {
      title: 'The Independent Era',
      body: 'Building a consulting practice from the ground up, owning the client relationship, the strategy, the execution, and the outcome.',
      images: [],
    },
    {
      title: 'The AI Operations Era',
      body: 'Forecasting, budget management, campaign monitoring, and workflow systems built for the next version of how marketing teams operate.',
      images: [],
    },
  ]

  return (
    <Layout>
      <main className="page">
        <section className="page-hero">
          <p className="section-kicker">02 — Eras</p>
          <h1>The through line.</h1>
          <p>
            Different industries. Different challenges. The pattern is the same:
            I find the moment when the rules are changing and build for what comes next.
          </p>
        </section>

        <section className="eras-list">
          {eras.map((era, index) => (
            <article className="era-block" key={era.title}>
              <div>
                <p className="kicker">{String(index + 1).padStart(2, '0')}</p>
                <h2>{era.title}</h2>
              </div>
              <div>
                <p>{era.body}</p>
                {era.images.length > 0 && (
                  <div className="era-images">
                    {era.images.map((img) => <img key={img} src={img} alt="" />)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  )
}

function Systems() {
  return (
    <Layout>
      <main className="page">
        <section className="page-hero">
          <p className="section-kicker">03 — Systems</p>
          <h1>The toolkit.</h1>
          <p>
            The campaign work gets attention. The systems are how the work scales.
          </p>
        </section>
        <section className="toolkit-grid">
          <Toolkit title="Strategy & Operations" items={['Strategic Planning', 'Program Management', 'Operational Excellence', 'Budget Forecasting', 'Resource Planning', 'Process Improvement', 'Performance Measurement']} />
          <Toolkit title="Leadership & Management" items={['Cross-Functional Leadership', 'Stakeholder Management', 'Investment Allocation', 'Data Analysis', 'Workflow Automation', 'AI Workflow Design']} />
          <Toolkit title="Paid Media Platforms" items={['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Snapchat Ads', 'Search Ads 360', 'Programmatic Advertising', 'Paid Search', 'Paid Social']} />
          <Toolkit title="Tools & Technology" items={['Google Analytics', 'Generative AI', 'Salesforce', 'Jira', 'Google Workspace']} />
        </section>
      </main>
    </Layout>
  )
}

function Toolkit({ title, items }) {
  return (
    <article className="toolkit">
      <h2>{title}</h2>
      <div>
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  )
}

function About() {
  return (
    <Layout>
      <main className="page">
        <section className="page-hero about-page">
          <p className="section-kicker">04 — About</p>
          <h1>Strategy, systems, and a habit of seeing around corners.</h1>
          <p>
            I have always been drawn to moments when technology changes how people interact with the world.
            Early in my career, that meant working on Samsung as smartphones became mainstream. Later, it meant
            helping legacy brands adapt as content, creators, and digital media changed consumer behavior.
          </p>
          <p>
            Today, it means building AI-enabled systems that help organizations operate more effectively at scale.
            The industries have changed. The challenge has not: understand what is shifting, bring order to the
            complexity, and build what the work needs next.
          </p>
        </section>
      </main>
    </Layout>
  )
}

function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <p className="section-kicker">05 — Contact</p>
          <h1>Say hello.</h1>
          <p>For opportunities, collaborations, or conversations about brands, systems, and what comes next.</p>
          <a href="mailto:townley.ashley0@gmail.com">townley.ashley0@gmail.com</a>
        </section>
      </main>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/eras" element={<Eras />} />
      <Route path="/systems" element={<Systems />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App

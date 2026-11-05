'use client'

import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Linkedin, Mail, Menu, ShieldCheck, Terminal, X } from 'lucide-react'
import { useState } from 'react'

const insights = [
  {
    date: '03 days ago',
    title: 'The next security conversation is about how people work.',
    body: 'Rules alone do not guarantee that agents only access what they need. The real work is making data movement visible and accountable.',
    source: 'LinkedIn / original post',
  },
  {
    date: '01 week ago',
    title: 'Security should enable the way people work.',
    body: 'From new tools to sensitive data, I am interested in the practical choices that help people work with more confidence and less risk.',
    source: 'LinkedIn / original post',
  },
  {
    date: 'Recently',
    title: 'Threat intelligence should be practical.',
    body: 'Turning real phishing signals into immediate simulations is one way to make awareness specific, measurable, and useful.',
    source: 'LinkedIn / reshared insight',
  },
]

const projects = [
  { number: '01', title: 'Bognar.dev', type: 'Personal platform', detail: 'A fast, expressive portfolio built around the overlap of software, security, and communication.', tags: ['Next.js', 'React', 'AWS'] },
  { number: '02', title: 'Embedded systems tooling', type: 'Engineering', detail: 'Developer tools and communication layers for transportation systems, built in C++, Qt, and custom DSLs.', tags: ['C++', 'Qt', 'DSL'] },
  { number: '03', title: 'Biggs & Bognar', type: 'Freelance studio', detail: 'Websites, visual identities, and cloud infrastructure for local businesses that needed a clearer digital presence.', tags: ['Web', 'Identity', 'Cloud'] },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <Link href="#top" className="wordmark" aria-label="Niklas Bognar home">NB<span>.</span></Link>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="eyebrow"><span className="status-dot" /> Cybersecurity sales · Computer science</div>
        <h1>Security is<br /><em>human</em> work.</h1>
  <div className="hero-bottom">
    <p className="hero-intro">I work with security teams on the people, processes, and technology behind safer organisations — bringing a computer science mindset to consultative sales.</p>
    <a className="text-link" href="https://www.linkedin.com/in/niklas-bogn%C3%A1r-503987243/" target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight /></a>
  </div>
  <figure className="hero-portrait">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7289-KtXwNgmmxgomZFzYGvGhMyq2wHyRv6.jpeg" alt="Niklas Bognár standing outside in a black jacket" />
    
  </figure>
        <div className="scroll-note"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="statement section" id="about">
        <div className="section-label">01 / Perspective</div>
        <div className="statement-copy">
          <p className="large-copy">Computer scientist gone into <span>cybersecurity sales.</span></p>
          <p className="body-copy">My work sits at the point where complex technology meets real business decisions. I translate security challenges into clear next steps for enterprise teams across the DACH region.</p>
          <div className="principles">
            <div><ShieldCheck /><span>Human-centric<br />security</span></div>
            <div><Terminal /><span>Technical<br />fluency</span></div>
            <div><ArrowUpRight /><span>Curious by<br />default</span></div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading"><div className="section-label">02 / Selected work</div><p>Projects beyond the pitch deck.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main"><p className="project-type">{project.type}</p><h2>{project.title}</h2><p>{project.detail}</p></div>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <ArrowUpRight className="project-arrow" />
            </article>
          ))}
        </div>
      </section>

      <section className="insights section" id="insights">
        <div className="section-heading"><div className="section-label">03 / Field notes</div><a className="text-link" href="https://www.linkedin.com/in/niklas-bogn%C3%A1r-503987243/" target="_blank" rel="noreferrer">Follow on LinkedIn <ExternalLink /></a></div>
        <div className="insight-grid">
          {insights.map((insight) => <article className="insight-card" key={insight.title}><p className="insight-date">{insight.date}</p><h3>{insight.title}</h3><p>{insight.body}</p><span>{insight.source}</span></article>)}
        </div>
        <p className="api-note">Selected from the latest public profile activity. A LinkedIn API connection can replace this curated feed once an approved LinkedIn application is available.</p>
      </section>

      <section className="contact section" id="contact">
        <div className="section-label">04 / Say hello</div>
        <div><p className="contact-kicker">Keep in touch</p><h2>More work.<br /><em>Less noise.</em></h2><a className="contact-link" href="https://www.linkedin.com/in/niklas-bogn%C3%A1r-503987243/" target="_blank" rel="noreferrer">Message me on LinkedIn <ArrowUpRight /></a></div>
      </section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Niklas Bognar</span><span>London · DACH · Worldwide</span><a href="https://www.linkedin.com/in/niklas-bogn%C3%A1r-503987243/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></footer>
    </main>
  )
}

/* ==========================================================================
   components.jsx
   React components: SkillBar, ProjectCard, ContactForm
   Loaded via Babel standalone (no build step).
   ========================================================================== */

const { useState } = React;

/* ── SkillBar ──────────────────────────────────────────────────────────── */
function SkillBar({ name, level }) {
  return (
    <div className="skill-bar" data-level={level}>
      <div className="head">
        <span className="name">{name}</span>
        <span className="lvl">0%</span>
      </div>
      <div className="track">
        <div className="fill"></div>
      </div>
    </div>
  );
}

/* ── ProjectCard ──────────────────────────────────────────────────────── */
function ProjectCard({ num, kind, title, description, tags, link, linkLabel }) {
  return (
    <article className="card" data-num={num}>
      <span className="kind">{kind}</span>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
      </div>
      {link
        ? <a className="link" href={link} target="_blank" rel="noopener">{linkLabel || 'View'}</a>
        : <span className="link disabled">No public link</span>}
    </article>
  );
}

/* ── ContactForm ──────────────────────────────────────────────────────── */
function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const update = (k) => (e) => {
    setData({ ...data, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = window.validateContactForm
      ? window.validateContactForm(data)
      : {};
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setStatus('› Message captured locally. (Demo — no backend wired.)');
      setData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus('');
    }
  };

  const fieldClass = (k) => 'field' + (errors[k] ? ' error' : '');

  return (
    <form className="form-block" onSubmit={onSubmit} noValidate>
      <div className={fieldClass('name')}>
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" value={data.name}
               onChange={update('name')} autoComplete="name" />
        <div className="err-msg">{errors.name}</div>
      </div>
      <div className={fieldClass('email')}>
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" value={data.email}
               onChange={update('email')} autoComplete="email" />
        <div className="err-msg">{errors.email}</div>
      </div>
      <div className={fieldClass('message')}>
        <label htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" rows="5" value={data.message}
                  onChange={update('message')} />
        <div className="err-msg">{errors.message}</div>
      </div>
      <button type="submit" className="submit">Send transmission →</button>
      {status && <div className="form-status">{status}</div>}
    </form>
  );
}

/* ── Mounts ───────────────────────────────────────────────────────────── */
const SKILLS_TECH = [
  { name: 'HTML / CSS', level: 88 },
  { name: 'JavaScript', level: 70 },
  { name: 'jQuery', level: 68 },
  { name: 'ReactJS', level: 45 },
  { name: 'Python', level: 72 },
  { name: 'Git / GitHub', level: 70 },
  { name: 'SQL', level: 50 },
  { name: 'C / C++', level: 48 }
];

const SKILLS_SOFT = [
  { name: 'Teamwork', level: 85 },
  { name: 'Responsibility', level: 90 },
  { name: 'Organization', level: 80 },
  { name: 'Communication', level: 78 },
  { name: 'Adaptability', level: 86 },
  { name: 'Initiative', level: 82 }
];

const PROJECTS = [
  {
    num: '01',
    kind: 'Family business — commerce',
    title: 'Afrikesh — Moroccan rugs',
    description: 'Contributed to the commercial development of a family business specializing in traditional Moroccan rugs. Owned customer relations and sales coordination, learning to balance craft, tradition and modern retail expectations.',
    tags: ['Sales', 'Customer relations', 'Retail', 'Commerce'],
    link: 'https://afrikesh.com/',
    linkLabel: 'afrikesh.com'
  },
  {
    num: '02',
    kind: 'Construction & civil engineering',
    title: 'Tifaouineino BTP',
    description: 'Participated in operations of a construction & civil engineering firm — building works, civil engineering projects, and logistics for the transport of construction materials. Built field discipline and an eye for systems under pressure.',
    tags: ['Logistics', 'Organization', 'Fieldwork', 'Construction'],
    link: 'https://www.charika.ma/societe-tifaouineino-btp-197443#',
    linkLabel: 'View on Charika'
  }
];

ReactDOM.createRoot(document.getElementById('skills-tech-mount'))
  .render(<>{SKILLS_TECH.map((s, i) => <SkillBar key={i} {...s} />)}</>);

ReactDOM.createRoot(document.getElementById('skills-soft-mount'))
  .render(<>{SKILLS_SOFT.map((s, i) => <SkillBar key={i} {...s} />)}</>);

ReactDOM.createRoot(document.getElementById('projects-mount'))
  .render(<div className="cards">{PROJECTS.map((p, i) => <ProjectCard key={i} {...p} />)}</div>);

const MY_PROJECTS = [
  {
    num: '01',
    kind: 'Web development — e-commerce',
    title: 'beniCraft',
    description: 'E-commerce website built to sell traditional Moroccan rugs online. Designed the UI, product listings, and shopping flow from scratch using HTML, CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    link: 'https://github.com/nee7lii/BeniCraft',
    linkLabel: 'View on GitHub'
  },
  {
    num: '02',
    kind: 'Game development — C++',
    title: 'Survival Rush',
    description: 'A survival-style game built entirely in C++. Focused on game loop architecture, collision detection, and real-time input handling — a deep dive into low-level programming and systems thinking.',
    tags: ['C++', 'Game loop', 'Collision', 'Systems'],
    link: 'https://github.com/nee7lii/Survival-Rush',
    linkLabel: 'View on GitHub'
  }
];

ReactDOM.createRoot(document.getElementById('myprojects-mount'))
  .render(<div className="cards">{MY_PROJECTS.map((p, i) => <ProjectCard key={i} {...p} />)}</div>);

ReactDOM.createRoot(document.getElementById('contact-mount'))
  .render(<ContactForm />);

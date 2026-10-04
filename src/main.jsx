import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Quote,
  Search,
  Sparkles,
  Sun,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import './styles.css';

const LINKS = {
  github: 'https://github.com/KcMelek',
  linkedin: 'https://www.linkedin.com/in/melek-kchaou/',
  email: 'mailto:melek.kchaou@ensi-uma.tn',
  paper: 'https://doi.org/10.1109/HPCC67675.2025.00090',
};

const stats = [
  { value: '#1 / 200', label: 'Engineering year ranking' },
  { value: 'IEEE HPCC 2025', label: 'Peer-reviewed publication' },
  { value: '4', label: 'AI-focused internships' },
  { value: '#2 / 45', label: 'Master M1 ranking' },
];

const experience = [
  {
    year: '2026',
    role: 'AI Engineer Intern',
    company: 'FinLogik Tunisia',
    location: 'Sfax, Tunisia',
    period: 'Jul. 2026 — Aug. 2026',
    summary:
      'Designed and developed Questor, an end-to-end AI platform for intelligent questionnaire processing with hybrid retrieval, grounded generation, human review and export workflows.',
    highlights: [
      'Hybrid RAG with BGE embeddings, pgvector, PostgreSQL full-text search, RRF and cross-encoder reranking.',
      'Local LLM integration through Ollama with citation-grounded structured answers, confidence levels and insufficient-evidence handling.',
      'FastAPI + React architecture with RBAC, audit logs, review workflows and PDF export.',
    ],
    tags: ['RAG', 'LLMs', 'pgvector', 'FastAPI', 'React'],
  },
  {
    year: '2026',
    role: 'Computer Vision Intern',
    company: 'Anavid',
    location: 'Sfax, Tunisia',
    period: 'Jun. 2026 — Jul. 2026',
    summary:
      'Built a privacy-preserving shoplifting detection pipeline from human pose sequences using pose estimation, tracking and temporal deep learning.',
    highlights: [
      'YOLOv8-Pose + ByteTrack for skeleton-based person tracking.',
      'LSTM sequence classifier with attention for suspicious-behavior detection.',
      'End-to-end ML workflow covering preprocessing, feature engineering, training, evaluation and inference.',
    ],
    tags: ['Computer Vision', 'YOLOv8-Pose', 'ByteTrack', 'LSTM', 'PyTorch'],
  },
  {
    year: '2025',
    role: 'AI Engineer Intern',
    company: 'Lynx-ERP',
    location: 'Sfax, Tunisia',
    period: 'Jun. 2025 — Aug. 2025',
    summary:
      'Designed an enterprise RAG system for document-based question answering and AI-assisted knowledge access.',
    highlights: [
      'Document ingestion covering PDF extraction, cleaning, chunking, embeddings and vector indexing.',
      'Query routing and reformulation for improved context-grounded retrieval.',
      'Qdrant + SQL Server integration and a web interface for document and AI interaction.',
    ],
    tags: ['RAG', 'Qdrant', 'SQL Server', 'NLP', 'Web App'],
  },
  {
    year: '2024',
    role: 'AI Intern',
    company: 'ReDX Technologies',
    location: 'Sfax, Tunisia',
    period: 'Feb. 2024 — Jun. 2024',
    summary:
      'Developed AI-assisted workflows for High-Performance Computing configuration, including a multi-stage clustering approach later published at IEEE HPCC 2025.',
    highlights: [
      'Unsupervised learning for HPC system configuration.',
      'Assisted Mode for a Cluster Configurator using Django, Angular and MongoDB.',
      'Automated data collection, recommendation and system-configuration pipelines.',
    ],
    tags: ['Machine Learning', 'Clustering', 'HPC', 'Django', 'Angular'],
  },
];

const projects = [
  {
    title: 'Questor',
    subtitle: 'AI-Powered Questionnaire Platform',
    eyebrow: 'Featured · Industry AI',
    description:
      'An end-to-end platform that turns questionnaires and evidence sources into grounded, reviewable AI answers with citations and confidence signals.',
    image: '/images/projects/questor.png',
    tags: ['Hybrid RAG', 'LLMs', 'RRF', 'Reranking', 'pgvector', 'FastAPI', 'React'],
    problem:
      'Security, compliance and RFP questionnaires are repetitive, evidence-heavy and difficult to answer consistently across teams.',
    approach:
      'I designed the workflow around reusable questionnaire templates, run-scoped knowledge sources, hybrid dense + lexical retrieval, Reciprocal Rank Fusion, BGE cross-encoder reranking, grounded generation and human review.',
    impact:
      'The resulting system makes every AI answer traceable to supporting evidence while keeping reviewers in control of edits, comments, citations and final export.',
    bullets: [
      'Dense retrieval with BAAI/bge-large-en-v1.5 and PostgreSQL/pgvector.',
      'Lexical retrieval with PostgreSQL full-text search and RRF fusion.',
      'Cross-encoder reranking before answer generation.',
      'Citation validation, confidence assessment and no-evidence handling.',
      'Role-based access, audit logging, analysis versioning and review workflows.',
    ],
    links: [],
  },
  {
    title: 'Multi-Agent Research Proposal Evaluator',
    subtitle: 'LLM + RAG + LangGraph',
    eyebrow: 'Research Engineering',
    description:
      'A five-agent workflow that analyzes research proposals, retrieves scientific evidence and produces structured evaluations with post-hoc faithfulness checks.',
    image: '/images/projects/multi-agent.png',
    tags: ['LangGraph', 'Multi-Agent', 'RAG', 'BM25', 'RRF', 'Local LLMs'],
    problem:
      'Research-proposal evaluation requires multiple perspectives, external evidence and transparent reasoning rather than one monolithic prompt.',
    approach:
      'I decomposed the evaluation into specialized agents orchestrated with LangGraph and connected them to hybrid scientific retrieval, query reformulation, reranking and Pydantic-validated outputs.',
    impact:
      'The architecture separates responsibilities, improves evidence traceability and enables automated report generation while retaining explicit faithfulness verification.',
    bullets: [
      'Five-agent orchestration using LangGraph.',
      'Hybrid BM25 + dense retrieval with Reciprocal Rank Fusion.',
      'Query reformulation and reranking for scientific evidence retrieval.',
      'Post-hoc faithfulness verification.',
      'FastAPI + SQLite backend, React/TypeScript UI and PDF reports.',
    ],
    links: [],
  },
  {
    title: 'CardioScan AI',
    subtitle: 'LVEF Prediction from ECG Scans',
    eyebrow: 'Deep Learning · Health AI',
    description:
      'A deep-learning system for estimating Left Ventricular Ejection Fraction from ECG images, paired with a web application for inference and patient history.',
    image: '/images/projects/cardioscan.png',
    tags: ['PyTorch', 'CNN', 'ResNet', 'EfficientNet', 'Image Processing'],
    problem:
      'Explore whether ECG images can support automated cardiac assessment through deep-learning-based LVEF prediction.',
    approach:
      'I worked on the full ML lifecycle: image preprocessing, augmentation, class-imbalance handling, CNN training, evaluation and application-level inference.',
    impact:
      'The project combines model development with a usable web workflow for ECG upload, inference and historical record management.',
    bullets: [
      'ResNet and EfficientNet experiments.',
      'Image preprocessing and augmentation pipeline.',
      'Class-imbalance handling and model evaluation.',
      'Web application for ECG upload and inference.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/KcMelek/CardioScan-AI', type: 'github' },
    ],
  },
  {
    title: 'AI-Assisted HPC Configuration',
    subtitle: 'Clustering Research → IEEE HPCC 2025',
    eyebrow: 'Research · HPC',
    description:
      'Machine-learning methods for automating and improving High-Performance Computing system configuration, developed during my work at ReDX Technologies.',
    image: '/images/projects/hpc.png',
    tags: ['Clustering', 'Unsupervised ML', 'HPC', 'Django', 'Angular'],
    problem:
      'HPC configurations involve many interdependent choices, making manual configuration complex and error-prone.',
    approach:
      'I built a multi-stage clustering strategy and integrated recommendation workflows into an assisted configuration tool.',
    impact:
      'The research resulted in a peer-reviewed publication at IEEE HPCC 2025.',
    bullets: [
      'Multi-stage clustering for HPC system configuration.',
      'Automated configuration and recommendation pipelines.',
      'Django, Angular and MongoDB product integration.',
      'Research published at IEEE HPCC 2025.',
    ],
    links: [
      { label: 'Paper DOI', href: LINKS.paper, type: 'paper' },
    ],
  },
  {
    title: 'Enterprise RAG',
    subtitle: 'Document Intelligence for Lynx-ERP',
    eyebrow: 'Applied GenAI',
    description:
      'An enterprise knowledge assistant with complete document ingestion, vector search, query routing and context-grounded answer generation.',
    image: '/images/projects/enterprise-rag.png',
    tags: ['RAG', 'Qdrant', 'SQL Server', 'Query Routing', 'NLP'],
    problem:
      'Enterprise users need fast answers from internal documents without manually navigating large collections of files.',
    approach:
      'I implemented extraction, cleaning, chunking, embeddings, Qdrant indexing, query routing and reformulation, then connected the pipeline to a web interface.',
    impact:
      'The project gave me early production-oriented experience with enterprise RAG before later building more advanced hybrid retrieval systems.',
    bullets: [
      'Full document ingestion pipeline.',
      'Qdrant vector retrieval and SQL Server synchronization.',
      'Query routing and reformulation.',
      'Grounded question answering through a web interface.',
    ],
    links: [],
  },
];

const education = [
  {
    institution: 'National School of Computer Science (ENSI)',
    location: 'Tunis, Tunisia',
    degree: 'Engineer’s Degree in Computer Science — Artificial Intelligence',
    period: 'Sept. 2024 — Jun. 2027',
    distinction: 'Ranked 1st out of 200 students in the second engineering year.',
  },
  {
    institution: 'National School of Computer Science (ENSI)',
    location: 'Tunis, Tunisia',
    degree: 'Master’s Degree in Computer Science — Advanced Intelligent Systems',
    period: 'Sept. 2024 — Jun. 2027',
    distinction: 'Ranked 2nd out of 45 students in Master 1.',
  },
  {
    institution: 'Higher Institute of Computer Science and Multimedia of Sfax',
    location: 'Sfax, Tunisia',
    degree: 'Bachelor’s Degree in Computer Science — Big Data & Data Analysis',
    period: 'Sept. 2021 — Jun. 2024',
    distinction: 'Ranked 7th out of 232 students.',
  },
];

const rankings = [
  {
    rank: 1,
    total: 200,
    title: 'Engineering — 2nd year',
    meta: 'ENSI · 2026',
  },
  {
    rank: 2,
    total: 45,
    title: 'Master M1 — Advanced Intelligent Systems',
    meta: 'ENSI · 2025',
    pictured: true,
  },
  {
    rank: 7,
    total: 232,
    title: 'Bachelor — Big Data & Data Analysis',
    meta: 'ISIMS · 2024',
  },
];

const achievements = [
  {
    icon: BookOpen,
    title: 'IEEE HPCC 2025 Publication',
    meta: 'Exeter, United Kingdom · Aug. 2025',
    text: '“Hierarchical Clustering Strategy for Enhanced HPC System Configuration.”',
    image: '/images/achievements/paper 1.jpg',
    link: LINKS.paper,
  },
  {
    icon: Users,
    title: 'CivicTech Sprint Hackathon',
    meta: 'The World Bank · Hammamet, Tunisia',
    text: 'Took part in a hackathon on open data for local governments, under the theme "Citizens for Strong Local Governance."',
    image: '/images/hackathon.jpeg',
  },
];

const skills = [
  {
    icon: BrainCircuit,
    title: 'AI & Generative AI',
    items: ['PyTorch', 'Scikit-learn', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'NLP'],
  },
  {
    icon: Search,
    title: 'Information Retrieval',
    items: ['Dense Retrieval', 'Lexical Search', 'RRF', 'Cross-Encoder Reranking', 'pgvector', 'Qdrant'],
  },
  {
    icon: Network,
    title: 'Computer Vision',
    items: ['CNNs', 'YOLO', 'Pose Estimation', 'Temporal Models', 'Image Processing'],
  },
  {
    icon: Code2,
    title: 'Engineering',
    items: ['Python', 'FastAPI', 'Django', 'React', 'Angular', 'SQL', 'Docker', 'Git'],
  },
];

const certifications = [
  'Computer Vision for Industrial Inspection — NVIDIA · Nov. 2025',
  'Artificial Intelligence Course — Samsung Innovation Campus · Jan. 2025',
  'Azure AI Fundamentals — Microsoft · May 2024',
  'Azure Data Fundamentals — Microsoft · Feb. 2024',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navItems = useMemo(
    () => ['About', 'Experience', 'Projects', 'Research', 'Education', 'Achievements', 'Contact'],
    []
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Melek Kchaou home">
          <span>Melek</span><strong>.</strong>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            className="icon-button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy reveal">
            <div className="eyebrow-pill"><Sparkles size={15} /> AI Engineer · Researcher · Builder</div>
            <h1>
              I build <span>grounded AI systems</span> that connect research with real-world products.
            </h1>
            <p className="hero-lead">
              I’m Melek Kchaou, a Computer Science engineering and AI student at ENSI working across LLMs,
              Retrieval-Augmented Generation, multi-agent systems, machine learning and trustworthy information retrieval.
            </p>
            <div className="availability">
              <span className="status-dot" /> Open to research & AI engineering opportunities for 2027
            </div>
            <div className="hero-actions">
              <a href="#projects" className="button primary">Explore my work <ChevronRight size={17} /></a>
            </div>
            <div className="social-row">
              <a href={LINKS.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href={LINKS.email}><Mail size={18} /> Email</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-card">
              <div className="portrait-frame">
                <img src="/images/profile-placeholder.jpg" alt="Portrait of Melek Kchaou" />
              </div>
              <div className="portrait-meta">
                <span>Tunis, Tunisia</span>
                <span>AI · IR · LLMs</span>
              </div>
            </div>
            <div className="floating-card float-a">
              <BrainCircuit size={18} />
              <div><strong>Current focus</strong><span>RAG · Multi-Agent AI</span></div>
            </div>
            <div className="floating-card float-b">
              <FileText size={18} />
              <div><strong>Published</strong><span>IEEE HPCC 2025</span></div>
            </div>
          </div>
        </section>

        {/* Stats row hidden for now — re-enable later.
        <section className="stats section-wrap">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>
        */}

        <section id="about" className="section section-wrap two-col-section">
          <div>
            <SectionKicker>About</SectionKicker>
            <h2>Research-minded engineering, with product execution.</h2>
          </div>
          <div className="about-copy">
            <p>
              I enjoy taking AI ideas all the way from experimentation to usable systems. My projects often sit at the intersection of
              retrieval, LLMs, machine learning and software engineering: ingesting real data, designing robust pipelines, evaluating them,
              and exposing the result through a product people can actually use.
            </p>
            <p>
              I am particularly interested in Retrieval-Augmented Generation, multi-agent systems, trustworthy information retrieval,
              privacy-preserving machine learning and research problems where model quality must be matched by traceability and reliable engineering.
            </p>
            <div className="about-tags">
              {['Generative AI', 'LLMs', 'RAG', 'Information Retrieval', 'Multi-Agent Systems', 'Trustworthy AI', 'Computer Vision'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-wrap">
          <div className="section-heading">
            <div>
              <SectionKicker>Featured work</SectionKicker>
              <h2>Projects with enough depth to become case studies.</h2>
            </div>
            <p>Each case study covers the problem, the approach and the key technical decisions.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${index === 0 ? 'featured' : ''}`} key={project.title}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={`${project.title} preview`} />
                  <span className="project-eyebrow">{project.eyebrow}</span>
                </div>
                <div className="project-body">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <button className="text-button" onClick={() => setSelectedProject(project)}>
                    View case study <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-wrap">
          <div className="section-heading compact">
            <div>
              <SectionKicker>Experience</SectionKicker>
              <h2>From machine learning research to production-oriented AI systems.</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company-name">{item.company} · {item.location}</p>
                    </div>
                    <span>{item.period}</span>
                  </div>
                  <p>{item.summary}</p>
                  <ul>
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="tag-row small">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="section section-wrap research-section">
          <div className="research-main">
            <SectionKicker>Research & publications</SectionKicker>
            <h2>Research that grew from real engineering problems.</h2>
            <div className="publication-card">
              <div className="publication-icon"><BookOpen size={24} /></div>
              <div>
                <p className="publication-label">IEEE International Conference on High Performance Computing and Communications · 2025</p>
                <h3>Hierarchical Clustering Strategy for Enhanced HPC System Configuration</h3>
                <p>
                  Research on a hierarchical clustering strategy for improving and automating HPC system configuration, developed from work initiated during my ReDX Technologies internship.
                </p>
                <div className="publication-actions">
                  <a href={LINKS.paper} target="_blank" rel="noreferrer" className="button secondary">DOI <ExternalLink size={15} /></a>
                </div>
              </div>
            </div>
          </div>
          <aside className="research-aside">
            <h3>Research interests</h3>
            {[
              'Retrieval-Augmented Generation',
              'Information Retrieval & Reranking',
              'Multi-Agent LLM Systems',
              'Trustworthy / Grounded AI',
              'Privacy-Preserving ML',
              'Applied Machine Learning',
            ].map((interest) => (
              <div className="interest-row" key={interest}><span>{interest}</span></div>
            ))}
          </aside>
        </section>

        <section id="education" className="section section-wrap">
          <div className="section-heading compact">
            <div>
              <SectionKicker>Education</SectionKicker>
              <h2>Computer science, AI and data — with strong academic rankings.</h2>
            </div>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={`${item.degree}-${item.period}`}>
                <div className="education-icon"><GraduationCap size={21} /></div>
                <p className="education-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <span>{item.location}</span>
                <div className="distinction"><Trophy size={16} /> {item.distinction}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section section-wrap">
          <div className="section-heading">
            <div>
              <SectionKicker>Achievements</SectionKicker>
              <h2>Milestones along the way.</h2>
            </div>
            <p>Three degrees, three cohorts, and a place among the top students in each one.</p>
          </div>
          <div className="ranks-feature">
            <figure className="ranks-photo">
              <img src="/images/achievements/IMG_9692.jpg" alt="Melek Kchaou receiving the Master M1 award at ENSI" />
              <figcaption>
                <Award size={16} />
                <span>Receiving the Master M1 award — 2nd of 45</span>
              </figcaption>
            </figure>
            <div className="ranks-board">
              <p className="ranks-eyebrow"><Trophy size={15} /> Academic standing</p>
              <h3>Among the top of every cohort.</h3>
              <ol className="rank-list">
                {rankings.map((item) => (
                  <li key={item.title} className={`rank-row${item.rank === 1 ? ' is-top' : ''}`}>
                    <div className="rank-number">
                      <strong>#{item.rank}</strong>
                      <span>of {item.total}</span>
                    </div>
                    <div className="rank-body">
                      <div className="rank-head">
                        <h4>{item.title}</h4>
                      </div>
                      <p>{item.meta}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="achievement-grid">
            {achievements.map((item) => {
              const Icon = item.icon;
              const card = (
                <article className="achievement-card">
                  {item.image && <img src={item.image} alt={item.title} />}
                  <div className="achievement-overlay" />
                  <div className="achievement-content">
                    <div className="achievement-icon"><Icon size={19} /></div>
                    <p>{item.meta}</p>
                    <h3>{item.title}</h3>
                    <span>{item.text}</span>
                  </div>
                </article>
              );
              return item.link ? <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="achievement-link">{card}</a> : <div key={item.title}>{card}</div>;
            })}
          </div>
        </section>

        <section className="section section-wrap skills-section">
          <div>
            <SectionKicker>Technical toolkit</SectionKicker>
            <h2>Skills grouped by the systems I build.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <Icon size={21} />
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section section-wrap split-cards">
          <article className="info-card">
            <div className="info-icon"><Award size={21} /></div>
            <h3>Selected certifications</h3>
            <ul>{certifications.map((cert) => <li key={cert}>{cert}</li>)}</ul>
          </article>
          <article className="info-card">
            <div className="info-icon"><Users size={21} /></div>
            <h3>Leadership & activities</h3>
            <ul>
              <li>IEEE ENSI Student Branch — Member & Organization Committee.</li>
              <li>AIESEC in Sfax — Team Leader, Incoming Global Volunteers; led a team of six.</li>
              <li>Community and event work across technical, student and international environments.</li>
            </ul>
          </article>
        </section>

        <section id="contact" className="section section-wrap contact-section">
          <div className="contact-card">
            <div>
              <SectionKicker>Contact</SectionKicker>
              <h2>Interested in AI research, RAG or intelligent systems?</h2>
              <p>
                I’m open to research internships, AI engineering opportunities and collaborations around LLMs, information retrieval,
                multi-agent systems and applied machine learning.
              </p>
            </div>
            <div className="contact-actions">
              <a href={LINKS.email} className="button primary"><Mail size={17} /> Email me</a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="button secondary"><Linkedin size={17} /> LinkedIn</a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="button secondary"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <div>
          <a href="#home" className="brand"><span>Melek</span><strong>.</strong></a>
          <p>AI Engineer & Researcher · Tunis, Tunisia</p>
        </div>
        <p>© 2026 Melek Kchaou</p>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onMouseDown={() => setSelectedProject(null)}>
          <article className="project-modal" onMouseDown={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project case study"><X size={20} /></button>
            <img src={selectedProject.image} alt={`${selectedProject.title} preview`} />
            <div className="modal-content">
              <p className="project-eyebrow static">{selectedProject.eyebrow}</p>
              <h2>{selectedProject.title}</h2>
              <p className="modal-subtitle">{selectedProject.subtitle}</p>
              <div className="tag-row">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>

              <div className="case-grid">
                <div><h4>Problem</h4><p>{selectedProject.problem}</p></div>
                <div><h4>Approach</h4><p>{selectedProject.approach}</p></div>
                <div><h4>Outcome</h4><p>{selectedProject.impact}</p></div>
              </div>

              <div className="implementation-box">
                <h4>Technical highlights</h4>
                <ul>{selectedProject.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>

              {selectedProject.links.length > 0 && (
                <div className="modal-links">
                  {selectedProject.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="button secondary">
                      {link.type === 'github' ? <Github size={16} /> : <ExternalLink size={16} />} {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      )}
    </div>
  );
}

function SectionKicker({ children }) {
  return <div className="section-kicker"><span /> {children}</div>;
}

createRoot(document.getElementById('root')).render(<App />);
